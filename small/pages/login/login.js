const urlparams = require('../../utils/urlparams.js')
const utils = require('../../utils/util.js')
const optcookie = require('../../utils/optcookie.js')
import { getUser, setUser, setToken, delUser } from '../userinit'
const app = getApp()

var user = getUser();
if (user) {
  wx.redirectTo({
    url: '/pages/index/index'
  })
}

Page({
  data: {
   user:"",
   pass:"" 
  },
  onLoad: function (options) {
    console.log('onLoad', options)
  },
  nameChange:function(e){
    this.data.user = e.detail.value;
  },
  passChange:function(e){
    this.data.pass = e.detail.value;
  },
  submitLogin:function(){
    var state = this.data;
    var param = {
      name: state.user,
      password: state.pass
    }
    utils.postUrl(
      urlparams.login,
      param,
      data => {
        setToken(data.token);
        setUser(data.user); 
        wx.redirectTo({
          url: '/pages/index/index'
        })
      },
      e => {
        console.log(e)
      }
    )
  }
})