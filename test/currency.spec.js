let currency = FoxSDK.currency
let api = FoxSDK.api
let expect = chai.expect

describe('Currency', function () {
  before(function () {
    api.config({
      headers: {
        'Authorization': `Bearer dSw1S3csZCxDQyxlLDFnVVNrMA==.twa2VbgFMWxG/SGasBBe8VeJVyv7DjSc3oaH6XaZcXY=`
      }
    })
  })

  it('#currency', function (done) {
    currency().then(function (res) {
      expect(res).to.be.an('object')
      done()
    }).catch(function (err) {
      done(err)
    })
  })
})
