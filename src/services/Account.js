/**
 * Account module
 * @module Account
 */

import api from '../api'
import { API, MD5_SALT } from '../consts'
import rsa from '../utils/rsa'
import md5 from 'blueimp-md5'

export default {
  /**
   * setup or modify your pin.
   * @param {string} pin - pin for now. '' when setting pin for the first time.
   * @param {string} newPin - pin to set, a string of 6 digits.
   * @returns {Promise}
   * @fulfil {Object} - result of modify pin.
   * @reject {Error} - request Error.
   */
  modifyPIN ({pin, newPin}) {
    const url = API.BASE + '/account/pin'
    let payload = {'pinType': 2}
    let headers = {}
    if (pin !== '') {
      headers['fox-client-pin'] = rsa.$encrypt({
        p: pin
      })
    }
    payload.newPinToken = rsa.$.encrypt(md5(MD5_SALT + newPin), true)
    return api.put(url, payload, { headers })
  },

  /**
   * verify pin.
   * @param {string} pin - pin for now, a string of 6 digits.
   * @returns {Promise}
   * @fulfil {Object} - result of verify pin.
   * @reject {Error} - request error.
   */
  verifyPIN ({pin}) {
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
