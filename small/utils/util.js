const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
const toPage = page => {
  wx.navigateTo({
    url: '/pages'+page,
  })
}
const postUrl = (url,param,callback) => {
  wx.request({
    url: url,
    data: param,
    method: "POST",
    headers:{"Content-Type": "application/x-www-form-urlencoded" },
    success: function (res) {
      if (res.data.code == 1000) {
        callback && callback(res.data.data);
      } else {
        var content = '服务开小差';
        if(res.data.messgage){
          content = res.data.messgage;
        }
        wx.showModal({
          title: '提示',
          content: content,
          showCancel: false
        })
      }
    }
  })
}
module.exports = {
  formatTime: formatTime,
  postUrl: postUrl
}
