/**
 * 活动详情接口
 *
 * @author: eysonyou
 * @create: 2019-05-16
 */

// 云函数入口文件
const cloud = require("wx-server-sdk");

// 云函数入口函数
exports.main = async (event, context) => {
  // 初始化环境
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
  console.log(event, "====参数======");
  // 查询活动信息
  let post = await db
    .collection("post")
    .where({
      _id: event.id,
    })
    .get();

  let postInfo = post.data[0];
  // 当前活动是我的吗
  let isCreator = postInfo.openid == wxContext.OPENID ? true : false;
  return {
    event,
    isCreator: isCreator,
    data: post.data,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
  };
};
