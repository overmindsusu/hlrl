// detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
      pid:0,
     pname:0,
     psex:0,
     pheight:0,
     pweight:0,
     pbsa:0,
     p_id:0,
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取全局变量
    var p_id = getApp().requestp_id;
    console.log(p_id);
    
    //从上一页面中获取病人基本信息
    this.setData({
      pname:options.pname,
      pid:options.pid,
      pheight: options.pheight,
      pweight: options.pweight,
      psex: options.psex,
      p_id: p_id
    })
   },

   //input
  heightInput: function (e) {
    this.setData({
      pheight: e.detail.value     
    })
     //( [身高(cm) x 体重(kg) ]/ 3600 )½
    const pbsa = Math.pow(((parseFloat(this.data.pheight) * parseFloat(this.data.pweight)) / 3600), 1 / 2)
    this.setData({ pbsa: pbsa })
    console.log(this.data.pbsa)
  },

  weightInput: function (e) {
    this.setData({
      pweight: e.detail.value
    })
     //( [身高(cm) x 体重(kg) ]/ 3600 )½
    const pbsa = Math.pow(((parseFloat(this.data.pheight) * parseFloat(this.data.pweight)) / 3600), 1 / 2)
    this.setData({ pbsa: pbsa })
    console.log(this.data.pbsa)
  },

  nameInput: function (e) {
    this.setData({
      pname: e.detail.value
    })
  },

  sexInput: function (e) {
    this.setData({
      psex: e.detail.value
    })
  },

  idInput: function (e) {
    this.setData({
      pid: e.detail.value
    })
  },

  comfirm:function(e){
    const db = wx.cloud.database()
   /* db.collection('patient_detail').doc('1').update({
      data: {
        PName: "lean",
        //pid:'123',
        //pweight:100,
        //pheight:100,
        //ps:100,
        //sex:1
      },
    }).then(console.log)
      .catch(console.error)*/
    db.collection('patient_detail').doc('oI_XM4orhHKEFHTUAQpghL88oc6k').remove({
      success: console.log,
      fail: console.error
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

  },

  getValue:function(e){
    console.log(e.detail.value)
  },

    //重置表单
  reset:function(e){
    console.log('已经重置对象')
  }

    })