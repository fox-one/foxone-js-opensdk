import walletService from './wallet.spec'
import expect from 'chai'

describe('test wallet service', function () {
  it('test loadAssets api', function () {
    walletService.loadAssets().then(res => {
      expect(res).to.be.an(Object)
    })
  })
})
