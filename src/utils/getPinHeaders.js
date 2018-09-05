import rsa from '../utils/rsa.js'

export default function getHeaders () {
  return {
    'fox-client-pin': rsa.$encrypt({p: pin})
  }
}
