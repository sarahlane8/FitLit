const dayjs = require('dayjs');
const isBetween = require('dayjs/plugin/isBetween');
dayjs.extend(isBetween);

class Sleep {
  constructor(userSleepData) {
    this.userData = userSleepData;
  }

  findAverageProperty(property) {
    const totalProperty = this.userData.reduce((acc, day) => {
      return acc + day[property];
    }, 0)
      return Math.round((totalProperty / this.userData.length) * 10) / 10;
  }

  findSleepPropertyByDate(date, property) {
    const userDataByDate = this.userData.filter(day => day.date === date)
    return userDataByDate[0][property];
  }

  filterSleepDataByWeek(date) {
    const weekBeginningDate = dayjs(date).subtract(6, 'day');
    const weekEndingDate = dayjs(date);
    return this.userData.filter(({date}) => dayjs(date).isBetween(weekBeginningDate, weekEndingDate, null, '[]'));
  }

  findDailySleepPropertyByWeek(date, property) {
    const weekOfSleepDataObjects = this.filterSleepDataByWeek(date)
    const result = weekOfSleepDataObjects.reduce((acc, user) => {
      acc[user.date] = user[property];
      return acc;
    }, {})
    return result;
  }
}



if (typeof module !== 'undefined') {
  module.exports = Sleep;
}
