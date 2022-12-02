/**
 * 取消活动接口，不删除数据
 * 
 * @author: eysonyou
 * @create: 2019-05-16
 */

// 云函数入口文件
const cloud = require('wx-server-sdk')

// 云函数入口函数
exports.main = async (event, context) => {
    cloud.init({
        env: event.env
    });
    // 初始化数据库连接
    const db = cloud.database();
    const _ = db.command;
    const wxContext = cloud.getWXContext()
    let banner;
    if(event._id){
          // 更新活动信息 - 结束
        banner = await db.collection('banner').where({
        _id: event._id,
      }).update({
          data: {
              // 1-活动结束，0-活动开始
              url: event.url,
              fileID: event.fileID
          }
      });
    }else if(event.isAdd){
      let params = {
        // 用户信息
        url: event.url,
        fileID: event.fileID,
        latitude: event.latitude,
        longitude: event.longitude,
        getLocation: event.getLocation,
        _createTime: new Date().getTime(),
        _updateTime: new Date().getTime()
    };
    // 异步写入数据
    let res = await db.collection('banner').add({
      data: params
    });

    }else{
      banner = await db.collection('banner').limit(100).get();
      banner = banner.data;
    }
    return {
        data: banner,
        openid: wxContext.OPENID,
        appid: wxContext.APPID,
        unionid: wxContext.UNIONID,
    }
}