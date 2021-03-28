const chai = require('chai');
const expect = chai.expect;
const User = require('../src/user.js');

describe('User', () => {
  let user
  let data
  beforeEach(() => {
    data = {
      "id": 150,
      "name": "Marceline Lane",
      "address": "1000 Main Street, Denver, CO 55555",
      "email": "MarcelineLane@madeup.com",
      "strideLength": 8,
      "dailyStepGoal": 8000,
      "friends": [
        1,
        2,
        3
      ]
    };
    user = new User(data);
  })

  it('should be function', () => {

    expect(User).to.be.a('function');
  })

  it('should be an instance of User', () => {

    expect(user).to.be.an.instanceof(User);
  })

  it('should be able to take in userData object', () => {

    expect(user.id).to.equal(150);
  })

  it('should have a method to return the user\'s first name', () => {

    expect(user.findUserFirstName()).to.equal('Marceline');
  })
})
