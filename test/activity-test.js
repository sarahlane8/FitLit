const chai = require('chai');
const expect = chai.expect;
const Activity = require('..src/activity.js');

describe('Activity', () => {
  let activity;
  const userActivityData = [
    {
      "userID": 1,
      "date": "2019/06/15",
      "numSteps": 5377,
      "minutesActive": 200,
      "flightsOfStairs": 12
    },
    {
      "userID": 1,
      "date": "2019/06/16",
      "numSteps": 4280,
      "minutesActive": 38,
      "flightsOfStairs": 7
    },
    {
      "userID": 1,
      "date": "2019/06/17",
      "numSteps": 8352,
      "minutesActive": 137,
      "flightsOfStairs": 13
    }
  ]
  
  beforeEach(() => {
    activity = new Activity();
  })



})
