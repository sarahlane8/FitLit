const chai = require('chai');
const expect = chai.expect;
const SleepRepository = require('../src/sleepRepository');

describe('SleepRepository', () => {
  let sleepData
  let sleepRepository

  beforeEach(() => {
    sleepData = [
      {
        "userID": 1,
        "date": "2019/06/15",
        "hoursSlept": 8.1,
        "sleepQuality": 3.2
      },
      {
        "userID": 2,
        "date": "2019/06/15",
        "hoursSlept": 9,
        "sleepQuality": 4.4
      },
      {
        "userID": 3,
        "date": "2019/06/15",
        "hoursSlept": 1.2,
        "sleepQuality": 4
      }
    ];

    sleepRepository = new SleepRepository(sleepData)
  })

  it('should be a function', () => {

    expect(SleepRepository).to.be.a('function');
  })

  it('should be an instance of the SleepRepository class', () => {

    expect(sleepRepository).to.be.an.instanceof(SleepRepository);
  })

  it('should be able to take in sleep data', () => {

    expect(sleepRepository[0]).to.deep.equal(sleepData[0]);
  })
})
