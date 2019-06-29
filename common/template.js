//初始化数据
function tabbarinit() {
  return [
    {
      "current": 0,
      "pagePath": "/pages/index/index",
      "iconPath": "../../images/common/nav1-1.png",
      "selectedIconPath": "../../images/common/nav1-2.png",
      "text": "首页"
    },
    {
      "current": 0,
      "pagePath": "/pages/category/category",
      "iconPath": "../../images/common/nav2-1.png",
      "selectedIconPath": "../../images/common/nav2-2.png",
      "text": "类别"
    },
    {
      "current": 0,
      "pagePath": "/video/index/index",
      "iconPath": "../../images/common/nav3-1.png",
      "selectedIconPath": "../../images/common/nav3-2.png",
      "text": "短视频"

    },
    {
      "current": 0,
      "pagePath": "/my/index/index",
      "iconPath": "../../images/common/nav4-1.png",
      "selectedIconPath": "../../images/common/nav4-2.png",
      "text": "进货单",
      "number":0
    },
    {
      "current": 0,
      "pagePath": "/my/index/index",
      "iconPath": "../../images/common/nav5-1.png",
      "selectedIconPath": "../../images/common/nav5-2.png",
      "text": "我的"
    }
  ]

}
//tabbar 主入口
function tabbarmain(bindName = "tabdata", id, target,number) {
  var that = target;
  var bindData = {};
  var otabbar = tabbarinit();
  otabbar[id]['iconPath'] = otabbar[id]['selectedIconPath']//换当前的icon
  otabbar[id]['current'] = 1;
  otabbar[3]['number']=number;
  bindData[bindName] = otabbar
  that.setData({ bindData });
}


module.exports = {
  tabbar: tabbarmain
}