import api from './api'
import { API } from './consts'
import axios from 'axios'

export default {
  /* Captcha API */
  loadCaptcha () {
    const url = `${API.BASE}/captcha`
    return api.post(url)
  },
  loadAppVersions () {
    const url = `${API.BASE}/app`
    return api.get(url).then(({apps}) => apps, err => {
      return Promise.reject(err)
    })
  },
  uploadToAws (uploadUrl, binaryContent, { onProgress, onEnd }) {
    return axios({
      url: uploadUrl,
      method: 'PUT',
      data: binaryContent,
      headers: {
        'x-amz-acl': 'public-read'
      },
      onUploadProgress (progressEvent) {
        let { total, loaded } = progressEvent

        if (loaded < total) {
          onProgress && onProgress({
            percent: (loaded / total * 100).toFixed(2), loaded, total
          })
        } else {
          onEnd && onEnd({
            total
          })
        }
      }
    })
  }
}
