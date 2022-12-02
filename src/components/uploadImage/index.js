import { View, Image, Block, Input, Form, Button } from '@tarojs/components'
import React from 'react'
import './banner.scss'
import Taro from '@tarojs/taro'
export default class Image extends React.Component{
    constructor(){
      super()
      this.state = {
        files : []
      }
    }
    chooseImage(e){
      var that = this
      Taro.chooseImage({
        // 只能上传一张
        count: that.imgUploadMax,
        // 可以指定是原图还是压缩图，默认二者都有
        sizeType: ['original', 'compressed'],
        // 可以指定来源是相册还是相机，默认二者都有
        sourceType: ['album', 'camera'],
        success: function(res) {
          Taro.showLoading({
            title: '图片上传中...'
          })
          console.log(res,"图片上传")
          res.tempFilePaths.map((filePath,index)=>{
            console.log(that,this,"=====")
            that.handleImage(filePath,index)
          })
        },
        fail: function(e) {
          console.log('----upload fail----')
          console.log(e)
        },
        complete: function(res) {
          Taro.hideLoading()
        }
      })
    }
    handleImage(filePath, index){
      let that = this
      // get file EXT,for .jpg
      let ext = filePath.match(/\.[^.]+?$/)[0]
      let time = new Date().getTime()
      let rand = parseInt(Math.random() * 100000)
      let cloudPath = `img_${0}_${time}_${rand}${ext}`
      console.log(cloudPath)
      Taro.cloud.uploadFile({
        cloudPath: cloudPath,
        filePath: filePath,
        success: function(res) {
          // 图片上传成功
          console.log(res.fileID,"图片上传成功11")
          let currentFile = that.state.files;
          currentFile.push(res.fileID)
          that.setState({
            // 只能上传一张，每次会覆盖
            files: currentFile
          },()=>{
            console.log(that.state.files,"当前图片数组")
          })
          // 鉴定敏感图片
          let contentType = ext.replace(/\./g, '')
          console.log(contentType)
          Taro.cloud
            .callFunction({
              name: 'imgSecCheck',
              data: {
                env: app.globalData.env,
                contentType: 'image/png',
                fileID: res.fileID
              }
            })
            .then(res => {
              if(index != 0){
                Taro.showToast({
                  title: '提示1',
                  title: '图片上传成功'
                })
              }
            })
            .catch(err => {
              // 敏感图片，清空参数值
              // that.setData({
              //   fileID: '',
              //   files: []
              // })
              console.log(err,"图片上传失败")
              Taro.showToast({
                title: '提示',
                content: '图片上传失败'
              })
            })
        },
        fail: function(e) {
          // todo
          console.log(e)
        },
        complete: function() {
          Taro.hideLoading()
        }
      })
    }
    render() {
      const {files} = this.state
      return (
        <View className="page">
        <View className="weui-cell weui-cell_input" style="display:flex;flex-wrap: wrap;padding-left: 18px;" id="uploaderFiles">
                {files.map((item, index) => {
                  return (
                    <Block key={index}>
                      <View
                        className="weui-uploader__file"
                        onClick={this.previewImage}
                        id={item}
                      >
                        <Image
                          className="weui-uploader__img"
                          src={item}
                          mode="aspectFill"
                        ></Image>
                        <View className="weui-delete-image" onClick={(e)=>this.deleteImage(e,index)}>
                            删除
                        </View>
                      </View>
                    </Block>
                  )
                })}
              </View>
        <View className="weui-cell weui-cell_input">
          <View className="weui-cell__hd">
            <View className="weui-label">上传banner</View>
          </View>
          <View className="weui-uploader__input-box">
            <View
              className="weui-uploader__input"
              onClick={()=>this.chooseImage()}
            ></View>
          </View>
        </View>
      </View>
      )
    }
}