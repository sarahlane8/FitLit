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

  findActivityUserData(userId) {
    return this.userData.filter(user => user.userID === userId);
  }
}



if (typeof module !== 'undefined') {
  module.exports = ActivityRepository;
}
