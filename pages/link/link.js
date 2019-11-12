const config = require('../../config/config');
Page({
  data: {
    showTopTips: false,

    checkboxItems: [{
        name: '公司注册',
        value: '注册',
        checked: true
      },
      {
        name: '代理记账',
        value: '记账'
      }
    ],

    isAgree: false
  },
  showTopTips: function() {
    var that = this;
    this.setData({
      showTopTips: true
    });
    setTimeout(function() {
      that.setData({
        showTopTips: false
      });
    }, 3000);
  },

  checkboxChange: function(e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value);

    var checkboxItems = this.data.checkboxItems,
      values = e.detail.value;
    for (var i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
      checkboxItems[i].checked = false;

      for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
        if (checkboxItems[i].value == values[j]) {
          checkboxItems[i].checked = true;
          break;
        }
      }
    }

    this.setData({
      checkboxItems: checkboxItems
    });
  },
  bindAgreeChange: function(e) {
    this.setData({
      isAgree: !!e.detail.value.length
    });
  },
  formSubmit: function(e) {
    console.log('form发生了submit事件，提交数据：', e.detail.value)
    if (e.detail.value.realname == ''){
      wx.showToast({
        title: '姓名不能为空',
      })
      return;
    }
    if (e.detail.value.tel == '') {
      wx.showToast({
        title: '手机号不能为空',
      })
      return;
    }
    wx.request({
      url: config.postData,
      data: {
        'realname' : e.detail.value.realname,
        'tel': e.detail.value.tel,
        'serv': e.detail.value.serv
      },
      method: 'POST',
      header: {'Content-Type': 'application/x-www-form-urlencoded'},
      success: function (res){
        wx.showToast({
          title: '提交成功',
        })
      }
    })
  }
});