class ActivityRepository {
  constructor(activityData) {
    this.userData = activityData;
  }
}


if (typeof module !== 'undefined') {
  module.exports = ActivityRepository;
}
