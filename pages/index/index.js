//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    translation:'',
    inputtext:'',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  listenerInput:function(e){
    var that = this
    that.setData({
      inputtext:e.detail.value
    })
  },
  listenerTrans: function () {
        var that = this;
    wx.request({
      url: 'https://fanyi.youdao.com/openapi.do?keyfrom=translatessss&key=660709134&type=data&doctype=json&version=1.1',
      data: {
        q:that.data.inputtext
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
        that.setData({
        translation:res.data.translation

        })

      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })

  } 
})
