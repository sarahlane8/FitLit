class Activity {
  constructor(userData) {
    this.userData = userData;
  }

  findUserDataByDay(date) {
    const userDataByDay = this.userData.filter(user => user.date === date);
    return userDataByDay[0]
  }
}




if (typeof module !== 'undefined') {
  module.exports = Activity;
}
