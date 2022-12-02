/**
 * 通用模块
 */

module.exports = {
  getSceneName: function(n) {
    // console.log(n);
    var i = parseInt(n, 10)
    switch (i) {
      case 1:
        return '拼团'
        break
      case 0:
        return '活动'
        break
      default:
        return '...'
        break
    }
  },
  formatDateTime: function(v) {
    v += ''
    var str = v.replace('T', ' ')
    var res = str.split('.')[0] || str
    return res
  },
  formatDate: function(v) {
    v += ''
    var s = v.split('T')
    var res = s[0] || s
    return res
  }
}
