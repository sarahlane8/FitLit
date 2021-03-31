var dayjs = require('dayjs');

class Hydration {
  constructor(hydrationData) {
    this.userHydrationData = hydrationData;
  }

  findTotalWaterConsumptionAverage() {
    let userTotalHydrationAvg = this.userHydrationData.reduce((acc, userEntry) => {
      return acc + userEntry.numOunces;
    },0);
    return Math.round(userTotalHydrationAvg/this.userHydrationData.length)
    }

  findWaterConsumptionByDate(date) {
    const waterDate = this.userHydrationData.find(user => user.date === date);
    return waterDate.numOunces;
  }

  //findDailyWaterConsumptionByWeek(date) {

// }
}




if (typeof module !== 'undefined') {
  module.exports = Hydration;
}
