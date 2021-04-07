class HydrationRepository {
  constructor(hydrationData) {
    this.hydrationData = hydrationData;
  }

  findHydrationUserData(userId) {
    let userHydrationData = this.hydrationData.filter(user => user.userID === userId);
    return userHydrationData;
  }
}


if (typeof module !== 'undefined') {
  module.exports = HydrationRepository;
}
