const chai = require('chai');
const expect = chai.expect;
const Hydration = require('../src/Hydration');
const dayjs = require('dayjs');

describe('Hydration', () => {
  const hydrationData = [
    {
      "userID": 1,
      "date": "2019/06/15",
      "numOunces": 37
    },
    {
      "userID": 1,
      "date": "2019/06/18",
      "numOunces": 53
    }
  ]
  let hydration

  beforeEach(() => {
    hydration = new Hydration(hydrationData)
  })

  it('should be a function', () => {

    expect(Hydration).to.be.a('function');
  })

  it('should be an instance of Hydration', () => {

    expect(hydration).to.be.an.instanceof(Hydration);
  })

  it('should be able to take in hydrationData object', () => {

    expect(hydration.userHydrationData).to.deep.equal(hydrationData);
    })

  it('should have a method that returns average fluid oz consumption for all time for a user', () => {

    expect(hydration.findTotalWaterConsumptionAverage()).to.equal(45)
  })

  it('should have a method that returns fluid consumption for a specific date', () => {

    expect(hydration.findWaterConsumptionByDate("2019/06/18")).to.equal(hydrationData[1].numOunces);
  })

  it('should have a method that returns fluid consumption for a specific week', () => {

    expect(hydration.findDailyWaterConsumptionByWeek("2019/06/18")).to.deep.equal(hydrationData)
  })
})
