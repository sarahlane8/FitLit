const dayjs = require('dayjs');
const isBetween = require('dayjs/plugin/isBetween');
dayjs.extend(isBetween);

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

  findMinutesActiveForDate(date) {
    const userDataByDay = this.findUserDataByDay(date);
    return userDataByDay.minutesActive;
  }
filterActivityDataByWeek(date) {
  const weekBeginningDate = dayjs(date).subtract(6, 'day');
  const weekEndingDate = dayjs(date);
  return this.userData.filter(({date}) => dayjs(date).isBetween(weekBeginningDate, weekEndingDate, null, '[]'))
}

}


if (typeof module !== 'undefined') {
  module.exports = Activity;
}
