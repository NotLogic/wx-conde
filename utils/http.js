var BASE_URL = 'https://cnodejs.org/api/v1/'
var BASE_HEADER = {
  // 'content-type': 'application/x-www-form-urlencoded',
}
// 传参风格同axios
function http(params,header) {
  wx.showLoading({
    title: '加载中',
  })
  if (typeof (params) != 'object')return
  var url = params.url,
    method = params.method || 'get',
    // requestParams = params.params || {},
    requestData = params.data || {}
  header = header || {}
  var selfHeader = Object.assign(BASE_HEADER, header)
  return new Promise(function(resolve,reject){
    wx.request({
      url: BASE_URL + url,
      method: method,
      // params: requestParams,
      data: requestData,
      header: selfHeader,
      success: function (res) {
        if (res.statusCode == 200) {
          var resData = res.data
          if (resData.success) {
            var data = resData.data
            resolve(data)
          }
        }
      },
      fail: function (err) {
        reject(err)
      },
      complete: function () {
        wx.hideLoading();
      }
    })
  })
}

module.exports = http