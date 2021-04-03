const dayjs = require('dayjs');
const isBetween = require('dayjs/plugin/isBetween');
dayjs.extend(isBetween);

class Sleep {
  constructor() {

  }
}




if (typeof module !== 'undefined') {
  module.exports = Sleep;
}
