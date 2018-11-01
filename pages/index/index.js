//index.js
//获取应用实例
import { gettopics, getPrivacy } from '../../utils/api.js'
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
      // 'dev': '客户端测试'
    },
    classifyIcon: {
      'all': 'barrage_fill',
      'ask': 'customerservice_fill',
      'good': 'praise_fill',
      'share': 'share_fill',
      'job': 'financial_fill',
      // 'dev': 'warning_fill'
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
  },
  getUserInfo(){
    wx.login({
      success: function(res){
        var code = res.code
        getPrivacy(code).then(function(res){
          console.log('res: ',res)
          var openid = res.openid,
            session_key = res.session_key
          
        }).catch(function(errMsg){
          console.log('errMsg: ', errMsg)
        })
      }
    })
    // 注意： wx.authorize({scope: "scope.userInfo"})，需要使用 <button open-type="getUserInfo"></button>
    // wx.authorize({
    //   scope: 'scope.address',
    //   success: function(data){
    //     console.log(data)
    //   },
    //   fail: function(err){
    //     console.log(err)
    //   }
    // })
    // wx.getSetting({
    //   success: function(data){
    //     console.log('success data: ',data)
    //   },
    //   fail: function(err){
    //     console.log('err: ', data)
    //   }
    // })
    // wx.getUserInfo({
    //   lang: 'zh_CN',
    //   success: function(data){
    //     console.log('getUserInfo data: ', data)
    //   },
    //   fail: function(err){
    //     console.log('getUserInfo err: ', data)
    //   }
    // })
  },
  getAuth(){
    // scope.userInfo  用户信息
    // scope.userLocation  地理位置
    // scope.address  通讯地址
    // scope.invoiceTitle  发票抬头
    // scope.werun  微信运动步数
    // scope.record  录音功能
    // scope.writePhotosAlbum  保存到相册
    // scope.camera  摄像头
  }
})
