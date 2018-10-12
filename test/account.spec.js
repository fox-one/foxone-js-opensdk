let modifyPIN = FoxSDK.modifyPIN
let verifyPIN = FoxSDK.verifyPIN
let getAccountDetail = FoxSDK.getAccountDetail
let expect = chai.expect
let api = FoxSDK.api

describe('Account Service', function () {
  before(function () {
    api.config({
      headers: {
        'Authorization': `Bearer dSw1MXMsZCxCZyxlLDFnTGdqWQ==.FsuwC8JQK2azNIQEz2Lo3k42ubEsq+QmavoEob7+ysE=`
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

  it('getAccountDetail', function (done) {
    getAccountDetail().then(function (res) {
      expect(res).to.be.an('object')
      done()
    }).catch(err => {
      done(err)
    })
  })

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

