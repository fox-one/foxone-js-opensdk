let sdk = new FoxSDK({ env: 'development' })
let expect = chai.expect

describe('Currency', function () {
  before(function () {
    sdk.api.config({
      headers: {
        'Authorization': 'Bearer dSw1MXMsZCxDRSxlLDFnWW1MVQ==.+kFvORmpMdUb5Cl9iCeZNbRjqvoJcyzDjMyq1/ENL0k='
      }
    })
  })

  it('#currency', function (done) {
    sdk.currency().then(function (res) {
      expect(res).to.be.an('object')
      done()
    }).catch(function (err) {
      done(err)
    })
  })
})
