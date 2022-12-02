(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/detail/detail"],{

/***/ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/detail/detail.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./src/pages/detail/detail.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _tarojs_with_weapp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tarojs/with-weapp */ "./node_modules/@tarojs/with-weapp/index.js");
/* harmony import */ var _tarojs_with_weapp__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_tarojs_with_weapp__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _detail_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./detail.scss */ "./src/pages/detail/detail.scss");
/* harmony import */ var _detail_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_detail_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _config_appConfig_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../config/appConfig.js */ "./src/config/appConfig.js");
/* harmony import */ var _utils_qqmap_wx_jssdk_min_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/qqmap-wx-jssdk.min.js */ "./src/pages/utils/qqmap-wx-jssdk.min.js");
/* harmony import */ var _components_UpdatePost__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/UpdatePost */ "./src/components/UpdatePost.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__);





var _dec, _class;









/*
 * 详情
 * @author: Eysonyou
 * @create: 2019-05-14
 */




var app = _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.getApp().$app;

var _C = (_dec = _tarojs_with_weapp__WEBPACK_IMPORTED_MODULE_7___default()({
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
    isLogin: _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.getStorageSync("user"),
    //window.globalData.isLogin,
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
      longitude: app.globalData.longitude
    },
    iconPath: "".concat(_config_appConfig_js__WEBPACK_IMPORTED_MODULE_9__["CDN_PATH"], "/Marker3_Activated@3x.png"),
    update: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function onLoad(options) {
    var thar = this;

    if (!this.data.location.latitude) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.getLocation({
        type: "wgs84",
        success: function success(res) {
          console.log(res, "app.js位置信息");
          thar.setData({
            location: {
              latitude: res.latitude,
              longitude: res.longitude
            }
          });
        }
      });
    }

    console.log(options, "传进来是什么");
    thar.data.update = options.update;
    console.log(this.data, "传进来是什么");
    this.data.location.latitude = app.globalData.latitude;
    this.data.location.longitude = app.globalData.longitude; // 当前版本不支持小程序云函数

    if (!_tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.cloud) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.showModal({
        title: "提示",
        content: "微信版本过低，请升级微信"
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
        createTime: "0000-00-00T00:00:00.000"
      }
    });
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.setNavigationBarTitle({
      title: "详情"
    });
  },
  getUserProfile: function getUserProfile() {
    var _this = this;

    var thar = this;
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.getUserProfile({
      desc: "授权登录"
    }).then(function (res) {
      _this.bindUser(res);
    }).catch(function (err) {
      console.log("报错了吗" + JSON.stringify(err));
    });
  },
  bindUser: function bindUser(res) {
    var pages = _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.getCurrentPages();
    var page = pages[pages.length - 1];
    var options = page.options;
    var thar = this;
    var userInfo = res.userInfo;
    userInfo.env = app.globalData.env;
    userInfo.pOpenId = this.options.pOpenId;
    userInfo.pNickName = this.options.pNickName ? decodeURI(this.options.pNickName) : this.options.pNickName; // 调用云函数

    _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.cloud.callFunction({
      name: "user",
      data: userInfo
    }).then(function (res) {
      thar.setData({
        isLogin: JSON.stringify(userInfo)
      });
    });
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.setStorageSync("user", JSON.stringify(userInfo));
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function onShow(options) {
    var _this2 = this;

    this.options = options.params;
    var thar = this;
    this.setData({
      isLogin: _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.getStorageSync("user")
    }, function () {
      console.log(_this2.data.isLogin, "登录数据");

      if (!_this2.data.isLogin) {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.showModal({
          title: "您还未登录",
          content: "登录,浏览更多",
          showCancel: false,
          success: function success(res) {
            thar.query();
            thar.getUserProfile();
          }
        });
      } else {
        _this2.query();

        thar.bindUser({
          userInfo: JSON.parse(_this2.data.isLogin)
        });
      }
    });
  },

  /**
   * 查询详情
   */
  query: function query() {
    var _this3 = this;

    console.log(app.globalData.env, "app.globalData.env"); // 全局显示loading

    _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.showLoading({
      title: "加载中..."
    }); // 调用云函数

    _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.cloud.callFunction({
      name: "detail",
      data: {
        id: this.data.postId,
        env: app.globalData.env
      }
    }).then(function (res) {
      var rows = res.result.data ? res.result.data : []; // 异步回调并更新数据
      // 下载图片

      if (rows[0] && rows[0].fileID) {
        _this3.setData({
          fileList: rows[0].fileID.split(","),
          detail: rows[0],
          isCreator: res.result.isCreator,
          isEmpty: rows.length > 0 ? false : true
        });
      } else {
        _this3.setData({
          detail: rows[0],
          isCreator: res.result.isCreator,
          isEmpty: rows.length > 0 ? false : true
        });
      } // 隐藏loading


      _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.hideLoading();
    }).catch(function (err) {
      console.log(err);
      console.log("call DETAIL func err");
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.hideLoading();
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.showModal({
        title: "提示",
        content: "系统异常，请稍后再试"
      });
    });
  },

  /**
   * 关闭活动
   */
  cancelPost: function cancelPost(status) {
    var that = this; // 全局显示loading

    _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.showLoading({
      title: "提交中..."
    });
    var tempData = {
      status: status,
      postId: that.data.postId,
      env: app.globalData.env
    }; // 调用云函数

    _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.cloud.callFunction({
      name: "cancelPost",
      data: {
        env: app.globalData.env,
        status: status,
        _id: that.data.postId
      }
    }).then(function (res) {
      console.log("call CANCELPOST func ok");
      that.query(); // 隐藏loading

      _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.hideLoading();
    }).catch(function (err) {
      console.log(err);
      console.log("call CANCELPOST func err");
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.hideLoading();
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.showModal({
        title: "提示",
        content: "系统异常，请稍后再试"
      });
    });
  },
  onTapMap: function onTapMap() {
    var latitude = this.data.detail.latitude;
    var longitude = this.data.detail.longitude;
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.openLocation({
      latitude: latitude,
      longitude: longitude // scale: 100

    });
  }
}), _dec(_class = /*#__PURE__*/function (_React$Component) {
  Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_C, _React$Component);

  var _super = Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_C);

  function _C() {
    Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, _C);

    return _super.apply(this, arguments);
  }

  Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_C, [{
    key: "onShareAppMessage",
    value:
    /**
     * 用户点击右上角分享
     */
    function onShareAppMessage() {
      var pages = _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.getCurrentPages();
      var page = pages[pages.length - 1];
      var options = page.options;

      if (this.data.isLogin) {
        var userInfo = JSON.parse(this.data.isLogin);
        options.nickName = userInfo.nickName;
        options.openId = userInfo.openId;
      }

      var shareObj = {
        title: "闲置，转给附近需要的人",
        path: "/".concat(page.route, "?id=").concat(options.id, "&pOpenId=").concat(options.openId, "&pNickName=").concat(options.nickName, "&test=123")
      };
      console.log(shareObj, "分享链接");
      return shareObj;
    }
  }, {
    key: "copyPhone",
    value: function copyPhone(phoneNo) {
      //因为我的input框里面还有button 按钮，所以在选择节点的时候，一定要只选择input
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.setClipboardData({
        data: phoneNo,
        success: function success(res) {
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.getClipboardData({
            success: function success(res) {
              console.log(res.data); // data
            }
          });
        }
      });
    }
  }, {
    key: "makePhoneCall",
    value: function makePhoneCall(phoneNo) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.makePhoneCall({
        phoneNumber: phoneNo //仅为示例，并非真实的电话号码

      });
    }
  }, {
    key: "previewImage",
    value: function previewImage(e, files) {
      e.stopPropagation();
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.previewImage({
        current: e.currentTarget.id,
        // 当前显示图片的http链接
        urls: files // 需要预览的图片http链接列表

      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$data = this.data,
          fileList = _this$data.fileList,
          detail = _this$data.detail,
          isLogin = _this$data.isLogin,
          update = _this$data.update;
      console.log(detail, "========" + update + "=======" + isLogin);
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Block */ "a"], {
        className: "page",
        children: [!isLogin && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])("button", {
          "open-type": "getUserInfo",
          lang: "zh_CN",
          onGetUserInfo: this.getUserProfile,
          children: "\u767B\u5F55\u6388\u6743"
        }), update == "true" && isLogin && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_components_UpdatePost__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
          isLogin: isLogin,
          bindUserInfo: this.getUserProfile,
          fileList: fileList,
          detail: detail
        }), update != "true" && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["Fragment"], {
          children: [fileList.length > 0 && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "n"], {
            style: "display:flex;flex-wrap:nowrap;overflow-x:auto;-webkit-overflow-scrolling:touch; -ms-overflow-style:-ms-autohiding-scrollbar;",
            children: fileList.map(function (item, index) {
              return (
                /*#__PURE__*/
                // <View key="fileID">
                Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Image */ "e"], {
                  style: "flex: 0 0 auto;width:100%",
                  src: item,
                  id: item,
                  onClick: function onClick(e) {
                    return _this4.previewImage(e, fileList);
                  },
                  mode: "aspectFill"
                }) // </View>

              );
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "n"], {
            className: "weui-panel",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "n"], {
              style: "display:flex;",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "n"], {
                className: "ui-title",
                children: ["\u5546\u54C1\u540D\u79F0: ", detail.title]
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "n"], {
              style: "display:inline-block",
              className: "ui-content",
              children: "\u5546\u54C1\u4EF7\u683C:"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "n"], {
              style: "display:inline",
              className: "ui-font-red",
              children: detail.amount > 0 ? "￥" + detail.amount : "免费赠送"
            }), detail.orgin_amount && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "n"], {
              style: "margin-left:10px;display:inline;text-decoration:line-through",
              children: "￥" + detail.orgin_amount
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "n"], {
              className: "ui-content",
              children: ["\u5546\u54C1\u63CF\u8FF0: ", detail.content]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "n"], {
              className: "ui-content",
              children: ["\u53D6\u8D27\u65F6\u95F4: ", detail.getTime]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "n"], {
              className: "ui-content",
              children: ["\u53D6\u8D27\u4F4D\u7F6E: ", detail.getLocation]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "n"], {
              className: "ui-content",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Map */ "g"], {
                className: "map",
                id: "map",
                latitude: detail.latitude,
                longitude: detail.longitude,
                enableZoom: true,
                enableScroll: true,
                onClick: this.onTapMap,
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* CoverImage */ "c"], {
                  className: "current-site-icon",
                  src: this.data.iconPath,
                  onClick: this.onTapMap
                })
              })
            }), detail.status == 0 && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["Fragment"], {
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "n"], {
                style: "display:inline-block",
                className: "ui-content",
                children: ["\u8054\u7CFB\u7535\u8BDD:", " "]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "n"], {
                style: "display:inline-block;clear:all",
                onClick: function onClick() {
                  _this4.makePhoneCall(detail.mobilePhone);
                },
                onLongPress: function onLongPress() {
                  _this4.copyPhone(detail.mobilePhone);
                },
                className: "ui-font-red",
                children: detail.mobilePhone
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "n"], {
              style: "clear:left",
              className: "ui-content",
              children: ["\u5546\u54C1\u72B6\u6001: ", detail.status == 1 ? "已出" : "出售中", this.data.isCreator && detail.status == 0 && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Button */ "b"], {
                type: "default",
                style: "margin:10px;display:inline;color:blue",
                onclick: function onclick() {
                  return _this4.cancelPost(1);
                },
                children: "\u7F6E\u4E3A\u5DF2\u51FA"
              }), this.data.isCreator && detail.status == 1 && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Button */ "b"], {
                type: "default",
                style: "margin:10px;display:inline;color:blue",
                onclick: function onclick() {
                  return _this4.cancelPost(0);
                },
                children: "\u7F6E\u4E3A\u5728\u552E"
              })]
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Button */ "b"], {
            className: "itemView",
            openType: "share",
            id: "2",
            children: "\u5206\u4EAB\u8D5A\u79EF\u5206"
          })]
        })]
      });
    }
  }]);

  return _C;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component)) || _class);

/* harmony default export */ __webpack_exports__["a"] = (_C);

/***/ }),

/***/ "./src/components/UpdatePost.js":
/*!**************************************!*\
  !*** ./src/components/UpdatePost.js ***!
  \**************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdatePost; });
/* harmony import */ var _Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _config_appConfig_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../config/appConfig.js */ "./src/config/appConfig.js");
/* harmony import */ var _pages_post_post_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pages/post/post.scss */ "./src/pages/post/post.scss");
/* harmony import */ var _pages_post_post_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_pages_post_post_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);













var app = _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.getApp().$app;

var UpdatePost = /*#__PURE__*/function (_React$Component) {
  Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(UpdatePost, _React$Component);

  var _super = Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(UpdatePost);

  function UpdatePost() {
    var _this;

    Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, UpdatePost);

    _this = _super.call(this);

    Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this), "handleImage", function (filePath, index) {
      var that = Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this); // get file EXT,for .jpg


      var ext = filePath.match(/\.[^.]+?$/)[0];
      var sceneIndex = that.state.sceneIndex;
      var time = new Date().getTime();
      var rand = parseInt(Math.random() * 100000);
      var cloudPath = "img_".concat(sceneIndex, "_").concat(time, "_").concat(rand).concat(ext);
      console.log(cloudPath);
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.cloud.uploadFile({
        cloudPath: cloudPath,
        filePath: filePath,
        success: function success(res) {
          // 图片上传成功
          console.log(res.fileID);
          var currentFile = that.state.files;
          currentFile.push(res.fileID);
          that.setState({
            // 只能上传一张，每次会覆盖
            files: currentFile
          }, function () {
            console.log(that.state.files, "当前图片数组");
          }); // 鉴定敏感图片

          var contentType = ext.replace(/\./g, "");
          console.log(contentType);
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.cloud.callFunction({
            name: "imgSecCheck",
            data: {
              env: app.globalData.env,
              contentType: "image/png",
              fileID: res.fileID
            }
          }).then(function (res) {
            if (index != 0) {
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.showToast(Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])({
                title: "提示1"
              }, "title", "图片上传成功"));
            }
          }).catch(function (err) {
            // 敏感图片，清空参数值
            // that.setData({
            //   fileID: '',
            //   files: []
            // })
            console.log(err, "图片上传失败");
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.showToast({
              title: "提示",
              content: "图片上传失败"
            });
          });
        },
        fail: function fail(e) {
          // todo
          console.log(e);
        },
        complete: function complete() {
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.hideLoading();
        }
      });
    });

    Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this), "chooseImage", function (e) {
      var that = Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this);

      _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.chooseImage({
        // 只能上传一张
        count: that.imgUploadMax,
        // 可以指定是原图还是压缩图，默认二者都有
        sizeType: ["original", "compressed"],
        // 可以指定来源是相册还是相机，默认二者都有
        sourceType: ["album", "camera"],
        success: function success(res) {
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.showLoading({
            title: "图片上传中..."
          });
          console.log(res, "图片上传");
          res.tempFilePaths.map(function (filePath, index) {
            that.handleImage(filePath, index);
          });
        },
        fail: function fail(e) {
          console.log("----upload fail----");
          console.log(e);
        },
        complete: function complete(res) {
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.hideLoading();
        }
      });
    });

    Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this), "cancelPost", function (status) {
      var that = Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this); // 全局显示loading


      _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.showLoading({
        title: "提交中..."
      });
      var tempData = {
        status: status,
        postId: _this.props.detail._id,
        env: app.globalData.env
      }; // 调用云函数

      _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.cloud.callFunction({
        name: "cancelPost",
        data: {
          env: app.globalData.env,
          status: status,
          _id: _this.props.detail._id
        }
      }).then(function (res) {
        console.log(res, tempData, "===========");
        console.log("call CANCELPOST func ok");

        _this.setState({
          status: !_this.state.status
        }); // 隐藏loading


        _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.hideLoading();
      }).catch(function (err) {
        console.log(err, tempData + "===apply 居然 有===");
        console.log(err);
        console.log("call CANCELPOST func err");
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.hideLoading();
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.showModal({
          title: "提示",
          content: "系统异常，请稍后再试"
        });
      });
    });

    Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this), "deleteImage", function (e, index) {
      e.stopPropagation();

      _this.state.files.splice(index, 1);

      _this.setState({
        files: _this.state.files
      });
    });

    Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this), "previewImage", function (e) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.previewImage({
        current: e.currentTarget.id,
        // 当前显示图片的http链接
        urls: _this.state.files // 需要预览的图片http链接列表

      });
    });

    Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this), "addPost", function (data) {
      // 调用云函数
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.cloud.callFunction({
        name: "post",
        data: data
      }).then(function (res) {
        console.log(res);
        console.log("post POST func success"); // 隐藏loading

        _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.hideLoading(); // 跳到详情页
        // Taro.redirectTo({
        //   url: `/pages/nearby/nearby`
        // })

        _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.showToast({
          title: "修改成功"
        });
      }).catch(function (err) {
        console.log(err);
        console.log("post POST func err");
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.hideLoading();
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.showModal({
          title: "提示",
          content: "系统异常，请稍后再试"
        });
      });
    });

    Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this), "bindSubmit", function (e) {
      if (!_this.state.isLogin) {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.showModal({
          title: "提示",
          content: "发布失败，请先登录"
        });
        return;
      }

      var data = e.detail ? e.detail.value : {};
      console.log(_this.props, "熟悉");
      var userInfo = _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.getStorageSync("user");
      data["env"] = app.globalData.env; // 解决textarea组件在表单提交时无法获取内容的BUG

      data.content = _this.state.content; // 图片

      data["fileID"] = _this.state.files.toString(); // 增加用户信息

      console.log(userInfo, "=========用户信息");
      data["nickName"] = userInfo.nickName;
      data["avatarUrl"] = userInfo.avatarUrl;
      data["city"] = userInfo["city"];
      data["country"] = userInfo["country"];
      data["gender"] = userInfo["gender"];
      data["language"] = userInfo["language"];
      data["latitude"] = _this.state.latitude;
      data["longitude"] = _this.state.longitude;
      data["location"] = JSON.stringify(_this.state.location);
      data["_id"] = _this.props.detail._id;
      console.log(data);
      console.log("post submit data");

      if (data["maximum"] < 0 || data["maximum"] > 1000) {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.showToast({
          title: "超出报名上限（1~1000）",
          icon: "none"
        });
        return;
      }

      if (!data["title"]) {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.showToast({
          title: data["sceneIndex"] == 0 ? "请输入活动主题" : "请输入商品名称",
          icon: "none"
        });
        return;
      }

      if (parseInt(data["sceneIndex"]) === 1 && !data["amount"]) {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.showToast({
          title: "请输入商品价格",
          icon: "none"
        });
        return;
      }

      if (!data["content"]) {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.showToast({
          title: data["sceneIndex"] == 0 ? "请输入活动内容" : "请输入商品描述",
          icon: "none"
        });
        return;
      }

      if (!data["getLocation"]) {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.showToast({
          title: data["sceneIndex"] == 0 ? "请输入取货地点" : "请输入取货地点",
          icon: "none"
        });
        return;
      }

      if (!data["fileID"]) {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.showToast({
          title: "请至少上传一张图片",
          icon: "none"
        });
        return;
      } // 全局显示loading


      _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.showLoading({
        title: "提交中..."
      });
      console.log(data, "提交数据,update,update");

      _this.addPost(data);
    });

    Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this), "onTapMap", function (event) {
      _this.onChooseLocation();
    });

    Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this), "bindInput", function (e) {
      var v = e.detail ? e.detail.value : "";

      _this.setState({
        content: v,
        contentSize: v.length
      });
    });

    _this.state = {
      iconPath: "".concat(_config_appConfig_js__WEBPACK_IMPORTED_MODULE_8__["CDN_PATH"], "/Marker3_Activated@3x.png"),
      content: "",
      contentSize: 0,
      getLocation: "",
      location: "",
      latitude: 0,
      longitude: 0,
      isLogin: false,
      files: [],
      status: 0,
      sceneIndex: 0
    };
    return _this;
  }

  Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(UpdatePost, [{
    key: "onChooseLocation",
    value: function onChooseLocation() {
      var _this2 = this;

      _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.chooseLocation({
        success: function success(res) {
          console.log(res, "位置是多少");

          _this2.setState({
            getLocation: res.address,
            latitude: res.latitude,
            longitude: res.longitude
          });
        }
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        content: nextProps.detail.content
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          fileList = _this$props.fileList,
          detail = _this$props.detail,
          bindUserInfo = _this$props.bindUserInfo;
      this.state.files = fileList;
      this.state.contentSize = this.state.contentSize || detail.content.length;
      this.state.getLocation = this.state.getLocation || detail.getLocation;
      this.state.latitude = this.state.latitude || detail.latitude;
      this.state.longitude = this.state.longitude || detail.longitude;
      this.state.isLogin = this.state.isLogin || this.props.isLogin;
      this.state.status = this.state.status || detail.status;
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "n"], {
        className: "page",
        children: [!this.state.isLogin && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])("button", {
          className: "login-button",
          ref: "loginButton",
          "open-type": "getUserInfo",
          lang: "zh_CN",
          onGetUserInfo: bindUserInfo,
          children: "\u8BF7\u5148\u767B\u5F551"
        }), this.state.isLogin && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Form */ "d"], {
          onSubmit: this.bindSubmit,
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "n"], {
            className: "weui-cells weui-cells_after-title",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "n"], {
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "n"], {
                className: "weui-cell weui-cell_input",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "n"], {
                  className: "weui-cell__hd",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "n"], {
                    className: "weui-label",
                    children: "\u5546\u54C1\u540D\u79F0"
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "n"], {
                  className: "weui-cell__bd",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Input */ "f"], {
                    name: "title",
                    confirmType: "next",
                    maxlength: "64",
                    value: detail.title,
                    className: "weui-input",
                    placeholder: "\u4F8B\u5982\uFF1A\u534E\u4E3A\u624B\u673A"
                  })
                })]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "n"], {
                className: "weui-cell weui-cell_input",
                style: "display:flex;flex-wrap: wrap;padding-left: 18px;",
                id: "uploaderFiles",
                children: this.state.files.map(function (item, index) {
                  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Block */ "a"], {
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "n"], {
                      className: "weui-uploader__file",
                      onClick: function onClick(e) {
                        return _this3.previewImage(e, _this3.state.files);
                      },
                      id: item,
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Image */ "e"], {
                        className: "weui-uploader__img",
                        src: item,
                        mode: "aspectFill"
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "n"], {
                        className: "weui-delete-image",
                        onClick: function onClick(e) {
                          return _this3.deleteImage(e, index);
                        },
                        children: "\u5220\u9664"
                      })]
                    })
                  }, index);
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "n"], {
                className: "weui-cell weui-cell_input",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "n"], {
                  className: "weui-cell__hd",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "n"], {
                    className: "weui-label",
                    children: "\u4E0A\u4F20\u56FE\u7247"
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "n"], {
                  className: "weui-uploader__input-box",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "n"], {
                    className: "weui-uploader__input",
                    onClick: this.chooseImage
                  })
                })]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "n"], {
                className: "weui-cell weui-cell_input",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "n"], {
                  className: "weui-cell__hd",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "n"], {
                    className: "weui-label",
                    children: "\u5546\u54C1\u4EF7\u683C"
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "n"], {
                  className: "weui-cell__bd",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Input */ "f"], {
                    type: "digit",
                    name: "amount",
                    confirmType: "next",
                    className: "weui-input",
                    placeholder: "\u4F8B\u5982\uFF1A9.9",
                    value: detail.amount
                  })
                })]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "n"], {
                className: "weui-cell weui-cell_input",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "n"], {
                  className: "weui-cell__hd",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "n"], {
                    className: "weui-label",
                    children: "\u5546\u54C1\u539F\u4EF7"
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "n"], {
                  className: "weui-cell__bd",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Input */ "f"], {
                    type: "digit",
                    name: "orgin_amount",
                    confirmType: "next",
                    className: "weui-input",
                    placeholder: "\u4F8B\u5982\uFF1A99",
                    value: detail.orgin_amount
                  })
                })]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "n"], {
                className: "weui-cell",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "n"], {
                  className: "weui-cell__bd",
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Textarea */ "m"], {
                    name: "content",
                    maxlength: "200",
                    onInput: this.bindInput,
                    className: "weui-textarea",
                    placeholder: "\u5546\u54C1\u63CF\u8FF0\uFF0C\u4E0D\u8D85\u8FC7200\u5B57",
                    autoHeight: true,
                    value: this.state.content
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "n"], {
                    className: "weui-textarea-counter",
                    children: this.state.contentSize + "/200"
                  })]
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "n"], {
                className: "weui-cell weui-cell_input",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "n"], {
                  className: "weui-cell__hd",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "n"], {
                    className: "weui-label",
                    children: "\u8054\u7CFB\u7535\u8BDD"
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "n"], {
                  className: "weui-cell__bd",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Input */ "f"], {
                    name: "mobilePhone",
                    confirmType: "next",
                    maxlength: "12",
                    className: "weui-input",
                    placeholder: "\u8BF7\u8F93\u5165\u8054\u7CFB\u7535\u8BDD",
                    value: detail.mobilePhone
                  })
                })]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "n"], {
                className: "weui-cell weui-cell_input",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "n"], {
                  className: "weui-cell__hd",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "n"], {
                    className: "weui-label",
                    children: "\u53D6\u8D27\u65F6\u95F4"
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Input */ "f"], {
                  name: "getTime",
                  confirmType: "next",
                  maxlength: "12",
                  className: "weui-input",
                  placeholder: "\u8BF7\u8F93\u5165\u53D6\u8D27\u65F6\u95F4",
                  value: detail.getTime
                })]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "n"], {
                className: "weui-cell weui-cell_input",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "n"], {
                  className: "weui-cell__hd",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "n"], {
                    className: "weui-label",
                    children: "\u53D6\u8D27\u5730\u70B9"
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "n"], {
                  className: "weui-cell__bd",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Input */ "f"], {
                    name: "getLocation",
                    confirmType: "next",
                    maxlength: "12",
                    value: this.state.getLocation,
                    className: "weui-input",
                    placeholder: "\u70B9\u51FB\u5730\u56FE\u8FDB\u5165\u5730\u5740\u9009\u62E9"
                  })
                })]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "n"], {
                className: "weui-cell",
                onClick: this.onTapMap,
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Map */ "g"], {
                  className: "map",
                  id: "map",
                  latitude: this.state.latitude,
                  longitude: this.state.longitude,
                  scale: "16",
                  onClick: this.onTapMap,
                  enableZoom: true,
                  enableScroll: false,
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Image */ "e"], {
                    className: "current-site-icon",
                    onLoad: this.onLoadImage,
                    onError: this.onErrorImage,
                    src: this.state.iconPath,
                    onClick: this.onTapMap
                  })
                })
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "n"], {
              className: "weui-cell",
              style: "clear:left",
              children: ["\u5546\u54C1\u72B6\u6001: ", this.state.status == 1 ? "已出" : "出售中", this.state.status == 0 && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Button */ "b"], {
                type: "default",
                style: "margin:10px;display:inline;color:blue",
                onclick: function onclick() {
                  return _this3.cancelPost(1);
                },
                children: "\u7F6E\u4E3A\u5DF2\u51FA"
              }), this.state.status == 1 && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Button */ "b"], {
                type: "default",
                style: "margin:10px;display:inline;color:blue",
                onclick: function onclick() {
                  return _this3.cancelPost(0);
                },
                children: "\u7F6E\u4E3A\u5728\u552E"
              })]
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "n"], {
            className: "ui-button",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Button */ "b"], {
              className: "weui-btn",
              type: "primary",
              formType: "submit",
              children: "\u4FEE\u6539"
            })
          })]
        })]
      });
    }
  }]);

  return UpdatePost;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);



/***/ }),

/***/ "./src/pages/detail/detail.js":
/*!************************************!*\
  !*** ./src/pages/detail/detail.js ***!
  \************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_detail_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./detail.js */ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/detail/detail.js");


var config = {"usingComponents":{}};

_node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_detail_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].enableShareAppMessage = true
var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_detail_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/detail/detail', {root:{cn:[]}}, config || {}))



/***/ }),

/***/ "./src/pages/detail/detail.scss":
/*!**************************************!*\
  !*** ./src/pages/detail/detail.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/utils/qqmap-wx-jssdk.min.js":
/*!***********************************************!*\
  !*** ./src/pages/utils/qqmap-wx-jssdk.min.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__);



var ERROR_CONF = {
  KEY_ERR: 311,
  KEY_ERR_MSG: 'key格式错误',
  PARAM_ERR: 310,
  PARAM_ERR_MSG: '请求参数信息有误',
  SYSTEM_ERR: 600,
  SYSTEM_ERR_MSG: '系统错误',
  WX_ERR_CODE: 1000,
  WX_OK_CODE: 200
};
var BASE_URL = 'https://apis.map.qq.com/ws/';
var URL_SEARCH = 'https://apis.map.qq.com/ws/place/v1/search';
var URL_SUGGESTION = 'https://apis.map.qq.com/ws/place/v1/suggestion';
var URL_GET_GEOCODER = 'https://apis.map.qq.com/ws/geocoder/v1/';
var URL_CITY_LIST = 'https://apis.map.qq.com/ws/district/v1/list';
var URL_AREA_LIST = 'https://apis.map.qq.com/ws/district/v1/getchildren';
var URL_DISTANCE = 'https://apis.map.qq.com/ws/distance/v1/';
var URL_DIRECTION = 'https://apis.map.qq.com/ws/direction/v1/';
var MODE = {
  driving: 'driving',
  transit: 'transit'
};
var EARTH_RADIUS = 6378136.49;
var Utils = {
  safeAdd: function safeAdd(x, y) {
    var lsw = (x & 0xffff) + (y & 0xffff);
    var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return msw << 16 | lsw & 0xffff;
  },
  bitRotateLeft: function bitRotateLeft(num, cnt) {
    return num << cnt | num >>> 32 - cnt;
  },
  md5cmn: function md5cmn(q, a, b, x, s, t) {
    return this.safeAdd(this.bitRotateLeft(this.safeAdd(this.safeAdd(a, q), this.safeAdd(x, t)), s), b);
  },
  md5ff: function md5ff(a, b, c, d, x, s, t) {
    return this.md5cmn(b & c | ~b & d, a, b, x, s, t);
  },
  md5gg: function md5gg(a, b, c, d, x, s, t) {
    return this.md5cmn(b & d | c & ~d, a, b, x, s, t);
  },
  md5hh: function md5hh(a, b, c, d, x, s, t) {
    return this.md5cmn(b ^ c ^ d, a, b, x, s, t);
  },
  md5ii: function md5ii(a, b, c, d, x, s, t) {
    return this.md5cmn(c ^ (b | ~d), a, b, x, s, t);
  },
  binlMD5: function binlMD5(x, len) {
    x[len >> 5] |= 0x80 << len % 32;
    x[(len + 64 >>> 9 << 4) + 14] = len;
    var i;
    var olda;
    var oldb;
    var oldc;
    var oldd;
    var a = 1732584193;
    var b = -271733879;
    var c = -1732584194;
    var d = 271733878;

    for (i = 0; i < x.length; i += 16) {
      olda = a;
      oldb = b;
      oldc = c;
      oldd = d;
      a = this.md5ff(a, b, c, d, x[i], 7, -680876936);
      d = this.md5ff(d, a, b, c, x[i + 1], 12, -389564586);
      c = this.md5ff(c, d, a, b, x[i + 2], 17, 606105819);
      b = this.md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
      a = this.md5ff(a, b, c, d, x[i + 4], 7, -176418897);
      d = this.md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
      c = this.md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
      b = this.md5ff(b, c, d, a, x[i + 7], 22, -45705983);
      a = this.md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
      d = this.md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
      c = this.md5ff(c, d, a, b, x[i + 10], 17, -42063);
      b = this.md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
      a = this.md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
      d = this.md5ff(d, a, b, c, x[i + 13], 12, -40341101);
      c = this.md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
      b = this.md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
      a = this.md5gg(a, b, c, d, x[i + 1], 5, -165796510);
      d = this.md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
      c = this.md5gg(c, d, a, b, x[i + 11], 14, 643717713);
      b = this.md5gg(b, c, d, a, x[i], 20, -373897302);
      a = this.md5gg(a, b, c, d, x[i + 5], 5, -701558691);
      d = this.md5gg(d, a, b, c, x[i + 10], 9, 38016083);
      c = this.md5gg(c, d, a, b, x[i + 15], 14, -660478335);
      b = this.md5gg(b, c, d, a, x[i + 4], 20, -405537848);
      a = this.md5gg(a, b, c, d, x[i + 9], 5, 568446438);
      d = this.md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
      c = this.md5gg(c, d, a, b, x[i + 3], 14, -187363961);
      b = this.md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
      a = this.md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
      d = this.md5gg(d, a, b, c, x[i + 2], 9, -51403784);
      c = this.md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
      b = this.md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
      a = this.md5hh(a, b, c, d, x[i + 5], 4, -378558);
      d = this.md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
      c = this.md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
      b = this.md5hh(b, c, d, a, x[i + 14], 23, -35309556);
      a = this.md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
      d = this.md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
      c = this.md5hh(c, d, a, b, x[i + 7], 16, -155497632);
      b = this.md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
      a = this.md5hh(a, b, c, d, x[i + 13], 4, 681279174);
      d = this.md5hh(d, a, b, c, x[i], 11, -358537222);
      c = this.md5hh(c, d, a, b, x[i + 3], 16, -722521979);
      b = this.md5hh(b, c, d, a, x[i + 6], 23, 76029189);
      a = this.md5hh(a, b, c, d, x[i + 9], 4, -640364487);
      d = this.md5hh(d, a, b, c, x[i + 12], 11, -421815835);
      c = this.md5hh(c, d, a, b, x[i + 15], 16, 530742520);
      b = this.md5hh(b, c, d, a, x[i + 2], 23, -995338651);
      a = this.md5ii(a, b, c, d, x[i], 6, -198630844);
      d = this.md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
      c = this.md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
      b = this.md5ii(b, c, d, a, x[i + 5], 21, -57434055);
      a = this.md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
      d = this.md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
      c = this.md5ii(c, d, a, b, x[i + 10], 15, -1051523);
      b = this.md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
      a = this.md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
      d = this.md5ii(d, a, b, c, x[i + 15], 10, -30611744);
      c = this.md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
      b = this.md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
      a = this.md5ii(a, b, c, d, x[i + 4], 6, -145523070);
      d = this.md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
      c = this.md5ii(c, d, a, b, x[i + 2], 15, 718787259);
      b = this.md5ii(b, c, d, a, x[i + 9], 21, -343485551);
      a = this.safeAdd(a, olda);
      b = this.safeAdd(b, oldb);
      c = this.safeAdd(c, oldc);
      d = this.safeAdd(d, oldd);
    }

    return [a, b, c, d];
  },
  binl2rstr: function binl2rstr(input) {
    var i;
    var output = '';
    var length32 = input.length * 32;

    for (i = 0; i < length32; i += 8) {
      output += String.fromCharCode(input[i >> 5] >>> i % 32 & 0xff);
    }

    return output;
  },
  rstr2binl: function rstr2binl(input) {
    var i;
    var output = [];
    output[(input.length >> 2) - 1] = undefined;

    for (i = 0; i < output.length; i += 1) {
      output[i] = 0;
    }

    var length8 = input.length * 8;

    for (i = 0; i < length8; i += 8) {
      output[i >> 5] |= (input.charCodeAt(i / 8) & 0xff) << i % 32;
    }

    return output;
  },
  rstrMD5: function rstrMD5(s) {
    return this.binl2rstr(this.binlMD5(this.rstr2binl(s), s.length * 8));
  },
  rstrHMACMD5: function rstrHMACMD5(key, data) {
    var i;
    var bkey = this.rstr2binl(key);
    var ipad = [];
    var opad = [];
    var hash;
    ipad[15] = opad[15] = undefined;

    if (bkey.length > 16) {
      bkey = this.binlMD5(bkey, key.length * 8);
    }

    for (i = 0; i < 16; i += 1) {
      ipad[i] = bkey[i] ^ 0x36363636;
      opad[i] = bkey[i] ^ 0x5c5c5c5c;
    }

    hash = this.binlMD5(ipad.concat(this.rstr2binl(data)), 512 + data.length * 8);
    return this.binl2rstr(this.binlMD5(opad.concat(hash), 640));
  },
  rstr2hex: function rstr2hex(input) {
    var hexTab = '0123456789abcdef';
    var output = '';
    var x;
    var i;

    for (i = 0; i < input.length; i += 1) {
      x = input.charCodeAt(i);
      output += hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f);
    }

    return output;
  },
  str2rstrUTF8: function str2rstrUTF8(input) {
    return unescape(encodeURIComponent(input));
  },
  rawMD5: function rawMD5(s) {
    return this.rstrMD5(this.str2rstrUTF8(s));
  },
  hexMD5: function hexMD5(s) {
    return this.rstr2hex(this.rawMD5(s));
  },
  rawHMACMD5: function rawHMACMD5(k, d) {
    return this.rstrHMACMD5(this.str2rstrUTF8(k), str2rstrUTF8(d));
  },
  hexHMACMD5: function hexHMACMD5(k, d) {
    return this.rstr2hex(this.rawHMACMD5(k, d));
  },
  md5: function md5(string, key, raw) {
    if (!key) {
      if (!raw) {
        return this.hexMD5(string);
      }

      return this.rawMD5(string);
    }

    if (!raw) {
      return this.hexHMACMD5(key, string);
    }

    return this.rawHMACMD5(key, string);
  },
  getSig: function getSig(requestParam, sk, feature, mode) {
    var sig = null;
    var requestArr = [];
    Object.keys(requestParam).sort().forEach(function (key) {
      requestArr.push(key + '=' + requestParam[key]);
    });

    if (feature == 'search') {
      sig = '/ws/place/v1/search?' + requestArr.join('&') + sk;
    }

    if (feature == 'suggest') {
      sig = '/ws/place/v1/suggestion?' + requestArr.join('&') + sk;
    }

    if (feature == 'reverseGeocoder') {
      sig = '/ws/geocoder/v1/?' + requestArr.join('&') + sk;
    }

    if (feature == 'geocoder') {
      sig = '/ws/geocoder/v1/?' + requestArr.join('&') + sk;
    }

    if (feature == 'getCityList') {
      sig = '/ws/district/v1/list?' + requestArr.join('&') + sk;
    }

    if (feature == 'getDistrictByCityId') {
      sig = '/ws/district/v1/getchildren?' + requestArr.join('&') + sk;
    }

    if (feature == 'calculateDistance') {
      sig = '/ws/distance/v1/?' + requestArr.join('&') + sk;
    }

    if (feature == 'direction') {
      sig = '/ws/direction/v1/' + mode + '?' + requestArr.join('&') + sk;
    }

    sig = this.md5(sig);
    return sig;
  },
  location2query: function location2query(data) {
    if (typeof data === 'string') {
      return data;
    }

    var query = '';

    for (var i = 0; i < data.length; i++) {
      var d = data[i];

      if (!!query) {
        query += ';';
      }

      if (d.location) {
        query = query + d.location.lat + ',' + d.location.lng;
      }

      if (d.latitude && d.longitude) {
        query = query + d.latitude + ',' + d.longitude;
      }
    }

    return query;
  },
  rad: function rad(d) {
    return d * Math.PI / 180.0;
  },
  getEndLocation: function getEndLocation(location) {
    var to = location.split(';');
    var endLocation = [];

    for (var i = 0; i < to.length; i++) {
      endLocation.push({
        lat: parseFloat(to[i].split(',')[0]),
        lng: parseFloat(to[i].split(',')[1])
      });
    }

    return endLocation;
  },
  getDistance: function getDistance(latFrom, lngFrom, latTo, lngTo) {
    var radLatFrom = this.rad(latFrom);
    var radLatTo = this.rad(latTo);
    var a = radLatFrom - radLatTo;
    var b = this.rad(lngFrom) - this.rad(lngTo);
    var distance = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(radLatFrom) * Math.cos(radLatTo) * Math.pow(Math.sin(b / 2), 2)));
    distance = distance * EARTH_RADIUS;
    distance = Math.round(distance * 10000) / 10000;
    return parseFloat(distance.toFixed(0));
  },
  getWXLocation: function getWXLocation(success, fail, complete) {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.getLocation({
      type: 'gcj02',
      success: success,
      fail: fail,
      complete: complete
    });
  },
  getLocationParam: function getLocationParam(location) {
    if (typeof location === 'string') {
      var locationArr = location.split(',');

      if (locationArr.length === 2) {
        location = {
          latitude: location.split(',')[0],
          longitude: location.split(',')[1]
        };
      } else {
        location = {};
      }
    }

    return location;
  },
  polyfillParam: function polyfillParam(param) {
    param.success = param.success || function () {};

    param.fail = param.fail || function () {};

    param.complete = param.complete || function () {};
  },
  checkParamKeyEmpty: function checkParamKeyEmpty(param, key) {
    if (!param[key]) {
      var errconf = this.buildErrorConfig(ERROR_CONF.PARAM_ERR, ERROR_CONF.PARAM_ERR_MSG + key + '参数格式有误');
      param.fail(errconf);
      param.complete(errconf);
      return true;
    }

    return false;
  },
  checkKeyword: function checkKeyword(param) {
    return !this.checkParamKeyEmpty(param, 'keyword');
  },
  checkLocation: function checkLocation(param) {
    var location = this.getLocationParam(param.location);

    if (!location || !location.latitude || !location.longitude) {
      var errconf = this.buildErrorConfig(ERROR_CONF.PARAM_ERR, ERROR_CONF.PARAM_ERR_MSG + ' location参数格式有误');
      param.fail(errconf);
      param.complete(errconf);
      return false;
    }

    return true;
  },
  buildErrorConfig: function buildErrorConfig(errCode, errMsg) {
    return {
      status: errCode,
      message: errMsg
    };
  },
  handleData: function handleData(param, data, feature) {
    if (feature == 'search') {
      var searchResult = data.data;
      var searchSimplify = [];

      for (var i = 0; i < searchResult.length; i++) {
        searchSimplify.push({
          id: searchResult[i].id || null,
          title: searchResult[i].title || null,
          latitude: searchResult[i].location && searchResult[i].location.lat || null,
          longitude: searchResult[i].location && searchResult[i].location.lng || null,
          address: searchResult[i].address || null,
          category: searchResult[i].category || null,
          tel: searchResult[i].tel || null,
          adcode: searchResult[i].ad_info && searchResult[i].ad_info.adcode || null,
          city: searchResult[i].ad_info && searchResult[i].ad_info.city || null,
          district: searchResult[i].ad_info && searchResult[i].ad_info.district || null,
          province: searchResult[i].ad_info && searchResult[i].ad_info.province || null
        });
      }

      param.success(data, {
        searchResult: searchResult,
        searchSimplify: searchSimplify
      });
    } else if (feature == 'suggest') {
      var suggestResult = data.data;
      var suggestSimplify = [];

      for (var i = 0; i < suggestResult.length; i++) {
        suggestSimplify.push({
          adcode: suggestResult[i].adcode || null,
          address: suggestResult[i].address || null,
          category: suggestResult[i].category || null,
          city: suggestResult[i].city || null,
          district: suggestResult[i].district || null,
          id: suggestResult[i].id || null,
          latitude: suggestResult[i].location && suggestResult[i].location.lat || null,
          longitude: suggestResult[i].location && suggestResult[i].location.lng || null,
          province: suggestResult[i].province || null,
          title: suggestResult[i].title || null,
          type: suggestResult[i].type || null
        });
      }

      param.success(data, {
        suggestResult: suggestResult,
        suggestSimplify: suggestSimplify
      });
    } else if (feature == 'reverseGeocoder') {
      var reverseGeocoderResult = data.result;
      var reverseGeocoderSimplify = {
        address: reverseGeocoderResult.address || null,
        latitude: reverseGeocoderResult.location && reverseGeocoderResult.location.lat || null,
        longitude: reverseGeocoderResult.location && reverseGeocoderResult.location.lng || null,
        adcode: reverseGeocoderResult.ad_info && reverseGeocoderResult.ad_info.adcode || null,
        city: reverseGeocoderResult.address_component && reverseGeocoderResult.address_component.city || null,
        district: reverseGeocoderResult.address_component && reverseGeocoderResult.address_component.district || null,
        nation: reverseGeocoderResult.address_component && reverseGeocoderResult.address_component.nation || null,
        province: reverseGeocoderResult.address_component && reverseGeocoderResult.address_component.province || null,
        street: reverseGeocoderResult.address_component && reverseGeocoderResult.address_component.street || null,
        street_number: reverseGeocoderResult.address_component && reverseGeocoderResult.address_component.street_number || null,
        recommend: reverseGeocoderResult.formatted_addresses && reverseGeocoderResult.formatted_addresses.recommend || null,
        rough: reverseGeocoderResult.formatted_addresses && reverseGeocoderResult.formatted_addresses.rough || null
      };

      if (reverseGeocoderResult.pois) {
        var pois = reverseGeocoderResult.pois;
        var poisSimplify = [];

        for (var i = 0; i < pois.length; i++) {
          poisSimplify.push({
            id: pois[i].id || null,
            title: pois[i].title || null,
            latitude: pois[i].location && pois[i].location.lat || null,
            longitude: pois[i].location && pois[i].location.lng || null,
            address: pois[i].address || null,
            category: pois[i].category || null,
            adcode: pois[i].ad_info && pois[i].ad_info.adcode || null,
            city: pois[i].ad_info && pois[i].ad_info.city || null,
            district: pois[i].ad_info && pois[i].ad_info.district || null,
            province: pois[i].ad_info && pois[i].ad_info.province || null
          });
        }

        param.success(data, {
          reverseGeocoderResult: reverseGeocoderResult,
          reverseGeocoderSimplify: reverseGeocoderSimplify,
          pois: pois,
          poisSimplify: poisSimplify
        });
      } else {
        param.success(data, {
          reverseGeocoderResult: reverseGeocoderResult,
          reverseGeocoderSimplify: reverseGeocoderSimplify
        });
      }
    } else if (feature == 'geocoder') {
      var geocoderResult = data.result;
      var geocoderSimplify = {
        title: geocoderResult.title || null,
        latitude: geocoderResult.location && geocoderResult.location.lat || null,
        longitude: geocoderResult.location && geocoderResult.location.lng || null,
        adcode: geocoderResult.ad_info && geocoderResult.ad_info.adcode || null,
        province: geocoderResult.address_components && geocoderResult.address_components.province || null,
        city: geocoderResult.address_components && geocoderResult.address_components.city || null,
        district: geocoderResult.address_components && geocoderResult.address_components.district || null,
        street: geocoderResult.address_components && geocoderResult.address_components.street || null,
        street_number: geocoderResult.address_components && geocoderResult.address_components.street_number || null,
        level: geocoderResult.level || null
      };
      param.success(data, {
        geocoderResult: geocoderResult,
        geocoderSimplify: geocoderSimplify
      });
    } else if (feature == 'getCityList') {
      var provinceResult = data.result[0];
      var cityResult = data.result[1];
      var districtResult = data.result[2];
      param.success(data, {
        provinceResult: provinceResult,
        cityResult: cityResult,
        districtResult: districtResult
      });
    } else if (feature == 'getDistrictByCityId') {
      var districtByCity = data.result[0];
      param.success(data, districtByCity);
    } else if (feature == 'calculateDistance') {
      var calculateDistanceResult = data.result.elements;
      var distance = [];

      for (var i = 0; i < calculateDistanceResult.length; i++) {
        distance.push(calculateDistanceResult[i].distance);
      }

      param.success(data, {
        calculateDistanceResult: calculateDistanceResult,
        distance: distance
      });
    } else if (feature == 'direction') {
      var direction = data.result.routes;
      param.success(data, direction);
    } else {
      param.success(data);
    }
  },
  buildWxRequestConfig: function buildWxRequestConfig(param, options, feature) {
    var that = this;
    options.header = {
      'content-type': 'application/json'
    };
    options.method = 'GET';

    options.success = function (res) {
      var data = res.data;

      if (data.status === 0) {
        that.handleData(param, data, feature);
      } else {
        param.fail(data);
      }
    };

    options.fail = function (res) {
      res.statusCode = ERROR_CONF.WX_ERR_CODE;
      param.fail(that.buildErrorConfig(ERROR_CONF.WX_ERR_CODE, res.errMsg));
    };

    options.complete = function (res) {
      var statusCode = +res.statusCode;

      switch (statusCode) {
        case ERROR_CONF.WX_ERR_CODE:
          {
            param.complete(that.buildErrorConfig(ERROR_CONF.WX_ERR_CODE, res.errMsg));
            break;
          }

        case ERROR_CONF.WX_OK_CODE:
          {
            var data = res.data;

            if (data.status === 0) {
              param.complete(data);
            } else {
              param.complete(that.buildErrorConfig(data.status, data.message));
            }

            break;
          }

        default:
          {
            param.complete(that.buildErrorConfig(ERROR_CONF.SYSTEM_ERR, ERROR_CONF.SYSTEM_ERR_MSG));
          }
      }
    };

    return options;
  },
  locationProcess: function locationProcess(param, locationsuccess, locationfail, locationcomplete) {
    var that = this;

    locationfail = locationfail || function (res) {
      res.statusCode = ERROR_CONF.WX_ERR_CODE;
      param.fail(that.buildErrorConfig(ERROR_CONF.WX_ERR_CODE, res.errMsg));
    };

    locationcomplete = locationcomplete || function (res) {
      if (res.statusCode == ERROR_CONF.WX_ERR_CODE) {
        param.complete(that.buildErrorConfig(ERROR_CONF.WX_ERR_CODE, res.errMsg));
      }
    };

    if (!param.location) {
      that.getWXLocation(locationsuccess, locationfail, locationcomplete);
    } else if (that.checkLocation(param)) {
      var location = Utils.getLocationParam(param.location);
      locationsuccess(location);
    }
  }
};

var QQMapWX = /*#__PURE__*/function () {
  function QQMapWX(options) {
    Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, QQMapWX);

    if (!options.key) {
      throw Error('key值不能为空');
    }

    this.key = options.key;
  }

  Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(QQMapWX, [{
    key: "search",
    value: function search(options) {
      var that = this;
      options = options || {};
      Utils.polyfillParam(options);

      if (!Utils.checkKeyword(options)) {
        return;
      }

      var requestParam = {
        keyword: options.keyword,
        orderby: options.orderby || '_distance',
        page_size: options.page_size || 10,
        page_index: options.page_index || 1,
        output: 'json',
        key: that.key
      };

      if (options.address_format) {
        requestParam.address_format = options.address_format;
      }

      if (options.filter) {
        requestParam.filter = options.filter;
      }

      var distance = options.distance || '1000';
      var auto_extend = options.auto_extend || 1;
      var region = null;
      var rectangle = null;

      if (options.region) {
        region = options.region;
      }

      if (options.rectangle) {
        rectangle = options.rectangle;
      }

      var locationsuccess = function locationsuccess(result) {
        if (region && !rectangle) {
          requestParam.boundary = 'region(' + region + ',' + auto_extend + ',' + result.latitude + ',' + result.longitude + ')';

          if (options.sig) {
            requestParam.sig = Utils.getSig(requestParam, options.sig, 'search');
          }
        } else if (rectangle && !region) {
          requestParam.boundary = 'rectangle(' + rectangle + ')';

          if (options.sig) {
            requestParam.sig = Utils.getSig(requestParam, options.sig, 'search');
          }
        } else {
          requestParam.boundary = 'nearby(' + result.latitude + ',' + result.longitude + ',' + distance + ',' + auto_extend + ')';

          if (options.sig) {
            requestParam.sig = Utils.getSig(requestParam, options.sig, 'search');
          }
        }

        _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.request(Utils.buildWxRequestConfig(options, {
          url: URL_SEARCH,
          data: requestParam
        }, 'search'));
      };

      Utils.locationProcess(options, locationsuccess);
    }
  }, {
    key: "getSuggestion",
    value: function getSuggestion(options) {
      var that = this;
      options = options || {};
      Utils.polyfillParam(options);

      if (!Utils.checkKeyword(options)) {
        return;
      }

      var requestParam = {
        keyword: options.keyword,
        region: options.region || '全国',
        region_fix: options.region_fix || 0,
        policy: options.policy || 0,
        page_size: options.page_size || 10,
        page_index: options.page_index || 1,
        get_subpois: options.get_subpois || 0,
        output: 'json',
        key: that.key
      };

      if (options.address_format) {
        requestParam.address_format = options.address_format;
      }

      if (options.filter) {
        requestParam.filter = options.filter;
      }

      if (options.location) {
        var locationsuccess = function locationsuccess(result) {
          requestParam.location = result.latitude + ',' + result.longitude;

          if (options.sig) {
            requestParam.sig = Utils.getSig(requestParam, options.sig, 'suggest');
          }

          _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.request(Utils.buildWxRequestConfig(options, {
            url: URL_SUGGESTION,
            data: requestParam
          }, 'suggest'));
        };

        Utils.locationProcess(options, locationsuccess);
      } else {
        if (options.sig) {
          requestParam.sig = Utils.getSig(requestParam, options.sig, 'suggest');
        }

        _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.request(Utils.buildWxRequestConfig(options, {
          url: URL_SUGGESTION,
          data: requestParam
        }, 'suggest'));
      }
    }
  }, {
    key: "reverseGeocoder",
    value: function reverseGeocoder(options) {
      var that = this;
      options = options || {};
      Utils.polyfillParam(options);
      var requestParam = {
        coord_type: options.coord_type || 5,
        get_poi: options.get_poi || 0,
        output: 'json',
        key: that.key
      };

      if (options.poi_options) {
        requestParam.poi_options = options.poi_options;
      }

      var locationsuccess = function locationsuccess(result) {
        requestParam.location = result.latitude + ',' + result.longitude;

        if (options.sig) {
          requestParam.sig = Utils.getSig(requestParam, options.sig, 'reverseGeocoder');
        }

        _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.request(Utils.buildWxRequestConfig(options, {
          url: URL_GET_GEOCODER,
          data: requestParam
        }, 'reverseGeocoder'));
      };

      Utils.locationProcess(options, locationsuccess);
    }
  }, {
    key: "geocoder",
    value: function geocoder(options) {
      var that = this;
      options = options || {};
      Utils.polyfillParam(options);

      if (Utils.checkParamKeyEmpty(options, 'address')) {
        return;
      }

      var requestParam = {
        address: options.address,
        output: 'json',
        key: that.key
      };

      if (options.region) {
        requestParam.region = options.region;
      }

      if (options.sig) {
        requestParam.sig = Utils.getSig(requestParam, options.sig, 'geocoder');
      }

      _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.request(Utils.buildWxRequestConfig(options, {
        url: URL_GET_GEOCODER,
        data: requestParam
      }, 'geocoder'));
    }
  }, {
    key: "getCityList",
    value: function getCityList(options) {
      var that = this;
      options = options || {};
      Utils.polyfillParam(options);
      var requestParam = {
        output: 'json',
        key: that.key
      };

      if (options.sig) {
        requestParam.sig = Utils.getSig(requestParam, options.sig, 'getCityList');
      }

      _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.request(Utils.buildWxRequestConfig(options, {
        url: URL_CITY_LIST,
        data: requestParam
      }, 'getCityList'));
    }
  }, {
    key: "getDistrictByCityId",
    value: function getDistrictByCityId(options) {
      var that = this;
      options = options || {};
      Utils.polyfillParam(options);

      if (Utils.checkParamKeyEmpty(options, 'id')) {
        return;
      }

      var requestParam = {
        id: options.id || '',
        output: 'json',
        key: that.key
      };

      if (options.sig) {
        requestParam.sig = Utils.getSig(requestParam, options.sig, 'getDistrictByCityId');
      }

      _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.request(Utils.buildWxRequestConfig(options, {
        url: URL_AREA_LIST,
        data: requestParam
      }, 'getDistrictByCityId'));
    }
  }, {
    key: "calculateDistance",
    value: function calculateDistance(options) {
      var that = this;
      options = options || {};
      Utils.polyfillParam(options);

      if (Utils.checkParamKeyEmpty(options, 'to')) {
        return;
      }

      var requestParam = {
        mode: options.mode || 'walking',
        to: Utils.location2query(options.to),
        output: 'json',
        key: that.key
      };

      if (options.from) {
        options.location = options.from;
      }

      if (requestParam.mode == 'straight') {
        var locationsuccess = function locationsuccess(result) {
          var locationTo = Utils.getEndLocation(requestParam.to);
          var data = {
            message: 'query ok',
            result: {
              elements: []
            },
            status: 0
          };

          for (var i = 0; i < locationTo.length; i++) {
            data.result.elements.push({
              distance: Utils.getDistance(result.latitude, result.longitude, locationTo[i].lat, locationTo[i].lng),
              duration: 0,
              from: {
                lat: result.latitude,
                lng: result.longitude
              },
              to: {
                lat: locationTo[i].lat,
                lng: locationTo[i].lng
              }
            });
          }

          var calculateResult = data.result.elements;
          var distanceResult = [];

          for (var i = 0; i < calculateResult.length; i++) {
            distanceResult.push(calculateResult[i].distance);
          }

          return options.success(data, {
            calculateResult: calculateResult,
            distanceResult: distanceResult
          });
        };

        Utils.locationProcess(options, locationsuccess);
      } else {
        var locationsuccess = function locationsuccess(result) {
          requestParam.from = result.latitude + ',' + result.longitude;

          if (options.sig) {
            requestParam.sig = Utils.getSig(requestParam, options.sig, 'calculateDistance');
          }

          _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.request(Utils.buildWxRequestConfig(options, {
            url: URL_DISTANCE,
            data: requestParam
          }, 'calculateDistance'));
        };

        Utils.locationProcess(options, locationsuccess);
      }
    }
  }, {
    key: "direction",
    value: function direction(options) {
      var that = this;
      options = options || {};
      Utils.polyfillParam(options);

      if (Utils.checkParamKeyEmpty(options, 'to')) {
        return;
      }

      var requestParam = {
        output: 'json',
        key: that.key
      };

      if (typeof options.to === 'string') {
        requestParam.to = options.to;
      } else {
        requestParam.to = options.to.latitude + ',' + options.to.longitude;
      }

      var SET_URL_DIRECTION = null;
      options.mode = options.mode || MODE.driving;
      SET_URL_DIRECTION = URL_DIRECTION + options.mode;

      if (options.from) {
        options.location = options.from;
      }

      if (options.mode == MODE.driving) {
        if (options.from_poi) {
          requestParam.from_poi = options.from_poi;
        }

        if (options.heading) {
          requestParam.heading = options.heading;
        }

        if (options.speed) {
          requestParam.speed = options.speed;
        }

        if (options.accuracy) {
          requestParam.accuracy = options.accuracy;
        }

        if (options.road_type) {
          requestParam.road_type = options.road_type;
        }

        if (options.to_poi) {
          requestParam.to_poi = options.to_poi;
        }

        if (options.from_track) {
          requestParam.from_track = options.from_track;
        }

        if (options.waypoints) {
          requestParam.waypoints = options.waypoints;
        }

        if (options.policy) {
          requestParam.policy = options.policy;
        }

        if (options.plate_number) {
          requestParam.plate_number = options.plate_number;
        }
      }

      if (options.mode == MODE.transit) {
        if (options.departure_time) {
          requestParam.departure_time = options.departure_time;
        }

        if (options.policy) {
          requestParam.policy = options.policy;
        }
      }

      var locationsuccess = function locationsuccess(result) {
        requestParam.from = result.latitude + ',' + result.longitude;

        if (options.sig) {
          requestParam.sig = Utils.getSig(requestParam, options.sig, 'direction', options.mode);
        }

        _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.request(Utils.buildWxRequestConfig(options, {
          url: SET_URL_DIRECTION,
          data: requestParam
        }, 'direction'));
      };

      Utils.locationProcess(options, locationsuccess);
    }
  }]);

  return QQMapWX;
}();

/* unused harmony default export */ var _unused_webpack_default_export = (QQMapWX);

/***/ })

},[["./src/pages/detail/detail.js","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=detail.js.map