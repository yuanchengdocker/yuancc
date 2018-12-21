import {config} from './config'
import {showLoading,hideLoading,showToast} from '../utils'
const API_URL = config.url

export const getService = (url, data,type = 'get',contentType = 'application/json') => {
    return new Promise((resole,reject) => {
        const params = {
            url: `${API_URL+url}`,
            data: data,
            method: type,
            header: {
                // 'Xcx-Token': wx.getStorageSync('Xcx-Token')
                'content-type': contentType
            },
            success: (res) => {
                hideLoading()
                let {data} = res
                if(data.code != 0){
                    showToast('服务请求失败')
                    reject()
                    return
                }
                resole(data.data)
            },
            fail: (e) => {
                hideLoading()
                showToast('服务请求失败')
            }
        }
        showLoading()
        wx.request(params)
    })
}

