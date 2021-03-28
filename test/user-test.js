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

  
})
