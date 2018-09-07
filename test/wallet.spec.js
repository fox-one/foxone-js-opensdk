let loadAssets = FoxSDK.loadAssets
let loadAsset = FoxSDK.loadAsset
let loadEnabledCoins = FoxSDK.loadEnabledCoins
let withdraw = FoxSDK.withdraw
let loadSnapshots = FoxSDK.loadSnapshots
let loadFee = FoxSDK.loadFee
let api = FoxSDK.api
let expect = chai.expect

describe('Wallet Service', function () {
  before(function () {
    api.config({
      headers: {
        'Authorization': `Bearer dSw1NEosZCxBYSxlLDFnOG0wTg==.8uCM/BTk+fosGLjsv5a1o+asvSAb0HuOQc+VO4iEx7M=`
      }
    })
  })

  it('#loadAssets', function (done) {
    loadAssets().then(function (res) {
      expect(res).to.be.an('array')
      done()
    }).catch(function (err) {
      done(err)
    })
  })

  it('#loadAsset', function (done) {
    let assetId = '6cfe566e-4aad-470b-8c9a-2fd35b49c68d'
    loadAsset(assetId).then(function (res) {
      expect(res).to.be.an('object')
      done()
    }).catch(function (err) {
      done(err)
    })
  })

  it('#loadEnabledCoins', function (done) {
    loadEnabledCoins().then(function (res) {
      expect(res).to.be.an('array')
      done()
    }).catch(function (err) {
      done(err)
    })
  })

  it('#withdraw; for EOS')

  // it('#withdraw; for EOS', function (done) {
  //   let params = {
  //     label: '',
  //     amount: '',
  //     assetId: '',
  //     publicKey: '',
  //     memo: ''
  //   }
  //   let pin = '123456'
  //   withdraw(params, pin).then(function (res) {
  //     expect(res).to.be.an('object')
  //     done()
  //   }).catch(function (res) {
  //     done(res)
  //   })
  // })

  it('#withdraw; for CNB')

  // it('#withdraw; for CNB', function (done) {
  //   let params = {
  //     assetId: '965e5c6e-434c-3fa9-b780-c50f43cd955c',
  //     publicKey: '0x7588B06E7D623a5Ef6896ff199C08026A60d1f9b',
  //     amount: '10',
  //     memo: 'test'
  //   }
  //   let pin = '123456'
  //   withdraw(params, pin).then(function (res) {
  //     expect(res).to.be.an('object')
  //     done()
  //   }).catch(function (res) {
  //     done(res)
  //   })
  // })

  it('#loadSnapshots', function (done) {
    let assetId = '6cfe566e-4aad-470b-8c9a-2fd35b49c68d'
    loadSnapshots(assetId).then(function (res) {
      expect(res).to.be.an('array')
      done()
    }).catch(function (err) {
      done(err)
    })
  })

  it('#loadFee', function (done) {
    let params = {
      assetId: '965e5c6e-434c-3fa9-b780-c50f43cd955c',
      publicKey: '0x7588B06E7D623a5Ef6896ff199C08026A60d1f9b'
    }
    let pin = '123456'
    loadFee(params, pin).then(function (res) {
      expect(res).to.be.an('object')
      done()
    }).catch(function (err) {
      done(err)
    })
  })
})
