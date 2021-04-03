const dayjs = require('dayjs');
const isBetween = require('dayjs/plugin/isBetween');
dayjs.extend(isBetween);

class Sleep {
  constructor(userSleepData) {
    this.userData = userSleepData
  }
  findAverageHoursSlept() {
    const totalHoursSlept = this.userData.reduce((acc, day) => {
      return acc + day.hoursSlept
    }, 0)
    return Math.round((totalHoursSlept / this.userData.length) * 10) / 10
  }
}




if (typeof module !== 'undefined') {
  module.exports = Sleep;
}
