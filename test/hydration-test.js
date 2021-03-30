const chai = require('chai');
const expect = chai.expect;
const Hydration = require('../src/Hydration');

describe('Hydration', () => {
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
    },
    {
      "userID": 2,
      "date": "2019/06/20",
      "numOunces": 41
    }
  ]
  hydration = new Hydration(hydrationData)
})

it.skip('should have a method that returns average fluid oz consumption for all time for a user', () => {

  expect(hydration.findTotalWaterConsumptionAverage(1)).to.equal(44)
})
})
