import { API_DEV, API_PROD, MD5_SALT, RSA_PBK_PROD, RSA_PBK_DEV } from './consts'
import api from './api'
import md5 from 'blueimp-md5'
import { JSEncrypt } from 'jsencrypt'
const uuidV4 = require('uuid/v4')

class FoxSdk {
  constructor ({env = 'production'} = {}) {
    this.api = api
    this.env = env
    this.API = this.env === 'development' ? API_DEV : API_PROD
    this.RSA_PBK = this.env === 'development' ? RSA_PBK_DEV : RSA_PBK_PROD
    let rsa = new JSEncrypt()
    rsa.setPublicKey(this.RSA_PBK)
    this.rsa = {
      $encrypt (data) {
        data.n = uuidV4()
        if (!data.t) data.t = Math.floor(Date.now() / 1000)
        return rsa.encrypt(JSON.stringify(data), true)
      },
      $: rsa
    }
  }

  getPinHeaders(pin) { 
    return {
      'fox-client-pin': this.rsa.$encrypt({p: pin})
    }
  }

  modifyPIN (pin, newPin) {
    if (typeof pin !== 'string' || typeof newPin !== 'string') {
      return Promise.reject({code: -1, message: 'pin must be string'})
    }
    if (pin === '' || newPin === '') {
      return Promise.reject({code: -1, message: 'pin can not be empty'})
    }
    const url = this.API.BASE + '/account/pin'
    let payload = {'pinType': 2}
    let headers = {
      'fox-client-pin': this.rsa.$encrypt({ p: pin })
    }
    payload.newPinToken = this.rsa.$.encrypt(md5(MD5_SALT + newPin), true)
    return api.put(url, payload, { headers })
  }

  setPIN (pin) {
    if (typeof pin !== 'string') {
      return Promise.reject({code: -1, message: 'pin must be string'})
    }
    if (pin === '') {
      return Promise.reject({code: -1, message: 'pin can not be empty'})
    }
    const url = this.API.BASE + '/account/pin'
    let payload = {'pinType': 2}
    payload.newPinToken = this.rsa.$.encrypt(md5(MD5_SALT + pin), true)
    return api.put(url, payload)
  }

  verifyPIN(pin) {
    if (typeof pin !== 'string') {
      return Promise.reject({code: -1, message: 'pin must be string'})
    }
    const url = this.API.BASE + '/account/pin-verify'
    let payload = { pinType: 2 }
    // pin 相同时则为验证逻辑
    let pinToken = this.rsa.$encrypt({
      p: pin
    })
    return api.put(url, payload, {
      headers: {
        'fox-client-pin': pinToken
      }
    })
  }

  getAccountDetail () {
    let url = `${this.API.BASE}/account/detail`
    return api.get(url)
  }

  currency() {
    const url = this.API.BASE + '/trade-data/currency'
    return api.get(url)
  }

  loadAssets () {
    const url = `${this.API.BASE}/wallet/assets`
    return api.get(url)
  }

  loadAsset (id) {
    const url = `${this.API.BASE}/wallet/assets/${id}`
    return api.get(url)
  }

  loadEnabledCoins () {
    const url = `${this.API.BASE}/market/coin/wallet-assets`
    return api.get(url)
  }

  withdraw(data, pin) {
    const url = `${this.API.BASE}/wallet/withdraw`
    return api.post(url, data, {
      headers: this.getPinHeaders(pin)
    })
  }

  loadSnapshots (params) {
    const url = `${this.API.BASE}/wallet/snapshots`
    return api.get(url, {params})
  }

  loadFee (data, pin) {
    const url = `${this.API.BASE}/wallet/withdraw/fee`
    return api.get(url, {params: data, headers: this.getPinHeaders(pin)})
  }
}

export default FoxSdk
