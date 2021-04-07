const chai = require('chai');
const expect = chai.expect;
const UserRepository = require('../src/UserRepository.js');

describe('UserRepository', () => {
  let data;
  let userRepository;

  beforeEach(() => {
    data = [
      {
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
        "name": "Margaret Mitchell",
        "address": "2000 Division Ave, Denver, CO 55555",
        "email": "MargaretMitchell@madeup.com",
        "strideLength": 4.5,
        "dailyStepGoal": 10000,
        "friends": [
          4,
          5,
          6
        ]
      }
    ]
    userRepository = new UserRepository(data);
  })

  it('should be a function', () => {

    expect(UserRepository).to.be.a('function');
  })

  it('should instantiate a new UserRepository', () => {

    expect(userRepository).to.be.an.instanceof(UserRepository);
  })

  it('should be able to take in an argument', () => {

    expect(userRepository.users[0].name).to.equal('Marceline Lane');
  })

  it('should have a method that takes in a user\'s ID and returns that user\'s data', () => {

    userRepository.findUserData(375);

    expect(userRepository.findUserData(375)).to.deep.equal({
      "id": 375,
      "name": "Margaret Mitchell",
      "address": "2000 Division Ave, Denver, CO 55555",
      "email": "MargaretMitchell@madeup.com",
      "strideLength": 4.5,
      "dailyStepGoal": 10000,
      "friends": [
        4,
        5,
        6
      ]
    })
  })

  it('should have a method that finds the average step goal of all users', () => {

    expect(userRepository.findAverageStepGoal()).to.equal(9000);
  })

})
