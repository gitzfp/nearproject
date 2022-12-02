import { WebView } from '@tarojs/components'
import React, { Component } from 'react'
import Taro from '@tarojs/taro'

export class Index extends Component {
  
componentWillMount () {
  console.log(this.$router,"ssss") // 输出 { id: 2, type: 'test' }
}
  render() {
    let url = Taro.getStorageSync('url')
    return (
      <WebView src={url}>
      </WebView>
    )
  }
}



export default Index
