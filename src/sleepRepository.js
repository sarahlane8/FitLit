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
//take data by user id, and reduce sleep quality to find average. Then compare
// average to 3, and if greater push userid into an array
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
//we want to check if acc has key of current user ID
//if it does have that userID, add that currentUser's sleep quality to the existing userID's sleep quality value
//if it does have that userID, add that currentUser's hours slept to the existing userID's hours slept value
//if it does have that userID, increment that user's ID day counter
//if the avg sleep quality is greater than 3, hold onto that userID
  }
}
if (typeof module !== 'undefined') {
  module.exports = SleepRepository;
}
