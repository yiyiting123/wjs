// pages/category/category.js
var template = require('../../common/template.js');
const app = getApp();
Page({
  data: {
    currentTab: 0,  //对应样式变化
    scrollTop: 0,  //用作跳转后右侧视图回到顶部
  },

  onLoad: function (options) {
    var that = this;
    template.tabbar("tabBar", 1, that, 12)//0表示第一个tabbar 绑定的模板，显示当前第几项，this，进货单数值
  },

})
