/**
 * 取消活动接口，不删除数据
 * 
 * @author: eysonyou
 * @create: 2019-05-16
 */


// 云函数入口文件
const cloud = require('wx-server-sdk')

function formatTime1(date){
    date = new Date(date)
    let fmt = 'yyyy-MM-dd hh:mm:ss'
    const o = {
      'M+': date.getMonth() + 1, // 月份
      'd+': date.getDate(), //日
      'h+': date.getHours(), //小时
      'm+': date.getMinutes(), //分钟
      's+': date.getSeconds() //秒
    }
  
    if(/(y+)/.test(fmt)){
      fmt = fmt.replace(RegExp.$1,date.getFullYear())
    }
    for(let k in o){
      if(new RegExp('('+k+')').test(fmt)){
       fmt =  fmt.replace(RegExp.$1, o[k].toString().length == 1 ? '0' + o[k] : o[k])
      }
    }
    // console.log(fmt)
    return fmt
}

function formatTime(t) {
    let repTime = t.replace(/-/g, '/');
    let timeTamp = Date.parse(repTime);
    return timeTamp
  }

// 云函数入口函数
exports.main = async (event, context) => {

    cloud.init({
    // 1.release - 正式
    // 2.test    - 测试
    // env: 'test'
        env: event.env
    });
    
    // 初始化数据库连接
    const db = cloud.database();
    const _ = db.command;
    const wxContext = cloud.getWXContext()
    // 更新活动信息 - 结束
    let post = await db.collection('post').where({
        _id: event._id,
        openid: wxContext.OPENID
    }).update({
        data: {
            // 1-活动结束，0-活动开始
            status: event.status,
            _updateTime: new Date().getTime()
        }
    });

    // let user = await db.collection('post').limit(200).get();
    // user.data.map(item=>{
    //    db.collection('post').where({
    //         _id: item._id
    //     }).update({
    //         data: {
    //             // 1-活动结束，0-活动开始
    //             _createTime: formatTime(item.createTime),
    //             _updateTime: formatTime(item.createTime)
    //         }
    //     });
    // })
    return {
        event,
        data: post,
        openid: wxContext.OPENID,
        appid: wxContext.APPID,
        unionid: wxContext.UNIONID,
    }
}