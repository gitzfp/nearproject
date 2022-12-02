import { Block, View, Image, OpenData, Text, Button } from "@tarojs/components"
import React from "react"
import Taro from "@tarojs/taro"
import withWeapp from "@tarojs/with-weapp"
import "./index.scss"

/**
 * 小程序首页
 *
 * @author: Harlan
 * @create: 2019-05-14
 */
const app = Taro.getApp().$app

@withWeapp({
  /**
   * 定义数据对象
   */
  data: {
    // 是否登录
    isLogin: Taro.getStorageSync("user"), //app.globalData.isLogin,
    // 默认为空数据
    isEmpty: true,
    // 我的记录数据集
    resultRows: [],
    openId: "",
    nickName: "",
    score: 0,
    userInfo: {},
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    Taro.setNavigationBarTitle({
      title: "我的",
    })
    // 当前版本不支持小程序云函数
    if (!Taro.cloud) {
      Taro.showModal({
        title: "提示",
        content: "微信版本过低，请升级微信",
      })
      return
    }
    // 查询授权
    const thar = this
    this.setData(
      {
        isLogin: Taro.getStorageSync("user"),
      },
      () => {
        if (!thar.data.isLogin) {
          Taro.showModal({
            title: "您还未登录",
            content: "登录,浏览更多",
            showCancel: false,
            success: function(res) {
              thar.getUserProfile()
              thar.query()
            },
          })
        } else {
          thar.query()
          thar.bindUser(JSON.parse(thar.data.isLogin))
        }
      }
    )
  },

  bindgetUserInfo: function() {
    Taro.getUserInfo({}).then((res) => {
      this.bindUser(res.userInfo)
      this.setData({
        isLogin: res.userInfo,
      })
    })
  },

  bindUser: function(userInfo) {
    let pages = Taro.getCurrentPages()
    let page = pages[pages.length - 1]
    let options = page.options

    // 调用云函数
    userInfo.env = app.globalData.env
    userInfo.pOpenId = options.pOpenId
    userInfo.pNickName = options.pNickName
      ? decodeURI(options.pNickName)
      : options.pNickName
    Taro.cloud
      .callFunction({
        name: "user",
        data: userInfo,
      })
      .then((res) => {
        userInfo.level = res.result.level
        this.setData({
          openId: userInfo.openId,
          nickName: userInfo.nickName,
          score: userInfo.score,
          isLogin: userInfo,
        })
        Taro.setStorageSync("user", JSON.stringify(res.result))
        // 隐藏loading
        Taro.hideLoading()
      })
      .catch((err) => {
        console.log(err, "user add func err")
        Taro.hideLoading()
        Taro.showModal({
          title: "提示",
          content: "系统异常，请稍后再试",
        })
      })
  },

  rad: function(d) {
    return (d * Math.PI) / 180.0
  },

  /*
   @param lng1 经度1
  * @param lat1 纬度1
  * @param lng2 经度2
  * @param lat2 纬度2
  * @return 距离（米）
  */
  getDistanceFromLatLonInKm: function(lat1, lng1, lat2, lng2) {
    var radLat1 = (lat1 * Math.PI) / 180.0
    var radLat2 = (lat2 * Math.PI) / 180.0
    var a = radLat1 - radLat2
    var b = (lng1 * Math.PI) / 180.0 - (lng2 * Math.PI) / 180.0
    var s =
      2 *
      Math.asin(
        Math.sqrt(
          Math.pow(Math.sin(a / 2), 2) +
            Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)
        )
      )
    s = s * 6378.137
    s = Math.round(s * 10000) / 10
    s = s / 1000
    return s.toFixed(2)
  },

  query: function() {
    // 全局显示loading
    Taro.showLoading({
      title: "加载中...",
    })
    // 调用云函数
    Taro.cloud
      .callFunction({
        name: "index",
        data: {
          env: app.globalData.env,
        },
      })
      .then((res) => {
        var rows = res.result.data ? res.result.data : []
        rows.map((item) => {
          item.files = item.fileID.split(",")
          item.distance = this.getDistanceFromLatLonInKm(
            app.globalData.latitude,
            app.globalData.longitude,
            item.latitude,
            item.longitude
          )
        })
        // 异步回调并更新数据
        this.setData({
          openId: res.result.openid,
          resultRows: rows,
          isEmpty: rows.length > 0 ? false : true,
        })
        // console.log(this.data);
        // 隐藏loading
        Taro.hideLoading()
      })
      .catch((err) => {
        console.log(err)
        console.log("call INDEX func err")
        Taro.hideLoading()
        Taro.showModal({
          title: "提示",
          content: "系统异常，请稍后再试",
        })
      })
  },
  goDetail: function(e, item, update) {
    e.stopPropagation()
    console.log(update, "zhegeshi ture ba ")
    Taro.navigateTo({
      url:
        "/pages/detail/detail?id=" +
        item._id +
        "&status=" +
        item.status +
        "&sceneIndex=" +
        item.sceneIndex +
        "&openId=" +
        this.data.openId +
        "&nickName=" +
        this.data.nickName +
        "&update=" +
        update,
    })
  },
})
export default class Index extends React.Component {
  getUserProfile() {
    Taro.getUserProfile({ desc: "查询用户信息" }).then((res) => {
      this.bindUser(res.userInfo)
    })
  }

  onShareAppMessage() {
    let pages = Taro.getCurrentPages()
    let page = pages[pages.length - 1]
    return {
      title: `闲置，转给附近需要的人`,
      path: `/${page.route}?pOpenId=${this.data.openId}&pNickName=${this.data.nickName}`,
    }
  }

  previewImage(e, files) {
    e.stopPropagation()
    Taro.previewImage({
      current: e.currentTarget.id, // 当前显示图片的http链接
      urls: files, // 需要预览的图片http链接列表
    })
  }
  goMyInvite() {
    Taro.navigateTo({
      url: "/pages/apply/apply",
    })
  }
  goBanner() {
    Taro.navigateTo({
      url: "/pages/banner/banner",
    })
  }
  render() {
    const { isLogin, resultRows, score } = this.data
    console.log(isLogin, "等级")
    return (
      <Block>
        {/*  列表  */}
        <View className="page">
          {/* {!isLogin && (
            <button
              className="login-button"
              ref="loginButton"
              open-type="getUserInfo"
              lang="zh_CN"
              onGetUserInfo={this.bindgetUserInfo}
            >
              我的发布
            </button>
          )} */}
          <View className="weui-panel">
            <View
              style="display:flex;height: 90px;
              align-items:center;
              padding-left: 10px"
            >
              <View style="width:60px;height:60px">
                <OpenData type="userAvatarUrl" />
              </View>
              <View style="margin-left:15px;display:flex;flex-direction:column;">
                <OpenData type="userNickName" />
                <Text>公益积分：{score}</Text>
              </View>
            </View>
            {
              <Button onclick={this.goMyInvite} className="">
                我的邀请
              </Button>
            }
            {isLogin.level && (
              <Button
                onclick={this.goBanner}
                style={{ marginTop: 10, marginBottom: 10 }}
              >
                创建活动图
              </Button>
            )}
            {resultRows.length == 0 && (
              <View className="weui-panel">
                <View className="weui-loadmore weui-loadmore_line">
                  <View className="weui-loadmore__tips weui-loadmore__tips_in-line">
                    暂无发布
                  </View>
                </View>
              </View>
            )}
            {/*  数据列表 [[ */}
            {isLogin &&
              resultRows.map((item, index) => {
                return (
                  <View
                    className="ui-list-item"
                    key="_id"
                    onClick={(e) => this.goDetail(e, item)}
                  >
                    <View className="weui-media-box weui-media-box_appmsg">
                      <View className="weui-media-box__title">
                        {item.title}
                      </View>
                    </View>
                    <View className="weui-media-box weui-media-box_appmsg">
                      <View className="weui-uploader__files" id="uploaderFiles">
                        {item.files &&
                          item.files.map((item1, index) => {
                            if (index < 3)
                              return (
                                <Block key={index}>
                                  <View
                                    className="weui-uploader__file"
                                    onClick={(e) =>
                                      this.previewImage(e, item.files)
                                    }
                                    id={item1}
                                  >
                                    <Image
                                      className="weui-uploader__img"
                                      src={item1}
                                      mode="aspectFill"
                                    ></Image>
                                  </View>
                                </Block>
                              )
                          })}
                      </View>
                    </View>
                    <View className="weui-media-box weui-media-box_appmsg">
                      <View className="weui-media-box__desc">
                        {item.content}
                        {/* {item.nickName +
                          ' · ' +
                          global.formatDate(formatTime(item.createTime))} */}
                      </View>
                      {/* <View style="margin-left:15px">
                        <View className="ui-like ui-font-red">距我{item.distance}km</View>
                      </View> */}
                      <View
                        className="ui-content"
                        onClick={(e) => this.goDetail(e, item, true)}
                      >
                        修改
                      </View>
                    </View>
                  </View>
                )
              })}
          </View>
        </View>
      </Block>
    )
  }
}

// export default Nearby
