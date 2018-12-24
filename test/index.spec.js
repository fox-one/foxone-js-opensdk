// let sdk = new FoxSDK({ env: 'development' })
let sdk = new FoxSDK()
let expect = chai.expect

describe('test sdk', function () {
  before(function () {
    sdk.api.config({
      headers: {
        // 'Authorization': "Bearer dSw1MXMsZCxDRSxlLDFnYWNMeA==.crmbiQn8SHlZY5woNGAgqUPvdpbofOkdS2eV1DHjXbI=" //开发
        'Authorization': "Bearer dSx5WTYsZCw0M2EsZSwxZ2RiR28=.S55PkY/QvitLxWMBCuEIuD+jHR3I+5k2nepwJFlfeI4=" //生产
      }
    })
  })

  // it('setPIN', function (done) {
  //   sdk.setPIN('123456').then(function (res) {
  //     expect(res).to.be.an('object')
  //     done()
  //   }).catch(function (res) {
  //     done(res)
  //   })
  // })

  // it('#modifyPIN', function (done) {
  //     let pin = '123456'
  //     let newPin = "111111"
  //     sdk.modifyPIN(pin, newPin).then(function (res) {
  //       expect(res).to.be.an('object')
  //       done()
  //     }).catch(function (res) {
  //       done(res)
  //     })
  //   })

  // it('verifyPIN', function (done) {
  //     let pin = '123456'
  //     sdk.verifyPIN(pin).then(function (res) {
  //       expect(res).to.be.an('object')
  //       done()
  //     }).catch(function (err) {
  //       done(err)
  //     })
  // })
  
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

  it('normal response for loadUserAsset()', function (done) {
    sdk.loadUserAssets().then(function (res) {
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
  //   sdk.withdraw(params, pin).then(function (res) {
  //     expect(res).to.be.an('object')
  //     done()
  //   }).catch(function (res) {
  //     done(res)
  //   })
  // })
  
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
    let pin = '123456'
    sdk.loadFee(params, pin).then(function (res) {
      expect(res).to.be.an('object')
      done()
    }).catch(function (err) {
      done(err)
    })
  })

})
