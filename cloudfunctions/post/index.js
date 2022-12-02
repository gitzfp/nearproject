/**
 * 发布接龙接口
 * 
 * @author: eysonyou
 * @create: 2019-05-16
 */

// 云函数入口文件
const cloud = require('wx-server-sdk')

// 云函数入口函数
exports.main = async(event, context) => {

     // 初始化环境
    cloud.init({
        // 1.release - 正式
        // 2.test    - 测试
        // env: 'test'
        env: event.env
    });
    
    // 初始化数据库连接
    const db = cloud.database();
    const _ = db.command;
    // 获取微信上下文
    const wxContext = cloud.getWXContext();

    // 参数
    let params = {
        // 标题
        title: event.title,
        // 内容
        content: event.content,
        // 图片
        fileID: event.fileID,
        // 场景
        sceneIndex: event.sceneIndex, // 0-活动，1-拼团
        // 当场景为1时才有（拼团专用字段）
        amount: event.amount ? event.amount : 0,
        orgin_amount: event.orgin_amount ? event.orgin_amount : event.amount,
        // 当前状态
        // 0 - 正常
        // 1 - 结束
        status: 0,
        // 报名上限
        mobilePhone: event.mobilePhone,
        // 用户信息
        nickName: event.nickName,
        avatarUrl: event.avatarUrl,
        city: event.city,
        country: event.country,
        gender: event.gender,
        language: event.language,
        openid: wxContext.OPENID,
        appid: wxContext.APPID,
        getTime: event.getTime,
        getLocation: event.getLocation,
        latitude: event.latitude,
        longitude: event.longitude
    };

    // 检查敏感内容
    let ret = await cloud.openapi.security.msgSecCheck({
      content: event.title + event.content
    });

    // 内容检查不通过，返回一个 promise 错误对象
    if(ret.errCode !== 0){
      return new Promise((resolve, reject) => {
        reject(ret);
      });
    }

    let post = null;
    if(event._id){
      params._updateTime =  new Date().getTime()
      post = await db.collection('post').where({
          _id: event._id,
          openid: wxContext.OPENID
      }).update({
          data: params
      });
    }else{
      params._createTime = new Date().getTime()
      // 异步写入数据
      post = await db.collection('post').add({
          data: params
      });
    }
    return post;
}