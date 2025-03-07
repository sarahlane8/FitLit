const chai = require('chai');
const expect = chai.expect;
const SleepRepository = require('../src/SleepRepository');

describe('SleepRepository', () => {
  let sleepData
  let sleepRepository

  beforeEach(() => {
    sleepData = [
      {
        "userID": 1,
        "date": "2019/06/15",
        "hoursSlept": 8.1,
        "sleepQuality": 2.9
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
      },
      {
        "userID": 1,
        "date": "2019/06/30",
        "hoursSlept": 7.4,
        "sleepQuality": 3.2
      },
      {
        "userID": 2,
        "date": "2019/06/30",
        "hoursSlept": 8.7,
        "sleepQuality": 2.1
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

    expect(sleepRepository.sleepData[0]).to.deep.equal(sleepData[0]);
  })

  it('should have a method that returns an array of sleepData based on Id', () => {

    expect(sleepRepository.findSleepUserData(1)).to.deep.equal([sleepData[0], sleepData[3]])
  })

  it('should have a method to find the average sleep quality for all users', () => {

    expect(sleepRepository.findAverageSleepQuality()).to.equal(3.3)
  })

  it('should have a method to return an array of sleepData objects for a week when given a date', () => {

    expect(sleepRepository.filterSleepDataByWeek("2019/06/15")).to.deep.equal([sleepData[0], sleepData[1], sleepData[2]])
  })

  it('should have a method to return an array of userIds that had a average sleep quality of more than 3 in a given week', () => {

    expect(sleepRepository.findUsersWithQualitySleep("2019/06/15")).to.deep.equal([2, 3])
  })

  it('should have a method to return an array of sleepData objects for a particular day', () => {

    expect(sleepRepository.filterSleepDataByDate("2019/06/30")).to.deep.equal([sleepData[3], sleepData[4]])
  })

  it('should have a method that returns the userID(s) of the user that slept the most hours on a given a date', () => {

    expect(sleepRepository.findUserWhoSleptLongest("2019/06/15")).to.deep.equal([2])
  })

})
