// web/category/category.js
var template = require('../common/template.js');
const app = getApp();
Page({
  data: {
    currentTab: 0,  //对应样式变化
    scrollTop: 0,  //用作跳转后右侧视图回到顶部
  },

  onLoad: function (options) {
    var that = this;
    template.tabbar("tabBar", 2, that)//0表示第一个tabbar 绑定的模板，显示当前第几项，this
    template.btnCart("btnCart", that)//进货单数量
    template.statusBar("statusBar", "类别", that)//标题栏
  },

})
