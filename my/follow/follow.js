// my/follow/follow.js
var template = require('../../common/template.js');

var recordStartX = 0;
var currentOffsetX = 0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cartList: [{},{}],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    template.tabbar("tabBar", 4, that, 12)//0表示第一个tabbar 绑定的模板，显示当前第几项，this，进货单数值
  },
  //点击显示更多
  leftslide:function(e){
    var cartList = this.data.cartList;
    var index = e.currentTarget.dataset.index;
    var item = cartList[index];
    for (var i = 0; i < this.data.cartList.length; i++) {
      if (i != index) {
        this.setData({
          ['cartList[' + i + '].offsetX']: false,
        })
      }
    }
    this.setData({
      ['cartList[' + index + '].offsetX']:true,
    })
  },
  //点击关闭显示更多
  rightslide: function (e) {
    var cartList = this.data.cartList;
    var index = e.currentTarget.dataset.index;
    var item = cartList[index];
    this.setData({
      ['cartList[' + index + '].offsetX']: false,
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