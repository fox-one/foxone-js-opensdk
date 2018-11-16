import Wallet from './services/Wallet'
import Account from './services/Account'
import Currency from  './services/Currency'
import api from './api'

let ex = Object.assign({}, Wallet, Account, Currency, {api})

export default ex
