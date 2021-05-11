// pages/jwlogin/login.js
const app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    isShowEye:false,
    stNum:'',
    stPw:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  getStNum:function(e){
   console.log(e.detail.value)
   this.setData({
    stNum:e.detail.value
   })
  },
  getStPw:function(e){
    console.log(e.detail.value)
    this.setData({
      stPw:e.detail.value
    })
  },
  loginJw:function(){
    let data = {
      'usercode':this.data.stNum,
      'password':this.data.stPw
    }
    httpUtil.request(api.jwlogin,data,'POST').then(res=>{
      console.log('jwlogin',res)
      if(res.code==20000){
        app.globalData.isJwLogin = true
        wx.navigateBack({
          'delta':1
        })
        wx.setStorageSync('isJwLogin', '1')
        wx.setStorageSync('token', res.data.token)
      }
    }).catch(err=>{
      console.log("jwloginerr",err)
      if(err.code == '30001'){
        // wx.showToast({
        //   title: '学号或密码错误',
        // })
        wx.showModal({
          title:'提示',
          content:'学号或密码错误,请重新输入',
          showCancel: false,
        })
      }
    })
  },
  goToRegister:function(){
   wx.navigateTo({
     url: '/pages/register/register',
   })
  },
  goToIndex:function(){
    wx.navigateTo({
      url: '/pages/secondIndex/secondIndex',
    })
  },
  goToFindPW:function(){
    wx.navigateTo({
      url: '/pages/findPassword/findPassword?username='+this.data.stNum,
    })
  },
  showOrHidePw:function(){
    console.log("tap eye")
    if(this.data.isShowEye){
      this.setData({
        isShowEye:false
      })
    }else{
      this.setData({
        isShowEye:true
      })
    }
  }
})