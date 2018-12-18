// pages/patient/patient.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
   
   list:[
     '我的患者', '团队所有患者' 
    ], 
  
   selectIndex:0,
   patient_detail: [],
   
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    

    //数据库读取
    const db=wx.cloud.database()
    var this_ = this
    db.collection("patient_detail").get({
      success: function (res) {
        this_.setData({
          patient_detail:res.data      
        })
        console.log(this_.data.patient_detail)
        
      }, fail: err => {
        wx.showToast({
          icon: "none",
          title: '查询记录失败',
        })}
        })
     },
  //参数设置
  //跳转键
  patient: function (e) {
      var p_id = e.target.dataset.p_id;
      console.log("P_ID:"+p_id)//打印选择的患者id
      var app = getApp();
      //设置全局的请求访问传递的参数 
      app.requestp_id = p_id;//p_id 全局变量
      wx.navigateTo({
        url: '/pages/patient/detail/detail',
        success: function(res) {},
       fail: function(res) {},
        complete: function(res) {},
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
    app.editTabBar();    //显示自定义的底部导航

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

  },

  
  
  change: function (e) {
    this.setData({ selectedIndex: e.detail.value })
  },

  
  
  }
  
)

