const header = document.getElementById('header');
const userInfoCard = document.getElementById('userInfoCard');
const userStepGoals = document.getElementById('userStepGoals');
const userRepository = new UserRepository(userData);
const user1 = new User(userRepository.users[0]);
const hydrationRepository = new HydrationRepository(hydrationData);
const hydration = new Hydration(hydrationRepository.findHydrationUserData(1));
const userDailyWater = document.getElementById('userDailyWater');
const userWeeklyWater = document.getElementById('userWeeklyWater');
const sleepRepository = new SleepRepository(sleepData)
const sleep = new Sleep(sleepRepository.findSleepUserData(1))
const userTodaySleep = document.getElementById('userTodaySleep');
const userWeeklyHoursSlept = document.getElementById('userWeeklyHoursSlept');
const userSleepAverage = document.getElementById('userSleepAverage');
const userDailyNumSteps = document.getElementById('userDailyNumSteps');
const userDailyNumMinutesActive = document.getElementById('userDailyNumMinutesActive');
const userDailyDistanceWalked = document.getElementById('userDailyDistanceWalked');
const userActivityDailyComparison = document.getElementById('userActivityDailyComparison');
const userWeeklyActivityStats = document.getElementById('userWeeklyActivityStats');
const activityRepository = new ActivityRepository(activityData);
const activity = new Activity(activityRepository.findActivityUserData(1));
const waterChart = document.getElementById('waterChart');
const sleepChart = document.getElementById('sleepChart');



//event listeners
window.addEventListener('load', manageLoadingFunctions)


function manageLoadingFunctions() {
  displayUserGreeting(user1);
  displayUserInfoCard(user1);
  displayUserStepGoal(user1);
  displayUserDailyWater("2019/09/22");
  displayUserWeeklyWater("2019/09/22");
  displayUserTodaySleep("2019/09/22");
  displayUserWeeklySleep("2019/09/22")
  displayUserSleepAverage()
  displayUserDailySteps("2019/09/22");
  displayUserMinutesActive("2019/09/22");
  displayUserDailyDistanceWalked("2019/09/22");
  displayUserActivityDailyComparison("2019/09/22");
  displayUserWeeklyActivityStats("2019/09/22");
}

function displayUserGreeting(user) {
  header.innerHTML = `<h1>Hello, ${user.findUserFirstName()}</h1>`
}

function displayUserInfoCard(user) {
  let userFriendList = [];
  user.friends.forEach(friend => userFriendList.push(userRepository.findUserData(friend)));
  let userFriendNames = userFriendList.map(friend => friend.name)
  userInfoCard.innerHTML =
    `
    <h3>${user.name}</h3>
    <p>Address: ${user.address}</p>
    <p>Daily Step Goal: ${user.dailyStepGoal}</p>
    <p>Email: ${user.email}</p>
    <p>You are friends with: ${userFriendNames.join(', ')} </p>
    <p>Your stride length: ${user.strideLength}</p>
    `
}

function displayUserStepGoal(user) {
  userStepGoals.innerHTML =
    `
    <h3>Your daily step goal is: ${user.dailyStepGoal}</h3>
    <h4>The step goal among all users is: ${userRepository.findAverageStepGoal()}</h4>
    `
}

function displayUserDailyWater(date) {
  const dailyWater = hydration.findWaterConsumptionByDate(date)
  userDailyWater.innerHTML =
    `
    <h3>You drank ${dailyWater} ounces of water today!</h3>
    `
}

function displayUserWeeklyWater(date) {
  const weekData = hydration.findDailyWaterConsumptionByWeek(date);//an array with 7 objects
  let userWeeklyWaterData = '';
  userWeeklyWaterData += weekData.map(day => ` On ${day.date} you drank ${day.numOunces} ounces of water </br>`);
  // userWeeklyWater.innerHTML =
  // `
  // <h3>${userWeeklyWaterData}</h3>
  // `
  const chartLabels = weekData.map(day => day.date);
  const chartData = weekData.map(day => day.numOunces);
  const waterData = {
    labels: chartLabels,
    datasets: [{
      label: 'Weekly Water',
      data: chartData,
      backgroundColor: [
        { fillColor: 'rgba(255, 99, 132, 0.2)' }
      ],
      borderColor: [
        // 'rgb(255, 99, 132)',
        // 'rgb(255, 159, 64)',
        // 'rgb(255, 205, 86)',
        // 'rgb(75, 192, 192)',
        // 'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        // 'rgb(201, 203, 207)'
      ],
      borderWidth: 1
    }]
  };
  let myBarChart = new Chart(waterChart, {
    type: 'bar',
    data: waterData,
  });
}

function displayUserTodaySleep(date) {
  const dailySleepHours = sleep.findHoursSleptByDate(date);
  const dailySleepQuality = sleep.findSleepQualityByDate(date);
  userTodaySleep.innerHTML =
  `
  <h3>Last night you slept ${dailySleepHours} hours! </br> Your sleep quality was ${dailySleepQuality}! </h3>
  `
}

function displayUserWeeklySleep(date) {
  const weeklyHoursSlept = sleep.findDailyHoursSleptByWeek(date);
  const weeklySleepQuality = sleep.findDailySleepQualityByWeek(date);
  let userWeeklySleepData = '';
  const keys = Object.keys(weeklyHoursSlept);
  keys.map(day => {
    userWeeklySleepData += ` On ${day} you slept ${weeklyHoursSlept[day]} hours and your sleep quality was ${weeklySleepQuality[day]} </br>`
    return userWeeklySleepData;
  })
  userWeeklyHoursSlept.innerHTML =
  `
  <h3>${userWeeklySleepData}</h3>
  `
  const data = {
    labels: labels,
    datasets: [{
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  };
  var myLineChart = new Chart(ctx, {
      type: 'line',
      data: data

}

function displayUserSleepAverage() {
  const userAverageSleepHours = sleep.findAverageHoursSlept();
  const userAverageSleepQuality = sleep.findAverageSleepQuality();
  userSleepAverage.innerHTML =
  `
  <h3>On average, you sleep ${userAverageSleepHours} hours a night! Your average sleep quality is ${userAverageSleepQuality}!</h3>
  `
}

function displayUserDailySteps(date) {
  const userDataByDay = activity.findUserDataByDay(date);
  userDailyNumSteps.innerHTML =
  `
  <h3>You have walked ${userDataByDay.numSteps} steps today!</h3>
  `
}

function displayUserMinutesActive(date) {
  const userDataByDay = activity.findUserDataByDay(date);
  userDailyNumMinutesActive.innerHTML =
  `
  <h3>You were active for ${userDataByDay.minutesActive} minutes today!</h3>
  `
}

function displayUserDailyDistanceWalked(date) {
  const userMilesWalked = activity.calculateMilesWalked(date, user1.strideLength);
  userDailyDistanceWalked.innerHTML =
  `
  <h3>You walked ${userMilesWalked} miles today!</h3>
  `
}

function displayUserActivityDailyComparison(date) {
  const userDataByDay = activity.findUserDataByDay(date);
  const userDailyNumSteps = userDataByDay.numSteps;
  const userDailylMinActive = userDataByDay.minutesActive;
  const userDailyFlightsOfStairs = userDataByDay.flightsOfStairs;
  const allUsersDailyNumSteps = activityRepository.findAverageProperty(date, 'numSteps');
  const allUsersDailyMinActive = activityRepository.findAverageProperty(date, 'minutesActive');
  const allUsersDailyFlightsOfStairs = activityRepository.findAverageProperty(date, 'flightsOfStairs');
  userActivityDailyComparison.innerHTML =
  `
  <h3>Today, you walked ${userDailyNumSteps} steps, compared to ${allUsersDailyNumSteps} for all users! </br>
  Today, you were active for ${userDailylMinActive} minutes, compared to ${allUsersDailyMinActive} minutes for all users! </br>
  Today, you climbed ${userDailyFlightsOfStairs} flights of stairs, compared to ${allUsersDailyFlightsOfStairs} flights of stairs for all users!
  </h3>
  `
}

function displayUserWeeklyActivityStats(date) {
  const weekData = activity.filterActivityDataByWeek(date);
  let userWeeklyActivity = '';
  userWeeklyActivity += weekData.map(day => ` On ${day.date} you walked ${day.numSteps} steps, you climbed ${day.flightsOfStairs} flights of stairs, and you were active for ${day.minutesActive} minutes! </br>`);
  userWeeklyActivityStats.innerHTML =
  `
  <h3>${userWeeklyActivity}</h3>
  `
}
