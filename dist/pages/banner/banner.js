(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/banner/banner"],{

/***/ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/banner/banner.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./src/pages/banner/banner.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _banner_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./banner.scss */ "./src/pages/banner/banner.scss");
/* harmony import */ var _banner_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_banner_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _config_appConfig_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../config/appConfig.js */ "./src/config/appConfig.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);












var app = _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default.a.getApp().$app;

var Banner = /*#__PURE__*/function (_React$Component) {
  Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Banner, _React$Component);

  var _super = Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Banner);

  function Banner() {
    var _this;

    Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, Banner);

    _this = _super.call(this);
    _this.state = {
      files: [],
      url: '',
      location: {
        latitude: app.globalData.latitude,
        longitude: app.globalData.longitude
      },
      getLocation: '',
      CDN_PATH: _config_appConfig_js__WEBPACK_IMPORTED_MODULE_9__["CDN_PATH"],
      iconPath: "".concat(_config_appConfig_js__WEBPACK_IMPORTED_MODULE_9__["CDN_PATH"], "/Marker3_Activated@3x.png"),
      markers: [{
        id: 0,
        iconPath: "".concat(_config_appConfig_js__WEBPACK_IMPORTED_MODULE_9__["CDN_PATH"], "/Marker3_Activated@3x.png"),
        latitude: 40.040415,
        longitude: 116.273511,
        width: 30,
        height: 30
      }]
    };
    return _this;
  }

  Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Banner, [{
    key: "bindInput",
    value: function bindInput(e) {
      this.state.url = e.detail ? e.detail.value : '';
      console.log(this.state.url, "=====url 地址");
    }
  }, {
    key: "goWebView",
    value: function goWebView() {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default.a.setStorageSync('url', this.state.url);
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default.a.navigateTo({
        url: '/pages/webview/index'
      });
    }
  }, {
    key: "chooseImage",
    value: function chooseImage(e) {
      var that = this;
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default.a.chooseImage({
        // 只能上传一张
        count: that.imgUploadMax,
        // 可以指定是原图还是压缩图，默认二者都有
        sizeType: ['original', 'compressed'],
        // 可以指定来源是相册还是相机，默认二者都有
        sourceType: ['album', 'camera'],
        success: function success(res) {
          var _this2 = this;

          _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default.a.showLoading({
            title: '图片上传中...'
          });
          console.log(res, "图片上传");
          res.tempFilePaths.map(function (filePath, index) {
            console.log(that, _this2, "=====");
            that.handleImage(filePath, index);
          });
        },
        fail: function fail(e) {
          console.log('----upload fail----');
          console.log(e);
        },
        complete: function complete(res) {
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default.a.hideLoading();
        }
      });
    }
  }, {
    key: "deleteImage",
    value: function deleteImage(e, index) {
      e.stopPropagation();
      var arr = this.state.files.splice(index, 1);
      console.log(this.state.files, "图片数组");
      this.setState({
        files: this.state.files
      });
    }
  }, {
    key: "handleImage",
    value: function handleImage(filePath, index) {
      var that = this; // get file EXT,for .jpg

      var ext = filePath.match(/\.[^.]+?$/)[0];
      var time = new Date().getTime();
      var rand = parseInt(Math.random() * 100000);
      var cloudPath = "img_".concat(0, "_", time, "_").concat(rand).concat(ext);
      console.log(cloudPath);
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default.a.cloud.uploadFile({
        cloudPath: cloudPath,
        filePath: filePath,
        success: function success(res) {
          // 图片上传成功
          console.log(res.fileID, "图片上传成功11");
          var currentFile = that.state.files;
          currentFile.push(res.fileID);
          that.setState({
            // 只能上传一张，每次会覆盖
            files: currentFile
          }, function () {
            console.log(that.state.files, "当前图片数组");
          }); // 鉴定敏感图片

          var contentType = ext.replace(/\./g, '');
          console.log(contentType);
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default.a.cloud.callFunction({
            name: 'imgSecCheck',
            data: {
              env: app.globalData.env,
              contentType: 'image/png',
              fileID: res.fileID
            }
          }).then(function (res) {
            if (index != 0) {
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default.a.showToast(Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
                title: '提示1'
              }, "title", '图片上传成功'));
            }
          }).catch(function (err) {
            // 敏感图片，清空参数值
            // that.setData({
            //   fileID: '',
            //   files: []
            // })
            console.log(err, "图片上传失败");
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default.a.showToast({
              title: '提示',
              content: '图片上传失败'
            });
          });
        },
        fail: function fail(e) {
          // todo
          console.log(e);
        },
        complete: function complete() {
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default.a.hideLoading();
        }
      });
    }
  }, {
    key: "bindSubmit",
    value: function bindSubmit(e) {
      var data = e.detail ? e.detail.value : {};
      data['env'] = app.globalData.env;
      data['isAdd'] = 1;
      data['fileID'] = this.state.files.toString();
      data['latitude'] = this.state.location.latitude;
      data['longitude'] = this.state.location.longitude;

      if (!data['fileID']) {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default.a.showToast({
          title: '请先上传banner图',
          icon: 'none'
        });
        return;
      }

      if (!data['url']) {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default.a.showToast({
          title: '请输入链接',
          icon: 'none'
        });
        return;
      }

      _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default.a.cloud.callFunction({
        name: 'banner',
        data: data
      }).then(function (res) {
        console.log(res, "成功==="); // 隐藏loading

        _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default.a.hideLoading();
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default.a.showToast({
          title: '发布成功',
          duration: 5000
        }); // Taro.navigateBack()
      }).catch(function (err) {
        console.log(err, "对失败");
      });
    } // 点击地图事件

  }, {
    key: "onTapMap",
    value: function onTapMap(event) {
      this.onChooseLocation();
    }
  }, {
    key: "onChooseLocation",
    value: function onChooseLocation() {
      var _this3 = this;

      _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default.a.chooseLocation({
        success: function success(res) {
          console.log(res, "位置是多少");

          _this3.setState({
            getLocation: res.address,
            location: {
              latitude: res.latitude,
              longitude: res.longitude
            }
          });
        }
      });
    }
  }, {
    key: "renderContent",
    value: function renderContent() {
      var _this4 = this;

      var _this$state = this.state,
          files = _this$state.files,
          location = _this$state.location,
          getLocation = _this$state.getLocation;
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "n"], {
        className: "weui-cells weui-cells_after-title",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "n"], {
          className: "weui-cell weui-cell_input",
          style: "display:flex;flex-wrap: wrap;padding-left: 18px;",
          id: "uploaderFiles",
          children: files.map(function (item, index) {
            return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* Block */ "a"], {
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "n"], {
                className: "weui-uploader__file",
                onClick: _this4.previewImage,
                id: item,
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* Image */ "e"], {
                  className: "weui-uploader__img",
                  src: item,
                  mode: "aspectFill"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "n"], {
                  className: "weui-delete-image",
                  onClick: function onClick(e) {
                    return _this4.deleteImage(e, index);
                  },
                  children: "\u5220\u9664"
                })]
              })
            }, index);
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "n"], {
          className: "weui-cell weui-cell_input",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "n"], {
            className: "weui-cell__hd",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "n"], {
              className: "weui-label",
              children: "\u4E0A\u4F20\u56FE\u7247"
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "n"], {
            className: "weui-uploader__input-box",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "n"], {
              className: "weui-uploader__input",
              onClick: function onClick() {
                return _this4.chooseImage();
              }
            })
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "n"], {
          className: "weui-cell weui-cell_input",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "n"], {
            className: "weui-cell__hd",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "n"], {
              className: "weui-label",
              children: "\u94FE\u63A5\u5730\u5740"
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* Textarea */ "m"], {
            style: "height: 100px; padding: 10px",
            name: "url",
            maxlength: "500",
            onInput: function onInput(e) {
              return _this4.bindInput(e);
            },
            className: "weui-textarea",
            placeholder: "\u8BF7\u8F93\u5165\u94FE\u63A5\u5730\u5740"
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "n"], {
          className: "weui-cell weui-cell_input",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "n"], {
            className: "weui-cell__hd",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "n"], {
              className: "weui-label",
              children: "\u5173\u8054\u5730\u70B9"
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "n"], {
            className: "weui-cell__bd",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* Input */ "f"], {
              name: "getLocation",
              confirmType: "next",
              maxlength: "12",
              value: getLocation,
              className: "weui-input",
              placeholder: "\u70B9\u51FB\u5730\u56FE\u8FDB\u5165\u5730\u5740\u9009\u62E9"
            })
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "n"], {
          className: "weui-cell",
          onClick: function onClick() {
            return _this4.onTapMap();
          },
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* Map */ "g"], {
            className: "map",
            id: "map",
            latitude: location.latitude,
            longitude: location.longitude,
            scale: "16",
            onClick: function onClick() {
              return _this4.onTapMap();
            },
            enableZoom: true,
            enableScroll: false,
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* Image */ "e"], {
              className: "current-site-icon",
              onLoad: this.onLoadImage,
              onError: this.onErrorImage,
              src: this.state.iconPath,
              onClick: function onClick() {
                return _this4.onTapMap();
              }
            })
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* Button */ "b"], {
          src: "https://mp.weixin.qq.com/",
          onClick: function onClick() {
            return _this4.goWebView();
          },
          children: "\u6D4B\u8BD5\u8DF3\u8F6C"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* Button */ "b"], {
          className: "weui-btn",
          type: "primary",
          formType: "submit",
          children: "\u786E\u8BA4\u53D1\u5E03"
        })]
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "n"], {
        className: "page",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* Form */ "d"], {
          onSubmit: function onSubmit(e) {
            return _this5.bindSubmit(e);
          },
          children: this.renderContent()
        })
      });
    }
  }]);

  return Banner;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Banner);

/***/ }),

/***/ "./src/pages/banner/banner.js":
/*!************************************!*\
  !*** ./src/pages/banner/banner.js ***!
  \************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_banner_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./banner.js */ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/banner/banner.js");


var config = {};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_banner_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/banner/banner', {root:{cn:[]}}, config || {}))



/***/ }),

/***/ "./src/pages/banner/banner.scss":
/*!**************************************!*\
  !*** ./src/pages/banner/banner.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/banner/banner.js","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=banner.js.map