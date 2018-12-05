import { baseUrl } from '../utils'

export default async (url = '', data = {}, type = 'GET', methods = 'fetch') => {
  type = type.toUpperCase()
  url = baseUrl + url

  if (type === 'GET') {
    let dataStr = ''

    Object.keys(data).forEach(key => {
      dataStr += `${key}=${data[key]}&`
    })
    if (dataStr !== '') {
      dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'))
      url = url + '?' + dataStr
    }
  }

  if (window.fetch && methods === 'fetch') {
    let requestConfig = {
      // credentials: 'include',  # 如果服务端不需要浏览器 cookie 的话， 可以不写， 一般用在登录过就不需要登录，自动登录
      methods: type,
      header: {
        'Accept': 'application/json',
        'Content-type': 'applications/json'
      },
      mode: 'cors',
      // mode: 'no-cors'  # 如果不使用跨域通过的话，设置为no-cors但是response中是没有的值
      cache: 'force-cache'
    }

    if (type === 'POST') {
      Object.defineProperty(requestConfig, 'body', {
        value: JSON.stringify(data)
      })
    }

    try {
      const response = await fetch(url, requestConfig)
      const responseJson = await response.json()
      return responseJson
    } catch (error) {
      throw Error(error)
    }
  } else {
    return new Promise((resolve, reject) => {
      let requestObj = new XMLHttpRequest()
      // if (window.XMLHttpRequest) {
      //   requestObj = new XMLHttpRequest()
      // } else {
      //   requestObj = new ActiveXObject
      // }

      let sendData = ''
      if (type === 'POST') {
        sendData = JSON.stringify(data)
      }

      requestObj.open(type, url, true)
      requestObj.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
      requestObj.send(sendData)

      requestObj.onreadystatechange = () => {
        if (requestObj.readystate === 4) {
          if (requestObj.status === 200) {
            let obj = requestObj.response
            if (typeof obj !== 'object') {
              obj = JSON.parse(obj)
            }
            resolve(obj)
          } else {
            reject(requestObj)
          }
        }
      }
    })
  }
}
