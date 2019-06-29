// exhibition/exhibitionlist/exhibitionlist.js
var template = require('../../common/template.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showtab: 0, //顶部选项卡索引
    tabnav: {
      tabnum: 5,
      tabitem: [
        {
          "id": 0,
          "text": "推荐"
        },
        {
          "id": 1,
          "text": "国内"
        },
        {
          "id": 2,
          "text": "国际"
        },
        {
          "id": 3,
          "text": "港澳台"
        },
      ]
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    template.tabbar("tabBar", 0, that, 12)//0表示第一个tabbar 绑定的模板，显示当前第几项，this，进货单数值
  },
  setTab: function (e) {
    const edata = e.currentTarget.dataset;
    this.setData({
      showtab: edata.tabindex,

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