// pages/register/register.js
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
    this.setData({
      stNum:options.username
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