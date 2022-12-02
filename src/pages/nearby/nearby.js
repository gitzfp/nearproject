import { Block, View, Image, Input, TaroPop } from "@tarojs/components"
import React from "react"
import Taro from "@tarojs/taro"
import withWeapp from "@tarojs/with-weapp"
import Swipper from "../../components/Swiper/MySwiper"
import "./nearby.scss"
import { getDistanceFromLatLonInKm } from "../utils/util"

/**
 * 小程序首页
 *
 * @author: Eysonyou
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
    // 我的记录数据集
    resultRows: [],
    openId: "",
    nickName: "",
    banners: [],
    searchValue: "",
    page: 0,

    isLoaded: false,
    error: false,
    hasMore: true,
    isEmpty: false,
  },

  /**
   * 小程序启动时执行
   */
  onLoad: function(_options) {
    console.log("on load")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    Taro.setNavigationBarTitle({
      title: "附近闲置",
    })
    // 当前版本不支持小程序云函数
    if (!Taro.cloud) {
      Taro.showModal({
        title: "提示",
        content: "微信版本过低，请升级微信",
      })
      return
    }
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
              thar.getBanner()
            },
          })
        } else {
          thar.query()
          thar.getBanner()
          thar.bindUser(JSON.parse(thar.data.isLogin))
        }
      }
    )
  },

  getBanner: function() {
    let that = this
    Taro.cloud
      .callFunction({
        name: "banner",
        data: {
          env: app.globalData.env,
        },
      })
      .then((res) => {
        that.setData({
          banners: res.result.data,
        })
      })
      .catch((_err) => {})
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    this.query(0)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    this.query(this.data.page + 1)
  },

  bindUser: function(userInfo) {
    let pages = Taro.getCurrentPages()
    let page = pages[pages.length - 1]
    let options = page.options
    console.log(options, "首页")
    console.log(app.globalData.env, "首页1")
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
        console.log(res.result, "user add func success")
        this.setData({
          openId: res.result.openId,
          nickName: userInfo.nickName,
          isLogin: true,
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
  queryPage: async function(searchValue = "", page = 0, pageSize = 10) {
    // 全局显示loading
    Taro.showLoading({
      title: "加载中...",
    })
    console.log("参数", {
      env: app.globalData.env,
      search: searchValue,
      page: page,
      pageSize: pageSize,
    })
    try {
      // 调用云函数
      const res = await Taro.cloud.callFunction({
        name: "nearby",
        data: {
          env: app.globalData.env,
          search: searchValue,
          page: page,
          pageSize: pageSize,
          longitude: app.globalData.longitude,
          latitude: app.globalData.latitude,
        },
      })
      let rows = res.result.data || []
      if (page != 0) {
        rows = [...this.data.resultRows, ...res.result.data]
      }
      rows.map((item) => {
        item.files = item.fileID.split(",")
        if (item.distance) {
          item.distance = parseFloat(item.distance).toFixed(2)
        }
      })
      // 异步回调并更新数据
      this.setData({
        openId: res.result.openid,
        resultRows: rows,
        isEmpty: rows.length > 0 ? false : true,
        page: page,
      })
      // 隐藏loading
      Taro.hideLoading()
    } catch (err) {
      console.log(err, "==error====")
      Taro.hideLoading()
    }
  },

  query: function(page) {
    if (app.globalData.longitude) {
      this.queryPage(this.data.searchValue, page)
      return
    }
    const that = this
    Taro.getLocation({
      type: "wgs84",
      success: function(res) {
        app.globalData.latitude = res.latitude
        app.globalData.longitude = res.longitude
        that.queryPage(that.data.searchValue, page)
      },
    })
  },
  goDetail: function(item) {
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
        this.data.nickName,
    })
  },
  compare: function(property) {
    return function(a, b) {
      var value1 = a[property]
      var value2 = b[property]
      return value1 - value2
    }
  },
})
export default class Nearby extends React.Component {
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
  handleInputChange(e) {
    this.setData({ searchValue: e.target.value })
  }
  getPhoneNumber(e) {
    console.log(JSON.stringify(e))
    Taro.cloud
      .callFunction({
        name: "openapi",
        data: {
          evn: app.globalData.env,
          action: "getPhone",
          id: e.detail.cloudID,
        },
      })
      .then((res) => {
        console.log("手机号码: ", res)
      })
  }

  handleSearch() {
    console.log("handle search")
    this.query(0)
    this.setData({
      searchValue: "",
    })
  }
  pullDownRefresh = async () => {
    let pageIndex = 0
    this.query(pageIndex)
  }

  onScrollToLower = async (fn) => {
    this.query(this.data.page + 1)
  }

  refList = {}

  insRef = (node) => {
    this.refList = node
  }

  render() {
    const {
      banners,
      isEmpty,
      resultRows,
      searchValue,
      isLoaded,
      hasMore,
      error,
    } = this.data
    let banner = [{ image_src: require("../../image/banner.png") }]
    if (banners.length > 0) {
      banner = []
      banners.map((item) => {
        ;(item.image_src = item.fileID),
          (item.distance = getDistanceFromLatLonInKm(
            app.globalData.latitude,
            app.globalData.longitude,
            item.latitude,
            item.longitude
          ))
      })
      banners.sort(this.compare("distance"))
      banner = [banners[0]]
    }
    return (
      <Block>
        <View className="page">
          {isEmpty ? (
            <View className="weui-panel">
              <View className="search">
                <Input
                  onInput={(e) => this.handleInputChange(e)}
                  className="search-input"
                  type="search"
                  placeholder="请输入商品名称"
                  value={searchValue}
                />
                <View
                  className="search-button"
                  onClick={() => this.handleSearch()}
                >
                  搜索
                </View>
              </View>
              <View className="weui-loadmore weui-loadmore_line">
                <View className="weui-loadmore__tips weui-loadmore__tips_in-line">
                  暂无相关闲置，去发个求购贴吧
                </View>
              </View>
            </View>
          ) : (
            <View className="weui-panel">
              <View className="search">
                <Input
                  onInput={(e) => this.handleInputChange(e)}
                  className="search-input"
                  type="search"
                  placeholder="请输入商品名称"
                />
                <View
                  className="search-button"
                  onClick={() => this.handleSearch()}
                >
                  搜索
                </View>
              </View>
              <Swipper banner={banner} />
              {/*  数据列表 [[ */}
              {resultRows.map((item, _index) => {
                return (
                  <View
                    className="ui-list-item"
                    key="_id"
                    onClick={() => this.goDetail(item)}
                  >
                    <View className="weui-uploader__files" id="uploaderFiles">
                      {item.files &&
                        item.files.map((item1, index) => {
                          if (index < 1)
                            return (
                              <Block key={index}>
                                <View
                                  className="weui-uploader__file"
                                  // onClick={(e) =>
                                  //   this.previewImage(e, item.files)
                                  // }
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

                    <View className="weui-media-box__title">{item.title}</View>
                    <View className="weui-media-box weui-media-box_appmsg">
                      <View className="ui-font-red">￥{item.amount}</View>
                      {item.distance < 1000 && (
                        <View className="weui-media-box__desc">
                          距我{item.distance}km
                        </View>
                      )}
                    </View>
                  </View>
                )
              })}
            </View>
          )}
        </View>
      </Block>
    )
  }
}

// export default Nearby
