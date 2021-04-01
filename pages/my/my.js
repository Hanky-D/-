wx.cloud.init()
const db = wx.cloud.database()
const app = getApp()
Page({
  data: {
    week:["周一","周二","周三","周四","周五"],
    banci:["第一批","第二批"],
    selweek:"周一",
    selbanci:"第一批",
    weekval:0,
    bancival:[0],
  },
  back(){
    wx.navigateBack({
      delta: 1,
    })
  },
  pickchange(e){
    this.setData({
      weekval:e.detail.value
    })
  },
  formReset(e){
    this.setData({
      weekval:0
    })
  },
  formSubmit(e){
    var opid = app.globalData.openid
    db.collection("userinfo").where({
      _openid:opid
    }).update({
      data:{
        name:e.detail.value.username,
        banci:this.data.week[e.detail.value.banci]
      },
      success:res=>{
        console.log("修改成功")
        wx.showToast({
          title:e.detail.value.username+" "+this.data.week[e.detail.value.banci],
          icon:'success',
          duration:2000
        })
        
      }
    })
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
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