import _ from 'lodash'
import api from './api'
import common from './Common'
import { API, MD5_SALT } from './consts'
import rsa from './utils/rsa'
import md5 from 'blueimp-md5'

export default {
  getLoginSmsCode (fields) {
    const url = API.BASE + '/account/login_request'
    return api.post(url, fields)
  },
  loginBySmsCode (fields) {
    const url = API.BASE + '/account/login_code'
    return api.post(url, {...fields, validationType: 3})
  },
  login (fields) {
    fields = _.clone(fields)
    const url = API.BASE + `/account/login`
    fields.password = md5(MD5_SALT + fields.password)
    fields.hashed = true
    return api.post(url, fields)
  },
  logout () {
    const url = API.BASE + '/account/logout'
    return api.delete(url)
  },
  register (fields) {
    const url = API.BASE + '/account/register'
    fields.password = md5(MD5_SALT + fields.password)
    return api.post(url, fields).then(({user}) => user)
  },
  activate (fields) {
    const url = API.BASE + '/account/activate'
    return api.post(url, fields).then(data => {
      // set api headers
      api.config({
        headers: {
          'Authorization': `Bearer ${data.token}`
        }
      })
      return data
    })
  },
  modify (fields) {
    const url = API.BASE + '/account/modify'
    return api.put(url, fields).then(({user}) => user)
  },
  changePwd (pwd, newPwd) {
    let password = md5(MD5_SALT + pwd)
    let newPassword = md5(MD5_SALT + newPwd)
    return api.put(API.BASE + '/account/password', {
      password, newPassword, hashed: true
    })
  },
  sendActivationCode (fields) {
    const url = API.BASE + '/account/resend_activation_code'
    return api.post(url, fields)
  },
  reload () {
    let url = `${API.BASE}/account/detail`
    return api.get(url).then(({user}) => user)
  },
  modifyPIN (fields) {
    const url = API.BASE + '/account/pin'
    let payload = _.pick(fields, ['pinType'])
    let headers = {}
    if (fields.pin !== '') {
      headers['fox-client-pin'] = rsa.$encrypt({
        // hp: md5(MD5_SALT + fields.pin)
        p: fields.pin
      })
    }
    payload.newPinToken = rsa.$.encrypt(md5(MD5_SALT + fields.newPin), true)
    return api.put(url, payload, { headers })
  },
  verifyPIN (fields) {
    const url = API.BASE + '/account/pin-verify'
    let payload = _.pick(fields, ['pinType'])
    // pin 相同时则为验证逻辑
    let pinToken = rsa.$encrypt({
      p: fields.pin
      // hp: md5(MD5_SALT + fields.pin)
    })
    return api.put(url, payload, {
      headers: {
        'fox-client-pin': pinToken
      }
    })
  },
  /* Request Bind Account Validation Code API
  URL: /api/account/request_bind_code Method: POST
  Params: {"email":"xx", "tel":"86 111", "captchaId":"xxx", "captcha":"xxx"} Return: {"succ":true}
  */
  requestBinding (fields) {
    const url = API.BASE + '/account/request_bind_code'
    let payload = _.pick(fields, ['captcha', 'captchaId', 'email', 'tel'])
    return api.post(url, payload)
  },
  /* Bind Account API
  URL: /api/account/bind Method: POST
  Params: {"email":"xxx", "tel": "86 111", "validationType":2, "validationCode":"xxx"} Return: {"succ":true}
  */
  bind (fields) {
    const url = API.BASE + '/account/bind'
    let payload = _.pick(fields, ['validationCode', 'email', 'tel'])
    payload.validationType = 2
    return api.post(url, payload)
  },
  uploadAvatar (file, options) {
    let filePath = file.path
    let fileType = filePath.split('.')[1]
    return api.post(`${API.BASE}/upload/request`, {
      fileType
    }).then(data => {
      let { uploadUrl, viewUrl } = data
      let { onProgress, done } = options
      common.uploadToAws(uploadUrl, file.content, {
        onProgress: onProgress,
        onEnd: () => {
          done({ fileUrl: viewUrl })
        }
      })
    })
  }
}
