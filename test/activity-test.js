const chai = require('chai');
const expect = chai.expect;
const Activity = require('../src/activity.js');


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
    activity = new Activity(userActivityData);
  })

  it('should be a function', () => {

    expect(Activity).to.be.a('function');
  })

  it('should instantiate a new activity', () => {

    expect(activity).to.be.an.instanceof(Activity);
  })

  it('should take in userData as an argument', () => {

    expect(activity.userData).to.deep.equal(userActivityData);
  })

  it('should filter userData based on a date', () => {

    expect(activity.findUserDataByDay("2019/06/17")).to.deep.equal(userActivityData[2]);
  })

  it('should return the miles a user has walked', () => {

    expect(activity.calculateMilesWalked("2019/06/15", 4.3)).to.equal(4.4);
  })
})
