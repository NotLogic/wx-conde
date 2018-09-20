// pages/detail/detail.js
import { gettopicsDetails } from '../../utils/api.js'
var WxParse = require('../../wxParse/wxParse.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageData: {},
    reply: {},
    replayKeys: ['replies', 'reply_count','last_reply_at']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getDetails(options.id)
    wx.setNavigationBarTitle({
      title: options.title || ''
    })
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
  // 查看详情
  getDetails(id) {
    var vm = this
    gettopicsDetails(id).then(function (res) {
      var reply = {}, pageData={}
      for(var key in res){
        if (vm.data.replayKeys.indexOf(key) != -1){
          reply[key] = res[key]
        }else{
          pageData[key] = res[key]
        }
      }
      WxParse.wxParse('article', 'html', pageData.content, vm, 0)
      vm.setData({
        pageData: pageData,
        reply: reply
      })
    })
  },
})