/**
 * Wallet module.
 * @module Wallet
 */
import api from '../api.js'
import { API } from '../consts.js'
import getPinHeaders from '../utils/getPinHeaders.js'

export default {
  /**
   * load all assets in the wallet.
   * @returns {Promise}
   * @fulfil {Array} - all assets details.
   * @reject {Error} - request error.
   */
  loadAssets () {
    const url = `${API.BASE}/wallet/assets`
    return api.get(url).then(({assets}) => assets, err => {
      return Promise.reject(err)
    })
  },

  /**
   * load an asset by assetId.
   * @param {string} id - the assetId for the asset to load.
   * @returns {Promise}
   * @fulfil {Object} - asset detail.
   * @reject {Error} - request error.
   */
  loadAsset (id) {
    const url = `${API.BASE}/wallet/assets/${id}`
    return api.get(url).then(({asset}) => asset, err => {
      return Promise.reject(err)
    })
  },

  /**
   * load available coins for deposit.
   * @returns {Promise}
   * @fulfil {Array} - available coins.
   * @reject {Error} - request error.
   */
  loadEnabledCoins () {
    const url = `${API.BASE}/market/coin/wallet-assets`
    return api.get(url).then(({coins}) => coins, err => {
      return Promise.reject(err)
    })
  },

  /**
   * withdraw assets.
   * @param {object} data - params for withdraw request. for EOS it should include: assetId, publicKey, memo, label, amount;for the others: assetId, publicKey, amount, memo.
   * @param {string} pin - personal identification number.
   * @returns {Promise}
   * @fulfil {Array} - transfer recodes after withdraw.
   * @reject {Error} - request error.
   */
  withdraw ({data, pin}) {
    const url = `${API.BASE}/wallet/withdraw`
    return api.post(url, data, {
      headers: getPinHeaders(pin)
    }).then(({snapshot}) => snapshot, err => {
      return Promise.reject(err)
    })
  },

  /**
   * transfer snapshot for an asset.
   * @param {string} id - assetId.
   * @returns {Promise}
   * @fulfil {Array} - all transfer records.
   * @reject {Error} - request error.
   */
  loadSnapshots (id) {
    const url = `${API.BASE}/wallet/snapshots?assetId=${id}`
    return api.get(url).then(({snapshots}) => snapshots, err => {
      return Promise.reject(err)
    })
  },

  /**
   * load transfer fee for an transition or withdraw
   * @param {object} data - params for the request. for EOS: it should include: assetId, publicKey, label; for the others: assetId, publicKey
   * @param {string} pin - personal identification number.
   * @returns {Promise}
   * @fulfil {Object} - fee details.
   * @reject {Error} - request error.
   */
  loadFee (data, pin) {
    const url = `${API.BASE}/wallet/withdraw/fee`
    return api.get(url, {params: data, headers: getPinHeaders(pin)}).then(({fee}) => fee, err => {
      return Promise.reject(err)
    })
  }
}
