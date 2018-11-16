import api from '../api'
import { API } from '../consts'

export default {
  currency() {
    const url = API.BASE + '/trade-data/currency'
    return api.get(url)
  }
}
