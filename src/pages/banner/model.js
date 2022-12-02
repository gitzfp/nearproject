export default {
  namespace: 'banner',
  state: {
    temperature: 30,
    humidity: 70
  },
  // 同步操作，唯一可以修改state的地方
  reducers: {},
  // 异步操作和业务逻辑
  effects: {},
  // 监听数据：history路由变化等
  subscriptions: {}
}