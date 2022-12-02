/**
 * 首页查询数据列表
 *
 * @author: eysonyou
 * @create: 2019-05-16
 */

function isToday(str) {
  return new Date().getTime() - str < 86400000;
} //isToday('2018-8-14') //返回true

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

  const wxContext = cloud.getWXContext();

  if (event.method === "queryOne") {
    return wxContext.OPENID;
  }

  // 初始化数据库连接
  const db = cloud.database();
  const _ = db.command;

  // 我参与的数据
  let user = await db
    .collection("user")
    .where({ pOpenId: wxContext.OPENID })
    .limit(50)
    .orderBy("score", "desc")
    .get();
  let result = user.data;
  return result;
};
