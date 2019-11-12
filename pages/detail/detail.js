const config = require('../../config/config');
// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail:{},
    detail_content:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var wxParse = require('../../wxParse/wxParse.js');
    var that = this;
    let id = options.id;
    wx.request({
      url: config.getNews,
      method: 'GET',
      data: {
        id: id
      },
      success: function(res){
        that.setData({
          detail: res.data,
          detail_content: res.data.content
        })
        wxParse.wxParse('detail_content', 'html', that.data.detail_content,that,1);
      }
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