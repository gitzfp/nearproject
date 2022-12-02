/**
 * 轮播图组件
 */
import Taro, { Component } from '@tarojs/taro';
import { Swiper, SwiperItem, Image } from '@tarojs/components';
import React from 'react'
import PropTypes from 'prop-types';
import './index.scss';

export default class MySwiper extends React.Component {
  static propTypes = {
    banner: PropTypes.array,
  };

  static defaultProps = {
    banner: [],
  };

  goWebView(url){
    if(!url){
      return
    }
    Taro.setStorageSync('url',url)
    Taro.navigateTo({
      url: '/pages/webview/index'
    })
  }

  render() {
    const { banner } = this.props;
    return (
      <Swiper
        className="swiper-container"
        circular
        indicatorDots
        indicatorColor='#999'
        indicatorActiveColor='#bf708f'
        autoplay>
        { banner.map((item, index) => (
          <SwiperItem onClick={()=>this.goWebView(item.url)} key={index}>
            <Image className="swiper-img" mode="widthFix" src={item.image_src}></Image>
          </SwiperItem>
        ))}
      </Swiper>
    )
  }
}
