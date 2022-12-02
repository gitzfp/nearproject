(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/apply/apply"],{

/***/ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/apply/apply.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./src/pages/apply/apply.js ***!
  \***************************************************************************************************/
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
/* harmony import */ var _apply_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./apply.scss */ "./src/pages/apply/apply.scss");
/* harmony import */ var _apply_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_apply_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/util */ "./src/pages/utils/util.js");
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_utils_util__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);





var _dec, _class;








/**
 * 报名
 *
 * @author: Eysonyou
 * @create: 2019-05-14
 */



var app = _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.getApp().$app;

var _C = (_dec = _tarojs_with_weapp__WEBPACK_IMPORTED_MODULE_7___default()({
  /**
   * 页面的初始数据
   */
  data: {
    // 解决textarea组件在表单提交时无法获取内容的BUG
    resultRows: [],
    todayCount: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function onLoad(options) {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.setNavigationBarTitle({
      // title: "公益排行",
      title: "我的邀请"
    }); // 当前版本不支持小程序云函数

    if (!_tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.cloud) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.showModal({
        title: "提示",
        content: "微信版本过低，请升级微信"
      });
      return;
    }
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function onShow() {
    var _this = this;

    var thar = this; // 全局显示loading

    _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.showLoading({
      title: "加载中..."
    }); // 调用云函数

    _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.cloud.callFunction({
      name: "queryUser",
      data: {
        env: app.globalData.env
      }
    }).then(function (res) {
      // console.log(res,"查询用户列表成功")
      var rows = res.result ? res.result : [];
      var result1 = [];
      var result2 = [];
      var today = 0;
      rows.map(function (item) {
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
          ++today;
        }
      }); // rows = [...result1, ...result2];

      rows.sort(_this.compareDate("_updateTime")); // 异步回调并更新数据

      _this.setData({
        resultRows: rows,
        todayCount: today,
        isEmpty: rows.length > 0 ? false : true
      }); // 隐藏loading


      _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.hideLoading();
    }).catch(function (err) {
      console.log(err, "call INDEX func err");
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.hideLoading();
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.showModal({
        title: "提示",
        content: "系统异常，请稍后再试"
      });
    });
  },
  compareDate: function compareDate(property) {
    return function (a, b) {
      var value1 = a[property];
      var value2 = b[property];
      return value2 - value1;
    };
  },
  isToday: function isToday(str) {
    if (new Date(str).toDateString() === new Date().toDateString()) {
      //今天
      return true;
    } else if (new Date(str) < new Date()) {
      //之前
      return false;
    }
  },
  compare: function compare(property) {
    return function (a, b) {
      var value1 = a[property];
      var value2 = b[property];
      return value1 - value2;
    };
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function onHide() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function onUnload() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function onPullDownRefresh() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function onReachBottom() {}
}), _dec(_class = /*#__PURE__*/function (_React$Component) {
  Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_C, _React$Component);

  var _super = Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_C);

  function _C() {
    Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, _C);

    return _super.apply(this, arguments);
  }

  Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_C, [{
    key: "render",
    value: function render() {
      var _this$data = this.data,
          resultRows = _this$data.resultRows,
          todayCount = _this$data.todayCount;
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "n"], {
        className: "page",
        style: {
          height: "100%"
        },
        children: resultRows.length === 0 ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "n"], {
          style: {
            backgroundColor: "#FFFFFF",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          },
          children: "\u6682\u65E0\u6570\u636E"
        }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "n"], {
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "n"], {
            style: {
              padding: "10px"
            },
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "n"], {
              className: "weui-media-box__title",
              children: ["\u603B\u9080\u8BF7\u4EBA\u6570\uFF1A", resultRows.length, "\u4EBA"]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "n"], {
              className: "weui-media-box__desc ui-font-red",
              style: {
                marginTop: "10px"
              },
              children: ["\u4ECA\u65E5\u6D3B\u8DC3\uFF1A", todayCount, "\u4EBA"]
            })]
          }), resultRows.map(function (item, index) {
            return item.nickName && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "n"], {
              className: "ui-list-item",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "n"], {
                style: {
                  display: "flex"
                },
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Image */ "e"], {
                  className: "weui-uploader__img",
                  src: item.avatarUrl,
                  mode: "aspectFill"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "n"], {
                  className: "weui-media-box__title",
                  children: item.nickName
                })]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "n"], {
                className: "weui-media-box__desc",
                children: [item.score ? "\u8D21\u732E".concat(item.score, "\u4E2A\u516C\u76CA\u79EF\u5206") : "\u6682\u672A\u8D21\u732E\u516C\u76CA\u79EF\u5206", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "n"], {
                  children: Object(_utils_util__WEBPACK_IMPORTED_MODULE_9__["formatTime1"])(new Date(item._updateTime))
                })]
              })]
            }, "_id");
          })]
        })
      });
    }
  }]);

  return _C;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component)) || _class);

/* harmony default export */ __webpack_exports__["a"] = (_C);

/***/ }),

/***/ "./src/pages/apply/apply.js":
/*!**********************************!*\
  !*** ./src/pages/apply/apply.js ***!
  \**********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_apply_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./apply.js */ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/apply/apply.js");


var config = {"usingComponents":{}};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_apply_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/apply/apply', {root:{cn:[]}}, config || {}))



/***/ }),

/***/ "./src/pages/apply/apply.scss":
/*!************************************!*\
  !*** ./src/pages/apply/apply.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/apply/apply.js","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=apply.js.map