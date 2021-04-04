class ActivityRepository {
  constructor(activityData) {
    this.userData = activityData;
  }

findAverageProperty(date, property) {
  const usersByDate = this.userData.filter(user => user.date === date);
  const averageProperty = usersByDate.reduce((acc, user) => {
    return acc += user[property];
  }, 0)
  return Math.round(averageProperty / usersByDate.length);
  }
}

// findAverageSteps(date) {
//
// }

if (typeof module !== 'undefined') {
  module.exports = ActivityRepository;
}
