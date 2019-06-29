// supplier/m/index/index.js
var template = require('../common/template.js');
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    probannerlist:[],//新品上市产品列表
    probannerpoint:2,//新品上市产品轮播指示点
    current:1,//新品上市轮播当前项
    // cartNum:12,//进货单数量
    showModalStatus:false,//分享框

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    template.tabbar("tabBar", 0, that)//0表示第一个tabbar 绑定的模板，显示当前第几项，this
    template.btnCart("btnCart",that)//进货单数量
    template.statusBar("statusBar","供应商", that)//标题栏
    
    wx.getSystemInfo({
      success: function (res) {
        that.setData({ windowHeight: res.windowHeight})
        console.log(res.windowHeight);
      },
    })
  },
  // 轮播图改变
  swiperChange: function (e) {
    var that = this;
    that.setData({
      current: e.detail.current + 1
    })
  },
 
  
  showModal: function () {
    // 显示遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
      showModalStatus: true
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 200)
  },
  hideModal: function () {
    // 隐藏遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export(),
        showModalStatus: false
      })
    }.bind(this), 200)
  },
  /**
 * 监听用户滑动页面事件--返回页面在垂直方向已滚动的距离（单位px）
 */
  onPageScroll(e) {
    let isfixed = 0
    if (parseInt(e.scrollTop)  >30) isfixed = true
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