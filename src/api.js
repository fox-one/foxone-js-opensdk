/**
 * 基于 axios 封装的 api 调用类
 *
 * 包含 通用的 api 权限校验，
 * @author sunshine .
 */
import axios from 'axios'
import { Env } from './consts.js'

let instance = axios.create({
  timeout: 20000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'X-CLIENT-VERSION': Env.version,
    'X-CLIENT-BUILD': Env.build,
    'X-CLIENT-TYPE': (process.platform === 'darwin' ? '1' : '2'),
    'X-CLIENT-ENV': (process.env.NODE_ENV === 'development' ? '0' : '1'),
    'X-CLIENT-DEVICE-ID': '14794F4AA858E6B6F0997FF14E374932',
    'X-CLIENT-DEVICE-NAME': 'Zhangs-MacBook-Pro.local'
  }
})

let HANDLERS = {
  401: [],
  500: []
}

export default {
  CONSTANTS: {
    IF_MODIFIED_SINCE: 'If-Modified-Since'
  },
  /**
   * 配置参数，设置 headers，等信息
   * @param options
   *
   */
  config (options) {
    let { headers } = options
    Object.assign(instance.defaults.headers, headers)
  },
  /**
   * 用来绑定 权限校验失败、服务器异常、等事件
   * 当调用 axios 方法 或者权限校验出现上述异常时，触发对应的 handler
   * @param event
   * @param handler
   */
  on (event, handler) {
    let handlers = HANDLERS[event]
    if (!handlers) HANDLERS[event] = handlers = []
    handlers.push(handler)
  },
  trigger (event, payload) {
    let handlers = HANDLERS[event]
    if (handlers) handlers.forEach(hand => hand(payload))
  },
  request (options) {
    /* eslint prefer-promise-reject-errors: 0 */
    return instance.request(options).then(res => {
      // 如果设置不需要转换，则直接返回 res
      if (options.$parsed === false) return res
      if (!res.data) {
        logger.error('Incorrect response format.', res)
        return Promise.reject({
          code: 'response_error',
          message: 'response error',
          response: res
        })
      }
      let { code, data, msg } = res.data
      if (code !== 0) {
        return Promise.reject({
          code,
          message: msg,
          response: res
        })
      }
      if (!data) {
        return Promise.reject({
          code: -1,
          message: 'invalid data',
          response: res
        })
      }
      return data
    }, ({response, message}) => {
      if (!response) {
        let err = {code: 'network_error', message: 'network error'}
        return Promise.reject(err)
      }
      let { data, status } = response
      let code = status
      if (data && data.msg) message = data.msg
      if (data && data.code) code = data.code
      let err = {code, message, response}
      this.trigger(status, err)
      return Promise.reject(err)
    })
  },
  get (url, config = {}) {
    config.url = url
    config.method = 'get'
    return this.request(config)
  },
  post (url, data, config = {}) {
    config.url = url
    config.method = 'post'
    config.data = data
    return this.request(config)
  },
  put (url, data, config = {}) {
    config.url = url
    config.method = 'put'
    config.data = data
    return this.request(config)
  },
  delete (url, config = {}) {
    config.url = url
    config.method = 'delete'
    return this.request(config)
  }
}
