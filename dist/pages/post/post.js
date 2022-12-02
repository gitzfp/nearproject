(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/post/post"],{

/***/ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/post/post.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./src/pages/post/post.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(window) {/* harmony import */ var _Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _tarojs_with_weapp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tarojs/with-weapp */ "./node_modules/@tarojs/with-weapp/index.js");
/* harmony import */ var _tarojs_with_weapp__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_tarojs_with_weapp__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _post_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./post.scss */ "./src/pages/post/post.scss");
/* harmony import */ var _post_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_post_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _config_appConfig_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../config/appConfig.js */ "./src/config/appConfig.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);






var _dec, _class;







/**
 * 发布
 *
 * @author: Harlan
 * @create: 2019-05-14
 */



var app = _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.getApp().$app;

var _C = (_dec = _tarojs_with_weapp__WEBPACK_IMPORTED_MODULE_8___default()({
  /**
   * 页面的初始数据
   */
  data: {
    // 图片上传限制
    imgUploadMax: 3,
    // 解决textarea组件在表单提交时无法获取内容的BUG
    content: "",
    // 保存用户信息
    userInfo: null,
    // 内容大小限制为200字符
    contentSize: 0,
    // 场景集合
    scenes: ["活动", "二手发布"],
    // 默认的场景
    sceneIndex: "",
    // 上传文件-文件列表
    files: [],
    fileID: "",
    location: {
      latitude: app.globalData.latitude,
      longitude: app.globalData.longitude
    },
    getLocation: "",
    CDN_PATH: _config_appConfig_js__WEBPACK_IMPORTED_MODULE_10__["CDN_PATH"],
    iconPath: "".concat(_config_appConfig_js__WEBPACK_IMPORTED_MODULE_10__["CDN_PATH"], "/Marker3_Activated@3x.png"),
    markers: [{
      id: 0,
      iconPath: "".concat(_config_appConfig_js__WEBPACK_IMPORTED_MODULE_10__["CDN_PATH"], "/Marker3_Activated@3x.png"),
      latitude: 40.040415,
      longitude: 116.273511,
      width: 30,
      height: 30
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function onLoad(options) {
    console.log(app.globalData.latitude, "post位置信息");
    this.data.location.latitude = app.globalData.latitude;
    this.data.location.longitude = app.globalData.longitude;
    this.data.markers.latitude = app.globalData.latitude;
    this.data.markers.longitude = app.globalData.longitude;
    console.log(this.data.location, "post位置信息");
    var that = this; // 当前版本不支持小程序云函数

    if (!_tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.cloud) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.showModal({
        title: "提示",
        content: "微信版本过低，请升级微信"
      });
      return;
    }

    _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.setNavigationBarTitle({
      title: "发布闲置"
    });
  },
  bindgetUserInfo: function bindgetUserInfo() {
    console.log("获取 授权 信息"); // 获取用户信息

    _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.getUserInfo({
      lang: "zh_CN",
      success: this.getUserInfoSuccess,
      fail: this.getUserFail
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function onReady() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function onShow() {
    var that = this; // 查询授权

    _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.getSetting({
      success: function success(res) {
        console.log(that.refs.loginButton, "hello world1");

        if (res.authSetting["scope.userInfo"]) {
          that.bindgetUserInfo();
        } else {// let fn = that.refs.loginButton.__handlers.getuserinfo[0]
          // fn.call(that)
          // console.log(fn,"hello world")
          // //如果未授权  打开弹窗
          //   Taro.authorize({
          //     scope: 'scope.userInfo',
          //     success: function () {
          //       console.log(that.refs.loginButton)
          //     }
          // })
        }
      }
    });
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
  onReachBottom: function onReachBottom() {},

  /**
   * 选择场景
   */
  bindSceneChange: function bindSceneChange(e) {
    console.log("Scenes:", e.detail.value);
    this.setData({
      sceneIndex: e.detail.value
    });
  },
  addPost: function addPost(data) {
    var _this = this; // 调用云函数


    _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.cloud.callFunction({
      name: "post",
      data: data
    }).then(function (res) {
      _this.updateUserScore();

      console.log(res, "post POST func success"); // 隐藏loading

      _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.hideLoading();
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.showModal({
        title: "发布成功",
        confirmText: "查看发布",
        cancelText: "继续发布",
        content: "获得5个公益积分",
        success: function success(res1) {
          if (res1.confirm) {
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.redirectTo({
              url: "/pages/detail/detail?id=".concat(res.result._id)
            });
          } else if (res1.cancel) {
            console.log("用户点击取消");
          }
        }
      }); // Taro.showToast({
      //      title: '获得5个公益积分',
      //      icon: 'success',
      //      duration: 4000,
      //      complete: ()=>{
      //       setTimeout(()=>{
      //           // 跳到详情页
      //       },4000)
      //      }
      //    })
    }).catch(function (err) {
      console.log(err);
      console.log("post POST func err");
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.hideLoading();
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.showModal({
        title: "提示",
        content: "系统异常，请稍后再试"
      });
    });
  },

  /**
   * 计算内容长度
   */
  bindInput: function bindInput(e) {
    var v = e.detail ? e.detail.value : "";
    this.setData({
      content: v,
      contentSize: v.length
    }); // console.log(e);
  },

  /**
   * 获取用户信息
   */
  getUserInfoSuccess: function getUserInfoSuccess(res) {
    var userInfo = res.userInfo || {};
    console.log(userInfo);
    this.setData({
      userInfo: userInfo
    });
  },
  getUserFail: function getUserFail(res) {
    console.log(res, "shibai");
  },
  handleImage: function handleImage(filePath, index) {
    var that = this; // get file EXT,for .jpg

    var ext = filePath.match(/\.[^.]+?$/)[0];
    var sceneIndex = that.data.sceneIndex;
    var time = new Date().getTime();
    var rand = parseInt(Math.random() * 100000);
    var cloudPath = "img_".concat(sceneIndex, "_").concat(time, "_").concat(rand).concat(ext);
    console.log(cloudPath);
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.cloud.uploadFile({
      cloudPath: cloudPath,
      filePath: filePath,
      success: function success(res) {
        // 图片上传成功
        console.log(res.fileID);
        var currentFile = that.data.files;
        currentFile.push(res.fileID);
        that.setData({
          // 只能上传一张，每次会覆盖
          files: currentFile
        }, function () {
          console.log(that.data.files, "当前图片数组");
        });
        that.setData({
          fileID: res.fileID
        }); // 鉴定敏感图片

        var contentType = ext.replace(/\./g, "");
        console.log(contentType);
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.cloud.callFunction({
          name: "imgSecCheck",
          data: {
            env: app.globalData.env,
            contentType: "image/png",
            fileID: res.fileID
          }
        }).then(function (res) {
          if (index != 0) {
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.showToast(Object(_Users_zfp_Documents_nearproject_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])({
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
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.showToast({
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
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.hideLoading();
      }
    });
  },

  /**
   * 选择图片
   */
  chooseImage: function chooseImage(e) {
    var that = this;
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.chooseImage({
      // 只能上传一张
      count: that.imgUploadMax,
      // 可以指定是原图还是压缩图，默认二者都有
      sizeType: ["original", "compressed"],
      // 可以指定来源是相册还是相机，默认二者都有
      sourceType: ["album", "camera"],
      success: function success(res) {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.showLoading({
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
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.hideLoading();
      }
    });
  },

  /**
   * 预览图片
   * todo: 待完善删除功能
   */
  previewImage: function previewImage(e) {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.previewImage({
      current: e.currentTarget.id,
      // 当前显示图片的http链接
      urls: this.data.files // 需要预览的图片http链接列表

    });
  },

  /**
   * 提交数据
   */
  bindSubmit: function bindSubmit(e) {
    console.log(window.globalData, "全局数据");

    if (!this.data.userInfo) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.showModal({
        title: "提示",
        content: "发布失败，请先登录"
      });
      return;
    }

    var data = e.detail ? e.detail.value : {};
    var userInfo = this.data.userInfo;
    data["env"] = app.globalData.env; // 解决textarea组件在表单提交时无法获取内容的BUG

    data.content = this.data.content; // 图片

    data["fileID"] = this.data.files.toString(); // 增加用户信息

    data["nickName"] = userInfo.nickName;
    data["avatarUrl"] = userInfo.avatarUrl;
    data["city"] = userInfo["city"];
    data["country"] = userInfo["country"];
    data["gender"] = userInfo["gender"];
    data["language"] = userInfo["language"];
    data["latitude"] = this.data.location.latitude;
    data["longitude"] = this.data.location.longitude;
    data["location"] = JSON.stringify(this.data.location);
    console.log(data);
    console.log("post submit data");

    if (data["maximum"] < 0 || data["maximum"] > 1000) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.showToast({
        title: "超出报名上限（1~1000）",
        icon: "none"
      });
      return;
    }

    if (!data["title"]) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.showToast({
        title: data["sceneIndex"] == 0 ? "请输入活动主题" : "请输入商品名称",
        icon: "none"
      });
      return;
    }

    if (parseInt(data["sceneIndex"]) === 1 && !data["amount"]) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.showToast({
        title: "请输入商品价格",
        icon: "none"
      });
      return;
    }

    if (!data["content"]) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.showToast({
        title: data["sceneIndex"] == 0 ? "请输入活动内容" : "请输入商品描述",
        icon: "none"
      });
      return;
    } // if (!data['getTime']) {
    //   Taro.showToast({
    //     title: data['sceneIndex'] == 0 ? '请输入取货时间' : '请输入取货时间',
    //     icon: 'none'
    //   })
    //   return
    // }


    if (!data["getLocation"]) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.showToast({
        title: data["sceneIndex"] == 0 ? "请输入取货地点" : "请输入取货地点",
        icon: "none"
      });
      return;
    }

    if (!data["fileID"]) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.showToast({
        title: "请至少上传一张图片",
        icon: "none"
      });
      return;
    } // 全局显示loading


    _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.showLoading({
      title: "提交中..."
    });
    this.addPost(data);
  },
  // 点击地图事件
  onTapMap: function onTapMap(event) {
    this.onChooseLocation();
  },
  onChooseLocation: function onChooseLocation() {
    var _this2 = this;

    _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.chooseLocation({
      success: function success(res) {
        console.log(res, "位置是多少");

        _this2.setData({
          getLocation: res.address,
          location: {
            latitude: res.latitude,
            longitude: res.longitude
          },
          getTime: _this2.data.getTime
        });
      }
    });
  },
  onShareAppMessage: function onShareAppMessage() {
    var pages = _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.getCurrentPages();
    var page = pages[pages.length - 1];
    return {
      title: "\u95F2\u7F6E\uFF0C\u8F6C\u7ED9\u9644\u8FD1\u9700\u8981\u7684\u4EBA",
      path: "/".concat(page.route, "?pOpenId=").concat(this.userInfo.openId, "&pNickName=").concat(this.userInfo.nickName)
    };
  },
  deleteImage: function deleteImage(e, index) {
    e.stopPropagation();
    var arr = this.data.files.splice(index, 1);
    console.log(this.data.files, "图片数组");
    this.setData({
      files: this.data.files
    });
  },
  updateUserScore: function updateUserScore() {
    var thar = this;
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.cloud.callFunction({
      name: "updateUser",
      data: {
        env: app.globalData.env,
        score: 5,
        latitude: thar.data.location.latitude,
        longitude: thar.data.location.longitude
      }
    }).then(function (res) {
      console.log(res.result, "user index func success"); // 隐藏loading

      _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.hideLoading();
    }).catch(function (err) {
      console.log(err);
      console.log("user add func err");
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.hideLoading();
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.showModal({
        title: "提示",
        content: "系统异常，请稍后再试"
      });
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
    key: "onLoadImage",
    value: function onLoadImage() {
      console.log("===jai zai cheng gong");
    }
  }, {
    key: "onErrorImage",
    value: function onErrorImage() {
      console.log("===jai zai shi bai");
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$data = this.data,
          contentSize = _this$data.contentSize,
          files = _this$data.files,
          location = _this$data.location,
          getLocation = _this$data.getLocation;
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "n"], {
        className: "page",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* Form */ "d"], {
          onSubmit: this.bindSubmit,
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "n"], {
            className: "weui-cells weui-cells_after-title",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "n"], {
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "n"], {
                className: "weui-cell weui-cell_input",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "n"], {
                  className: "weui-cell__hd",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "n"], {
                    className: "weui-label",
                    children: "\u5546\u54C1\u540D\u79F0"
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "n"], {
                  className: "weui-cell__bd",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* Input */ "f"], {
                    name: "title",
                    confirmType: "next",
                    maxlength: "64",
                    className: "weui-input",
                    placeholder: "\u3010\u6C42\u8D2D\u3011\u3010\u8F6C\u8BA9\u3011\u3010\u8D60\u9001\u3011\u3010\u51FA\u79DF\u3011"
                  })
                })]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "n"], {
                className: "weui-cell weui-cell_input",
                style: "display:flex;flex-wrap: wrap;padding-left: 18px;",
                id: "uploaderFiles",
                children: files.map(function (item, index) {
                  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* Block */ "a"], {
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "n"], {
                      className: "weui-uploader__file",
                      onClick: _this3.previewImage,
                      id: item,
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* Image */ "e"], {
                        className: "weui-uploader__img",
                        src: item,
                        mode: "aspectFill"
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "n"], {
                        className: "weui-delete-image",
                        onClick: function onClick(e) {
                          return _this3.deleteImage(e, index);
                        },
                        children: "\u5220\u9664"
                      })]
                    })
                  }, index);
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "n"], {
                className: "weui-cell weui-cell_input",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "n"], {
                  className: "weui-cell__hd",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "n"], {
                    className: "weui-label",
                    children: "\u4E0A\u4F20\u56FE\u7247"
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "n"], {
                  className: "weui-uploader__input-box",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "n"], {
                    className: "weui-uploader__input",
                    onClick: this.chooseImage
                  })
                })]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "n"], {
                className: "weui-cell weui-cell_input",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "n"], {
                  className: "weui-cell__hd",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "n"], {
                    className: "weui-label",
                    children: "\u5546\u54C1\u4EF7\u683C"
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "n"], {
                  className: "weui-cell__bd",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* Input */ "f"], {
                    type: "digit",
                    name: "amount",
                    confirmType: "next",
                    className: "weui-input",
                    placeholder: "\u4F8B\u5982\uFF1A9.9"
                  })
                })]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "n"], {
                className: "weui-cell weui-cell_input",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "n"], {
                  className: "weui-cell__hd",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "n"], {
                    className: "weui-label",
                    children: "\u5546\u54C1\u539F\u4EF7"
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "n"], {
                  className: "weui-cell__bd",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* Input */ "f"], {
                    type: "digit",
                    name: "orgin_amount",
                    confirmType: "next",
                    className: "weui-input",
                    placeholder: "\u4F8B\u5982\uFF1A99"
                  })
                })]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "n"], {
                className: "weui-cell",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "n"], {
                  className: "weui-cell__bd",
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* Textarea */ "m"], {
                    name: "content",
                    maxlength: "200",
                    onInput: this.bindInput,
                    className: "weui-textarea",
                    placeholder: "\u5546\u54C1\u63CF\u8FF0\uFF0C\u4E0D\u8D85\u8FC7200\u5B57",
                    autoHeight: true
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "n"], {
                    className: "weui-textarea-counter",
                    children: contentSize + "/200"
                  })]
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "n"], {
                className: "weui-cell weui-cell_input",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "n"], {
                  className: "weui-cell__hd",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "n"], {
                    className: "weui-label",
                    children: "\u8054\u7CFB\u7535\u8BDD"
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "n"], {
                  className: "weui-cell__bd",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* Input */ "f"], {
                    name: "mobilePhone",
                    confirmType: "next",
                    maxlength: "12",
                    className: "weui-input",
                    placeholder: "\u8BF7\u8F93\u5165\u8054\u7CFB\u7535\u8BDD"
                  })
                })]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "n"], {
                className: "weui-cell weui-cell_input",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "n"], {
                  className: "weui-cell__hd",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "n"], {
                    className: "weui-label",
                    children: "\u53D6\u8D27\u65F6\u95F4"
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* Input */ "f"], {
                  name: "getTime",
                  confirmType: "next",
                  maxlength: "12",
                  className: "weui-input",
                  placeholder: "\u8BF7\u8F93\u5165\u53D6\u8D27\u65F6\u95F4"
                })]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "n"], {
                className: "weui-cell weui-cell_input",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "n"], {
                  className: "weui-cell__hd",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "n"], {
                    className: "weui-label",
                    children: "\u53D6\u8D27\u5730\u70B9"
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "n"], {
                  className: "weui-cell__bd",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* Input */ "f"], {
                    name: "getLocation",
                    confirmType: "next",
                    maxlength: "12",
                    value: getLocation,
                    className: "weui-input",
                    placeholder: "\u70B9\u51FB\u5730\u56FE\u8FDB\u5165\u5730\u5740\u9009\u62E9"
                  })
                })]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "n"], {
                className: "weui-cell",
                onClick: this.onTapMap,
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* Map */ "g"], {
                  className: "map",
                  id: "map",
                  latitude: location.latitude,
                  longitude: location.longitude,
                  scale: "16",
                  onClick: this.onTapMap,
                  enableZoom: true,
                  enableScroll: false,
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* Image */ "e"], {
                    className: "current-site-icon",
                    onLoad: this.onLoadImage,
                    onError: this.onErrorImage,
                    src: this.data.iconPath,
                    onClick: this.onTapMap
                  })
                })
              })]
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "n"], {
            className: "ui-button",
            children: [!this.data.userInfo && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])("button", {
              ref: "loginButton",
              "open-type": "getUserInfo",
              lang: "zh_CN",
              onGetUserInfo: this.bindgetUserInfo,
              children: "\u8BF7\u5148\u767B\u5F55"
            }), this.data.userInfo && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* Button */ "b"], {
              className: "weui-btn",
              type: "primary",
              formType: "submit",
              children: "\u786E\u8BA4\u53D1\u5E03"
            })]
          })]
        })
      });
    }
  }]);

  return _C;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component)) || _class);

/* harmony default export */ __webpack_exports__["a"] = (_C);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["window"]))

/***/ }),

/***/ "./src/pages/post/post.js":
/*!********************************!*\
  !*** ./src/pages/post/post.js ***!
  \********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_post_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./post.js */ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/post/post.js");


var config = {"usingComponents":{}};

_node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_post_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].enableShareAppMessage = true
var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_post_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/post/post', {root:{cn:[]}}, config || {}))



/***/ })

},[["./src/pages/post/post.js","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=post.js.map