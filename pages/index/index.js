// pages/index/index.js
var template = require('../../common/template.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    current:1,//短视频当前项
    videoswipercount:2,//短视频总数
    isautoplay:true,//视频轮播时候自动
    videoPlay: null,
    vedio_data: [{
      title: '视频标题1',
      url: 'http://1253151570.vod2.myqcloud.com/2717553dvodgzp1253151570/7fbd6bb25285890789703485005/083CmhTZe7UA.mp4'

    }, {
      title: '视频标题2',
      url: 'http://1253151570.vod2.myqcloud.com/2717553dvodgzp1253151570/7fbd6bb25285890789703485005/083CmhTZe7UA.mp4'

    }],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    template.tabbar("tabBar", 0, that,12)//0表示第一个tabbar 绑定的模板，显示当前第几项，this，进货单数值
    
  },
// 视频轮播图改变
  videoSwiperChange:function(e){
    var that=this;
    that.setData({
      current: e.detail.current+1,
    })
  },
 
  
  /**
 * 监听用户滑动页面事件--返回页面在垂直方向已滚动的距离（单位px）
 */
  onPageScroll(e) {
    let isfixed = 0
    if (parseInt(e.scrollTop) > 30) isfixed = true
    else isfixed = false;

    this.setData({ isfixed });

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