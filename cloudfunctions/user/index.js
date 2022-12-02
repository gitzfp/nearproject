/**
 * 首页查询数据列表
 *
 * @author: eysonyou
 * @create: 2019-05-16
 */

// 云函数入口文件
const cloud = require("wx-server-sdk");

// 云函数入口函数
exports.main = async (event, context) => {
  cloud.init({
    // 1.release - 正式
    // 2.test    - 测试
    // env: 'test'
    env: event.env,
  });
  // 初始化数据库连接
  const db = cloud.database();
  const _ = db.command;
  const wxContext = cloud.getWXContext();

  // 我参与的数据
  let user = await db
    .collection("user")
    .where({
      openId: wxContext.OPENID,
    })
    .limit(1000)
    .orderBy("_createTime", "desc")
    .get();

  let result = null;
  let params = {
    nickName: event.nickName,
    avatarUrl: event.avatarUrl,
    city: event.city,
    country: event.country,
    gender: event.gender,
    language: event.language,
    openId: wxContext.OPENID,
    pOpenId: event.pOpenId,
    pNickName: event.pNickName,
    _updateTime: new Date().getTime(),
    _createTime: new Date().getTime(),
  };
  console.log(params, "是否：" + user.data.length);
  if (user.data.length == 0) {
    // 异步写入数据
    let res = await db.collection("user").add({
      data: params,
    });
    result = {
      openId: wxContext.OPENID,
    };
  } else {
    params.pOpenId = user.data[0].pOpenId;
    params.pNickName = user.data[0].pNickName;
    await db
      .collection("user")
      .where({
        openId: wxContext.OPENID,
      })
      .update({
        data: params,
      });
    result = params; //user.data[0];
    return user.data[0];
  }
  return result;
};
