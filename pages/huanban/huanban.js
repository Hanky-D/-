wx.cloud.init()
const db = wx.cloud.database()
const app = getApp()
Page({

  data: {
    name:"",
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
  fromSubmit(e){
  
    var opid = app.globalData.openid
    var content = e.detail.value
    db.collection("userinfo").where({
      _openid:opid
    }).update({
      data:{
        
      },
      success:res=>{
        console.log("已换班")
        wx.showToast({
          title:"已与"+"",
          icon:'success',
          duration:2000
        })
        
      }
    })
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