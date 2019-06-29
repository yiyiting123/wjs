// market/publish/publish.js
const app = getApp();
var template = require('../../common/template.js');

var util = require('../../utils/uploadimg.js');

import WeCropper from '../../we-cropper/we-cropper.js'

const config = app.globalData.config

const device = wx.getSystemInfoSync()
const width = device.windowWidth
const height = device.windowHeight - 50
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cropperOpt: {
      id: 'cropper',
      width,
      height,
      scale: 2.5,
      zoom: 8,
      cut: {
        x: (width - 300) / 2,
        y: (height - 300) / 2,
        width: 300,
        height: 300
      },
      boundStyle: {
        mask: 'rgba(0,0,0,0.8)',
        lineWidth: 1
      },
      headImg: '',
      flag: false,
    },
    pics: [],

    ly_flag:false,//发布成功弹框
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    template.tabbar("tabBar", 0, that, 12)//0表示第一个tabbar 绑定的模板，显示当前第几项，this，进货单数值

    const { cropperOpt } = this.data


    this.setData({ cropperOpt })

    new WeCropper(cropperOpt)
      .on('ready', (ctx) => {
        console.log(`wecropper is ready for work!`)
      })
      .on('beforeImageLoad', (ctx) => {
        console.log(`before picture loaded, i can do something`)
        console.log(`current canvas context:`, ctx)
        wx.showToast({
          title: '上传中',
          icon: 'loading',
          duration: 20000
        })
      })
      .on('imageLoad', (ctx) => {
        console.log(`picture loaded`)
        console.log(`current canvas context:`, ctx)
        wx.hideToast()
      })
      .on('beforeDraw', (ctx, instance) => {
        console.log(`before canvas draw,i can do something`)
        console.log(`current canvas context:`, ctx)
      })
      .updateCanvas()
  },
  
  touchStart(e) {
    this.wecropper.touchStart(e)
  },
  touchMove(e) {
    this.wecropper.touchMove(e)
  },
  touchEnd(e) {
    this.wecropper.touchEnd(e)
  },
  upEwm() {
    this.uploadTap();

  },
  //图片预览
  getImageShow(e) {
    var index = e.currentTarget.dataset.index;
    var imgArr = this.data.pics;
    wx.previewImage({
      current: imgArr[index],     //当前图片地址
      urls: imgArr,               //所有要预览的图片的地址集合 数组形式

    })
  },
  //生成图片
  getCropperImage() {
    this.wecropper.getCropperImage((src) => {
      if (src) {
        console.log(src)
        // 保存图片数组
        var pics = this.data.pics;
        pics = pics.concat(src);

        this.setData({
          headImg: [src],
          flag: false,
          pics: pics//图片数组
        })
      } else {
        console.log('获取图片地址失败，请稍后重试')
      }
    })
  },
  // 删除图片
  delpic: function (e) {
    var that = this;
    var pics = that.data.pics;
    var pic_index = e.target.dataset.index;
    pics.splice(pic_index, 1);
    that.setData({
      pics: pics
    })


  },
  //选择图片
  uploadTap(e) {
    const self = this
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success(res) {
        const src = res.tempFilePaths[0]
        //  获取裁剪图片资源后，给data添加src属性及其值

        self.wecropper.pushOrign(src)
        self.setData({
          flag: true
        })
      }
    })
  },

  //发布成功按钮
  btnPost:function(){
    var that=this;
    that.setData({ly_flag:true});
  },
  //发布成功弹框确定按钮
  btnOK:function(){
    var that=this;
    that.setData({ly_flag:false});
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