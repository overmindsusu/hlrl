
  Page({
    data: {
     mwd:[],
    
    },
    
     onLoad: function () {
       
      const db = wx.cloud.database()
      var this_ = this
      db.collection("mwd").get({
        success: function (res) {
          this_.setData({
            mwd: res.data
          }),
          console.log(this_.data.mwd)

        }, fail: err => {
          wx.showToast({
            icon: "none",
            title: '查询记录失败',
          })
        }

      })
      console.log(this.data.mwd)
    },


    
  

          })
    

  
  
    