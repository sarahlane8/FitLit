const dayjs = require('dayjs');
const isBetween = require('dayjs/plugin/isBetween');
dayjs.extend(isBetween);

class Hydration {
  constructor(hydrationData) {
    this.userHydrationData = hydrationData;
  }

  findTotalWaterConsumptionAverage() {
    let userTotalHydrationAvg = this.userHydrationData.reduce((acc, userEntry) => {
      return acc + userEntry.numOunces;
    }, 0);
    return Math.round(userTotalHydrationAvg / this.userHydrationData.length);
  }

  findWaterConsumptionByDate(date) {
    const waterDate = this.userHydrationData.find(user => user.date === date);
    return waterDate.numOunces;
  }

  findDailyWaterConsumptionByWeek(date) {
    const weekBeginningDate = dayjs(date).subtract(6, 'day');
    const weekEndingDate = dayjs(date);
    return this.userHydrationData.filter(({date}) => dayjs(date).isBetween(weekBeginningDate, weekEndingDate, null, '[]'));
  }
}


if (typeof module !== 'undefined') {
  module.exports = Hydration;
}
