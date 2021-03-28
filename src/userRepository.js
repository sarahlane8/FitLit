class UserRepository {
  constructor(data) {
    this.users = data;//array of 50 objects
  }
  findUserData(userId) {
    const foundUser = this.users.find(user => user.id === userId);
    return foundUser;
  }
}

module.exports = UserRepository;
