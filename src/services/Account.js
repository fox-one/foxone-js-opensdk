import api from '../api'
import { API, MD5_SALT } from '../consts'
import rsa from '../utils/rsa'

export default {
  modifyPIN (fields) {
    const url = API.BASE + '/account/pin'
    // SDK中将pinType设为固定值2
    fields['pinType'] = 2
    let payload = _.pick(fields, ['pinType'])
    let headers = {}
    if (fields.pin !== '') {
      headers['fox-client-pin'] = rsa.$encrypt({
        p: fields.pin
      })
    }
    payload.newPinToken = rsa.$.encrypt(md5(MD5_SALT + fields.newPin), true)
    return api.put(url, payload, { headers })
  },
  verifyPIN (fields) {
    const url = API.BASE + '/account/pin-verify'
    let payload = { pinType: 2 }
    // pin 相同时则为验证逻辑
    let pinToken = rsa.$encrypt({
      p: fields.pin
    })
    return api.put(url, payload, {
      headers: {
        'fox-client-pin': pinToken
      }
    })
  },
}
