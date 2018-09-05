import api from './api.js'
import { API, MD5_SALT } from './consts.js'
import rsa from './utils/rsa.js'
import md5 from 'blueimp-md5'

export default {
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
}
