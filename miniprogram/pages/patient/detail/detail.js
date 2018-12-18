// detail.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    patient_detail:[],
    pname:0,
    pid:0,
    pheight:0,
    pweight:0,
    ps:0,
    psex:0,
    p_id:0
    
    },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
     var p_id = getApp().requestp_id;
     console.log(p_id);
    //数据库读取
    const db = wx.cloud.database()
    var this_ = this
    db.collection("patient_detail").where({_id:p_id}).get({
      success: function (res) {
        this_.setData({
          patient_detail: res.data[0],
          })
        console.log(this_.data.patient_detail)
         
          }, 
        fail: err => {
        wx.showToast({
          icon: "none",
          title: '查询失败',
        })
      }
    })
    
    },
    edit:function(e){
      var this_ =this;
      //读取患者基本信息
      this_.setData({
        pname: this_.data.patient_detail.PName,
        pid: this_.data.patient_detail.PID,
        psex: this_.data.patient_detail.PSex,
        pheight: this_.data.patient_detail.PHeight,
        pweight: this_.data.patient_detail.PWeight,
        ps: this_.data.patient_detail.PS
      })
      //传给编辑页面数据
      wx.navigateTo({
        url: '/pages/patient/detail-edit/detail-edit?pname=' + this_.data.pname + '&pid=' + this_.data.pid+ '&pheight=' + this_.data.pheight+ '&pweight=' + this_.data.pweight+ '&psex=' + this_.data.psex+ '&ps=' + this_.data.ps
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
    //加载本页面的tabBar样式
    app.editTabBar1();

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