import {
  View,
  Image,
  Button,
  Map,
  CoverImage,
  Block,
  Form,
  Input,
  Textarea,
  contentSize,
} from "@tarojs/components";
import React from "react";
import { CDN_PATH } from "../config/appConfig.js";
import "../pages/post/post.scss";
import Taro from "@tarojs/taro";

let app = Taro.getApp().$app;
export default class UpdatePost extends React.Component {
  constructor() {
    super();
    this.state = {
      iconPath: `${CDN_PATH}/Marker3_Activated@3x.png`,
      content: "",
      contentSize: 0,
      getLocation: "",
      location: "",
      latitude: 0,
      longitude: 0,
      isLogin: false,
      files: [],
      status: 0,
      sceneIndex: 0,
    };
  }

  handleImage = (filePath, index) => {
    let that = this;
    // get file EXT,for .jpg
    let ext = filePath.match(/\.[^.]+?$/)[0];
    let sceneIndex = that.state.sceneIndex;
    let time = new Date().getTime();
    let rand = parseInt(Math.random() * 100000);
    let cloudPath = `img_${sceneIndex}_${time}_${rand}${ext}`;
    console.log(cloudPath);
    Taro.cloud.uploadFile({
      cloudPath: cloudPath,
      filePath: filePath,
      success: function(res) {
        // 图片上传成功
        console.log(res.fileID);
        let currentFile = that.state.files;
        currentFile.push(res.fileID);
        that.setState(
          {
            // 只能上传一张，每次会覆盖
            files: currentFile,
          },
          () => {
            console.log(that.state.files, "当前图片数组");
          }
        );

        // 鉴定敏感图片
        let contentType = ext.replace(/\./g, "");
        console.log(contentType);
        Taro.cloud
          .callFunction({
            name: "imgSecCheck",
            data: {
              env: app.globalData.env,
              contentType: "image/png",
              fileID: res.fileID,
            },
          })
          .then((res) => {
            if (index != 0) {
              Taro.showToast({
                title: "提示1",
                title: "图片上传成功",
              });
            }
          })
          .catch((err) => {
            // 敏感图片，清空参数值
            // that.setData({
            //   fileID: '',
            //   files: []
            // })
            console.log(err, "图片上传失败");
            Taro.showToast({
              title: "提示",
              content: "图片上传失败",
            });
          });
      },
      fail: function(e) {
        // todo
        console.log(e);
      },
      complete: function() {
        Taro.hideLoading();
      },
    });
  };

  chooseImage = (e) => {
    var that = this;
    Taro.chooseImage({
      // 只能上传一张
      count: that.imgUploadMax,
      // 可以指定是原图还是压缩图，默认二者都有
      sizeType: ["original", "compressed"],
      // 可以指定来源是相册还是相机，默认二者都有
      sourceType: ["album", "camera"],
      success: function(res) {
        Taro.showLoading({
          title: "图片上传中...",
        });
        console.log(res, "图片上传");
        res.tempFilePaths.map((filePath, index) => {
          that.handleImage(filePath, index);
        });
      },
      fail: function(e) {
        console.log("----upload fail----");
        console.log(e);
      },
      complete: function(res) {
        Taro.hideLoading();
      },
    });
  };

  cancelPost = (status) => {
    var that = this;
    // 全局显示loading
    Taro.showLoading({
      title: "提交中...",
    });
    let tempData = {
      status: status,
      postId: this.props.detail._id,
      env: app.globalData.env,
    };
    // 调用云函数
    Taro.cloud
      .callFunction({
        name: "cancelPost",
        data: {
          env: app.globalData.env,
          status: status,
          _id: this.props.detail._id,
        },
      })
      .then((res) => {
        console.log(res, tempData, "===========");
        console.log("call CANCELPOST func ok");
        this.setState({
          status: !this.state.status,
        });
        // 隐藏loading
        Taro.hideLoading();
      })
      .catch((err) => {
        console.log(err, tempData + "===apply 居然 有===");
        console.log(err);
        console.log("call CANCELPOST func err");
        Taro.hideLoading();
        Taro.showModal({
          title: "提示",
          content: "系统异常，请稍后再试",
        });
      });
  };

  deleteImage = (e, index) => {
    e.stopPropagation();
    this.state.files.splice(index, 1);
    this.setState({
      files: this.state.files,
    });
  };

  previewImage = (e) => {
    Taro.previewImage({
      current: e.currentTarget.id, // 当前显示图片的http链接
      urls: this.state.files, // 需要预览的图片http链接列表
    });
  };

  addPost = (data) => {
    // 调用云函数
    Taro.cloud
      .callFunction({
        name: "post",
        data: data,
      })
      .then((res) => {
        console.log(res);
        console.log("post POST func success");
        // 隐藏loading
        Taro.hideLoading();

        // 跳到详情页
        // Taro.redirectTo({

        //   url: `/pages/nearby/nearby`
        // })

        Taro.showToast({
          title: "修改成功",
        });
      })
      .catch((err) => {
        console.log(err);
        console.log("post POST func err");
        Taro.hideLoading();
        Taro.showModal({
          title: "提示",
          content: "系统异常，请稍后再试",
        });
      });
  };
  /**
   * 提交数据
   */
  bindSubmit = (e) => {
    if (!this.state.isLogin) {
      Taro.showModal({
        title: "提示",
        content: "发布失败，请先登录",
      });
      return;
    }
    let data = e.detail ? e.detail.value : {};
    console.log(this.props, "熟悉");
    let userInfo = Taro.getStorageSync("user");

    data["env"] = app.globalData.env;
    // 解决textarea组件在表单提交时无法获取内容的BUG
    data.content = this.state.content;
    // 图片
    data["fileID"] = this.state.files.toString();

    // 增加用户信息
    console.log(userInfo, "=========用户信息");
    data["nickName"] = userInfo.nickName;
    data["avatarUrl"] = userInfo.avatarUrl;
    data["city"] = userInfo["city"];
    data["country"] = userInfo["country"];
    data["gender"] = userInfo["gender"];
    data["language"] = userInfo["language"];
    data["latitude"] = this.state.latitude;
    data["longitude"] = this.state.longitude;
    data["location"] = JSON.stringify(this.state.location);
    data["_id"] = this.props.detail._id;
    console.log(data);
    console.log("post submit data");

    if (data["maximum"] < 0 || data["maximum"] > 1000) {
      Taro.showToast({
        title: "超出报名上限（1~1000）",
        icon: "none",
      });

      return;
    }

    if (!data["title"]) {
      Taro.showToast({
        title: data["sceneIndex"] == 0 ? "请输入活动主题" : "请输入商品名称",
        icon: "none",
      });

      return;
    }

    if (parseInt(data["sceneIndex"]) === 1 && !data["amount"]) {
      Taro.showToast({
        title: "请输入商品价格",
        icon: "none",
      });

      return;
    }

    if (!data["content"]) {
      Taro.showToast({
        title: data["sceneIndex"] == 0 ? "请输入活动内容" : "请输入商品描述",
        icon: "none",
      });

      return;
    }

    if (!data["getLocation"]) {
      Taro.showToast({
        title: data["sceneIndex"] == 0 ? "请输入取货地点" : "请输入取货地点",
        icon: "none",
      });

      return;
    }

    if (!data["fileID"]) {
      Taro.showToast({
        title: "请至少上传一张图片",
        icon: "none",
      });
      return;
    }

    // 全局显示loading
    Taro.showLoading({
      title: "提交中...",
    });

    console.log(data, "提交数据,update,update");
    this.addPost(data);
  };
  // 点击地图事件
  onTapMap = (event) => {
    this.onChooseLocation();
  };
  onChooseLocation() {
    Taro.chooseLocation({
      success: (res) => {
        console.log(res, "位置是多少");
        this.setState({
          getLocation: res.address,
          latitude: res.latitude,
          longitude: res.longitude,
        });
      },
    });
  }
  bindInput = (e) => {
    let v = e.detail ? e.detail.value : "";
    this.setState({
      content: v,
      contentSize: v.length,
    });
  };
  componentWillReceiveProps(nextProps) {
    this.setState({
      content: nextProps.detail.content,
    });
  }
  render() {
    const { fileList, detail, bindUserInfo } = this.props;
    this.state.files = fileList;
    this.state.contentSize = this.state.contentSize || detail.content.length;
    this.state.getLocation = this.state.getLocation || detail.getLocation;
    this.state.latitude = this.state.latitude || detail.latitude;
    this.state.longitude = this.state.longitude || detail.longitude;
    this.state.isLogin = this.state.isLogin || this.props.isLogin;
    this.state.status = this.state.status || detail.status;
    return (
      <View className="page">
        {!this.state.isLogin && (
          <button
            className="login-button"
            ref="loginButton"
            open-type="getUserInfo"
            lang="zh_CN"
            onGetUserInfo={bindUserInfo}
          >
            请先登录1
          </button>
        )}
        {this.state.isLogin && (
          <Form onSubmit={this.bindSubmit}>
            <View className="weui-cells weui-cells_after-title">
              {/*  二手发布  */}
              <View>
                {/*  商品名称  */}
                <View className="weui-cell weui-cell_input">
                  <View className="weui-cell__hd">
                    <View className="weui-label">商品名称</View>
                  </View>
                  <View className="weui-cell__bd">
                    <Input
                      name="title"
                      confirmType="next"
                      maxlength="64"
                      value={detail.title}
                      className="weui-input"
                      placeholder="例如：华为手机"
                    ></Input>
                  </View>
                </View>
                {/*  上传图片  */}
                <View
                  className="weui-cell weui-cell_input"
                  style="display:flex;flex-wrap: wrap;padding-left: 18px;"
                  id="uploaderFiles"
                >
                  {this.state.files.map((item, index) => {
                    return (
                      <Block key={index}>
                        <View
                          className="weui-uploader__file"
                          onClick={(e) =>
                            this.previewImage(e, this.state.files)
                          }
                          id={item}
                        >
                          <Image
                            className="weui-uploader__img"
                            src={item}
                            mode="aspectFill"
                          ></Image>
                          <View
                            className="weui-delete-image"
                            onClick={(e) => this.deleteImage(e, index)}
                          >
                            删除
                          </View>
                        </View>
                      </Block>
                    );
                  })}
                </View>
                <View className="weui-cell weui-cell_input">
                  <View className="weui-cell__hd">
                    <View className="weui-label">上传图片</View>
                  </View>
                  <View className="weui-uploader__input-box">
                    <View
                      className="weui-uploader__input"
                      onClick={this.chooseImage}
                    ></View>
                  </View>
                </View>
                {/*  商品价格  */}
                <View className="weui-cell weui-cell_input">
                  <View className="weui-cell__hd">
                    <View className="weui-label">商品价格</View>
                  </View>
                  <View className="weui-cell__bd">
                    <Input
                      type="digit"
                      name="amount"
                      confirmType="next"
                      className="weui-input"
                      placeholder="例如：9.9"
                      value={detail.amount}
                    ></Input>
                  </View>
                </View>
                <View className="weui-cell weui-cell_input">
                  <View className="weui-cell__hd">
                    <View className="weui-label">商品原价</View>
                  </View>
                  <View className="weui-cell__bd">
                    <Input
                      type="digit"
                      name="orgin_amount"
                      confirmType="next"
                      className="weui-input"
                      placeholder="例如：99"
                      value={detail.orgin_amount}
                    ></Input>
                  </View>
                </View>
                {/*  商品内容  */}
                <View className="weui-cell">
                  <View className="weui-cell__bd">
                    <Textarea
                      name="content"
                      maxlength="200"
                      onInput={this.bindInput}
                      className="weui-textarea"
                      placeholder="商品描述，不超过200字"
                      autoHeight={true}
                      value={this.state.content}
                    ></Textarea>
                    <View className="weui-textarea-counter">
                      {this.state.contentSize + "/200"}
                    </View>
                  </View>
                </View>
                <View className="weui-cell weui-cell_input">
                  <View className="weui-cell__hd">
                    <View className="weui-label">联系电话</View>
                  </View>
                  <View className="weui-cell__bd">
                    <Input
                      name="mobilePhone"
                      confirmType="next"
                      maxlength="12"
                      className="weui-input"
                      placeholder="请输入联系电话"
                      value={detail.mobilePhone}
                    ></Input>
                  </View>
                </View>
                <View className="weui-cell weui-cell_input">
                  <View className="weui-cell__hd">
                    <View className="weui-label">取货时间</View>
                  </View>
                  <Input
                    name="getTime"
                    confirmType="next"
                    maxlength="12"
                    className="weui-input"
                    placeholder="请输入取货时间"
                    value={detail.getTime}
                  ></Input>
                </View>
                <View className="weui-cell weui-cell_input">
                  <View className="weui-cell__hd">
                    <View className="weui-label">取货地点</View>
                  </View>
                  <View className="weui-cell__bd">
                    <Input
                      name="getLocation"
                      confirmType="next"
                      maxlength="12"
                      value={this.state.getLocation}
                      className="weui-input"
                      placeholder="点击地图进入地址选择"
                    ></Input>
                  </View>
                </View>
                <View className="weui-cell" onClick={this.onTapMap}>
                  <Map
                    className="map"
                    id="map"
                    latitude={this.state.latitude}
                    longitude={this.state.longitude}
                    scale="16"
                    onClick={this.onTapMap}
                    enableZoom={true}
                    enableScroll={false}
                  >
                    {/* <CoverView      className="current-site-icon"> */}
                    <Image
                      className="current-site-icon"
                      onLoad={this.onLoadImage}
                      onError={this.onErrorImage}
                      src={this.state.iconPath}
                      onClick={this.onTapMap}
                    ></Image>
                    {/* </CoverView> */}
                  </Map>
                  {/* <ShopMap /> */}
                </View>
              </View>
              <View className="weui-cell" style="clear:left">
                商品状态: {this.state.status == 1 ? "已出" : "出售中"}
                {this.state.status == 0 && (
                  <Button
                    type="default"
                    style="margin:10px;display:inline;color:blue"
                    onclick={() => this.cancelPost(1)}
                  >
                    置为已出
                  </Button>
                )}
                {this.state.status == 1 && (
                  <Button
                    type="default"
                    style="margin:10px;display:inline;color:blue"
                    onclick={() => this.cancelPost(0)}
                  >
                    置为在售
                  </Button>
                )}
              </View>
            </View>
            {/*  提交按钮  */}
            <View className="ui-button">
              <Button className="weui-btn" type="primary" formType="submit">
                修改
              </Button>
            </View>
          </Form>
        )}
      </View>
    );
  }
}
