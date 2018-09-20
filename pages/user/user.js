// pages/user/user.js
import { getUserDetails, getUserCollect } from '../../utils/api.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentLoginName: '',
    pageData: {},
    current: 'replay',
    currentMap: {
      'replay': '最近回复',
      'topic': '最近发帖',
      'collection': '收藏',
    },
    // 当前展示的数据
    currentData: [],
    // 存放数据的map
    currentDataMap: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.initUser(options.loginname)
    this.data.currentLoginName = options.loginname
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  initUser(loginname){
    var vm = this
    wx.setNavigationBarTitle({
      title: '@ ' + loginname + '的主页'
    })
    getUserDetails(loginname).then(function(res){
      var obj={}
      obj.replay = res.recent_replies
      obj.topic = res.recent_topics
      vm.setData({
        pageData: res,
        currentDataMap: obj,
        currentData: res.recent_replies
      })
    })
  },
  handleChange(event){
    var vm = this, dataset = event.currentTarget.dataset
    var current = dataset.current, value = dataset.value
    var currentData = vm.data.currentDataMap[current]
    if (typeof currentData != 'undefined'){
      vm.setData({
        currentData: currentData
      })
    }else{
      getUserCollect(vm.data.currentLoginName).then(function(res){
        currentData = res
        vm.data.currentDataMap[current] = res
        vm.setData({
          currentData: currentData
        })
      })
    }
  }
})