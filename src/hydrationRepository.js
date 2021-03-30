class HydrationRepository {
  constructor(hydrationData) {
    this.hydrationData = hydrationData;
  }
  findTotalWaterConsumptionAverage(userId) {
    let userHydrationData = this.hydrationData.filter(user => user.userID === userId)
    let userTotalHydrationAvg = userHydrationData.reduce((acc, userEntry) => {
      return acc + userEntry.numOunces;
    },0);
    return Math.round(userTotalHydrationAvg/userHydrationData.length)
    }

  }



if (typeof module !== 'undefined') {
  module.exports = HydrationRepository;
}
