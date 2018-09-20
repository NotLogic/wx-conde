//index.js
//获取应用实例
import { gettopics } from '../../utils/api.js'
const app = getApp()

Page({
  data: {
    drawerShow: false,
    classifyMap: {
      'all': '全部',
      'ask': '问答',
      'good': '精华',
      'share': '分享',
      'job': '招聘',
      'dev': '客户端测试'
    },
    classifyIcon: {
      'all': 'barrage_fill',
      'ask': 'customerservice_fill',
      'good': 'praise_fill',
      'share': 'share_fill',
      'job': 'financial_fill',
      'dev': 'warning_fill'
    },
    currentPageData: [],
    pageData: {},
    pager: {
      page: 1,
      limit: 10,
      tab: 'all',
    },
    defaultClassify: 'all'
  },
  onLoad: function () {
    this.paging()
    // 搜索一直超时，官网也是
    // wx.request({
    //   url: 'https://cnodejs.org/search',
    //   data: {
    //     q: 'react'
    //   },
    //   success: function (res) {
    //     if (res.statusCode == 200) {
    //       var resData = res.data
    //       if (resData.success) {
    //         var data = resData.data
    //         console.log('搜索data: ',data)
    //       }
    //     }
    //   },
    //   fail: function (err) {
    //     console.log('搜索err: ',err)
    //   },
    //   complete: function () {
    //     wx.hideLoading();
    //   }
    // })
  },
  updateData(event){
    var vm = this
    var eventData = event ? event.currentTarget.dataset : {}
    var classify = eventData.classify || vm.data.defaultClassify
    vm.paging(classify)
  },
  paging(classify){
    var vm = this
    // 关闭左侧面板
    vm.setData({
      drawerShow: false
    })
    classify = classify || vm.data.pager.tab
    wx.setNavigationBarTitle({
      title: vm.data.classifyMap[classify]
    })
    vm.data.pager.tab = classify
    gettopics(vm.data.pager).then(function (res) {
      console.log('页面加载数据： ',res)
      var pageData = vm.data.pageData
      if (typeof pageData[classify] == 'undefined') {
        pageData[classify] = res
      } else {

      }
      vm.setData({
        currentPageData: res
      })
    })
  },
  // 返回顶部
  backTop(event){
    wx.pageScrollTo({
      scrollTop: 0
    })
  },
  // 展示测边面板
  toggleDrawer(event){
    var vm = this
    var drawerShow = vm.data.drawerShow
    drawerShow = !drawerShow
    vm.setData({
      drawerShow: drawerShow
    })
  }
})
