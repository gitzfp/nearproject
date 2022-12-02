import { Block, View, Map, Text } from '@tarojs/components'
import React from 'react'
import Taro from '@tarojs/taro'
import withWeapp from '@tarojs/with-weapp'
import { CDN_PATH, PLUGIN_KEY } from '../../config/appConfig.js'
import './event.scss'
import  QQMapWX from '../utils/qqmap-wx-jssdk.min.js'
const qqmapsdk = new QQMapWX({
  key: PLUGIN_KEY // 必填
})

@withWeapp({
  /**
   * 页面的初始数据
   */
  data: {
    CDN_PATH,
    location: {
      latitude: 40.040415,
      longitude: 116.273511
    },
    markers: [
      {
        id: 0,
        iconPath: `${CDN_PATH}/Marker3_Activated@3x.png`,
        latitude: 40.040415,
        longitude: 116.273511,
        width: 30,
        height: 30
      }
    ],
    mapCallbackTxt: '点击地图触发回调事件',
    markerCallbackTxt: '点击标注点触发回调事件',
    poiCallbackTxt: '点击POI触发回调事件',
    regionCallbackTxt: '拖动地图触发视野回调'
  },
  // 点击地图事件
  onTapMap(event) {
    const latitude = event.detail.latitude
    const longitude = event.detail.longitude
    console.log("come on")
    // this.setData({
    //   mapCallbackTxt: latitude.toFixed(6) + ',' + longitude.toFixed(6),
    //   markers: [
    //     {
    //       id: 0,
    //       iconPath: `${CDN_PATH}/Marker3_Activated@3x.png`,
    //       latitude: latitude,
    //       longitude: longitude,
    //       width: 30,
    //       height: 30
    //     }
    //   ]
    // })
    qqmapsdk.reverseGeocoder({
      // 调用逆地址解析
      location: {
        latitude: latitude,
        longitude: longitude
      },
      success: res => {
        if (res.result && res.result.formatted_addresses) {
          console.log(res.result.formatted_addresses,"====")
          // 避免名称无数据处理
          // this.setData({
          //   markerCallbackTxt: res.result.formatted_addresses.recommend
          // })
        } else {
          console.log(res.result.address,"====")
          // this.setData({
          //   markerCallbackTxt: res.result.address
          // })
        }
      },
      fail: res=>{
        console.log(res,"shibai")
      }
    })
  },
  // 标注点击回调
  onTapMarker(event) {
    const markers = this.data.markers
    for (let i = 0; i < markers.length; i++) {
      // 本示例只有一个marker，可用于处理单marker和多marker情况
      if (event.markerId === markers[i].id) {
        qqmapsdk.reverseGeocoder({
          // 调用逆地址解析
          location: {
            latitude: markers[i].latitude,
            longitude: markers[i].longitude
          },
          success: res => {
            if (res.result && res.result.formatted_addresses) {
              // 避免名称无数据处理
              this.setData({
                markerCallbackTxt: res.result.formatted_addresses.recommend
              })
            } else {
              this.setData({
                markerCallbackTxt: res.result.address
              })
            }
          }
        })
      }
    }
  },

  // poi点击回调
  onTapPoi(event) {
    const name =
      event.detail.name.length <= 8
        ? event.detail.name
        : event.detail.name.substring(0, 8) + '...'
    const latitude = event.detail.latitude
    const longitude = event.detail.longitude
    this.setData({
      poiCallbackTxt:
        name + '：' + latitude.toFixed(6) + ',' + longitude.toFixed(6)
    })
  },

  // 监听视野变化
  onChangeRegion(event) {
    if (event.type === 'end' && event.causedBy === 'drag') {
      const mapCtx = Taro.createMapContext('map', this)
      mapCtx.getCenterLocation({
        success: res => {
          const latitude = res.latitude
          const longitude = res.longitude
          this.setData({
            regionCallbackTxt:
              '中心点坐标：' + latitude.toFixed(6) + ',' + longitude.toFixed(6)
          })
        }
      })
    }
  },
  onShareAppMessage: function() {
    return {
      title: '腾讯位置服务示例中心'
    }
  }
})
class TaroMap extends React.Component {
  render() {
    const {
      location,
      markers,
      mapCallbackTxt,
      markerCallbackTxt,
      poiCallbackTxt,
      regionCallbackTxt
    } = this.data
    return (
      // <View className="map-event-container">
      //   <View className="map-event-content">
      //     <View className="introduce plr20">
      //       此示例展示地图触发事件回调效果，支持地图点击、标注点击、气泡点击、控件点击、地图渲染更新、视野变化、POI点击等回调。
      //     </View>
          <View className="map-container plr20">
            <Map
              className="map"
              id="map"
              latitude={location.latitude}
              longitude={location.longitude}
              markers={markers}
              scale="16"
              onRegionchange={this.onChangeRegion}
              onClick={this.onTapMap}
              onPoitap={this.onTapPoi}
              onMarkertap={this.onTapMarker}
            ></Map>
          </View>
      //     <View className="feature-container pl20">
      //       <View className="feature-content  border-bottom">
      //         <Text className="feature-label">地图点击回调</Text>
      //         <Text className="feature-txt">{mapCallbackTxt}</Text>
      //       </View>
      //       <View className="feature-content  border-bottom">
      //         <Text className="feature-label">标注点击回调</Text>
      //         <Text className="feature-txt">{markerCallbackTxt}</Text>
      //       </View>
      //       <View className="feature-content border-bottom">
      //         <Text className="feature-label">POI点击回调</Text>
      //         <Text className="feature-txt">{poiCallbackTxt}</Text>
      //       </View>
      //       <View className="feature-content">
      //         <Text className="feature-label">视野变化回调</Text>
      //         <Text className="feature-txt">{regionCallbackTxt}</Text>
      //       </View>
      //     </View>
      //   </View>
      // </View>
    )
  }
}

export default TaroMap
