wx.cloud.init()
// const db = wx.cloud.database()

App({
  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        env: 'kaoqinyun-9gd5don111a0d865',
        traceUser: true,
      })
      wx.cloud.callFunction({
        name:'getopenid',
        complete:res=>{
          this.globalData.openid = res.result.openid
          
        
          console.log(res)
        }
      })
    }
    this.globalData = {
      openid:"",
      name:"",
      week:0,

    }
  }
})
