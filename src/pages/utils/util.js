const formatTime = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return (
    [year, month, day].map(formatNumber).join("/") +
    " " +
    [hour, minute, second].map(formatNumber).join(":")
  );
};

function formatTime1(date) {
  date = new Date(date);
  let fmt = "yyyy-MM-dd hh:mm:ss";
  const o = {
    "M+": date.getMonth() + 1, // 月份
    "d+": date.getDate(), //日
    "h+": date.getHours(), //小时
    "m+": date.getMinutes(), //分钟
    "s+": date.getSeconds(), //秒
  };

  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, date.getFullYear());
  }
  for (let k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        o[k].toString().length == 1 ? "0" + o[k] : o[k]
      );
    }
  }
  // console.log(fmt)
  return fmt;
}

const formatNumber = (n) => {
  n = n.toString();
  return n[1] ? n : "0" + n;
};
/**
 * 将小程序的API封装成支持Promise的API
 * @params fn {Function} 小程序原始API，如wx.login
 */
const wxPromisify = (fn) => {
  return function(obj = {}) {
    return new Promise((resolve, reject) => {
      obj.success = function(res) {
        resolve(res);
      };

      obj.fail = function(res) {
        reject(res);
      };

      fn(obj);
    });
  };
};
const compareVersion = (v1, v2) => {
  v1 = v1.split(".");
  v2 = v2.split(".");
  const len = Math.max(v1.length, v2.length);

  while (v1.length < len) {
    v1.push("0");
  }
  while (v2.length < len) {
    v2.push("0");
  }

  for (let i = 0; i < len; i++) {
    const num1 = parseInt(v1[i]);
    const num2 = parseInt(v2[i]);

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
const getDistanceFromLatLonInKm = function(lat1, lng1, lat2, lng2) {
  if (!lat1 || !lat2) {
    return 1000.0;
  }
  var radLat1 = (lat1 * Math.PI) / 180.0;
  var radLat2 = (lat2 * Math.PI) / 180.0;
  var a = radLat1 - radLat2;
  var b = (lng1 * Math.PI) / 180.0 - (lng2 * Math.PI) / 180.0;
  var s =
    2 *
    Math.asin(
      Math.sqrt(
        Math.pow(Math.sin(a / 2), 2) +
          Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)
      )
    );
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
  getDistanceFromLatLonInKm: getDistanceFromLatLonInKm,
};
