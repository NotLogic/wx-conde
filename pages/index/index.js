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
    pager: {
      page: 1,
      limit: 10,
      tab: 'all',
    },
    defaultClassify: 'all'
  },
  onLoad: function () {
    this.paging()
  },
  onPullDownRefresh(){
    this.paging(true).then(function(){
      wx.stopPullDownRefresh()
    }).catch(function(){
      wx.stopPullDownRefresh()
    })
  },
  // 下拉到底触发
  onReachBottom(){
    var vm=this
    vm.data.pager.page++
    vm.paging()
  },
  switchClassify(event){
    var vm = this
    var eventData = event ? event.currentTarget.dataset : {}
    var classify = eventData.classify || vm.data.defaultClassify
    vm.data.pager.tab = classify
    vm.data.pager.page = 1
    vm.paging(true)
  },
  paging(reset){
    var vm = this
    var classify = vm.data.pager.tab
    vm.setData({
      drawerShow: false
    })
    wx.setNavigationBarTitle({
      title: vm.data.classifyMap[classify]
    })
    return new Promise(function(resolve,reject){
      gettopics(vm.data.pager).then(function (res) {
        var currentPageData = vm.data.currentPageData
        if (reset) {
          vm.setData({
            currentPageData: res
          })
        } else {
          vm.setData({
            currentPageData: currentPageData.concat(res)
          })
        }
        resolve()
      }).catch(function(err){
        reject(err)
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
