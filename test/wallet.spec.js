import walletService from '../src/services/Wallet.js'

describe('test wallet service', function () {
  it('test loadAssets api', function () {
    walletService.loadAssets().then(res => {
      chai.expect(res).to.be.an(Object)
    })
  })
})
