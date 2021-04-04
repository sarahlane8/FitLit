
class Activity {
  constructor(data) {
    this.userData = data;
  }

  findUserDataByDay(date) {
    const userDataByDay = this.userData.filter(user => user.date === date);
    return userDataByDay[0]
  }

  calculateMilesWalked(date, strideLength) {
    const userDataByDay = this.findUserDataByDay(date);
    return Math.round((userDataByDay.numSteps * strideLength) / 5280 * 10) / 10;
  }
}




if (typeof module !== 'undefined') {
  module.exports = Activity;
}
