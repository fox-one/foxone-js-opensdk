//let pkg = require('../package.json')

const Env = Object.freeze({
  // 'version': pkg.version,
  // 'build': pkg.buildVersion
  'version': '1.0.0',
  'build': '100'
})

let RSA_PBK = '-----BEGIN RSA PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA0/SMrN1Ki50xAD0mjIjA\nNroYtZ+dtFh9i2gT8ANy9ObQplKJQedM5VDviEqnNiyNgQj6byso3EnykgG7JbpQ\nqwt7XgAwO+uE01EdGi46G59DzvobBfwchmV9q9caHE0od95XukCq7vQzlpL/IS2+\nBWaG6RjYeqcE7mxdmcVIzQ6ifcY4tfcAnEXqVz5kAcKM+GbLVDOhdeb3LPpkydNT\nLi+q8vY1PrnnWDlGnJORosBuRS5IXab7QxojKFx1lrq4EvnKGeyB6m3+h14Ixlcv\n/QO5p7RR4lI9hs11Ecatritck25xQQ+YO4n0gYAvScxV0t0nQGBjmsN11Nm4Hl1x\nkwIDAQAB\n-----END RSA PUBLIC KEY-----'

const API = {
  'BASE': 'https://api.fox.one/api',
  'WS': 'wss://ws.fox.one/ws'
}

const MD5_SALT = 'fox.'

export {
  Env,
  RSA_PBK,
  API,
}
