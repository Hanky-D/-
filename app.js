wx.cloud.init()
const db = wx.cloud.database()
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
          db.collection("userinfo").where({
            _openid:res.result.openid
          }).get({
            success:res=>{
              if (res.data.length == 0) //判断数据库是否有该用户信息，没有则新建初始化
              {
                db.collection("userinfo").add({
                  data:{
                    _openid:this.globalData.openid,
                    name:"",
                    banci:"",
                    kaoqin:[],
                    qingjia:[],
                    huanban:[]
                  },
                  success:res=>{
                    console.log("创建新用户成功")
                  }
                })
              }
            }
          })
        
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
