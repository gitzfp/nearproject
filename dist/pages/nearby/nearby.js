(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/nearby/nearby"],{

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _asyncToGenerator; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js ***!
  \******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectSpread2; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime-module.js");


/***/ }),

/***/ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/nearby/nearby.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./src/pages/nearby/nearby.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nearby; });
/* harmony import */ var _Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_zfp_Documents_nearproject_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_zfp_Documents_nearproject_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _tarojs_with_weapp__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @tarojs/with-weapp */ "./node_modules/@tarojs/with-weapp/index.js");
/* harmony import */ var _tarojs_with_weapp__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_tarojs_with_weapp__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_Swiper_MySwiper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/Swiper/MySwiper */ "./src/components/Swiper/MySwiper.js");
/* harmony import */ var _nearby_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./nearby.scss */ "./src/pages/nearby/nearby.scss");
/* harmony import */ var _nearby_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_nearby_scss__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../utils/util */ "./src/pages/utils/util.js");
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_utils_util__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var taro_listview__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! taro-listview */ "./node_modules/taro-listview/dist/index.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__);










var _dec, _class;









/**
 * 小程序首页
 *
 * @author: Eysonyou
 * @create: 2019-05-14
 */



var app = _tarojs_taro__WEBPACK_IMPORTED_MODULE_11___default.a.getApp().$app;
var Nearby = (_dec = _tarojs_with_weapp__WEBPACK_IMPORTED_MODULE_12___default()({
  /**
   * 定义数据对象
   */
  data: {
    // 是否登录
    isLogin: _tarojs_taro__WEBPACK_IMPORTED_MODULE_11___default.a.getStorageSync("user"),
    //app.globalData.isLogin,
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
    isEmpty: true
  },

  /**
   * 小程序启动时执行
   */
  onLoad: function onLoad(_options) {
    console.log("on load");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function onShow() {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_11___default.a.setNavigationBarTitle({
      title: "附近闲置"
    }); // 当前版本不支持小程序云函数

    if (!_tarojs_taro__WEBPACK_IMPORTED_MODULE_11___default.a.cloud) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_11___default.a.showModal({
        title: "提示",
        content: "微信版本过低，请升级微信"
      });
      return;
    }

    var thar = this;
    this.setData({
      isLogin: _tarojs_taro__WEBPACK_IMPORTED_MODULE_11___default.a.getStorageSync("user")
    }, function () {
      if (!thar.data.isLogin) {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_11___default.a.showModal({
          title: "您还未登录",
          content: "登录,浏览更多",
          showCancel: false,
          success: function success(res) {
            thar.getUserProfile();
            thar.query();
            thar.getBanner();
          }
        });
      } else {
        thar.query();
        thar.getBanner();
        thar.bindUser(JSON.parse(thar.data.isLogin));
      }
    });
  },
  getBanner: function getBanner() {
    var that = this;
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_11___default.a.cloud.callFunction({
      name: "banner",
      data: {
        env: app.globalData.env
      }
    }).then(function (res) {
      that.setData({
        banners: res.result.data
      });
    }).catch(function (_err) {});
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function onPullDownRefresh() {
    this.query(0);
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function onReachBottom() {
    this.query(this.data.page + 1);
  },
  bindUser: function bindUser(userInfo) {
    var _this = this;

    var pages = _tarojs_taro__WEBPACK_IMPORTED_MODULE_11___default.a.getCurrentPages();
    var page = pages[pages.length - 1];
    var options = page.options;
    console.log(options, "首页");
    console.log(app.globalData.env, "首页1"); // 调用云函数

    userInfo.env = app.globalData.env;
    userInfo.pOpenId = options.pOpenId;
    userInfo.pNickName = options.pNickName ? decodeURI(options.pNickName) : options.pNickName;
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_11___default.a.cloud.callFunction({
      name: "user",
      data: userInfo
    }).then(function (res) {
      console.log(res.result, "user add func success");

      _this.setData({
        openId: res.result.openId,
        nickName: userInfo.nickName,
        isLogin: true
      });

      _tarojs_taro__WEBPACK_IMPORTED_MODULE_11___default.a.setStorageSync("user", JSON.stringify(res.result)); // 隐藏loading

      _tarojs_taro__WEBPACK_IMPORTED_MODULE_11___default.a.hideLoading();
    }).catch(function (err) {
      console.log(err, "user add func err");
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_11___default.a.hideLoading();
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_11___default.a.showModal({
        title: "提示",
        content: "系统异常，请稍后再试"
      });
    });
  },
  queryPage: function () {
    var _queryPage = Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])( /*#__PURE__*/_Users_zfp_Documents_nearproject_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee() {
      var searchValue,
          page,
          pageSize,
          res,
          rows,
          _args = arguments;
      return _Users_zfp_Documents_nearproject_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              searchValue = _args.length > 0 && _args[0] !== undefined ? _args[0] : "";
              page = _args.length > 1 && _args[1] !== undefined ? _args[1] : 0;
              pageSize = _args.length > 2 && _args[2] !== undefined ? _args[2] : 10; // 全局显示loading

              if (page == 0) {
                _tarojs_taro__WEBPACK_IMPORTED_MODULE_11___default.a.showLoading({
                  title: "加载中..."
                });
              }

              console.log("参数", {
                env: app.globalData.env,
                search: searchValue,
                page: page,
                pageSize: pageSize
              });
              _context.prev = 5;
              _context.next = 8;
              return _tarojs_taro__WEBPACK_IMPORTED_MODULE_11___default.a.cloud.callFunction({
                name: "nearby",
                data: {
                  env: app.globalData.env,
                  search: searchValue,
                  page: page,
                  pageSize: pageSize,
                  longitude: app.globalData.longitude,
                  latitude: app.globalData.latitude
                }
              });

            case 8:
              res = _context.sent;
              rows = res.result.data || [];

              if (page != 0) {
                rows = [].concat(Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(this.data.resultRows), Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(res.result.data));
              }

              rows.map(function (item) {
                item.files = item.fileID.split(",");

                if (item.distance) {
                  item.distance = parseFloat(item.distance).toFixed(2);
                }
              }); // 异步回调并更新数据

              this.setData({
                openId: res.result.openid,
                resultRows: rows,
                isEmpty: rows.length > 0 ? false : true,
                page: page
              }); // 隐藏loading

              _tarojs_taro__WEBPACK_IMPORTED_MODULE_11___default.a.hideLoading();
              _context.next = 20;
              break;

            case 16:
              _context.prev = 16;
              _context.t0 = _context["catch"](5);
              console.log(_context.t0, "==error====");
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_11___default.a.hideLoading();

            case 20:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[5, 16]]);
    }));

    function queryPage() {
      return _queryPage.apply(this, arguments);
    }

    return queryPage;
  }(),
  query: function query(page) {
    if (app.globalData.longitude) {
      this.queryPage(this.data.searchValue, page);
      return;
    }

    var that = this;
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_11___default.a.getLocation({
      type: "wgs84",
      success: function success(res) {
        app.globalData.latitude = res.latitude;
        app.globalData.longitude = res.longitude;
        that.queryPage(that.data.searchValue, page);
      }
    });
  },
  goDetail: function goDetail(item) {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_11___default.a.navigateTo({
      url: "/pages/detail/detail?id=" + item._id + "&status=" + item.status + "&sceneIndex=" + item.sceneIndex + "&openId=" + this.data.openId + "&nickName=" + this.data.nickName
    });
  },
  compare: function compare(property) {
    return function (a, b) {
      var value1 = a[property];
      var value2 = b[property];
      return value1 - value2;
    };
  }
}), _dec(_class = /*#__PURE__*/function (_React$Component) {
  Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Nearby, _React$Component);

  var _super = Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Nearby);

  function Nearby() {
    var _this2;

    Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Nearby);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this2 = _super.call.apply(_super, [this].concat(args));

    Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this2), "pullDownRefresh", /*#__PURE__*/Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])( /*#__PURE__*/_Users_zfp_Documents_nearproject_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee2() {
      var pageIndex;
      return _Users_zfp_Documents_nearproject_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              pageIndex = 0;

              _this2.query(pageIndex);

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));

    Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this2), "onScrollToLower", /*#__PURE__*/function () {
      var _ref2 = Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])( /*#__PURE__*/_Users_zfp_Documents_nearproject_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee3(fn) {
        return _Users_zfp_Documents_nearproject_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this2.query(_this2.data.page + 1);

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());

    Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this2), "refList", {});

    Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this2), "insRef", function (node) {
      _this2.refList = node;
    });

    Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this2), "renderEmpty", function () {
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "n"], {
        style: {
          flex: 1,
          backgroundColor: "red"
        },
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])(Text, {
          children: "\u52A0\u8F7D\u4E2D"
        })
      });
    });

    return _this2;
  }

  Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Nearby, [{
    key: "getUserProfile",
    value: function getUserProfile() {
      var _this3 = this;

      _tarojs_taro__WEBPACK_IMPORTED_MODULE_11___default.a.getUserProfile({
        desc: "查询用户信息"
      }).then(function (res) {
        _this3.bindUser(res.userInfo);
      });
    }
  }, {
    key: "onShareAppMessage",
    value: function onShareAppMessage() {
      var pages = _tarojs_taro__WEBPACK_IMPORTED_MODULE_11___default.a.getCurrentPages();
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
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_11___default.a.previewImage({
        current: e.currentTarget.id,
        // 当前显示图片的http链接
        urls: files // 需要预览的图片http链接列表

      });
    }
  }, {
    key: "handleInputChange",
    value: function handleInputChange(e) {
      this.setData({
        searchValue: e.target.value
      });
    }
  }, {
    key: "getPhoneNumber",
    value: function getPhoneNumber(e) {
      console.log(JSON.stringify(e));
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_11___default.a.cloud.callFunction({
        name: "openapi",
        data: {
          evn: app.globalData.env,
          action: "getPhone",
          id: e.detail.cloudID
        }
      }).then(function (res) {
        console.log("手机号码: ", res);
      });
    }
  }, {
    key: "handleSearch",
    value: function handleSearch() {
      console.log("handle search");
      this.query(0);
      this.setData({
        searchValue: ""
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$data = this.data,
          banners = _this$data.banners,
          isEmpty = _this$data.isEmpty,
          resultRows = _this$data.resultRows,
          isLoaded = _this$data.isLoaded,
          hasMore = _this$data.hasMore,
          error = _this$data.error;
      var banner = [{
        image_src: __webpack_require__(/*! ../../image/banner.png */ "./src/image/banner.png")
      }];

      if (banners.length > 0) {
        banner = [];
        banners.map(function (item) {
          ;
          item.image_src = item.fileID, item.distance = Object(_utils_util__WEBPACK_IMPORTED_MODULE_15__["getDistanceFromLatLonInKm"])(app.globalData.latitude, app.globalData.longitude, item.latitude, item.longitude);
        });
        banners.sort(this.compare("distance"));
        banner = [banners[0]];
      }

      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Block */ "a"], {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "n"], {
          className: "skeleton lazy-view",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxs"])(taro_listview__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"], {
            lazy: true,
            className: "weui-panel",
            ref: function ref(node) {
              return _this4.insRef(node);
            },
            isLoaded: isLoaded,
            isError: error,
            hasMore: hasMore,
            style: {
              height: "100vh"
            },
            isEmpty: true,
            onPullDownRefresh: this.pullDownRefresh,
            onScrollToLower: this.onScrollToLower,
            lazyStorage: "lazyViewBlock",
            footerLoadingText: "\u52A0\u8F7D\u4E2D\uFF0C\u8BF7\u7A0D\u540E...",
            launch: {
              launchError: false,
              launchEmpty: true,
              launchFooterLoaded: false,
              launchFooterLoading: false
            },
            renderEmpty: function renderEmpty() {
              return _this4.renderEmpty();
            },
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "n"], {
              className: "search",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Input */ "f"], {
                onInput: function onInput(e) {
                  return _this4.handleInputChange(e);
                },
                className: "search-input",
                type: "search",
                placeholder: "\u8BF7\u8F93\u5165\u5546\u54C1\u540D\u79F0"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "n"], {
                className: "search-button",
                onClick: function onClick() {
                  return _this4.handleSearch();
                },
                children: "\u641C\u7D22"
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])(_components_Swiper_MySwiper__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"], {
              banner: banner
            }), resultRows.map(function (item, _index) {
              return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "n"], {
                className: "ui-list-item",
                onClick: function onClick() {
                  return _this4.goDetail(item);
                },
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "n"], {
                  className: "weui-uploader__files",
                  id: "uploaderFiles",
                  children: item.files && item.files.map(function (item1, index) {
                    if (index < 1) return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Block */ "a"], {
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "n"], {
                        className: "weui-uploader__file" // onClick={(e) =>
                        //   this.previewImage(e, item.files)
                        // }
                        ,
                        id: item1,
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Image */ "e"], {
                          className: "weui-uploader__img",
                          src: item1,
                          mode: "aspectFill"
                        })
                      })
                    }, index);
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "n"], {
                  className: "weui-media-box__title",
                  children: item.title
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "n"], {
                  className: "weui-media-box weui-media-box_appmsg",
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "n"], {
                    className: "ui-font-red",
                    children: ["\uFFE5", item.amount]
                  }), item.distance < 1000 && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "n"], {
                    className: "weui-media-box__desc",
                    children: ["\u8DDD\u6211", item.distance, "km"]
                  })]
                })]
              }, "_id");
            })]
          })
        })
      });
    }
  }]);

  return Nearby;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component)) || _class);
 // export default Nearby

/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime-module.js":
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ "./node_modules/regenerator-runtime/runtime.js");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),

/***/ "./node_modules/taro-listview/dist/index.esm.js":
/*!******************************************************!*\
  !*** ./node_modules/taro-listview/dist/index.esm.js ***!
  \******************************************************/
/*! exports provided: default, LazyBlock, ListView, Skeleton */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(document, requestAnimationFrame) {/* unused harmony export LazyBlock */
/* unused harmony export ListView */
/* unused harmony export Skeleton */
/* harmony import */ var _Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_zfp_Documents_nearproject_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_zfp_Documents_nearproject_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");













function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') {
    return;
  }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".index_skeletonBg__10l-A,\n.index_skeletonStrip__1bzMP {\n  background: linear-gradient(90deg, #f2f2f2 25%, #e6e6e6 37%, #f2f2f2 63%);\n  background-size: 400% 100%;\n  animation: index_ant-skeleton-loading__3noPs 1.4s ease infinite;\n  border-radius: 6px; }\n\n@keyframes index_ant-skeleton-loading__3noPs {\n  0% {\n    background-position: 100% 50%; }\n  100% {\n    background-position: 0 50%; } }\n";
styleInject(css_248z);

var Skeleton = /*#__PURE__*/function (_React$PureComponent) {
  Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Skeleton, _React$PureComponent);

  var _super = Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Skeleton);

  function Skeleton() {
    var _this;

    Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, Skeleton);

    _this = _super.apply(this, arguments);
    _this.state = {
      parentRect: {},
      bg: [],
      list: [],
      listRadius: []
    };
    return _this;
  }

  Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Skeleton, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (_tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.getEnv() === 'WEAPP') {
        this.weappSkl();
      } else {
        this.h5Skl();
      }
    }
  }, {
    key: "h5Skl",
    value: function h5Skl() {
      var _this2 = this;

      var selObj = {
        bg: '.skeleton-bg',
        list: '.skeleton-rect',
        listRadius: '.skeleton-radius'
      };

      var selAll = function selAll(selector) {
        var list = [];
        document.querySelectorAll(selObj[selector]).forEach(function (i) {
          // @ts-ignore
          list.push(i.getBoundingClientRect());
        }); // @ts-ignore

        _this2.setState(Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])({}, selector, list));
      };

      requestAnimationFrame(function () {
        var _this2$props$selector = _this2.props.selector,
            selector = _this2$props$selector === void 0 ? '.skeleton' : _this2$props$selector;
        var dom = document.querySelector(selector);

        if (dom) {
          var rect = dom.getBoundingClientRect();
          var parentStyle = {};
          Object.keys(rect).forEach(function (i) {
            parentStyle[i] = "".concat(rect[i], "px");
          });

          _this2.setState({
            parentRect: parentStyle
          });

          selAll('bg');
          selAll('list');
          selAll('listRadius');
        }
      });
    }
  }, {
    key: "weappSkl",
    value: function weappSkl() {
      var _this3 = this;

      // @ts-ignore
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.Current.page && _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.createSelectorQuery().in(_tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.Current.page).selectAll(".skeleton-bg").boundingClientRect().exec(function (res) {
        _this3.setState({
          bg: res[0]
        });
      });
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.createSelectorQuery().selectAll(".skeleton-rect").boundingClientRect().exec(function (res) {
        _this3.setState({
          list: res[0]
        });
      });
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.createSelectorQuery().selectAll(".skeleton-radius").boundingClientRect().exec(function (res) {
        _this3.setState({
          listRadius: res[0]
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          list = _this$state.list,
          bg = _this$state.bg,
          listRadius = _this$state.listRadius,
          parentRect = _this$state.parentRect;
      var isLoaded = this.props.isLoaded; // 是否加载完成

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "n"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "n"], {
        style: {
          opacity: isLoaded ? 1 : 0
        }
      }, this.props.children), isLoaded ? '' : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "n"], {
        style: Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])({}, parentRect), {}, {
          backgroundColor: 'white',
          position: 'fixed',
          overflow: 'hidden'
        })
      }, bg.map(function (item, index) {
        var width = item.width,
            height = item.height,
            top = item.top,
            left = item.left;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "n"], {
          key: "".concat(item.height).concat(index),
          style: {
            background: 'white',
            width: "".concat(width, "px"),
            height: "".concat(height, "px"),
            top: "".concat(top, "px"),
            left: "".concat(left, "px"),
            position: 'fixed'
          }
        });
      }), list.map(function (item, index) {
        var width = item.width,
            height = item.height,
            top = item.top,
            left = item.left;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "n"], {
          key: "".concat(item.height).concat(index),
          className: 'skeletonBg',
          style: {
            width: "".concat(width, "px"),
            height: "".concat(height, "px"),
            top: "".concat(top, "px"),
            left: "".concat(left, "px"),
            position: 'fixed'
          }
        });
      }), listRadius.map(function (item, index) {
        var width = item.width,
            height = item.height,
            top = item.top,
            left = item.left;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "n"], {
          key: "".concat(item.height).concat(index),
          className: 'skeletonBg',
          style: {
            borderRadius: '50%',
            width: "".concat(width, "px"),
            height: "".concat(height, "px"),
            top: "".concat(top, "px"),
            left: "".concat(left, "px"),
            position: 'fixed'
          }
        });
      })));
    }
  }]);

  return Skeleton;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.PureComponent);

Skeleton.defaultProps = {
  isLoaded: false,
  selector: '.skeleton'
};
var css_248z$1 = "@keyframes index_lds-rolling__31RnK {\n  0% {\n    -webkit-transform: translate(-50%, -50%) rotate(0deg);\n    transform: translate(-50%, -50%) rotate(0deg); }\n  100% {\n    -webkit-transform: translate(-50%, -50%) rotate(360deg);\n    transform: translate(-50%, -50%) rotate(360deg); } }\n\n@-webkit-keyframes index_lds-rolling__31RnK {\n  0% {\n    -webkit-transform: translate(-50%, -50%) rotate(0deg);\n    transform: translate(-50%, -50%) rotate(0deg); }\n  100% {\n    -webkit-transform: translate(-50%, -50%) rotate(360deg);\n    transform: translate(-50%, -50%) rotate(360deg); } }\n\n.index_loading-box__25fxi {\n  display: inline-block;\n  margin-bottom: -8px; }\n\n.index_lds-rolling__31RnK {\n  position: relative; }\n\n.index_lds-rolling__31RnK .index_circle__DzlzL {\n  position: absolute;\n  width: 30px;\n  height: 30px;\n  border: 4px solid #667baf;\n  border-top-color: transparent !important;\n  border-radius: 50%; }\n\n.index_circle__DzlzL {\n  -webkit-animation: index_lds-rolling__31RnK 1s linear infinite;\n  animation: index_lds-rolling__31RnK 1s linear infinite;\n  top: 40px;\n  left: 40px; }\n\n.index_lds-rolling__31RnK {\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg); }\n\n.index_lds-rolling__31RnK {\n  width: 80px !important;\n  height: 80px !important;\n  -webkit-transform: translate(-100px, -100px) scale(1) translate(100px, 100px);\n  transform: translate(-100px, -100px) scale(1) translate(100px, 100px); }\n";
styleInject(css_248z$1);

var Page = /*#__PURE__*/function (_Component) {
  Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Page, _Component);

  var _super2 = Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Page);

  function Page() {
    Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, Page);

    return _super2.apply(this, arguments);
  }

  Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Page, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "n"], {
        className: 'loading-box',
        "data-color": 'red'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "n"], {
        style: 'width:100%;height:100%',
        className: 'lds-rolling'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "n"], {
        className: 'circle',
        style: {
          borderColor: this.props.color
        }
      })));
    }
  }]);

  return Page;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

function get(key, defaultValue) {
  var value = _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.getStorageSync(key);

  if (!value || value === ' ' || value === 'undefined' || value === 'null') {
    value = '';
  } // @ts-ignore


  return value ? JSON.parse(value) : defaultValue;
}

function set(key, value) {
  _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.setStorageSync(key, JSON.stringify(value));
}

function remove(key) {
  _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.removeStorageSync(key);
}

function clear() {
  _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.clearStorageSync();
}

var storage = {
  get: get,
  set: set,
  remove: remove,
  clear: clear
};

function debounce(method) {
  var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  var timer = null;
  return function () {
    // @ts-ignore
    var context = this; // 在函数执行的时候先清除timer定时器;
    // @ts-ignore

    clearTimeout(timer); // @ts-ignore

    timer = setTimeout(function () {
      method.call(context);
    }, time);
  };
}

var timer = null;
var startTime = Date.now();

var throttle = function throttle(func, delay) {
  return function () {
    var curTime = Date.now();
    var remaining = delay - (curTime - startTime); // @ts-ignore

    var context = this;
    var args = arguments; // @ts-ignore

    clearTimeout(timer);

    if (remaining <= 0) {
      func.apply(context, args);
      startTime = Date.now();
    } else {
      // @ts-ignore
      timer = setTimeout(func, remaining);
    }
  };
};

var wait = function wait() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 500;
  return new Promise(function (res) {
    setTimeout(function () {
      res();
    }, time);
  });
};

function lazyScrollInit(className, storagekey) {
  var lazyKey = "lazy".concat(new Date().getTime());
  var lazyBox = storage.get("lazyBox_".concat(storagekey), []);

  if (lazyBox.length) {
    var _lastKey$key;

    var length = lazyBox.length;
    var lastKey = lazyBox[length - 1];
    console.log({
      lastKey: lastKey
    });

    if (new Date().getTime() - Number((_lastKey$key = lastKey.key) === null || _lastKey$key === void 0 ? void 0 : _lastKey$key.replace('lazy', '')) > 86400000) {
      lazyBox.splice(0, length);
    }
  }

  lazyBox.push({
    key: lazyKey,
    className: className,
    viewHeight: 0
  });
  storage.set("lazyBox_".concat(storagekey), lazyBox);
  console.log('lazyScrollInit``````');
  return lazyKey;
}

function lazyScrollRemove(storagekey) {
  var lazyBox = storage.get("lazyBox_".concat(storagekey), []);
  lazyBox.pop();
  storage.set("lazyBox_".concat(storagekey), lazyBox);
}

function updateScrollHeight(key, viewHeight, storagekey) {
  var lazyBox = storage.get("lazyBox_".concat(storagekey), []);
  var index = lazyBox.findIndex(function (i) {
    return i.key === key;
  });
  var targetLazy = lazyBox[index];
  lazyBox.splice(index, 1, Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])({}, targetLazy), {}, {
    viewHeight: viewHeight
  }));
  storage.set("lazyBox_".concat(storagekey), lazyBox);
}

function lazyScroll(key, height) {
  // console.log({ selector, key })
  var query = _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.getEnv() === 'WEB' ? ".lazy-image-".concat(key) : ".lazy-image-".concat(key);
  throttle(function () {
    setTimeout(function () {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.createSelectorQuery().selectAll(query).boundingClientRect().exec(function (res) {
        var list = res[0];
        var indexs = [];
        list.forEach(function (i, index) {
          if (i.top > -height * 1.5 && i.top < height * 1.5) {
            // @ts-ignore
            indexs.push(index);
          }
        }); // @ts-ignore

        if (_tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a[key] && typeof _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a[key] === 'function') _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a[key](indexs);
      });
    }, 0);
  }, 500)();
}

var tools = {
  lazyScroll: lazyScroll,
  wait: wait,
  debounce: debounce,
  updateScrollHeight: updateScrollHeight,
  lazyScrollInit: lazyScrollInit,
  lazyScrollRemove: lazyScrollRemove
};
var css_248z$2 = ".index_errorPage__2k8_C {\n  text-align: center;\n  padding: 40px;\n  font-size: 30px; }\n  .index_errorPage__2k8_C .index_button__2utd2 {\n    border-radius: 10px;\n    margin-top: 10px;\n    display: inline-block;\n    border: 1px solid cornflowerblue;\n    color: cornflowerblue;\n    padding: 10px; }\n\n.index_noContentTips__kRxBk {\n  display: flex;\n  padding: 100px 20px 20px;\n  text-align: center;\n  flex-direction: column; }\n  .index_noContentTips__kRxBk .index_emptyBanner__LuRLC {\n    width: 250px;\n    height: 170px;\n    display: inline-block;\n    margin: 0 auto 20px; }\n\n.index_marginBottom30__3CYsq {\n  margin-bottom: 30px; }\n";
styleInject(css_248z$2);

var Page$1 = /*#__PURE__*/function (_Component2) {
  Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Page$1, _Component2);

  var _super3 = Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Page$1);

  function Page$1() {
    Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, Page$1);

    return _super3.apply(this, arguments);
  }

  Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Page$1, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          isError = _this$props.isError,
          launchError = _this$props.launchError,
          launchEmpty = _this$props.launchEmpty,
          isEmpty = _this$props.isEmpty,
          emptyText = _this$props.emptyText,
          fetchInit = _this$props.fetchInit;
      var showError = isError; // isErrorUI权重最高

      var showErrorText = showError && !launchError; // 渲染ErrorText

      var showRenderError = showError && launchError; // 渲染renderError

      var showEmpty = !isError && isEmpty; // isErrorUI权重最高

      var showEmptyText = showEmpty && !launchEmpty; // 渲染emptyText

      var showRenderEmpty = showEmpty && launchEmpty; // 渲染renderEmpty

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "n"], null, showErrorText && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "n"], {
        className: 'errorPage'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "n"], {
        className: 'marginBottom30'
      }, "\u554A\u54E6\uFF0C\u7F51\u7EDC\u6084\u6084\u8DD1\u5230\u5916\u661F\u7403\u53BB\u4E86~"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "n"], {
        className: 'button',
        onClick: fetchInit
      }, "\u91CD\u65B0\u52A0\u8F7D")), showRenderError ? this.props.renderError : '', showEmptyText && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "n"], {
        className: 'noContentTips'
      }, emptyText), showRenderEmpty ? this.props.renderEmpty : '');
    }
  }]);

  return Page$1;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

var initialState = {
  hideInd: false,
  touchScrollTop: 0,
  scrollTop: 0,
  startY: 0,
  downLoading: false,
  lowerLoading: false,
  // needPullDown: true,
  canScrollY: true,
  isInit: false,
  blockStyle: {
    transform: 'translate3d(0,0,0)',
    transition: 'none'
  },
  dampText: ''
};
var initialProps = {
  selector: 'skeleton',
  circleColor: '',
  lazy: false,
  distanceToRefresh: 50,
  damping: 150,
  isLoaded: true,
  isEmpty: false,
  emptyText: '',
  noMore: '',
  footerLoadingText: '加载中',
  footerLoadedText: '',
  scrollTop: 0,
  touchScrollTop: 0,
  onScrollToLower: function onScrollToLower() {},
  showIndicator: true,
  className: '',
  onPullDownRefresh: function onPullDownRefresh() {},
  hasMore: false,
  needInit: false,
  isError: false,
  launch: {},
  renderEmpty: null,
  renderError: null,
  autoHeight: false,
  indicator: {
    activate: '下拉刷新',
    deactivate: '释放刷新'
  },
  lazyStorage: 'box'
};

var minGetMore = /*#__PURE__*/function () {
  var _ref = Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])( /*#__PURE__*/_Users_zfp_Documents_nearproject_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(self) {
    var _self$props, onScrollToLower, hasMore, lowerLoading;

    return _Users_zfp_Documents_nearproject_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _self$props = self.props, onScrollToLower = _self$props.onScrollToLower, hasMore = _self$props.hasMore;
            lowerLoading = self.state.lowerLoading;

            if (!(hasMore && !lowerLoading && onScrollToLower)) {
              _context.next = 7;
              break;
            }

            self.setState({
              lowerLoading: true
            });
            _context.next = 6;
            return onScrollToLower(function () {});

          case 6:
            self.setState({
              lowerLoading: false
            });

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function minGetMore(_x) {
    return _ref.apply(this, arguments);
  };
}();

var css_248z$3 = ".index_animateEase__4g80m {\n  transition: transform ease 300ms; }\n\n.index_downLoadingStyle__1aLq8 {\n  overflow: hidden; }\n\n.index_scrollView__5Dcnp {\n  position: relative;\n  width: 100%; }\n\n.index_autoHeight__2mGBK {\n  height: 100%; }\n\n.index_bodyView__2g1Mu {\n  position: relative;\n  overflow: visible;\n  will-change: transform;\n  transform: translate3d(0, 0, 0);\n  backface-visibility: hidden; }\n\n.index_containView__32ltl {\n  position: relative; }\n\n.index_unNeedBlock__1hxeo {\n  opacity: 0;\n  visibility: hidden; }\n\n.index_pullDownBlock__LMBFJ {\n  left: 0;\n  width: 100%;\n  overflow: hidden;\n  font-size: 28px;\n  display: flex;\n  align-items: flex-end; }\n  .index_pullDownBlock__LMBFJ .index_tip__1GVUe {\n    display: flex;\n    justify-content: center;\n    color: #999999;\n    bottom: 30px;\n    left: 0;\n    width: 100%;\n    text-align: center; }\n\n.index_loading__1G0HX, .index_loaded__-B7Xr {\n  text-align: center;\n  font-size: 24px;\n  padding: 12px; }\n\n.index_loaded__-B7Xr {\n  color: #e6e6e6; }\n\n.index_errorPage__2tAO9 {\n  text-align: center;\n  padding: 40px; }\n  .index_errorPage__2tAO9 .index_button__11Be2 {\n    border-radius: 10px;\n    margin-top: 10px;\n    display: inline-block;\n    border: 1px solid cornflowerblue;\n    color: cornflowerblue;\n    padding: 10px; }\n\n.index_noContentTips__cM25g {\n  display: flex;\n  padding: 100px 20px 20px;\n  text-align: center;\n  flex-direction: column; }\n  .index_noContentTips__cM25g .index_emptyBanner__WssOo {\n    width: 250px;\n    height: 170px;\n    display: inline-block;\n    margin: 0 auto 20px; }\n\n@keyframes index_loading__1G0HX {\n  from {\n    transform: rotate(0turn); }\n  to {\n    transform: rotate(1turn); } }\n\n.index_hide__34Det {\n  visibility: hidden; }\n";
styleInject(css_248z$3);

var ListView = /*#__PURE__*/function (_Component3) {
  Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(ListView, _Component3);

  var _super4 = Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(ListView);

  function ListView() {
    var _this4;

    Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, ListView);

    _this4 = _super4.apply(this, arguments); // eslint-disable-next-line react/sort-comp

    _this4.lazyClassName = function () {
      return typeof _this4.props.lazy === "boolean" ? ".lazy-view" : _this4.props.lazy;
    }();

    _this4.lazyKey = function () {
      if (_this4.props.lazy) {
        var lazyStorage = _this4.props.lazyStorage;
        return tools.lazyScrollInit(_this4.lazyClassName, lazyStorage);
      } else {
        return undefined;
      }
    }();

    _this4.lazyViewHeight = 0;
    _this4.bodyViewId = "".concat(new Date().getTime(), "-bodyViewId");
    _this4.tipDampTextId = "".concat(new Date().getTime(), "-tipDampTextId");
    _this4.scrollView = {};
    _this4.state = initialState;
    _this4.startY = 0;
    _this4.needPullDown = true;
    _this4.touchScrollTop = 0;

    _this4.touchEvent = function (e) {
      var type = e.type,
          touches = e.touches;
      var _this4$props = _this4.props,
          onPullDownRefresh = _this4$props.onPullDownRefresh,
          distanceToRefresh = _this4$props.distanceToRefresh,
          damping = _this4$props.damping;
      if (!onPullDownRefresh) return;

      switch (type) {
        case "touchstart":
          {
            _this4.touchScrollTop = _this4.state.scrollTop;
            _this4.needPullDown = true, _this4.startY = touches[0].clientY;
            break;
          }
        // 拖动方向不符合的不处理

        case "touchmove":
          {
            var clientY = touches[0].clientY;

            var _assertThisInitialize = Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_this4),
                touchScrollTop = _assertThisInitialize.touchScrollTop;

            var height = Math.floor((clientY - _this4.startY) / 5);
            if (height < 0 || touchScrollTop > 5) return;
            e.preventDefault(); // 阻止默认的处理方式(阻止下拉滑动的效果)

            if (height > 0 && height < (damping || 0)) {
              var needPullDown = false;

              if (height < (distanceToRefresh || 0)) {
                needPullDown = true;
              }

              _this4.updateDampText(needPullDown);

              _this4.moveBox(height);
            }

            break;
          }

        case "touchend":
          {
            if (!_this4.needPullDown) {
              _this4.fetchInit();
            } else {
              _this4.resetLoad(0);
            }

            break;
          }

        case "touchcancel":
          {
            _this4.resetLoad(0);

            break;
          }
      }
    };

    _this4.fetchInit = /*#__PURE__*/Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])( /*#__PURE__*/_Users_zfp_Documents_nearproject_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
      var onPullDownRefresh, reset;
      return _Users_zfp_Documents_nearproject_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              onPullDownRefresh = _this4.props.onPullDownRefresh;

              _this4.resetLoad(1);

              if (!onPullDownRefresh) {
                _context2.next = 7;
                break;
              }

              reset = function reset() {
                _this4.setState({
                  isInit: true
                });

                _this4.resetLoad(0, function () {
                  _this4.setState({
                    isInit: false
                  });
                });
              };

              _context2.next = 6;
              return onPullDownRefresh(function () {});

            case 6:
              reset();

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    _this4.resetLoad = function () {
      var status = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var cb = arguments.length > 1 ? arguments[1] : undefined;
      // status: 0:回复初始值 1：加载中
      // console.log({ status })
      var distanceToRefresh = _this4.props.distanceToRefresh;
      var state = {};

      switch (status) {
        case 0:
          state = {
            canScrollY: true,
            downLoading: false
          };

          _this4.updateDampText(true);

          _this4.moveBox(0);

          break;

        case 1:
          state = {
            canScrollY: false,
            downLoading: true
          };

          _this4.updateDampText(false);

          _this4.moveBox(distanceToRefresh);

          break;
      } // state = Object.assign({}, state,{ blockStyle });
      // this.moveBox(0);


      _this4.setState(state); // todo 监听真正动画结束


      setTimeout(function () {
        if (cb) cb();
      }, 400);
    };

    _this4.handleScrollToLower = function () {
      tools.debounce(function () {
        // this.getMore();
        minGetMore(Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_this4));
      })();
    };

    _this4.onScroll = function (e) {
      var scrollTop = e.detail.scrollTop;
      if (_this4.props.onScroll) _this4.props.onScroll(e);

      _this4.setState({
        scrollTop: scrollTop
      });

      if (_this4.props.lazy) {
        tools.lazyScroll(_this4.lazyKey, _this4.lazyViewHeight);
      }
    };

    _this4.moveBox = function (y) {
      var transition = y ? "none" : "300ms linear"; // console.log({ y })

      if (_tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.getEnv() === "WEB") {
        var target = document.getElementById(_this4.bodyViewId);
        target.style.transform = "translate3d(0,".concat(y, "px,0)");
        target.style.transition = transition;
      } else {
        _this4.setState({
          canScrollY: !y,
          blockStyle: {
            transform: "translate3d(0,".concat(y, "px,0)"),
            transition: transition
          }
        });
      }
    };

    _this4.updateDampText = function (act) {
      _this4.needPullDown = act;
      var _this4$state = _this4.state,
          isInit = _this4$state.isInit,
          downLoading = _this4$state.downLoading;
      var showTip = !downLoading && !isInit; // 展示下拉区域文案

      if (!showTip) {
        return '';
      } else {
        var _this4$props2 = _this4.props,
            _this4$props2$indicat = _this4$props2.indicator,
            indicator = _this4$props2$indicat === void 0 ? {} : _this4$props2$indicat,
            tipFreedText = _this4$props2.tipFreedText,
            tipText = _this4$props2.tipText;
        var _indicator$activate = indicator.activate,
            activate = _indicator$activate === void 0 ? "释放刷新" : _indicator$activate,
            _indicator$deactivate = indicator.deactivate,
            deactivate = _indicator$deactivate === void 0 ? "下拉刷新" : _indicator$deactivate;
        var text = "";

        if (act) {
          text = activate || tipText;
        } else {
          text = deactivate || tipFreedText;
        }

        if (_tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.getEnv() === "WEB") {
          var target = document.getElementById(_this4.tipDampTextId);
          target.innerText = text;
        } else {
          _this4.setState({
            dampText: text
          });
        }

        return undefined;
      }
    };

    return _this4;
  }

  Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(ListView, [{
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this5 = this;

      this.moveBox(0);

      if (this.props.lazy) {
        requestAnimationFrame(function () {
          setTimeout(function () {
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.createSelectorQuery().select(".scrollView").boundingClientRect().exec(function (res) {
              var lazyStorage = _this5.props.lazyStorage;
              tools.updateScrollHeight(_this5.lazyKey, res[0].height, lazyStorage);
              _this5.lazyViewHeight = res[0].height;
            });
          }, 0);
        });
      }

      if (this.props.needInit) this.fetchInit();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var lazyStorage = this.props.lazyStorage;
      tools.lazyScrollRemove(lazyStorage);
    }
  }, {
    key: "render",
    value: function render() {
      var _this6 = this;

      var _this$props2 = this.props,
          style = _this$props2.style,
          hasMore = _this$props2.hasMore,
          isEmpty = _this$props2.isEmpty,
          emptyText = _this$props2.emptyText,
          className = _this$props2.className,
          isError = _this$props2.isError,
          isLoaded = _this$props2.isLoaded,
          selector = _this$props2.selector,
          _this$props2$launch = _this$props2.launch,
          launch = _this$props2$launch === void 0 ? {} : _this$props2$launch,
          footerLoadingText = _this$props2.footerLoadingText,
          footerLoadedText = _this$props2.footerLoadedText,
          damping = _this$props2.damping,
          circleColor = _this$props2.circleColor,
          autoHeight = _this$props2.autoHeight;
      var _launch$launchError = launch.launchError,
          launchError = _launch$launchError === void 0 ? false : _launch$launchError,
          _launch$launchEmpty = launch.launchEmpty,
          launchEmpty = _launch$launchEmpty === void 0 ? false : _launch$launchEmpty,
          _launch$launchFooterL = launch.launchFooterLoaded,
          launchFooterLoaded = _launch$launchFooterL === void 0 ? false : _launch$launchFooterL,
          _launch$launchFooterL2 = launch.launchFooterLoading,
          launchFooterLoading = _launch$launchFooterL2 === void 0 ? false : _launch$launchFooterL2;
      var _this$state2 = this.state,
          canScrollY = _this$state2.canScrollY,
          blockStyle = _this$state2.blockStyle,
          downLoading = _this$state2.downLoading,
          dampText = _this$state2.dampText;
      var showChildren = !(isEmpty || isError); // 展示children内容

      var showFooter = !downLoading && !isEmpty && !isError; // 空、错状态不展示底部

      var footerLoaded = showFooter && !launchFooterLoaded && !hasMore;
      var customFooterLoaded = showFooter && launchFooterLoaded && !hasMore; // 渲染renderLoadedText

      var footerLoading = showFooter && !launchFooterLoading && hasMore;
      var customFooterLoading = showFooter && launchFooterLoading && hasMore; // 渲染renderNoMore

      if (autoHeight) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* ScrollView */ "i"], {
          ref: function ref(node) {
            _this6.scrollView = node;
          },
          className: "".concat(className, " ").concat(downLoading && "downLoadingStyle", " scrollView autoHeight"),
          style: Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])({}, style),
          scrollY: canScrollY,
          lowerThreshold: 80,
          onScrollToLower: this.handleScrollToLower,
          scrollWithAnimation: true,
          onScroll: this.onScroll
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "n"], {
          style: {
            minHeight: "100%",
            overflowY: "hidden"
          },
          onTouchMove: function onTouchMove(e) {
            return _this6.touchEvent(e);
          },
          onTouchEnd: function onTouchEnd(e) {
            return _this6.touchEvent(e);
          },
          onTouchStart: function onTouchStart(e) {
            return _this6.touchEvent(e);
          },
          onTouchCancel: function onTouchCancel(e) {
            return _this6.touchEvent(e);
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "n"] // style={trStyle}
        , {
          // style={trStyle}
          className: 'bodyView',
          id: this.bodyViewId
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "n"], {
          style: blockStyle
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "n"], {
          style: {
            height: "".concat(damping, "px"),
            marginTop: "-".concat(damping, "px")
          },
          className: 'pullDownBlock'
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "n"], {
          className: 'tip'
        }, !downLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "n"], {
          id: this.tipDampTextId
        }, dampText), downLoading && (this.props.customizeLoading ? this.props.renderCustomizeLoading : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Page, {
          color: circleColor
        })))), showChildren && this.props.children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Page$1, {
          renderError: this.props.renderError,
          renderEmpty: this.props.renderEmpty,
          launchError: launchError,
          launchEmpty: launchEmpty,
          isError: isError || false,
          isEmpty: isEmpty || false,
          emptyText: emptyText || "",
          fetchInit: this.fetchInit
        }), footerLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "n"], {
          className: 'loading'
        }, footerLoadingText), customFooterLoading && this.props.renderFooterLoading, footerLoaded && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "n"], {
          className: 'loaded'
        }, footerLoadedText), customFooterLoaded && this.props.renderFooterLoaded))));
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Skeleton, {
        isLoaded: isLoaded || isError,
        selector: selector
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* ScrollView */ "i"], {
        ref: function ref(node) {
          _this6.scrollView = node;
        },
        className: "".concat(className, " scrollView"),
        style: style,
        scrollY: canScrollY,
        lowerThreshold: 80,
        onScrollToLower: this.handleScrollToLower,
        scrollWithAnimation: true,
        onScroll: this.onScroll
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "n"], {
        style: {
          minHeight: "100%",
          overflowY: "hidden"
        },
        onTouchMove: function onTouchMove(e) {
          return _this6.touchEvent(e);
        },
        onTouchEnd: function onTouchEnd(e) {
          return _this6.touchEvent(e);
        },
        onTouchStart: function onTouchStart(e) {
          return _this6.touchEvent(e);
        },
        onTouchCancel: function onTouchCancel(e) {
          return _this6.touchEvent(e);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "n"], {
        className: 'bodyView',
        id: this.bodyViewId
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "n"], {
        style: blockStyle
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "n"], {
        style: {
          height: "".concat(damping, "px"),
          marginTop: "-".concat(damping, "px")
        },
        className: 'pullDownBlock'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "n"], {
        className: 'tip'
      }, !downLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "n"], {
        id: this.tipDampTextId
      }, dampText), downLoading && (this.props.customizeLoading ? this.props.renderCustomizeLoading : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Page, {
        color: circleColor
      })))), showChildren && this.props.children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Page$1, {
        renderError: this.props.renderError,
        renderEmpty: this.props.renderEmpty,
        launchError: launchError,
        launchEmpty: launchEmpty,
        isError: isError || false,
        isEmpty: isEmpty || false,
        emptyText: emptyText || "",
        fetchInit: this.fetchInit
      }), footerLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "n"], {
        className: 'loading'
      }, footerLoadingText), customFooterLoading && this.props.renderFooterLoading, footerLoaded && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "n"], {
        className: 'loaded'
      }, footerLoadedText), customFooterLoaded && this.props.renderFooterLoaded)))));
    }
  }]);

  return ListView;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

ListView.options = {
  addGlobalClass: true
};
ListView.defaultProps = initialProps;
var css_248z$4 = ".block_blockLoad__2UH8U {\n  animation: block_op__2PSpj 500ms ease; }\n\n@keyframes block_op__2PSpj {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n";
styleInject(css_248z$4);

var LazyImage = /*#__PURE__*/function (_Component4) {
  Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(LazyImage, _Component4);

  var _super5 = Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(LazyImage);

  function LazyImage() {
    var _this7;

    Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, LazyImage);

    _this7 = _super5.apply(this, arguments);
    _this7.lazyItem = {};
    _this7.state = {
      scrollCur: [0]
    };

    _this7.isLoad = function (current) {
      return _this7.state.scrollCur.includes(current);
    };

    return _this7;
  }

  Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(LazyImage, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var lazyStorage = this.props.lazyStorage;
      var lazyItem = storage.get("lazyBox_".concat(lazyStorage))[storage.get("lazyBox_".concat(lazyStorage)).length - 1];
      this.lazyItem = lazyItem;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      // console.log({ lazyItem })
      this.bindTextListener(); // console.log('block componentDidMount')
      // console.log(`lazy-image-${this.lazyItem.key}`)
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var key = this.lazyItem.key;
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.eventCenter.off("lazyBlock".concat(key));
    } // 绑定函数

  }, {
    key: "bindTextListener",
    value: function bindTextListener() {
      var _this8 = this;

      var _this$lazyItem = this.lazyItem,
          key = _this$lazyItem.key,
          viewHeight = _this$lazyItem.viewHeight;
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.eventCenter.on("lazyBlock".concat(key), function (scrollCur) {
        _this8.setState({
          scrollCur: scrollCur
        });
      }); // @ts-ignore

      _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a[key] = _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.eventCenter.trigger.bind(_tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.eventCenter, "lazyBlock".concat(key));
      setTimeout(function () {
        tools.lazyScroll(key, viewHeight);
      }, 0);
    }
  }, {
    key: "render",
    value: function render() {
      var current = this.props.current;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "n"], {
        className: "lazy-image-".concat(this.lazyItem.key, " ").concat(this.props.className)
      }, this.isLoad(current) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "n"], {
        className: 'blockLoad'
      }, this.props.children) : '');
    }
  }]);

  return LazyImage;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

LazyImage.options = {
  addGlobalClass: true
};
LazyImage.externalClasses = ['img-class'];
LazyImage.defaultProps = {
  lazyStorage: 'box'
}; // import Taro  from '@tarojs/taro'

/* harmony default export */ __webpack_exports__["a"] = (ListView);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["document"], __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["requestAnimationFrame"]))

/***/ }),

/***/ "./src/components/Swiper/MySwiper.js":
/*!*******************************************!*\
  !*** ./src/components/Swiper/MySwiper.js ***!
  \*******************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MySwiper; });
/* harmony import */ var _Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index.scss */ "./src/components/Swiper/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);






/**
 * 轮播图组件
 */







var MySwiper = /*#__PURE__*/function (_React$Component) {
  Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(MySwiper, _React$Component);

  var _super = Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(MySwiper);

  function MySwiper() {
    Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, MySwiper);

    return _super.apply(this, arguments);
  }

  Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(MySwiper, [{
    key: "goWebView",
    value: function goWebView(url) {
      if (!url) {
        return;
      }

      _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default.a.setStorageSync('url', url);
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default.a.navigateTo({
        url: '/pages/webview/index'
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var banner = this.props.banner;
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Swiper */ "j"], {
        className: "swiper-container",
        circular: true,
        indicatorDots: true,
        indicatorColor: "#999",
        indicatorActiveColor: "#bf708f",
        autoplay: true,
        children: banner.map(function (item, index) {
          return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* SwiperItem */ "k"], {
            onClick: function onClick() {
              return _this.goWebView(item.url);
            },
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Image */ "e"], {
              className: "swiper-img",
              mode: "widthFix",
              src: item.image_src
            })
          }, index);
        })
      });
    }
  }]);

  return MySwiper;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(MySwiper, "propTypes", {
  banner: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.array
});

Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(MySwiper, "defaultProps", {
  banner: []
});



/***/ }),

/***/ "./src/components/Swiper/index.scss":
/*!******************************************!*\
  !*** ./src/components/Swiper/index.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/image/banner.png":
/*!******************************!*\
  !*** ./src/image/banner.png ***!
  \******************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/banner.png";

/***/ }),

/***/ "./src/pages/nearby/nearby.js":
/*!************************************!*\
  !*** ./src/pages/nearby/nearby.js ***!
  \************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_nearby_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./nearby.js */ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/nearby/nearby.js");


var config = {};

_node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_nearby_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].enableShareAppMessage = true
var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_nearby_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/nearby/nearby', {root:{cn:[]}}, config || {}))



/***/ }),

/***/ "./src/pages/nearby/nearby.scss":
/*!**************************************!*\
  !*** ./src/pages/nearby/nearby.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/nearby/nearby.js","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=nearby.js.map