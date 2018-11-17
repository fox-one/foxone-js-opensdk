let RSA_PBK = '-----BEGIN RSA PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA5PbIXYPU+leiueNmwzbk\nu05eXRJ79gQCPyS3mwoUIySAMmPaU2/RN47lhhJO3YHJQ/J/u2jqgTntQKdmmjei\n0L0odUyL3JaSrqirLi6JVWKaF3o9YkX88xwyLLWNdWywFPL9CPWcqLvTbymrS2zN\nl0U8zGVXft+aDlRYdCaBtQWF1a2tmNpKXfOlPOaZotXO/iN4Diqpl+vTqUqRxb0q\nFkPcAH1XKpWTDP7XSAVLyh2CIf2GEZFzt55nMudfUXMEwv0aAUIgsxK/Yk2cyTbY\nqrYnTJbX/WysMtg+vhVy7DJznwx5sPl1huPO5ytfwTagKgQArF34WfLEB7OIZuZL\n+QIDAQAB\n-----END RSA PUBLIC KEY-----'
const API_DEV = {
  'BASE': 'https://dev.fox.one/api',
}

const API_PROD = {
  'BASE': 'https://api.kumiclub.com/api',
}

const MD5_SALT = 'fox.'

export {
  RSA_PBK,
  API_DEV,
  API_PROD,
  MD5_SALT
}
