//app.js
App({
  onLaunch: function () {
    var that=this;
    wx.getSystemInfo({
      success: function (res) {
        that.globalData.statusBarHeight = res.statusBarHeight;
      }
    })
    
  },
  
  globalData: {
    statusBarHeight:0
  }
})