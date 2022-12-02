import {
  View,
  Image,
  Button,
  Map,
  CoverImage,
  Block,
} from "@tarojs/components";
import React from "react";
import Taro from "@tarojs/taro";
import withWeapp from "@tarojs/with-weapp";
import "./detail.scss";
import { CDN_PATH, PLUGIN_KEY } from "../../config/appConfig.js";
import QQMapWX from "../utils/qqmap-wx-jssdk.min.js";
import UpdatePost from "../../components/UpdatePost";

/*
 * 详情
 * @author: Eysonyou
 * @create: 2019-05-14
 */
const app = Taro.getApp().$app;
@withWeapp({
  /**
   * 页面的初始数据
   */
  data: {
    // 当前用户是否报名了
    isApply: false,
    // 是否是创建者
    isCreator: false,
    // 是否限制
    isLimit: false,
    // 活动ID
    postId: "",
    // 是否已经授权登录
    isLogin: Taro.getStorageSync("user"), //window.globalData.isLogin,
    // 详情数据是否为空
    isEmpty: true,
    // 详情
    detail: {},
    // 图片列表
    fileList: [],
    // 报名用户列表
    userList: [],
    // 位置
    location: {
      latitude: app.globalData.latitude,
      longitude: app.globalData.longitude,
    },
    iconPath: `${CDN_PATH}/Marker3_Activated@3x.png`,
    update: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let thar = this;
    if (!this.data.location.latitude) {
      Taro.getLocation({
        type: "wgs84",
        success: function(res) {
          console.log(res, "app.js位置信息");
          thar.setData({
            location: {
              latitude: res.latitude,
              longitude: res.longitude,
            },
          });
        },
      });
    }
    console.log(options, "传进来是什么");
    thar.data.update = options.update;
    console.log(this.data, "传进来是什么");
    this.data.location.latitude = app.globalData.latitude;
    this.data.location.longitude = app.globalData.longitude;
    // 当前版本不支持小程序云函数
    if (!Taro.cloud) {
      Taro.showModal({
        title: "提示",
        content: "微信版本过低，请升级微信",
      });
      return;
    }
    this.setData({
      postId: options.id,
      update: options.update,
      detail: {
        title: "...",
        maximum: 1000,
        sceneIndex: options.sceneIndex || 0,
        content: "...",
        amount: 0,
        status: options.status || 0,
        createTime: "0000-00-00T00:00:00.000",
      },
    });

    Taro.setNavigationBarTitle({
      title: "详情",
    });
  },

  getUserProfile: function() {
    const thar = this;
    Taro.getUserProfile({ desc: "授权登录" })
      .then((res) => {
        this.bindUser(res);
      })
      .catch((err) => {
        console.log("报错了吗" + JSON.stringify(err));
      });
  },

  bindUser: function(res) {
    let pages = Taro.getCurrentPages();
    let page = pages[pages.length - 1];
    let options = page.options;
    const thar = this;
    let userInfo = res.userInfo;
    userInfo.env = app.globalData.env;
    userInfo.pOpenId = this.options.pOpenId;
    userInfo.pNickName = this.options.pNickName
      ? decodeURI(this.options.pNickName)
      : this.options.pNickName;
    // 调用云函数
    Taro.cloud
      .callFunction({
        name: "user",
        data: userInfo,
      })
      .then((res) => {
        thar.setData({
          isLogin: JSON.stringify(userInfo),
        });
      });
    Taro.setStorageSync("user", JSON.stringify(userInfo));
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function(options) {
    this.options = options.params;
    const thar = this;
    this.setData(
      {
        isLogin: Taro.getStorageSync("user"),
      },
      () => {
        console.log(this.data.isLogin, "登录数据");
        if (!this.data.isLogin) {
          Taro.showModal({
            title: "您还未登录",
            content: "登录,浏览更多",
            showCancel: false,
            success: function(res) {
              thar.query();
              thar.getUserProfile();
            },
          });
        } else {
          this.query();
          thar.bindUser({ userInfo: JSON.parse(this.data.isLogin) });
        }
      }
    );
  },

  /**
   * 查询详情
   */
  query: function() {
    console.log(app.globalData.env, "app.globalData.env");
    // 全局显示loading
    Taro.showLoading({
      title: "加载中...",
    });
    // 调用云函数
    Taro.cloud
      .callFunction({
        name: "detail",
        data: {
          id: this.data.postId,
          env: app.globalData.env,
        },
      })
      .then((res) => {
        var rows = res.result.data ? res.result.data : [];
        // 异步回调并更新数据
        // 下载图片
        if (rows[0] && rows[0].fileID) {
          this.setData({
            fileList: rows[0].fileID.split(","),
            detail: rows[0],
            isCreator: res.result.isCreator,
            isEmpty: rows.length > 0 ? false : true,
          });
        } else {
          this.setData({
            detail: rows[0],
            isCreator: res.result.isCreator,
            isEmpty: rows.length > 0 ? false : true,
          });
        }

        // 隐藏loading
        Taro.hideLoading();
      })
      .catch((err) => {
        console.log(err);
        console.log("call DETAIL func err");
        Taro.hideLoading();
        Taro.showModal({
          title: "提示",
          content: "系统异常，请稍后再试",
        });
      });
  },

  /**
   * 关闭活动
   */
  cancelPost: function(status) {
    var that = this;
    // 全局显示loading
    Taro.showLoading({
      title: "提交中...",
    });
    let tempData = {
      status: status,
      postId: that.data.postId,
      env: app.globalData.env,
    };
    // 调用云函数
    Taro.cloud
      .callFunction({
        name: "cancelPost",
        data: {
          env: app.globalData.env,
          status: status,
          _id: that.data.postId,
        },
      })
      .then((res) => {
        console.log("call CANCELPOST func ok");
        that.query();
        // 隐藏loading
        Taro.hideLoading();
      })
      .catch((err) => {
        console.log(err);
        console.log("call CANCELPOST func err");
        Taro.hideLoading();
        Taro.showModal({
          title: "提示",
          content: "系统异常，请稍后再试",
        });
      });
  },
  onTapMap: function() {
    var latitude = this.data.detail.latitude;
    var longitude = this.data.detail.longitude;
    Taro.openLocation({
      latitude: latitude,
      longitude: longitude,
      // scale: 100
    });
  },
})
class _C extends React.Component {
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {
    let pages = Taro.getCurrentPages();
    let page = pages[pages.length - 1];
    let options = page.options;
    if (this.data.isLogin) {
      const userInfo = JSON.parse(this.data.isLogin);
      options.nickName = userInfo.nickName;
      options.openId = userInfo.openId;
    }
    const shareObj = {
      title: "闲置，转给附近需要的人",
      path: `/${page.route}?id=${options.id}&pOpenId=${options.openId}&pNickName=${options.nickName}&test=123`,
    };
    console.log(shareObj, "分享链接");
    return shareObj;
  }

  copyPhone(phoneNo) {
    //因为我的input框里面还有button 按钮，所以在选择节点的时候，一定要只选择input
    Taro.setClipboardData({
      data: phoneNo,
      success: function(res) {
        Taro.getClipboardData({
          success: function(res) {
            console.log(res.data); // data
          },
        });
      },
    });
  }

  makePhoneCall(phoneNo) {
    Taro.makePhoneCall({
      phoneNumber: phoneNo, //仅为示例，并非真实的电话号码
    });
  }

  previewImage(e, files) {
    e.stopPropagation();
    Taro.previewImage({
      current: e.currentTarget.id, // 当前显示图片的http链接
      urls: files, // 需要预览的图片http链接列表
    });
  }
  render() {
    const { fileList, detail, isLogin, update } = this.data;
    console.log(detail, "========" + update + "=======" + isLogin);
    return (
      <Block className="page">
        {!isLogin && (
          <button
            open-type="getUserInfo"
            lang="zh_CN"
            onGetUserInfo={this.getUserProfile}
          >
            登录授权
          </button>
        )}
        {update == "true" && isLogin && (
          <UpdatePost
            isLogin={isLogin}
            bindUserInfo={this.getUserProfile}
            fileList={fileList}
            detail={detail}
          />
        )}
        {update != "true" && (
          <>
            {fileList.length > 0 && (
              <View
                style="display:flex;flex-wrap:nowrap;overflow-x:auto;-webkit-overflow-scrolling:touch;
          -ms-overflow-style:-ms-autohiding-scrollbar;"
              >
                {fileList.map((item, index) => {
                  return (
                    // <View key="fileID">
                    <Image
                      style="flex: 0 0 auto;width:100%"
                      src={item}
                      id={item}
                      onClick={(e) => this.previewImage(e, fileList)}
                      mode="aspectFill"
                    ></Image>
                    // </View>
                  );
                })}
              </View>
            )}
            <View className="weui-panel">
              <View style="display:flex;">
                <View className="ui-title">商品名称: {detail.title}</View>
              </View>
              {/*  价格  */}
              <View style="display:inline-block" className="ui-content">
                商品价格:
              </View>
              <View style="display:inline" className="ui-font-red">
                {detail.amount > 0 ? "￥" + detail.amount : "免费赠送"}
              </View>
              {detail.orgin_amount && (
                <View style="margin-left:10px;display:inline;text-decoration:line-through">
                  {"￥" + detail.orgin_amount}
                </View>
              )}

              {/*  描述  */}
              <View className="ui-content">商品描述: {detail.content}</View>
              {/*  取货时间  */}
              <View className="ui-content">取货时间: {detail.getTime}</View>
              {/*  取货位置  */}
              <View className="ui-content">取货位置: {detail.getLocation}</View>
              <View className="ui-content">
                <Map
                  className="map"
                  id="map"
                  latitude={detail.latitude}
                  longitude={detail.longitude}
                  enableZoom={true}
                  enableScroll={true}
                  onClick={this.onTapMap}
                >
                  <CoverImage
                    className="current-site-icon"
                    src={this.data.iconPath}
                    onClick={this.onTapMap}
                  ></CoverImage>
                </Map>
              </View>
              {detail.status == 0 && (
                <>
                  <View style="display:inline-block" className="ui-content">
                    联系电话:{" "}
                  </View>
                  <View
                    style="display:inline-block;clear:all"
                    onClick={() => {
                      this.makePhoneCall(detail.mobilePhone);
                    }}
                    onLongPress={() => {
                      this.copyPhone(detail.mobilePhone);
                    }}
                    className="ui-font-red"
                  >
                    {detail.mobilePhone}
                  </View>
                </>
              )}
              <View style="clear:left" className="ui-content">
                商品状态: {detail.status == 1 ? "已出" : "出售中"}
                {this.data.isCreator && detail.status == 0 && (
                  <Button
                    type="default"
                    style="margin:10px;display:inline;color:blue"
                    onclick={() => this.cancelPost(1)}
                  >
                    置为已出
                  </Button>
                )}
                {this.data.isCreator && detail.status == 1 && (
                  <Button
                    type="default"
                    style="margin:10px;display:inline;color:blue"
                    onclick={() => this.cancelPost(0)}
                  >
                    置为在售
                  </Button>
                )}
              </View>
            </View>
            <Button className="itemView" openType="share" id="2">
              分享赚积分
            </Button>
          </>
        )}
      </Block>
    );
  }
}

export default _C;
