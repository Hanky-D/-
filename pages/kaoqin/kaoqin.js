// pages/kaoqin/kaoqin.js
wx.cloud.init()
const db = wx.cloud.database()
const app = getApp()
Page({
  data: {
    monthsarr:["一月","二月","三月","四月","五月","六月"
                ,"七月","八月","九月","十月","十一月","十二月"
                ],
    weeksarr:["周一","周二","周三","周四","周五"],
    month:"一月",
    weekday:"周二",
    date:""
  },
  getData(){
    var time = new Date()
    var monthp = time.getMonth()
    var datep = time.getDate().toString().concat("号")
    var dayp = time.getDay()
    console.log(monthp,datep)
    this.setData({
      month:this.data.monthsarr[time.getMonth()],
      date:datep,
      weekday:this.data.weeksarr[dayp-1]
    })
    
  },
  back(){
    wx.navigateBack({
      delta: 1,
    })
  },
  qiandao(){
    var content={"month":this.data.month,"date":this.data.date,"week":this.data.weekday}
    wx.showModal({
      title:"确认签到",
      content:this.data.weekday,
      success:res=>{
        if(res.confirm){
          var opid = app.globalData.openid
          var _=db.command
          db.collection("userinfo").where({
            _openid:opid
          }).update({
            data:{
              kaoqin:_.push(content)
            },
            success:res=>{
              wx.showToast({
                title: '签到成功',
                icon:'success',
                duration:2000
              })
            }
          })
          console.log("confirm")
        }
        else if(res.cancel){
          console.log("cancle")
        }
      }
    })
  },
  qingjia(){
    console.log("qingjia")
    var content={"month":this.data.month,"date":this.data.date,"week":this.data.weekday}

    wx.showModal({
      title:"确认请假",
      content:this.data.weekday,
      success:res=>{
        if(res.confirm){
          var opid = app.globalData.openid
          var _=db.command
          db.collection("userinfo").where({
            _openid:opid
          }).update({
            data:{
              qingjia:_.push(content)
            },
            success:res=>{
              wx.showToast({
                title: '已请假',
                icon:'success',
                duration:2000
              })
            }
          })
          console.log("confirm")
        }
        else if(res.cancel){
          console.log("cancle")
        }
      }
    })
  },
  onLoad: function (options) {
    this.getData()
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