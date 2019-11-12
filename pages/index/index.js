//index.js
//const config = require('../../config/config');
//获取应用实例
const app = getApp()

Page({
  data: {
    "bnrUrl": [{
      "url": "/imgs/banner.png"
    }, {
      "url": "/imgs/banner.png"
    }, {
      "url": "/imgs/banner.png"
    }]
  },
  toLink :function(){
    wx.switchTab({
      url: '/pages/link/link',
    })
  }

})