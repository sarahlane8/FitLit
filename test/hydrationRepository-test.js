const chai = require('chai');
const expect = chai.expect;
const HydrationRepository = require('../src/HydrationRepository');

describe('HydrationRepository', () => {
  let hydrationData
  let hydrationRepository

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
      },
      {
        "userID": 2,
        "date": "2019/06/20",
        "numOunces": 41
      }
    ]
    hydrationRepository = new HydrationRepository(hydrationData)
  })

  it('should be a function', () => {

    expect(HydrationRepository).to.be.a('function');
  })

  it('should be an instance of HydrationRepository', () => {

    expect(hydrationRepository).to.be.an.instanceof(HydrationRepository);
  })
  
})
