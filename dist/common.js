(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["common"],{

/***/ "./src/config/appConfig.js":
/*!*********************************!*\
  !*** ./src/config/appConfig.js ***!
  \*********************************/
/*! exports provided: CDN_PATH, COS_PATH, PLUGIN_KEY, MOYUAN_KEY, BAIQIAN_KEY, YULU_KEY, DIFUNI_KEY, INDOOR_KEY, REFERER, WEBSERVICE_APPID, CUSTOM_KEY, ENV_KEY */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDN_PATH", function() { return CDN_PATH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COS_PATH", function() { return COS_PATH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLUGIN_KEY", function() { return PLUGIN_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOYUAN_KEY", function() { return MOYUAN_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BAIQIAN_KEY", function() { return BAIQIAN_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YULU_KEY", function() { return YULU_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIFUNI_KEY", function() { return DIFUNI_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INDOOR_KEY", function() { return INDOOR_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REFERER", function() { return REFERER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEBSERVICE_APPID", function() { return WEBSERVICE_APPID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CUSTOM_KEY", function() { return CUSTOM_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENV_KEY", function() { return ENV_KEY; });
var CDN_PATH = 'https://3gimg.qq.com/lightmap/xcx/demoCenter/images';
var COS_PATH = 'https://mapapi.qq.com/web/miniprogram/demoCenter/images';
var PLUGIN_KEY = 'GK4BZ-BLOKJ-AM7FE-KLHXW-HENGT-AVFMQ';
var MOYUAN_KEY = '';
var BAIQIAN_KEY = '';
var YULU_KEY = '';
var DIFUNI_KEY = '';
var INDOOR_KEY = '';
var REFERER = '腾讯位置服务示例中心小程序';
var WEBSERVICE_APPID = 'wxc1c68623b7bdea7b';
var CUSTOM_KEY = ''; // 个性化地图key

var ENV_KEY = "pro-2gi6cwzd8902d528";

/***/ }),

/***/ "./src/pages/post/post.scss":
/*!**********************************!*\
  !*** ./src/pages/post/post.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/utils/util.js":
/*!*********************************!*\
  !*** ./src/pages/utils/util.js ***!
  \*********************************/
/*! no static exports found */
/*! exports used: formatTime1, getDistanceFromLatLonInKm */
/***/ (function(module, exports) {

var formatTime = function formatTime(date) {
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  return [year, month, day].map(formatNumber).join("/") + " " + [hour, minute, second].map(formatNumber).join(":");
};

function formatTime1(date) {
  date = new Date(date);
  var fmt = "yyyy-MM-dd hh:mm:ss";
  var o = {
    "M+": date.getMonth() + 1,
    // 月份
    "d+": date.getDate(),
    //日
    "h+": date.getHours(),
    //小时
    "m+": date.getMinutes(),
    //分钟
    "s+": date.getSeconds() //秒

  };

  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, date.getFullYear());
  }

  for (var k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(RegExp.$1, o[k].toString().length == 1 ? "0" + o[k] : o[k]);
    }
  } // console.log(fmt)


  return fmt;
}

var formatNumber = function formatNumber(n) {
  n = n.toString();
  return n[1] ? n : "0" + n;
};
/**
 * 将小程序的API封装成支持Promise的API
 * @params fn {Function} 小程序原始API，如wx.login
 */


var wxPromisify = function wxPromisify(fn) {
  return function () {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return new Promise(function (resolve, reject) {
      obj.success = function (res) {
        resolve(res);
      };

      obj.fail = function (res) {
        reject(res);
      };

      fn(obj);
    });
  };
};

var compareVersion = function compareVersion(v1, v2) {
  v1 = v1.split(".");
  v2 = v2.split(".");
  var len = Math.max(v1.length, v2.length);

  while (v1.length < len) {
    v1.push("0");
  }

  while (v2.length < len) {
    v2.push("0");
  }

  for (var i = 0; i < len; i++) {
    var num1 = parseInt(v1[i]);
    var num2 = parseInt(v2[i]);

    if (num1 > num2) {
      return 1;
    } else if (num1 < num2) {
      return -1;
    }
  }

  return 0;
};
/*
   @param lng1 经度1
  * @param lat1 纬度1
  * @param lng2 经度2
  * @param lat2 纬度2
  * @return 距离（米）
  */


var getDistanceFromLatLonInKm = function getDistanceFromLatLonInKm(lat1, lng1, lat2, lng2) {
  if (!lat1 || !lat2) {
    return 1000.0;
  }

  var radLat1 = lat1 * Math.PI / 180.0;
  var radLat2 = lat2 * Math.PI / 180.0;
  var a = radLat1 - radLat2;
  var b = lng1 * Math.PI / 180.0 - lng2 * Math.PI / 180.0;
  var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));
  s = s * 6378.137;
  s = Math.round(s * 10000) / 10;
  s = s / 1000;
  return s.toFixed(2);
};

module.exports = {
  formatTime: formatTime,
  formatTime1: formatTime1,
  wxPromisify: wxPromisify,
  compareVersion: compareVersion,
  getDistanceFromLatLonInKm: getDistanceFromLatLonInKm
};

/***/ })

}]);
//# sourceMappingURL=common.js.map