// pages/show/show.js
wx.cloud.init()
const db = wx.cloud.database()
Page({

  data: {
    userinfo:[]

  },
  onLoad: function (options) {
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
    var temp=[]
    db.collection("userinfo").get({
      success:res=>{
        console.log(res.data.length)
        for (var i=0;i<res.data.length;i++){
          temp.push(res.data[i])
        }
        this.setData({
          userinfo:temp
        })
      }
    })
    db.collection("userinfo").skip(20).get({
      success:res=>{
        console.log(res.data.length)
        for (var i=0;i<res.data.length;i++){
          temp.push(res.data[i])
        }
        this.setData({
          userinfo:temp
        })
      }
    })
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