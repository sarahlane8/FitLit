class Hydration {
  constructor(hydrationData) {
    this.hydrationData = hydrationData;
  }
  findTotalWaterConsumptionAverage(userId) {
    let userHydrationData = this.hydrationData.filter(user => user.userID === userId)
    let userTotalHydrationAvg = userHydrationData.reduce((acc, userEntry) => {
      acc += userEntry.numOunces;
      return acc;
    }, 0);
    return Math.round(userTotalHydrationAvg/userHydrationData.length)
    }

  }



if (typeof module !== 'undefined') {
  module.exports = Hydration;
}
