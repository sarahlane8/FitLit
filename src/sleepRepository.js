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
}

if (typeof module !== 'undefined') {
  module.exports = SleepRepository;
}
