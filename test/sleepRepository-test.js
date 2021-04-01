const chai = require('chai');
const expect = chai.expect;
const SleepRepository = require('../src/sleepRepository');

describe('sleepRepository', () => {

  it('should be a function', () => {

    expect(SleepRepository).to.be.a('function');
  })

  it('should be an instance of the SleepRepository class', () => {

    expect(sleepRepository).to.be.an.instanceof(SleepRepository);
  })
})
