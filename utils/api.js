var http = require('./http.js')

export function gettopics(data){
  return http({
    url: 'topics',
    data: data
  })
}

export function gettopicsDetails(id){
  return http({
    url: 'topic/' + id
  })
}

export function getUserDetails(loginname){
  return http({
    url: 'user/' + loginname
  })
}

export function getUserCollect(loginname) {
  return http({
    url: 'topic_collect/' + loginname
  })
}

export function getPrivacy(code){
  var appid = 'wxf0354984d68b8ac8',
    secret = 'a1883829284775b9eddbe12ef31477dd',
    grant_type = 'authorization_code',
    js_code = code
  return new Promise(function(resolve, reject){
    wx.request({
      url: 'https://api.weixin.qq.com/sns/jscode2session',
      data: {
        appid, //  小程序appId
        secret, //  小程序appSecret
        js_code,  //  登录时获取的 code
        grant_type //  授权类型 authorization_code  固定值，不需要改变
      },
      success: function (res) {
        console.log('原始res: ',res)
        var errcode = res.data.errcode
        if (errcode == 40029 || errcode == 45011) {
          reject('获取openid失败！')
        } else if (errcode == -1){
          reject('系统繁忙，此时请稍候再试！')
        }else{
          resolve(res.data)
        }
      }
    })
  })
}