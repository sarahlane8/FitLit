class Hydration {
  constructor(hydrationData) {
    this.hydrationData = hydrationData;
  }
  findTotalWaterConsumptionAverage(userId) {
    let userHydrationData = this.hydrationData.filter(user => user.userID === userId)
    let userTotalHydrationAvg = 
  }
}

if (typeof module !== 'undefined') {
  module.exports = Hydration;
}
