const chai = require('chai');
const expect = chai.expect;
const User = require('../src/user.js');

describe('User', () => {

  it('should be function', () => {
    const user = new User();

    expect(User).to.be.a('function');
  })

  it('should be an instance of User', () => {
    const user = new User();

    expect(user).to.be.an.instanceof(User);
  })

  it('should be able to take in userData object', () => {
    const data = {
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
    const user = new User(data);

    expect(user.id).to.equal(150);
  })
})
