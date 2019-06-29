//初始化数据
function tabbarinit() {
  return [
    {
      "current": 0,
      "pagePath": "/web/index/index",
      "iconPath": "../../images/web/nav1-1.png",
      "selectedIconPath": "../../images/web/nav1-2.png",
      "text": "首页"
    },
    {
      "current": 0,
      "pagePath": "/web/about/about",
      "iconPath": "../../images/web/nav2-1.png",
      "selectedIconPath": "../../images/web/nav2-2.png",
      "text": "档案"
    },
    {
      "current": 0,
      "pagePath": "/web/category/category",
      "iconPath": "../../images/web/nav3-1.png",
      "selectedIconPath": "../../images/web/nav3-2.png",
      "text": "类别"

    },
    {
      "current": 0,
      "pagePath": "/web/video/video",
      "iconPath": "../../images/web/nav4-1.png",
      "selectedIconPath": "../../images/web/nav4-2.png",
      "text": "视频",
      "number":0
    },
    {
      "current": 0,
      "pagePath": "/web/my/my",
      "iconPath": "../../images/web/nav5-1.png",
      "selectedIconPath": "../../images/web/nav5-2.png",
      "text": "我的"
    }
  ]

}
//tabbar 主入口
function tabbarmain(bindName = "tabdata", id, target) {
  var that = target;
  var bindData = {};
  var otabbar = tabbarinit();
  otabbar[id]['iconPath'] = otabbar[id]['selectedIconPath']//换当前的icon
  otabbar[id]['current'] = 1;
  bindData[bindName] = otabbar
  that.setData({ bindData });
}
//进货单数量
function btnCartmain(bindName = "btnCart",target) {
  var that = target;
  that.setData({ cartNum:12 });
  
}

//标题栏
function statusBarmain(bindName = "statusBar", statusBarTitle, target) {
  var that = target;
  var app=getApp();
  that.setData({ statusBarHeight: app.globalData.statusBarHeight, statusBarTitle: statusBarTitle });
}
//标题栏,带返回按钮
function statusBarreturnmain(bindName = "statusBarreturn", statusBarTitle, target) {
  var that = target;
  var app = getApp();
  that.setData({ statusBarHeight: app.globalData.statusBarHeight, statusBarTitle: statusBarTitle });
}



module.exports = {
  tabbar: tabbarmain,
  btnCart: btnCartmain,
  statusBar: statusBarmain,
  statusBarreturn: statusBarreturnmain
}