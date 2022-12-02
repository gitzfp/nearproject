// 云函数入口文件
const cloud = require('wx-server-sdk')
//const requestpromise = require('request-promise');

// 云函数入口函数
exports.main = async (event, context) => {

    cloud.init({
        env: event.env
    })
    switch (event.action) {
        case 'getcellphone':{
            return getCellphone(event);
        }
        default: {
            return
        }
    }
}

async function getCellphone(event){
    const res = await cloud.getOpenData({
        list: [event.id], // 假设 event.openData.list 是一个 CloudID 字符串列表
    })
    return {res,event};

}
