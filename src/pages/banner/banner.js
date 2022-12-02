import { View, Image, Block, Textarea, Input,Form, Button,  Map } from '@tarojs/components'
import React from 'react'
import './banner.scss'
import Taro from '@tarojs/taro'
import { CDN_PATH} from '../../config/appConfig.js'

const app = Taro.getApp().$app
class Banner extends React.Component{

    constructor(){
      super()
      this.state = {
        files : [],
        url: '',
        location: {
          latitude: app.globalData.latitude,
          longitude: app.globalData.longitude
        },
        getLocation: '',
        CDN_PATH,
        iconPath: `${CDN_PATH}/Marker3_Activated@3x.png`,
        markers: [{
          id: 0,
          iconPath: `${CDN_PATH}/Marker3_Activated@3x.png`,
          latitude: 40.040415,
          longitude: 116.273511,
          width: 30,
          height: 30
        }]
      }
    }
    bindInput(e){

      this.state.url =  e.detail ? e.detail.value : ''
      console.log(this.state.url, "=====url 地址")
    }
    goWebView(){
      Taro.setStorageSync('url',this.state.url)
      Taro.navigateTo({
        url: '/pages/webview/index'
      })
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

    deleteImage(e,index) {
      e.stopPropagation()
      let arr = this.state.files.splice(index, 1)
      console.log(this.state.files,"图片数组")
      this.setState({
        files: this.state.files
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
    bindSubmit(e){
      let data = e.detail ? e.detail.value : {}
      data['env'] = app.globalData.env
      data['isAdd'] = 1
      data['fileID'] = this.state.files.toString();

      data['latitude'] = this.state.location.latitude
      data['longitude'] = this.state.location.longitude

      if(!data['fileID']){
        Taro.showToast({
          title: '请先上传banner图',
          icon: 'none'
        })
  
        return
      }
      if(!data['url']){
        Taro.showToast({
          title: '请输入链接',
          icon: 'none'
        })
  
        return
      }
      Taro.cloud
      .callFunction({
        name: 'banner',
        data: data
      })
      .then(res => {
        console.log(res,"成功===")
        // 隐藏loading
        Taro.hideLoading()
        Taro.showToast({
          title: '发布成功',
          duration: 5000
        })
        // Taro.navigateBack()
        }).catch(err => {
          console.log(err,"对失败")
        })
        
    }
     // 点击地图事件
   onTapMap(event) {
    this.onChooseLocation();
  }
  onChooseLocation(){
    Taro.chooseLocation({
      success: res => {
        console.log(res,"位置是多少")
        this.setState({
          getLocation: res.address,
          location:{
            latitude: res.latitude,
            longitude: res.longitude
          }
        })
      }
    })
  }
    renderContent(){
      const {files, location, getLocation } = this.state
      return (<View className="weui-cells weui-cells_after-title">
            {/*  上传图片  */}
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
                <View className="weui-label">上传图片</View>
              </View>
              <View className="weui-uploader__input-box">
                <View
                  className="weui-uploader__input"
                  onClick={()=>this.chooseImage()}
                ></View>
              </View>
            </View>

            <View className="weui-cell weui-cell_input">
                <View className="weui-cell__hd">
                  <View className="weui-label">链接地址</View>
                </View>
   

                    <Textarea style="height: 100px; padding: 10px"
                      name="url"
                      maxlength="500"
                      onInput={(e)=>this.bindInput(e)}
                      className="weui-textarea"
                      placeholder="请输入链接地址"

                    ></Textarea>
              </View>
              <View className="weui-cell weui-cell_input">
                  <View className="weui-cell__hd">
                    <View className="weui-label">关联地点</View>
                  </View>
                  <View className="weui-cell__bd">
                    <Input
                      name="getLocation"
                      confirmType="next"
                      maxlength="12"
                      value={getLocation}
                      className="weui-input"
                      placeholder="点击地图进入地址选择"
                    ></Input>
                  </View>
                </View>
              <View className="weui-cell"  onClick={()=>this.onTapMap()}>
                  <Map
                    className="map"
                    id="map"
                    latitude={location.latitude}
                    longitude={location.longitude}
                    scale="16"
                    onClick={()=>this.onTapMap()}
                    enableZoom={true}
                    enableScroll={false}
                  >
                      <Image
                      className="current-site-icon"
                      onLoad={this.onLoadImage}
                      onError={this.onErrorImage}
                      src={this.state.iconPath}
                      onClick={()=>this.onTapMap()}
                    ></Image>
                  </Map>
                  </View>

       <Button src='https://mp.weixin.qq.com/' onClick={()=>this.goWebView()} >测试跳转</Button>
        <Button className="weui-btn" type="primary" formType="submit">
        确认发布
      </Button>
    </View>)
    }
    render() {
      
      return (
        <View className="page">
        <Form onSubmit={(e)=>this.bindSubmit(e)}>
            {this.renderContent()}
        </Form>
      </View>
    )
  }
}
export default Banner