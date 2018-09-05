import rsa from '../utils/rsa'

export default function getHeaders () {
  return {
    'fox-client-pin': rsa.$encrypt({p: pin})
  }
}
