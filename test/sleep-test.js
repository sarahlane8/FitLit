const chai = require('chai');
const expect = chai.expect;
const Sleep = require('../src/sleep');
const SleepRepository = require('../src/sleepRepository');

describe('Sleep', () => {
  const userSleepData = [
    {
      "userID": 1,
      "date": "2019/06/15",
      "hoursSlept": 8.1,
      "sleepQuality": 2.9
    },{
      "userID": 1,
      "date": "2019/06/30",
      "hoursSlept": 7.4,
      "sleepQuality": 3.2
    }
  ]
  let sleep

  beforeEach (() => {
    sleep = new Sleep(userSleepData)
  })

  it('should be a function', () => {

    expect(Sleep).to.be.a('function');
  })

  it('should be an instance of the Sleep class', () => {

    expect(sleep).to.be.an.instanceof(Sleep);
  })

  it('should be able to take in an array of user data', () => {

    expect(sleep.userData).to.deep.equal(userSleepData)
  })
})
