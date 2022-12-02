/**
 * 首页查询数据列表
 *
 * @author: eysonyou
 * @create: 2019-05-16
 */

// 云函数入口文件
const cloud = require('wx-server-sdk')

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
    const wxContext = cloud.getWXContext();

    // 我参与的数据
    let apply = await db.collection('post').where({
        openid: wxContext.OPENID
    }).limit(1000).orderBy('_createTime', 'desc').get();

    return {
        event,
        data: apply.data,
        openid: wxContext.OPENID,
        appid: wxContext.APPID,
        unionid: wxContext.UNIONID,
    }
}
