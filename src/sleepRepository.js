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
}

if (typeof module !== 'undefined') {
  module.exports = SleepRepository;
}
