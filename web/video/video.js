// web/video/video.js
var template = require('../common/template.js');
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current:0,//热度0，时间1
    videoPlay: null,
    vedio_data: [{
      title: '视频标题1',
      url: 'http://1253151570.vod2.myqcloud.com/2717553dvodgzp1253151570/7fbd6bb25285890789703485005/083CmhTZe7UA.mp4'

    }, {
      title: '视频标题2',
      url: 'http://1253151570.vod2.myqcloud.com/2717553dvodgzp1253151570/7fbd6bb25285890789703485005/083CmhTZe7UA.mp4'

    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    template.tabbar("tabBar", 3, that)//0表示第一个tabbar 绑定的模板，显示当前第几项，this
    template.btnCart("btnCart", that)//进货单数量
    template.statusBar("statusBar", "视频列表", that)//标题栏
  },
  // 点击cover播放，其它视频结束
  videoPlay: function (e) {
    var _index = e.currentTarget.id
    this.setData({
      _index: _index
    })
    //停止正在播放的视频
    var videoContextPrev = wx.createVideoContext(this.data._index)
    videoContextPrev.stop();
    setTimeout(function () {
      //将点击视频进行播放
      var videoContext = wx.createVideoContext(_index)
      videoContext.play();
    }, 500)
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

  }
})