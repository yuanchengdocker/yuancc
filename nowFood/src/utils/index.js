
export function formatNumber (n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

export function formatTime (date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('/')
  const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${t1} ${t2}`
}

export function showToast(title,isSuccess){
  wx.showToast({
    title:title,
    duration: 2000,
    mask: true,
    icon: isSuccess?'success':'none'
  })
}

export function showLoading(){
  wx.showLoading({
    title: '加载中',
  })
}

export function hideLoading(){
  setTimeout(wx.hideLoading,500)
}