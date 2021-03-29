const chai = require('chai');
const expect = chai.expect;
const Hydration = require('../src/Hydration');

describe('hydration', () => {
  let hydrationData
  let hydration

  beforeEach(() => {
    hydrationData = [
      {
        "userID": 1,
        "date": "2019/06/15",
        "numOunces": 37
      },
      {
        "userID": 1,
        "date": "2019/06/18",
        "numOunces": 53
      },
      {
        "userID": 1,
        "date": "2019/06/20",
        "numOunces": 41
      }
    ]
    hydration = new Hydration()
  })

  it('should be a function', () => {

    expect(Hydration).to.be.a('function');
  })

  it('should be an instance of Hydration', () => {

    expect(hydration).to.be.an.instanceof(Hydration);
  })
})
