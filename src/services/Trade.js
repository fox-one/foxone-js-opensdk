/**
 * Trade module
 * @module Trade
 */
const uuidV4 = require('uuid/v4')

const assets = {
  BTC: "c6d0c728-2624-429b-8e0d-d9d19b6592fa", // "BTC",
  BCH: "fd11b6e3-0b87-41f1-a41f-f0e9b49e5bf0", // "BCH",
  EOS: "6cfe566e-4aad-470b-8c9a-2fd35b49c68d", // "EOS",
  ETH: "43d61dcd-e413-450d-80b8-101d5e903357", // "ETH",
  USDT: "815b0b1a-2764-3736-8faa-42d694fa620a" // "USDT"
}

const recipients = {
  BTC: "c6d0c728-2624-429b-8e0d-d9d19b6592fa", // "BTC",
  BCH: "fd11b6e3-0b87-41f1-a41f-f0e9b49e5bf0", // "BCH",
  EOS: "6cfe566e-4aad-470b-8c9a-2fd35b49c68d", // "EOS",
  ETH: "43d61dcd-e413-450d-80b8-101d5e903357", // "ETH",
  USDT: "815b0b1a-2764-3736-8faa-42d694fa620a" // "USDT"
}

export default {
  /**
   * create payment url
   * @param {string} asset - btc|eos|xin
   * @param {string} amount - asset amount
   * @param {string} memo - memo
   * @returns {string} - result of the url
   */
  createPaymentUrl ({asset, amount, memo=''}) {
    let uid = uuidV4()
    return `mixin://pay?amount=${amount}&asset=${assets[asset]}&memo=${memo}&recipient=${recipients[asset]}&trace=${uid}`
  },

}
