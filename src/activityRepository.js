class ActivityRepository {
  constructor(activityData) {
    this.userData = activityData;
  }

findAverageStairsClimbed(date) {
  const usersByDate = this.userData.filter(user => user.date === date);
  const averageStairsClimbed = usersByDate.reduce((acc, user) => {
    return acc += user.flightsOfStairs;
  }, 0)
  return Math.round(averageStairsClimbed / usersByDate.length);
  }
}


if (typeof module !== 'undefined') {
  module.exports = ActivityRepository;
}
