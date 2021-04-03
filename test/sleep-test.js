const chai = require('chai');
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

  
})
