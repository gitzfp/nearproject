import { Image, View, Form, Input, Textarea, Button } from "@tarojs/components"
import React from "react"
import Taro, { chooseInvoiceTitle } from "@tarojs/taro"
import withWeapp from "@tarojs/with-weapp"
import "./apply.scss"
import { getDistanceFromLatLonInKm } from "../utils/util"
import { formatTime, formatTime1 } from "../utils/util"
/**
 * 报名
 *
 * @author: Eysonyou
 * @create: 2019-05-14
 */
const app = Taro.getApp().$app

@withWeapp({
  /**
   * 页面的初始数据
   */
  data: {
    // 解决textarea组件在表单提交时无法获取内容的BUG
    resultRows: [],
    todayCount: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    Taro.setNavigationBarTitle({
      // title: "公益排行",
      title: "我的邀请",
    })
    // 当前版本不支持小程序云函数
    if (!Taro.cloud) {
      Taro.showModal({
        title: "提示",
        content: "微信版本过低，请升级微信",
      })
      return
    }
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    let thar = this
    // 全局显示loading
    Taro.showLoading({
      title: "加载中...",
    })
    // 调用云函数
    Taro.cloud
      .callFunction({
        name: "queryUser",
        data: {
          env: app.globalData.env,
        },
      })
      .then((res) => {
        // console.log(res,"查询用户列表成功")
        var rows = res.result ? res.result : []
        let result1 = []
        let result2 = []
        let today = 0
        rows.map((item) => {
          // item.distance = getDistanceFromLatLonInKm(
          //   app.globalData.latitude,
          //   app.globalData.longitude,
          //   item.latitude,
          //   item.longitude
          // );
          // if (item.distance <= 3) {
          //   result1.push(item);
          // } else {
          //   result2.push(item);
          // }
          if (thar.isToday(item._updateTime)) {
            ++today
          }
        })
        // rows = [...result1, ...result2];
        rows.sort(this.compareDate("_updateTime"))
        // 异步回调并更新数据
        this.setData({
          resultRows: rows,
          todayCount: today,
          isEmpty: rows.length > 0 ? false : true,
        })
        // 隐藏loading
        Taro.hideLoading()
      })
      .catch((err) => {
        console.log(err, "call INDEX func err")
        Taro.hideLoading()
        Taro.showModal({
          title: "提示",
          content: "系统异常，请稍后再试",
        })
      })
  },

  compareDate: function(property) {
    return function(a, b) {
      var value1 = a[property]
      var value2 = b[property]
      return value2 - value1
    }
  },

  isToday: function(str) {
    if (new Date(str).toDateString() === new Date().toDateString()) {
      //今天
      return true
    } else if (new Date(str) < new Date()) {
      //之前
      return false
    }
  },

  compare: function(property) {
    return function(a, b) {
      var value1 = a[property]
      var value2 = b[property]
      return value1 - value2
    }
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
})
class _C extends React.Component {
  render() {
    const { resultRows, todayCount } = this.data
    return (
      <View className="page" style={{ height: "100%" }}>
        {resultRows.length === 0 ? (
          <View
            style={{
              backgroundColor: "#FFFFFF",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            暂无数据
          </View>
        ) : (
          <View>
            <View style={{ padding: "10px" }}>
              <View className="weui-media-box__title">
                总邀请人数：{resultRows.length}人
              </View>
              <View
                className="weui-media-box__desc ui-font-red"
                style={{ marginTop: "10px" }}
              >
                今日活跃：{todayCount}人
              </View>
            </View>
            {resultRows.map((item, index) => {
              return (
                item.nickName && (
                  <View className="ui-list-item" key="_id">
                    <View style={{ display: "flex" }}>
                      <Image
                        className="weui-uploader__img"
                        src={item.avatarUrl}
                        mode="aspectFill"
                      ></Image>
                      <View className="weui-media-box__title">
                        {item.nickName}
                      </View>
                    </View>
                    <View className="weui-media-box__desc">
                      {item.score
                        ? `贡献${item.score}个公益积分`
                        : `暂未贡献公益积分`}
                      <View>{formatTime1(new Date(item._updateTime))}</View>
                    </View>
                  </View>
                )
              )
            })}
          </View>
        )}
      </View>
    )
  }
}
export default _C
