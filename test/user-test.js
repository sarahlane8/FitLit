const chai = require('chai');
const expect = chai.expect;
const user = require('../src/user.js');

describe('User', () => {

  it('should be function', () => {
    const user = new User();

    expect(User).to.be.a('function');
  })
})
