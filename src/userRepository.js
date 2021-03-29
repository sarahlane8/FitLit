class UserRepository {
  constructor(data) {
    this.users = data;
  }
  findUserData(userId) {
    const foundUser = this.users.find(user => user.id === userId);
    return foundUser;
  }
  findAverageStepGoal() {
    let avgStepGoal = this.users.reduce((acc, user) => {
      return acc + user.dailyStepGoal
    }, 0)
    return avgStepGoal / this.users.length;
  }
}


if (typeof module !== 'undefined') {
  module.exports = UserRepository;
}
