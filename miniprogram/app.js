//app.js
App({
  onLaunch: function () {
    
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }

    /*this.globalData = {}*/
  },
  //第一种底部  
  editTabBar: function () {
    //使用getCurrentPages可以获取当前加载中所有的页面对象的一个数组，数组最后一个就是当前页面。

    var curPageArr = getCurrentPages();    //获取加载的页面
    var curPage = curPageArr[curPageArr.length - 1];    //获取当前页面的对象
    var pagePath = curPage.route;    //当前页面url
    if (pagePath.indexOf('/') != 0) {
      pagePath = '/' + pagePath;
    }

    var tabBar = this.globalData.tabBar;
    for (var i = 0; i < tabBar.list.length; i++) {
      tabBar.list[i].active = false;
      if (tabBar.list[i].pagePath == pagePath) {
        tabBar.list[i].active = true;    //根据页面地址设置当前页面状态    
      }
    }
    curPage.setData({
      tabBar: tabBar
    });
  },
  //第二种底部，原理同上
  editTabBar1: function () {
    var curPageArr = getCurrentPages();
    var curPage = curPageArr[curPageArr.length - 1];
    var pagePath = curPage.route;
    if (pagePath.indexOf('/') != 0) {
      pagePath = '/' + pagePath;
    }
    var tabBar = this.globalData.tabBar1;
    for (var i = 0; i < tabBar.list.length; i++) {
      tabBar.list[i].active = false;
      if (tabBar.list[i].pagePath == pagePath) {
        tabBar.list[i].active = true;
      }
    }
    curPage.setData({
      tabBar: tabBar
    });
  },
  globalData: {
    //第一种底部导航栏显示
    tabBar: {
      "color": "#9E9E9E",
      "selectedColor": "#f00",
      "backgroundColor": "#fff",
      "borderStyle": "#ccc",
      "list": [
        {
          "pagePath": "/pages/patient/patient",
          "text": "患者",
          
          "clas": "menu-item",
          "selectedColor": "#4EDF80",
          active: true
        },
        {
          "pagePath": "/pages/candidate/candidate",
          "text": "日历",
         
          "selectedColor": "#4EDF80",
          "clas": "menu-item",
          active: false
        },
        {
          "pagePath": "/pages/me/me",
          "text": "我",
          "iconPath": "/images/my.png",
          "selectedIconPath": "/images/my.png",
          "selectedColor": "#4EDF80",
          "clas": "menu-item",
          active: false
        }
      ],
      "position": "bottom"
    },
    //第二种底部导航栏显示
    tabBar1: {
      "color": "#9E9E9E",
      "selectedColor": "#f00",
      "backgroundColor": "#fff",
      "borderStyle": "#ccc",
      "list": [
        {
          "pagePath": "/pages/patient/detail/detail",
          "text": "基本信息",
          
          "clas": "menu-item1",
          "selectedColor": "#4EDF80",
          active: false
        },
        {
          "pagePath": "/pages/patient/message/message",
          "text": "消息",
          "selectedColor": "#4EDF80",
         
          "clas": "menu-item1",
          active: true
        }/*,
        {
          "pagePath": "/pages/cont/index",
          "text": "简历",
          "iconPath": "/images/my.png",
          "selectedIconPath": "/images/my.png",
          "selectedColor": "#4EDF80",
          "clas": "menu-item1",
          active: false
        },
        {
          "pagePath": "/pages/detail/index",
          "text": "我的",
          "iconPath": "/images/my.png",
          "selectedIconPath": "/images/my.png",
          "selectedColor": "#4EDF80",
          "clas": "menu-item1",
          active: false
        }*/
      ],
      "position": "top"
    }
  
  }



})
