class Hydration {
  constructor(hydrationData) {
    this.userHydrationData = hydrationData;
  }

  findTotalWaterConsumptionAverage(userId) {
    // let userHydrationData = this.hydrationData.filter(user => user.userID === userId)
    let userTotalHydrationAvg = this.userHydrationData.reduce((acc, userEntry) => {
      return acc + userEntry.numOunces;
    },0);
    return Math.round(userTotalHydrationAvg/this.userHydrationData.length)
    }

}

if (typeof module !== 'undefined') {
  module.exports = Hydration;
}
