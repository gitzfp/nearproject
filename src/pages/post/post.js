import {
  Block,
  View,
  Form,
  Input,
  Image,
  Button,
  Textarea,
  Map,
} from "@tarojs/components";
import React from "react";
import Taro from "@tarojs/taro";
import withWeapp from "@tarojs/with-weapp";
import "./post.scss";
import { CDN_PATH } from "../../config/appConfig.js";

/**
 * 发布
 *
 * @author: Harlan
 * @create: 2019-05-14
 */
const app = Taro.getApp().$app;
@withWeapp({
  /**
   * 页面的初始数据
   */
  data: {
    // 图片上传限制
    imgUploadMax: 3,
    // 解决textarea组件在表单提交时无法获取内容的BUG
    content: "",
    // 保存用户信息
    userInfo: null,
    // 内容大小限制为200字符
    contentSize: 0,
    // 场景集合
    scenes: ["活动", "二手发布"],
    // 默认的场景
    sceneIndex: "",
    // 上传文件-文件列表
    files: [],
    fileID: "",
    location: {
      latitude: app.globalData.latitude,
      longitude: app.globalData.longitude,
    },
    getLocation: "",
    CDN_PATH,
    iconPath: `${CDN_PATH}/Marker3_Activated@3x.png`,
    markers: [
      {
        id: 0,
        iconPath: `${CDN_PATH}/Marker3_Activated@3x.png`,
        latitude: 40.040415,
        longitude: 116.273511,
        width: 30,
        height: 30,
      },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(app.globalData.latitude, "post位置信息");
    this.data.location.latitude = app.globalData.latitude;
    this.data.location.longitude = app.globalData.longitude;
    this.data.markers.latitude = app.globalData.latitude;
    this.data.markers.longitude = app.globalData.longitude;
    console.log(this.data.location, "post位置信息");
    let that = this;
    // 当前版本不支持小程序云函数
    if (!Taro.cloud) {
      Taro.showModal({
        title: "提示",
        content: "微信版本过低，请升级微信",
      });
      return;
    }

    Taro.setNavigationBarTitle({
      title: "发布闲置",
    });
  },

  bindgetUserInfo: function() {
    console.log("获取 授权 信息");
    // 获取用户信息
    Taro.getUserInfo({
      lang: "zh_CN",
      success: this.getUserInfoSuccess,
      fail: this.getUserFail,
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    let that = this;
    // 查询授权
    Taro.getSetting({
      success: (res) => {
        console.log(that.refs.loginButton, "hello world1");
        if (res.authSetting["scope.userInfo"]) {
          that.bindgetUserInfo();
        } else {
          // let fn = that.refs.loginButton.__handlers.getuserinfo[0]
          // fn.call(that)
          // console.log(fn,"hello world")
          // //如果未授权  打开弹窗
          //   Taro.authorize({
          //     scope: 'scope.userInfo',
          //     success: function () {
          //       console.log(that.refs.loginButton)
          //     }
          // })
        }
      },
    });
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {},

  /**
   * 选择场景
   */
  bindSceneChange: function(e) {
    console.log("Scenes:", e.detail.value);

    this.setData({
      sceneIndex: e.detail.value,
    });
  },

  addPost: function(data) {
    // 调用云函数
    Taro.cloud
      .callFunction({
        name: "post",
        data: data,
      })
      .then((res) => {
        this.updateUserScore();
        console.log(res, "post POST func success");
        // 隐藏loading
        Taro.hideLoading();

        Taro.showModal({
          title: "发布成功",
          confirmText: "查看发布",
          cancelText: "继续发布",
          content: "获得5个公益积分",
          success: function(res1) {
            if (res1.confirm) {
              Taro.redirectTo({
                url: `/pages/detail/detail?id=${res.result._id}`,
              });
            } else if (res1.cancel) {
              console.log("用户点击取消");
            }
          },
        });
        // Taro.showToast({
        //      title: '获得5个公益积分',
        //      icon: 'success',
        //      duration: 4000,
        //      complete: ()=>{
        //       setTimeout(()=>{
        //           // 跳到详情页

        //       },4000)

        //      }
        //    })
      })
      .catch((err) => {
        console.log(err);
        console.log("post POST func err");
        Taro.hideLoading();
        Taro.showModal({
          title: "提示",
          content: "系统异常，请稍后再试",
        });
      });
  },

  /**
   * 计算内容长度
   */
  bindInput: function(e) {
    let v = e.detail ? e.detail.value : "";
    this.setData({
      content: v,
      contentSize: v.length,
    });
    // console.log(e);
  },

  /**
   * 获取用户信息
   */
  getUserInfoSuccess: function(res) {
    const userInfo = res.userInfo || {};
    console.log(userInfo);
    this.setData({
      userInfo: userInfo,
    });
  },

  getUserFail: function(res) {
    console.log(res, "shibai");
  },

  handleImage: function(filePath, index) {
    let that = this;
    // get file EXT,for .jpg
    let ext = filePath.match(/\.[^.]+?$/)[0];
    let sceneIndex = that.data.sceneIndex;
    let time = new Date().getTime();
    let rand = parseInt(Math.random() * 100000);
    let cloudPath = `img_${sceneIndex}_${time}_${rand}${ext}`;
    console.log(cloudPath);
    Taro.cloud.uploadFile({
      cloudPath: cloudPath,
      filePath: filePath,
      success: function(res) {
        // 图片上传成功
        console.log(res.fileID);
        let currentFile = that.data.files;
        currentFile.push(res.fileID);
        that.setData(
          {
            // 只能上传一张，每次会覆盖
            files: currentFile,
          },
          () => {
            console.log(that.data.files, "当前图片数组");
          }
        );
        that.setData({
          fileID: res.fileID,
        });

        // 鉴定敏感图片
        let contentType = ext.replace(/\./g, "");
        console.log(contentType);
        Taro.cloud
          .callFunction({
            name: "imgSecCheck",
            data: {
              env: app.globalData.env,
              contentType: "image/png",
              fileID: res.fileID,
            },
          })
          .then((res) => {
            if (index != 0) {
              Taro.showToast({
                title: "提示1",
                title: "图片上传成功",
              });
            }
          })
          .catch((err) => {
            // 敏感图片，清空参数值
            // that.setData({
            //   fileID: '',
            //   files: []
            // })
            console.log(err, "图片上传失败");
            Taro.showToast({
              title: "提示",
              content: "图片上传失败",
            });
          });
      },
      fail: function(e) {
        // todo
        console.log(e);
      },
      complete: function() {
        Taro.hideLoading();
      },
    });
  },

  /**
   * 选择图片
   */
  chooseImage: function(e) {
    var that = this;
    Taro.chooseImage({
      // 只能上传一张
      count: that.imgUploadMax,
      // 可以指定是原图还是压缩图，默认二者都有
      sizeType: ["original", "compressed"],
      // 可以指定来源是相册还是相机，默认二者都有
      sourceType: ["album", "camera"],
      success: function(res) {
        Taro.showLoading({
          title: "图片上传中...",
        });
        console.log(res, "图片上传");
        res.tempFilePaths.map((filePath, index) => {
          that.handleImage(filePath, index);
        });
      },
      fail: function(e) {
        console.log("----upload fail----");
        console.log(e);
      },
      complete: function(res) {
        Taro.hideLoading();
      },
    });
  },

  /**
   * 预览图片
   * todo: 待完善删除功能
   */
  previewImage: function(e) {
    Taro.previewImage({
      current: e.currentTarget.id, // 当前显示图片的http链接
      urls: this.data.files, // 需要预览的图片http链接列表
    });
  },
  /**
   * 提交数据
   */
  bindSubmit: function(e) {
    console.log(window.globalData, "全局数据");
    if (!this.data.userInfo) {
      Taro.showModal({
        title: "提示",
        content: "发布失败，请先登录",
      });
      return;
    }
    let data = e.detail ? e.detail.value : {};
    let userInfo = this.data.userInfo;

    data["env"] = app.globalData.env;
    // 解决textarea组件在表单提交时无法获取内容的BUG
    data.content = this.data.content;
    // 图片
    data["fileID"] = this.data.files.toString();

    // 增加用户信息
    data["nickName"] = userInfo.nickName;
    data["avatarUrl"] = userInfo.avatarUrl;
    data["city"] = userInfo["city"];
    data["country"] = userInfo["country"];
    data["gender"] = userInfo["gender"];
    data["language"] = userInfo["language"];
    data["latitude"] = this.data.location.latitude;
    data["longitude"] = this.data.location.longitude;
    data["location"] = JSON.stringify(this.data.location);
    console.log(data);
    console.log("post submit data");

    if (data["maximum"] < 0 || data["maximum"] > 1000) {
      Taro.showToast({
        title: "超出报名上限（1~1000）",
        icon: "none",
      });

      return;
    }

    if (!data["title"]) {
      Taro.showToast({
        title: data["sceneIndex"] == 0 ? "请输入活动主题" : "请输入商品名称",
        icon: "none",
      });

      return;
    }

    if (parseInt(data["sceneIndex"]) === 1 && !data["amount"]) {
      Taro.showToast({
        title: "请输入商品价格",
        icon: "none",
      });

      return;
    }

    if (!data["content"]) {
      Taro.showToast({
        title: data["sceneIndex"] == 0 ? "请输入活动内容" : "请输入商品描述",
        icon: "none",
      });

      return;
    }

    // if (!data['getTime']) {
    //   Taro.showToast({
    //     title: data['sceneIndex'] == 0 ? '请输入取货时间' : '请输入取货时间',
    //     icon: 'none'
    //   })
    //   return
    // }

    if (!data["getLocation"]) {
      Taro.showToast({
        title: data["sceneIndex"] == 0 ? "请输入取货地点" : "请输入取货地点",
        icon: "none",
      });

      return;
    }

    if (!data["fileID"]) {
      Taro.showToast({
        title: "请至少上传一张图片",
        icon: "none",
      });

      return;
    }

    // 全局显示loading
    Taro.showLoading({
      title: "提交中...",
    });

    this.addPost(data);
  },
  // 点击地图事件
  onTapMap(event) {
    this.onChooseLocation();
  },
  onChooseLocation: function() {
    Taro.chooseLocation({
      success: (res) => {
        console.log(res, "位置是多少");
        this.setData({
          getLocation: res.address,
          location: {
            latitude: res.latitude,
            longitude: res.longitude,
          },
          getTime: this.data.getTime,
        });
      },
    });
  },
  onShareAppMessage: function() {
    let pages = Taro.getCurrentPages();
    let page = pages[pages.length - 1];
    return {
      title: `闲置，转给附近需要的人`,
      path: `/${page.route}?pOpenId=${this.userInfo.openId}&pNickName=${this.userInfo.nickName}`,
    };
  },

  deleteImage(e, index) {
    e.stopPropagation();
    let arr = this.data.files.splice(index, 1);
    console.log(this.data.files, "图片数组");
    this.setData({
      files: this.data.files,
    });
  },
  updateUserScore() {
    let thar = this;
    Taro.cloud
      .callFunction({
        name: "updateUser",
        data: {
          env: app.globalData.env,
          score: 5,
          latitude: thar.data.location.latitude,
          longitude: thar.data.location.longitude,
        },
      })
      .then((res) => {
        console.log(res.result, "user index func success");
        // 隐藏loading
        Taro.hideLoading();
      })
      .catch((err) => {
        console.log(err);
        console.log("user add func err");
        Taro.hideLoading();
        Taro.showModal({
          title: "提示",
          content: "系统异常，请稍后再试",
        });
      });
  },
})
class _C extends React.Component {
  constructor() {
    super(...arguments);
  }
  onLoadImage() {
    console.log("===jai zai cheng gong");
  }
  onErrorImage() {
    console.log("===jai zai shi bai");
  }
  render() {
    const { contentSize, files, location, getLocation } = this.data;

    return (
      <View className="page">
        <Form onSubmit={this.bindSubmit}>
          <View className="weui-cells weui-cells_after-title">
            {/*  二手发布  */}
            <View>
              {/*  商品名称  */}
              <View className="weui-cell weui-cell_input">
                <View className="weui-cell__hd">
                  <View className="weui-label">商品名称</View>
                </View>
                <View className="weui-cell__bd">
                  <Input
                    name="title"
                    confirmType="next"
                    maxlength="64"
                    className="weui-input"
                    placeholder="【求购】【转让】【赠送】【出租】"
                  ></Input>
                </View>
              </View>
              {/*  上传图片  */}
              <View
                className="weui-cell weui-cell_input"
                style="display:flex;flex-wrap: wrap;padding-left: 18px;"
                id="uploaderFiles"
              >
                {files.map((item, index) => {
                  return (
                    <Block key={index}>
                      <View
                        className="weui-uploader__file"
                        onClick={this.previewImage}
                        id={item}
                      >
                        <Image
                          className="weui-uploader__img"
                          src={item}
                          mode="aspectFill"
                        ></Image>
                        <View
                          className="weui-delete-image"
                          onClick={(e) => this.deleteImage(e, index)}
                        >
                          删除
                        </View>
                      </View>
                    </Block>
                  );
                })}
              </View>
              <View className="weui-cell weui-cell_input">
                <View className="weui-cell__hd">
                  <View className="weui-label">上传图片</View>
                </View>
                <View className="weui-uploader__input-box">
                  <View
                    className="weui-uploader__input"
                    onClick={this.chooseImage}
                  ></View>
                </View>
              </View>
              {/*  商品价格  */}
              <View className="weui-cell weui-cell_input">
                <View className="weui-cell__hd">
                  <View className="weui-label">商品价格</View>
                </View>
                <View className="weui-cell__bd">
                  <Input
                    type="digit"
                    name="amount"
                    confirmType="next"
                    className="weui-input"
                    placeholder="例如：9.9"
                  ></Input>
                </View>
              </View>
              <View className="weui-cell weui-cell_input">
                <View className="weui-cell__hd">
                  <View className="weui-label">商品原价</View>
                </View>
                <View className="weui-cell__bd">
                  <Input
                    type="digit"
                    name="orgin_amount"
                    confirmType="next"
                    className="weui-input"
                    placeholder="例如：99"
                  ></Input>
                </View>
              </View>
              {/*  商品内容  */}
              <View className="weui-cell">
                <View className="weui-cell__bd">
                  <Textarea
                    name="content"
                    maxlength="200"
                    onInput={this.bindInput}
                    className="weui-textarea"
                    placeholder="商品描述，不超过200字"
                    autoHeight={true}
                  ></Textarea>
                  <View className="weui-textarea-counter">
                    {contentSize + "/200"}
                  </View>
                </View>
              </View>
              <View className="weui-cell weui-cell_input">
                <View className="weui-cell__hd">
                  <View className="weui-label">联系电话</View>
                </View>
                <View className="weui-cell__bd">
                  <Input
                    name="mobilePhone"
                    confirmType="next"
                    maxlength="12"
                    className="weui-input"
                    placeholder="请输入联系电话"
                  ></Input>
                </View>
              </View>
              <View className="weui-cell weui-cell_input">
                <View className="weui-cell__hd">
                  <View className="weui-label">取货时间</View>
                </View>
                <Input
                  name="getTime"
                  confirmType="next"
                  maxlength="12"
                  className="weui-input"
                  placeholder="请输入取货时间"
                ></Input>
              </View>
              <View className="weui-cell weui-cell_input">
                <View className="weui-cell__hd">
                  <View className="weui-label">取货地点</View>
                </View>
                <View className="weui-cell__bd">
                  <Input
                    name="getLocation"
                    confirmType="next"
                    maxlength="12"
                    value={getLocation}
                    className="weui-input"
                    placeholder="点击地图进入地址选择"
                  ></Input>
                </View>
              </View>
              <View className="weui-cell" onClick={this.onTapMap}>
                <Map
                  className="map"
                  id="map"
                  latitude={location.latitude}
                  longitude={location.longitude}
                  scale="16"
                  onClick={this.onTapMap}
                  enableZoom={true}
                  enableScroll={false}
                >
                  <Image
                    className="current-site-icon"
                    onLoad={this.onLoadImage}
                    onError={this.onErrorImage}
                    src={this.data.iconPath}
                    onClick={this.onTapMap}
                  ></Image>
                </Map>
              </View>
            </View>
          </View>
          {/*  提交按钮  */}

          <View className="ui-button">
            {!this.data.userInfo && (
              <button
                ref="loginButton"
                open-type="getUserInfo"
                lang="zh_CN"
                onGetUserInfo={this.bindgetUserInfo}
              >
                请先登录
              </button>
            )}

            {this.data.userInfo && (
              <Button className="weui-btn" type="primary" formType="submit">
                确认发布
              </Button>
            )}
          </View>
        </Form>
      </View>
    );
  }
}

export default _C;
