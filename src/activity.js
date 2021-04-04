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

  findMinutesActiveAvgForWeek(date) {
    const userDataByWeek = this.filterActivityDataByWeek(date);
    const totalMinutesActive = userDataByWeek.reduce((acc, day) => {
      acc += day.minutesActive;
      return acc;
    }, 0)
    return Math.round(totalMinutesActive / userDataByWeek.length);
  }

  checkIfStepGoalReached(date, stepGoal) {
    const userDataByDay = this.findUserDataByDay(date);
    if (userDataByDay.numSteps >= stepGoal) {
      return true;
    } else {
      return false;
    }
  }

  findDaysUserReachedStepGoal(stepGoal) {
    let daysStepGoalReached = [];
    this.userData.forEach(day => {
      if (day.numSteps >= stepGoal) {
        daysStepGoalReached.push(day.date);
      }
    })
    return daysStepGoalReached;
  }

}


if (typeof module !== 'undefined') {
  module.exports = Activity;
}
