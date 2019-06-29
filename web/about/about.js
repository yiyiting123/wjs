// web/about/about.js
var template = require('../common/template.js');
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabcurrent:0,//导航栏当前项
    swipercount: 2,//企业环境总数
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    template.tabbar("tabBar", 1, that)//0表示第一个tabbar 绑定的模板，显示当前第几项，this
    template.statusBar("statusBar", "企业档案", that)//标题栏
  },
  bindChange:function(e){
    var that=this;
    var idx = e.target.dataset.idx;
    that.setData({tabcurrent:idx});
  },
  // 轮播图改变
  swiperChange: function (e) {
    var that = this;
    that.setData({
      current: e.detail.current + 1
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

  }
})