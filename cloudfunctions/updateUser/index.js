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

    let user = await db.collection('user').where({
        openId: wxContext.OPENID
    }).limit(1).orderBy('_createTime', 'desc').get();

    if(user.data.length == 0){
        return;
    }
    let result = user.data[0]
    let addscore = event.score ? event.score : 1
    let score = result.score ? parseInt(result.score) + addscore  : addscore

    // 我参与的数据
    let res = await db.collection('user').where({
        openId: wxContext.OPENID
    }).update({
        data: {
            // 1-活动结束，0-活动开始
            score: score,
            latitude: event.latitude,
            longitude: event.longitude
        }
    });

    return result.nickName + result.score
}