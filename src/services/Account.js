import api from '../api'
import { API, MD5_SALT } from '../consts'
import rsa from '../utils/rsa'

export default {
  verifyPIN (fields) {
    const url = API.BASE + '/account/pin-verify'
    let payload = { pinType: fields.pinType }
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
