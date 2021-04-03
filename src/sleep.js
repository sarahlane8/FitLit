const dayjs = require('dayjs');
const isBetween = require('dayjs/plugin/isBetween');
dayjs.extend(isBetween);

class Sleep {
  constructor(userSleepData) {
    this.userData = userSleepData
  }

  findAverageHoursSlept() {
    const totalHoursSlept = this.userData.reduce((acc, day) => {
      return acc + day.hoursSlept
    }, 0)
    return Math.round((totalHoursSlept / this.userData.length) * 10) / 10
  }

  findAverageSleepQuality() {
    const totalQualityOfSleep = this.userData.reduce((acc, day) => {
      return acc + day.sleepQuality
    }, 0)
    return Math.round((totalQualityOfSleep / this.userData.length) * 10) / 10
  }

  findHoursSleptByDate(date) {
    const userDataByDate = this.userData.filter(day => day.date === date)
    return userDataByDate[0].hoursSlept
  }

  findSleepQualityByDate(date) {
    const userDataByDate = this.userData.filter(day => day.date === date)
    return userDataByDate[0].sleepQuality
  }

  filterSleepDataByWeek(date) {
    const weekBeginningDate = dayjs(date).subtract(6, 'day');
    const weekEndingDate = dayjs(date);
    return this.userData.filter(({date}) => dayjs(date).isBetween(weekBeginningDate, weekEndingDate, null, '[]'))
  }

  findDailyHoursSleptByWeek(date) {
    const weekOfSleepDataObjects = this.filterSleepDataByWeek(date)
    const result = weekOfSleepDataObjects.reduce((acc, user) => {
      acc[user.date] = user.hoursSlept;
      return acc
    }, {})
    return result;
  }
}




if (typeof module !== 'undefined') {
  module.exports = Sleep;
}
