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

    expect(sleep.userData).to.deep.equal(userSleepData);
  })

  it('should be able to find the avg number of hours slept per day for a user', () => {

    expect(sleep.findAverageHoursSlept()).to.equal(7.8);
  })

  it('should be able to find the avg sleep quality per day for a user', () => {

    expect(sleep.findAverageSleepQuality()).to.equal(3.1);
  })

  it('should be able to return hours slept for a particular date', () => {

    expect(sleep.findHoursSleptByDate("2019/06/15")).to.equal(8.1)
  })
})
