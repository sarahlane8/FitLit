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
    let usersWithQualitySleep = [];
    weekOfSleepDataObjects.forEach((object => {

    });
//create a method to filter through an array of user obj with givin user id
  }
}
if (typeof module !== 'undefined') {
  module.exports = SleepRepository;
}
