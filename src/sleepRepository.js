const dayjs = require('dayjs');
const isBetween = require('dayjs/plugin/isBetween');
dayjs.extend(isBetween);

class SleepRepository {
  constructor(sleepData) {
    this.sleepData = sleepData
  }

  findAverageSleepQuality() {
    const combinedSleepQuality = this.sleepData.reduce((acc, userObject) => {
      return acc += userObject.sleepQuality
    }, 0)
    const averageQuality = (combinedSleepQuality / this.sleepData.length)
    return Math.round(averageQuality * 10) / 10
  }

  filterSleepDataByWeek(date) {
    const weekBeginningDate = dayjs(date).subtract(6, 'day');
    const weekEndingDate = dayjs(date);
    return this.sleepData.filter(({date}) => dayjs(date).isBetween(weekBeginningDate, weekEndingDate, null, '[]'))
  }

  findUsersWithQualitySleep(date) {
    const weekOfSleepDataObjects = this.filterSleepDataByWeek(date)
    const result = weekOfSleepDataObjects.reduce((acc, user) => {
      const { userID, hoursSlept = 0, sleepQuality = 0 } = user;
      if (!acc[userID]) {
        acc[userID] = {
          hoursSum: hoursSlept,
          qualitySum: sleepQuality,
          numOfDays: 1
        }
      }

      acc[userID].hoursSum += hoursSlept;
      acc[userID].qualitySum += sleepQuality;
      acc[userID].numOfDays++;

      return acc;
    }, {});
    return Object.keys(result)
      .filter(userID => (result[userID].qualitySum / result[userID].numOfDays) > 3)
      .map(userID => parseInt(userID));
  }

  filterSleepDataByDate(date) {
    return this.sleepData.filter(object => object.date === date)
  }

  findUserWhoSleptLongest(date) {
    const usersByDate = this.filterSleepDataByDate(date)
    usersByDate.sort((a, b) => {
      return b.hoursSlept - a.hoursSlept
    })
    const mostHours = usersByDate[0].hoursSlept;
    const usersWithMostHours = usersByDate.filter(user => user.hoursSlept === mostHours);
    return usersWithMostHours.map(user => user.userID)
  }
}

if (typeof module !== 'undefined') {
  module.exports = SleepRepository;
}
