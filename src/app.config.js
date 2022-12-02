export default {
  enableShareAppMessage: true,
  pages: [
    "pages/nearby/nearby",
    "pages/post/post",
    "pages/apply/apply",
    "pages/index/index",
    "pages/detail/detail",
    "pages/webview/index",
    "pages/banner/banner",
  ],
  permission: {
    "scope.userLocation": {
      desc: "获取地理位置信息的用途描述",
    },
  },
  esnextModules: ["taro-ui"],
  window: {
    backgroundColor: "#353535",
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#353535",
    navigationBarTextStyle: "white",
  },
  tabBar: {
    list: [
      {
        pagePath: "pages/nearby/nearby",
        text: "附近闲置",
        iconPath: "image/binggan.png",
        selectedIconPath: "image/binggan-active.png",
      },
      {
        pagePath: "pages/post/post",
        text: "发布闲置",
        iconPath: "image/danhuang.png",
        selectedIconPath: "image/danhuang-active.png",
      },
      {
        pagePath: "pages/index/index",
        text: "我的",
        iconPath: "image/huasheng.png",
        selectedIconPath: "image/huasheng-active.png",
      },
    ],
  },
  sitemapLocation: "sitemap.json",
};
