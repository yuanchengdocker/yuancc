const urlparams = require('../../utils/urlparams.js')
const utils = require('../../utils/util.js')
//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    memberList: [],
    searchLoading:false,
    searchLoadingComplete:false,
    pageSize:20,
    currentPage:1
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    this.memberDataInit();
  },
  memberDataInit:function(){
    var self = this;
    utils.postUrl(
      urlparams.getMemberList,
      { "currentPage": self.data.currentPage, "pageSize": self.data.pageSize, "table": "member", "param": {} },
      data => {
        if (data && data.length == self.data.pageSize){
          this.setData({
            searchLoading:false,
            memberList: self.data.memberList.concat(data)
          })
        }else{
          this.setData({
            searchLoading: false,
            searchLoadingComplete:true,
            memberList: self.data.memberList.concat(data)
          })
        }
        wx.stopPullDownRefresh()
      }
    )
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onPullDownRefresh:function(){
    console.log("下拉刷新")
    this.setData({
      memberList: [],
      currentPage: 1,
      searchLoading: false,
      searchLoadingComplete: false
    })
    this.memberDataInit();
  },
  onShareAppMessage:function(){
    
  },
  onReachBottom:function(e){
    if(this.data.searchLoadingComplete) return;
    this.setData({
      searchLoading:true,
      currentPage: this.data.currentPage+1
    })
    this.memberDataInit();
  }
})
