// pages/uppicture/uppicture.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fileID: '',
    cloudPath: '',
    imagePath: 'https://7a68-zhinengrili-82bdae-1258127112.tcb.qcloud.la/my-image.jpg?sign=575d32e2cf8e1daffa6d1a780d1b7abe&t=1545101621',//点击上传图片
    imagelist: [],
    patient:
    [
     { _id:'1',
      name:'user'}

    ]


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
   
  },
  // 上传图片
  doUpload: function () {
    var that = this
    // 选择图片
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {

        wx.showLoading({
          title: '上传中',
        })

        const filePath = res.tempFilePaths[0]
        console.log(filePath)
        console.log(that.data.patient[0]._id)//打印患者id
        // 上传图片
        const cloudPath = 'my-image' + that.data.patient[0]._id+filePath.match(/\.[^.]+?$/)[0]//存储图片时命名
        // var that=this
        wx.cloud.uploadFile({
         
          cloudPath,
          filePath,
          success: res => {
            console.log('[上传文件] 成功：', res)

         
            
            that.setData({
              fileID:res.fileID,

              imagePath:filePath,
             
              
            })
            console.log(that.data.imagePath)
          },
          fail: e => {
            console.error('[上传文件] 失败：', e)
            wx.showToast({
              icon: 'none',
              title: '上传失败',
            })
          },
          complete: () => {
            wx.hideLoading()
          }
        })

      },
      fail: e => {
        console.error(e)
      }
    })
  },

//下载图
img: function(event){
  var src = event.currentTarget.dataset.src;//获取data-src
  var that = this;
  var up = "imagelist[" + 0 + "]";//先用一个变量，把(imagelist[0])用字符串拼接起来
  that.setData({
    [up]: src//预览图片

  })
  wx.previewImage({
    current:this.data.imagePath, // 当前显示图片的http链接
    urls: this.data.imagelist // 需要预览的图片http链接列表
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

  }
})