(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/index/index"],{

/***/ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/index/index.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./src/pages/index/index.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Index; });
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
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index.scss */ "./src/pages/index/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);





var _dec, _class;






/**
 * 小程序首页
 *
 * @author: Harlan
 * @create: 2019-05-14
 */



var app = _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.getApp().$app;
var Index = (_dec = _tarojs_with_weapp__WEBPACK_IMPORTED_MODULE_7___default()({
  /**
   * 定义数据对象
   */
  data: {
    // 是否登录
    isLogin: _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.getStorageSync("user"),
    //app.globalData.isLogin,
    // 默认为空数据
    isEmpty: true,
    // 我的记录数据集
    resultRows: [],
    openId: "",
    nickName: "",
    score: 0,
    userInfo: {}
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function onShow() {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.setNavigationBarTitle({
      title: "我的"
    }); // 当前版本不支持小程序云函数

    if (!_tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.cloud) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.showModal({
        title: "提示",
        content: "微信版本过低，请升级微信"
      });
      return;
    } // 查询授权


    var thar = this;
    this.setData({
      isLogin: _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.getStorageSync("user")
    }, function () {
      if (!thar.data.isLogin) {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.showModal({
          title: "您还未登录",
          content: "登录,浏览更多",
          showCancel: false,
          success: function success(res) {
            thar.getUserProfile();
            thar.query();
          }
        });
      } else {
        thar.query();
        thar.bindUser(JSON.parse(thar.data.isLogin));
      }
    });
  },
  bindgetUserInfo: function bindgetUserInfo() {
    var _this = this;

    _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.getUserInfo({}).then(function (res) {
      _this.bindUser(res.userInfo);

      _this.setData({
        isLogin: res.userInfo
      });
    });
  },
  bindUser: function bindUser(userInfo) {
    var _this2 = this;

    var pages = _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.getCurrentPages();
    var page = pages[pages.length - 1];
    var options = page.options; // 调用云函数

    userInfo.env = app.globalData.env;
    userInfo.pOpenId = options.pOpenId;
    userInfo.pNickName = options.pNickName ? decodeURI(options.pNickName) : options.pNickName;
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.cloud.callFunction({
      name: "user",
      data: userInfo
    }).then(function (res) {
      userInfo.level = res.result.level;

      _this2.setData({
        openId: userInfo.openId,
        nickName: userInfo.nickName,
        score: userInfo.score,
        isLogin: userInfo
      });

      _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.setStorageSync("user", JSON.stringify(res.result)); // 隐藏loading

      _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.hideLoading();
    }).catch(function (err) {
      console.log(err, "user add func err");
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.hideLoading();
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.showModal({
        title: "提示",
        content: "系统异常，请稍后再试"
      });
    });
  },
  rad: function rad(d) {
    return d * Math.PI / 180.0;
  },

  /*
   @param lng1 经度1
  * @param lat1 纬度1
  * @param lng2 经度2
  * @param lat2 纬度2
  * @return 距离（米）
  */
  getDistanceFromLatLonInKm: function getDistanceFromLatLonInKm(lat1, lng1, lat2, lng2) {
    var radLat1 = lat1 * Math.PI / 180.0;
    var radLat2 = lat2 * Math.PI / 180.0;
    var a = radLat1 - radLat2;
    var b = lng1 * Math.PI / 180.0 - lng2 * Math.PI / 180.0;
    var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));
    s = s * 6378.137;
    s = Math.round(s * 10000) / 10;
    s = s / 1000;
    return s.toFixed(2);
  },
  query: function query() {
    var _this3 = this; // 全局显示loading


    _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.showLoading({
      title: "加载中..."
    }); // 调用云函数

    _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.cloud.callFunction({
      name: "index",
      data: {
        env: app.globalData.env
      }
    }).then(function (res) {
      var rows = res.result.data ? res.result.data : [];
      rows.map(function (item) {
        item.files = item.fileID.split(",");
        item.distance = _this3.getDistanceFromLatLonInKm(app.globalData.latitude, app.globalData.longitude, item.latitude, item.longitude);
      }); // 异步回调并更新数据

      _this3.setData({
        openId: res.result.openid,
        resultRows: rows,
        isEmpty: rows.length > 0 ? false : true
      }); // console.log(this.data);
      // 隐藏loading


      _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.hideLoading();
    }).catch(function (err) {
      console.log(err);
      console.log("call INDEX func err");
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.hideLoading();
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.showModal({
        title: "提示",
        content: "系统异常，请稍后再试"
      });
    });
  },
  goDetail: function goDetail(e, item, update) {
    e.stopPropagation();
    console.log(update, "zhegeshi ture ba ");
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.navigateTo({
      url: "/pages/detail/detail?id=" + item._id + "&status=" + item.status + "&sceneIndex=" + item.sceneIndex + "&openId=" + this.data.openId + "&nickName=" + this.data.nickName + "&update=" + update
    });
  }
}), _dec(_class = /*#__PURE__*/function (_React$Component) {
  Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Index, _React$Component);

  var _super = Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Index);

  function Index() {
    Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Index);

    return _super.apply(this, arguments);
  }

  Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Index, [{
    key: "getUserProfile",
    value: function getUserProfile() {
      var _this4 = this;

      _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.getUserProfile({
        desc: "查询用户信息"
      }).then(function (res) {
        _this4.bindUser(res.userInfo);
      });
    }
  }, {
    key: "onShareAppMessage",
    value: function onShareAppMessage() {
      var pages = _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.getCurrentPages();
      var page = pages[pages.length - 1];
      return {
        title: "\u95F2\u7F6E\uFF0C\u8F6C\u7ED9\u9644\u8FD1\u9700\u8981\u7684\u4EBA",
        path: "/".concat(page.route, "?pOpenId=").concat(this.data.openId, "&pNickName=").concat(this.data.nickName)
      };
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
    key: "goMyInvite",
    value: function goMyInvite() {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.navigateTo({
        url: "/pages/apply/apply"
      });
    }
  }, {
    key: "goBanner",
    value: function goBanner() {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.navigateTo({
        url: "/pages/banner/banner"
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var _this$data = this.data,
          isLogin = _this$data.isLogin,
          resultRows = _this$data.resultRows,
          score = _this$data.score;
      console.log(isLogin, "等级");
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Block */ "a"], {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "n"], {
          className: "page",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "n"], {
            className: "weui-panel",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "n"], {
              style: "display:flex;height: 90px; align-items:center; padding-left: 10px",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "n"], {
                style: "width:60px;height:60px",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* OpenData */ "h"], {
                  type: "userAvatarUrl"
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "n"], {
                style: "margin-left:15px;display:flex;flex-direction:column;",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* OpenData */ "h"], {
                  type: "userNickName"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "l"], {
                  children: ["\u516C\u76CA\u79EF\u5206\uFF1A", score]
                })]
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Button */ "b"], {
              onclick: this.goMyInvite,
              className: "",
              children: "\u6211\u7684\u9080\u8BF7"
            }), isLogin.level && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Button */ "b"], {
              onclick: this.goBanner,
              style: {
                marginTop: 10,
                marginBottom: 10
              },
              children: "\u521B\u5EFA\u6D3B\u52A8\u56FE"
            }), resultRows.length == 0 && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "n"], {
              className: "weui-panel",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "n"], {
                className: "weui-loadmore weui-loadmore_line",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "n"], {
                  className: "weui-loadmore__tips weui-loadmore__tips_in-line",
                  children: "\u6682\u65E0\u53D1\u5E03"
                })
              })
            }), isLogin && resultRows.map(function (item, index) {
              return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "n"], {
                className: "ui-list-item",
                onClick: function onClick(e) {
                  return _this5.goDetail(e, item);
                },
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "n"], {
                  className: "weui-media-box weui-media-box_appmsg",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "n"], {
                    className: "weui-media-box__title",
                    children: item.title
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "n"], {
                  className: "weui-media-box weui-media-box_appmsg",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "n"], {
                    className: "weui-uploader__files",
                    id: "uploaderFiles",
                    children: item.files && item.files.map(function (item1, index) {
                      if (index < 3) return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Block */ "a"], {
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "n"], {
                          className: "weui-uploader__file",
                          onClick: function onClick(e) {
                            return _this5.previewImage(e, item.files);
                          },
                          id: item1,
                          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Image */ "e"], {
                            className: "weui-uploader__img",
                            src: item1,
                            mode: "aspectFill"
                          })
                        })
                      }, index);
                    })
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "n"], {
                  className: "weui-media-box weui-media-box_appmsg",
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "n"], {
                    className: "weui-media-box__desc",
                    children: item.content
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "n"], {
                    className: "ui-content",
                    onClick: function onClick(e) {
                      return _this5.goDetail(e, item, true);
                    },
                    children: "\u4FEE\u6539"
                  })]
                })]
              }, "_id");
            })]
          })
        })
      });
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component)) || _class);
 // export default Nearby

/***/ }),

/***/ "./src/pages/index/index.js":
/*!**********************************!*\
  !*** ./src/pages/index/index.js ***!
  \**********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./index.js */ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/index/index.js");


var config = {"usingComponents":{}};

_node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_index_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].enableShareAppMessage = true
var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_index_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/index/index', {root:{cn:[]}}, config || {}))



/***/ }),

/***/ "./src/pages/index/index.scss":
/*!************************************!*\
  !*** ./src/pages/index/index.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/index/index.js","runtime","taro","vendors"]]]);
//# sourceMappingURL=index.js.map