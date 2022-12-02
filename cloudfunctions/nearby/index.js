/**
 * 首页查询数据列表
 *
 * @author: eysonyou
 * @create: 2019-05-16
 */

// 云函数入口文件
const cloud = require("wx-server-sdk")

// 云函数入口函数
exports.main = async (event, context) => {
  cloud.init({
    // 1.release - 正式
    // 2.test    - 测试
    // env: 'test'
    env: event.env,
  })

  // 初始化数据库连接
  const db = cloud.database()
  const _ = db.command
  const wxContext = cloud.getWXContext()
  console.log(event.longitude, "===", event.latitude)

  // 我参与的数据
  let apply = null //await db.collection('post').limit(1000).orderBy('createTime', 'desc').get();
  if (!event.search) {
    apply = await db
      .collection("post")
      .aggregate()
      .geoNear({
        distanceField: "distance", // 输出的每个记录中 distance 即是与给定点的距离
        spherical: true,
        distanceMultiplier: 6371,
        near: db.Geo.Point(event.longitude, event.latitude),
        // key: "location", // 若只有 location 一个地理位置索引的字段，则不需填
        // includeLocs: "location", // 若只有 location 一个是地理位置，则不需填
      })
      .skip(event.page * event.pageSize) // 跳过结果集中的前 10 条，从第 11 条开始返回
      .limit(event.pageSize)
      .end()
    apply = apply.list
  } else {
    apply = await db
      .collection("post")
      .where({
        title: db.RegExp({
          regexp: event.search, //从搜索栏中获取的value作为规则进行匹配。
          options: "i", //大小写不区分
        }),
      })
      .get()
    apply = apply.data
  }
  return {
    event,
    data: apply,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
  }
}
