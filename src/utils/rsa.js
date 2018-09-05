import { RSA_PBK } from '../consts'
import { JSEncrypt } from 'jsencrypt'
const uuidV4 = require('uuid/v4')

let rsa = new JSEncrypt()

rsa.setPublicKey(RSA_PBK)

export default {

  $encrypt (data) {
    data.n = uuidV4()
    if (!data.t) data.t = Math.floor(Date.now() / 1000)
    return rsa.encrypt(JSON.stringify(data), true)
  },
  $: rsa
}
