// pages/search/search.js
var template = require('../common/template.js');
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
inpfocus:false,//搜索输入框是否聚焦
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    template.tabbar("tabBar", 0, that)//0表示第一个tabbar 绑定的模板，显示当前第几项，this
    template.btnCart("btnCart", that)//进货单数量
    template.statusBarreturn("statusBarreturn", "搜索", that)//标题栏
  },
  getInputFocus:function(){
    var that=this;
    that.setData({inpfocus:!that.data.inpfocus});
  },
  //输入框点击完成触发跳转到搜索结果页
  getSearchResults: function (e) {
    var that = this;
    wx.redirectTo({
      url: '/web/productlist/productlist?KW=' + e.detail.value,
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