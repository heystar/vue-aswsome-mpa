import { Toast } from 'vant'
import axios from 'axios'

// create an axios instance
const service = axios.create({
    // TODO
  baseURL: '/',
  timeout: 5000
})

// request interceptor
service.interceptors.request.use(
    config => {
      Toast.loading({
        duration: 0,
        mask: true,
        forbidClick: true,
        message: '加载中...'
      })
      return config
    },
    error => {
      console.log(error) /* eslint-disable-line */
      return Promise.reject(error)
    }
)

// response interceptor
service.interceptors.response.use(
    response => {
      Toast.clear()
      return response
    },
    error => {
      console.log(error) /* eslint-disable-line */
      Toast.fail(error)
      return Promise.reject(error)
    }
)


/**
 * Get请求
 * @method getFetch
 * @param {String} url api地址
 * @param {Object} query 请求参数
 */
export const getFetch = (url, params = {}) => {
  return service({
    url,
    method: 'get',
    params
  })
}

/**
 * Post请求
 * @method PostFetch
 * @param {String} url api地址
 * @param {Object} data 发送数据
 */
export const PostFetch = (url, params = {}, data = {}) => {
  return service({
    url,
    method: 'post',
    data,
    params,
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
  })
}
