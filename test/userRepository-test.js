const chai = require('chai');
const expect = chai.expect;
const UserRepository = require('../src/userRepository.js');
// const userData = require('../data/users.js');

describe('UserRepository', () => {

it('should be a function', () => {
  const userRepository = new UserRepository();

  expect(UserRepository).to.be.a('function');
})

it('should instantiate a new UserRepository', () => {
  const userRepository = new UserRepository();

  expect(userRepository).to.be.an.instanceof(UserRepository);
})

it('should be able to take in an argument', () => {
  const data = [{
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
  }]


  const userRepository = new UserRepository(data);

  expect(userRepository.users[0].name).to.equal('Marceline Lane');
})

  it('should have a method that takes in a user\'s ID and returns that user\'s data', () => {
    const data = [{
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
    },
    {
      "id": 375,
      "name": "Sarah Ball",
      "address": "2000 Division Ave, Denver, CO 55555",
      "email": "SarahBall@madeup.com",
      "strideLength": 4.5,
      "dailyStepGoal": 10000,
      "friends": [
        4,
        5,
        6
      ]
    }]
    const userRepository = new UserRepository(data);

    userRepository.findUserData(375);

    expect(userRepository.findUserData(375)).to.deep.equal(  {
        "id": 375,
        "name": "Sarah Ball",
        "address": "2000 Division Ave, Denver, CO 55555",
        "email": "SarahBall@madeup.com",
        "strideLength": 4.5,
        "dailyStepGoal": 10000,
        "friends": [
          4,
          5,
          6
        ]
      })
  })

})
