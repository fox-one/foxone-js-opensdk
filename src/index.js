import Wallet from './services/Wallet'
import Account from './services/Account'
import api from './api'

let ex = Object.assign({}, Wallet, Account, {api})

export default ex
