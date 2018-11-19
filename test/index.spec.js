let sdk = new FoxSDK({ env: 'development' })
let expect = chai.expect

describe('test sdk', function () {
  before(function () {
    sdk.api.config({
      headers: {
        'Authorization': 'Bearer dSw1MXMsZCxDRSxlLDFnWW1MVQ==.+kFvORmpMdUb5Cl9iCeZNbRjqvoJcyzDjMyq1/ENL0k='
      }
    })
  })

it('#modifyPIN', function (done) {
  let pin = {}
    let newPin = "950626"
    sdk.modifyPIN(pin, newPin).then(function (res) {
      expect(res).to.be.an('object')
      done()
    }).catch(function (res) {
      done(res)
    })
  })

it('verifyPIN', function (done) {
    let pin = '123456'
    sdk.verifyPIN(pin).then(function (res) {
      expect(res).to.be.an('object')
      done()
    }).catch(function (err) {
      done(err)
    })
  })

  it('normal response for getAccountDetail()', function (done) {
    sdk.getAccountDetail().then(function (res) {
      expect(res).to.be.an('object')
      done()
    }).catch(err => {
      done(err)
    })
  })

  it('normal response for currency()', function (done) {
    sdk.currency().then(function (res) {
      expect(res).to.be.an('object')
      done()
    }).catch(function (err) {
      done(err)
    })
  })

  it('normal response for loadAsserts()', function (done) {
    sdk.loadAssets().then(function (res) {
      expect(res).to.be.an('object')
      done()
    }).catch(function (err) {
      done(err)
    })
  })

  it('normal response for loadAsset()', function (done) {
    let assetId = '6cfe566e-4aad-470b-8c9a-2fd35b49c68d'
    sdk.loadAsset(assetId).then(function (res) {
      expect(res).to.be.an('object')
      done()
    }).catch(function (err) {
      done(err)
    })
  })

  it('normal response for loadEnabledCoins()', function (done) {
    sdk.loadEnabledCoins().then(function (res) {
      expect(res).to.be.an('object')
      done()
    }).catch(function (err) {
      done(err)
    })
  })

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

  it('withdraw(); for EOS')

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

  it('withdraw(); for CNB')

  it('normal response for loadSnapshots()', function (done) {
    let assetId = '6cfe566e-4aad-470b-8c9a-2fd35b49c68d'
    sdk.loadSnapshots(assetId).then(function (res) {
      expect(res).to.be.an('object')
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
    let pin = ''
    sdk.loadFee(params, pin).then(function (res) {
      expect(res).to.be.an('object')
      done()
    }).catch(function (err) {
      done(err)
    })
  })

})
