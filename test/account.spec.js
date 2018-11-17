let expect = chai.expect
let sdk = new FoxSDK({ env: 'development' })
let sdk_pro = new FoxSDK()

describe('Prod Service', function () {
  before(function () {
    sdk_pro.api.config({
      headers: {
        'Authorization': 'Bearer'
      }
    })
  })

  it('getAccountDetail', function (done) {
    sdk_pro.getAccountDetail().then(function (res) {
      expect(res).to.be.an('object')
      done()
    }).catch(err => {
      done(err)
    })
  })

})

describe('Account Service', function () {
  before(function () {
    sdk.api.config({
      headers: {
        'Authorization': 'Bearer dSw1MXMsZCxDRSxlLDFnWW1MVQ==.+kFvORmpMdUb5Cl9iCeZNbRjqvoJcyzDjMyq1/ENL0k='
      }
    })
  })

  // it('#modifyPIN', function (done) {
  //   let pin = ""
  //   let newPin = "950626"
  //   sdk.modifyPIN(pin, newPin).then(function (res) {
  //     expect(res).to.be.an('object')
  //     done()
  //   }).catch(function (res) {
  //     done(res)
  //   })
  // })

  // it('#modifyPIN', function (done) {
  //   let params = {
  //     pinType: 2,
  //     pin: '950626',
  //     newPin: ''
  //   }
  //   sdk.modifyPIN(params).then(function (res) {
  //     expect(res).to.be.an('object')
  //     done()
  //   }).catch(function (res) {
  //     done(res)
  //   })
  // })

  it('getAccountDetail', function (done) {
    sdk.getAccountDetail().then(function (res) {
      expect(res).to.be.an('object')
      done()
    }).catch(err => {
      done(err)
    })
  })

  // it('verifyPIN', function (done) {
  //   let pin = '123456'
  //   sdk.verifyPIN(pin).then(function (res) {
  //     expect(res).to.be.an('object')
  //     done()
  //   }).catch(function (err) {
  //     done(err)
  //   })
  // })
})

