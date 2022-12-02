import React from "react"
import Taro, { onAppShow } from "@tarojs/taro"
import withWeapp from "@tarojs/with-weapp"

import "./lib/weui.scss"
import "./app.scss"
const config = require("../src/config/appConfig")

let latitude, longitude
function updateUserScore() {
  console.log(latitude, longitude, "点击了 分享 updateUserScore")
  Taro.cloud
    .callFunction({
      name: "updateUser",
      data: {
        env: config.ENV_KEY,
        latitude: latitude,
        longitude: longitude,
      },
    })
    .then((res) => {
      console.log(res.result, "user index func success")
      // 隐藏loading
      Taro.hideLoading()
    })
    .catch((err) => {
      console.log(err)
      console.log("user add func err")
      Taro.hideLoading()
      Taro.showModal({
        title: "提示",
        content: "系统异常，请稍后再试",
      })
    })
}

// !(function() {
//   //获取页面配置并进行页面分享配置
//   let thar = this;
//   var PageTmp = Page;
//   Page = function(pageConfig) {
//     //1. 获取当前页面路由
//     let routerUrl = "";
//     wx.onAppRoute(function(res) {
//       //app.js中需要在隐式路由中才能用getCurrentPages（）获取到页面路由
//       let pages = getCurrentPages(),
//         view = pages[pages.length - 1];
//       routerUrl = view.route;
//     });

//     //2. 全局开启分享配置
//     pageConfig = Object.assign(
//       {
//         onShareAppMessage: function() {
//           console.log(routerUrl, "thar");
//           updateUserScore();
//           //根据不同路由设置不同分享内容（微信小程序分享自带参数，如非特例，不需配置分享路径）
//           let shareInfo = {};
//           let noGlobalSharePages = ["index/index"];
//           //全局分享配置，如部分页面需要页面默认分享或自定义分享可以单独判断处理
//           if (!routerUrl.includes(noGlobalSharePages)) {
//             shareInfo = {
//               title: "闲置，转给附近需要的人",
//               imageUrl: wx.getStorageSync("shareUrl"),
//             };
//           }
//           return shareInfo;
//         },
//       },
//       pageConfig
//     );
//     // 配置页面模板
//     PageTmp(pageConfig);
//   };
// })();
@withWeapp({
  globalData: {
    env: config.ENV_KEY,
  },
  onLaunch: function() {
    if (!Taro.cloud) {
      console.error("请使用 2.2.3 或以上的基础库以使用云能力")
    } else {
      Taro.cloud.init({
        // 1.release - 正式
        // 2.test    - 测试
        // env: 'test',
        env: config.ENV_KEY,
        traceUser: true,
      })
    }
    let thar = this
    Taro.getLocation({
      type: "wgs84",
      success: function(res) {
        thar.globalData.latitude = res.latitude
        thar.globalData.longitude = res.longitude
      },
    })
  },
})
class App extends React.Component {
  render() {
    return this.props.children
  }
}
export default App
