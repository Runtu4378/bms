import axios from 'axios'
import lodash from 'lodash'
import pathToRegexp from 'path-to-regexp'
import { Message } from 'iview'
import { baseURL } from './config'

axios.defaults.baseURL = baseURL
axios.defaults.withCredentials = true
axios.defaults.timeout = 3000

const fetch = (options) => {
  const {
    method = 'get',
    data,
    paramsType,
  } = options
  let {
    url,
    headers,
  } = options

  const cloneData = lodash.cloneDeep(data)

  const defaultHeader = {
    'X-Requested-With': 'XMLHttpRequest',
    'Access-Control-Allow-Origin': 'http://localhost:8014',
  }

  // 判断传参格式
  if (paramsType === 'form') {
    Object.assign(defaultHeader, {
      'Content-Type': 'application/x-www-form-urlencoded',
    })
  } else {
    // 默认为json
    Object.assign(defaultHeader, {
      'Content-Type': 'application/json',
    })
  }

  headers = headers || {}

  const useOptions = {
    headers: Object.assign(headers, defaultHeader),
  }

  try {
    let domin = ''
    if (url.match(/[a-zA-z]+:\/\/[^/]*/)) {
      domin = url.match(/[a-zA-z]+:\/\/[^/]*/)[0]
      url = url.slice(domin.length)
    }
    const match = pathToRegexp.parse(url)
    url = pathToRegexp.compile(url)(data)
    for (const item of match) {
      if (item instanceof Object && item.name in cloneData) {
        delete cloneData[item.name]
      }
    }
    url = domin + url
  } catch (e) {
    Message.error(e.message)
  }

  switch (method.toLowerCase()) {
    case 'get':
      return axios.get(url, {
        params: cloneData,
        ...useOptions,
      })
    case 'delete':
      return axios.delete(url, {
        data: cloneData,
        ...useOptions,
      })
    case 'post':
      return axios.post(url, cloneData, { ...useOptions })
    case 'put':
      return axios.put(url, cloneData, { ...useOptions })
    case 'patch':
      return axios.patch(url, cloneData, { ...useOptions })
    default:
      return axios(options)
  }
}

export default function request (options) {
  // if (mock) {
  //   return fakeNet(options)
  // }
  return fetch(options).then((response) => {
    const { data } = response
    const { code, data: realData, message } = data
    if (code === 200) {
      return {
        success: true,
        message,
        status: code,
        data: realData,
      }
    } else {
      return {
        success: false,
        message,
        status: code,
        data: realData,
      }
    }
  }).catch((error) => {
    const { response } = error
    let msg
    let status
    let otherData = {}
    if (response) {
      const { data, statusText } = response
      otherData = data
      status = response.status
      msg = data.message || statusText
    } else {
      status = 600
      msg = 'Network Error'
    }
    return { success: false, status, message: msg, ...otherData }
  })
}
