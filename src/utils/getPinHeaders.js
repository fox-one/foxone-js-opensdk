import rsa from '../utils/rsa.js'

export default function getHeaders (pin) {
  return {
    'fox-client-pin': rsa.$encrypt({p: pin})
  }
}
