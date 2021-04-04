const chai = require('chai');
const expect = chai.expect;
const ActivityRepository = require('../src/activityRepository')

describe('ActivityRepository', () => {
  let activityRepository;
  let activityData = {

  }
  beforeEach(() => {
    activityRepository = new ActivityRepository(activityData);
  })

  it('should be a function', () => {
    expect(ActivityRepository).to.be.a('function');
  })

  it('should instantiate a new activityRepository', () => {

    expect(activityRepository).to.be.an.instanceof(ActivityRepository);
  })
})
