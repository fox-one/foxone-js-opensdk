/* eslint-disable quotes */
import api from './api'
import { API } from '@/consts'
import getPinHeaders from './utils/getPinHeaders'

export default {
  loadAssets () {
    const url = `${API.BASE}/wallet/assets`
    return api.get(url).then(({assets}) => assets, err => {
      return Promise.reject(err)
    })
  },
  loadAsset (id) {
    const url = `${API.BASE}/wallet/assets/${id}`
    return api.get(url).then(({asset}) => asset, err => {
      return Promise.reject(err)
    })
  },
  loadEnabledCoins () {
    const url = `${API.BASE}/market/coin/wallet-assets`
    return api.get(url).then(({coins}) => coins, err => {
      return Promise.reject(err)
    })
  },
  withdraw (data) {
    const url = `${API.BASE}/wallet/withdraw`
    return api.post(url, data, {
      headers: getPinHeaders()
    }).then(({snapshot}) => snapshot, err => {
      return Promise.reject(err)
    })
  },
  loadSnapshots (id) {
    const url = `${API.BASE}/wallet/snapshots?assetId=${id}`
    return api.get(url).then(({snapshots}) => snapshots, err => {
      return Promise.reject(err)
    })
  },
  loadFee (data) {
    const url = `${API.BASE}/wallet/withdraw/fee`
    return api.get(url, {params: data, headers: getPinHeaders()}).then(({fee}) => fee, err => {
      return Promise.reject(err)
    })
  }
}
