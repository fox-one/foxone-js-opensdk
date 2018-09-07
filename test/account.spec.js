let modifyPIN = FoxSDK.modifyPIN
let verifyPIN = FoxSDK.verifyPIN
let expect = chai.expect
let api = FoxSDK.api

describe('Account Service', function () {
  before(function () {
    api.config({
      headers: {
        'Authorization': `Bearer dSw1NEwsZCxBYSxlLDFnOHpWdw==.P0Vcd2ghLaCL9Nkz2q9Dn4qJlr1GuGU5BBAHk1y0Uxg=`
      }
    })
  })

  // it('#modifyPIN', function (done) {
  //   let params = {
  //     pinType: 2,
  //     pin: '',
  //     newPin: '123456'
  //   }
  //   modifyPIN(params).then(function (res) {
  //     expect(res).to.be.an('object')
  //     done()
  //   }).catch(function (res) {
  //     done(res)
  //   })
  // })

  it('verifyPIN', function (done) {
    let params = {
      pinType: 2,
      pin: '123456'
    }
    verifyPIN(params).then(function (res) {
      expect(res).to.be.an('object')
      done()
    }).catch(function (err) {
      done(err)
    })
  })
})

