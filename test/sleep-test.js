const chai = require('chai');
const expect = chai.expect;
const Sleep = require('../src/sleep');

describe('Sleep', () => {
  const userSleepData = [
    {
      "userID": 1,
      "date": "2019/06/15",
      "hoursSlept": 8.1,
      "sleepQuality": 2.9
    },
    {
      "userID": 1,
      "date": "2019/06/16",
      "hoursSlept": 9.1,
      "sleepQuality": 1.9
    },
    {
      "userID": 1,
      "date": "2019/06/17",
      "hoursSlept": 6.4,
      "sleepQuality": 2.5
    },
    {
      "userID": 1,
      "date": "2019/06/18",
      "hoursSlept": 9.2,
      "sleepQuality": 3.7
    },
    {
      "userID": 1,
      "date": "2019/06/30",
      "hoursSlept": 7.4,
      "sleepQuality": 3.2
    }
  ];
  let sleep;

  beforeEach (() => {
    sleep = new Sleep(userSleepData);
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

  it('should return undefined if no argument is passed to instaniate new instance', () => {
    const sleepInstance = new Sleep();

    expect(sleepInstance.userData).to.equal(undefined);
  })

  it('should be able to find the avg number of hours slept per day for a user', () => {

    expect(sleep.findAverageProperty('hoursSlept')).to.equal(8);
  })

  it('should be able to find the avg sleep quality per day for a user', () => {

    expect(sleep.findAverageProperty('sleepQuality')).to.equal(2.8);
  })

  it('should be able to return hours slept for a particular date', () => {

    expect(sleep.findSleepPropertyByDate('2019/06/15', 'hoursSlept')).to.equal(8.1);
  })

  it('should be able to return sleep quality for partucular date', () => {

    expect(sleep.findSleepPropertyByDate('2019/06/15', 'sleepQuality')).to.equal(2.9);
  })

  it('should be able to return an array of sleep objects for a week when given a date', () => {

    expect(sleep.filterSleepDataByWeek('2019/06/18')).to.deep.equal([userSleepData[0], userSleepData[1], userSleepData[2], userSleepData[3]]);
  })

  it('should be able to return hours slept for each day for a given week', () => {

    expect(sleep.findDailySleepPropertyByWeek('2019/06/18', 'hoursSlept')).to.deep.equal
      ({'2019/06/15': 8.1, '2019/06/16': 9.1, '2019/06/17': 6.4, '2019/06/18': 9.2});
  })

  it('should return an empty object if no user data for a week exists', () => {

    expect(sleep.findDailySleepPropertyByWeek('2021/06/18', 'hoursSlept')).to.deep.equal({});
  })

  it('should be able to return sleep quality for each day of a given week', () => {

    expect(sleep.findDailySleepPropertyByWeek('2019/06/18', 'sleepQuality')).to.deep.equal
      ({'2019/06/15': 2.9, '2019/06/16': 1.9, '2019/06/17': 2.5, '2019/06/18': 3.7});
  })

  it('should return an empty object if no user data for a week exists', () => {

    expect(sleep.findDailySleepPropertyByWeek('2021/06/18', 'sleepQuality')).to.deep.equal({});
  })
})
