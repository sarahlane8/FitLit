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
    <h3>Daily step goal: ${user.dailyStepGoal}</h3>
    <h3>All users' daily step goal: ${userRepository.findAverageStepGoal()}</h3>
    `
}

function displayUserDailyWater(date) {
  const dailyWater = hydration.findWaterConsumptionByDate(date)
  userDailyWater.innerHTML =
    `
    <h3>Today's water: ${dailyWater} ounces</h3>
    `
}

function displayUserWeeklyWater(date) {
  const weekData = hydration.findDailyWaterConsumptionByWeek(date);//an array with 7 objects
  let userWeeklyWaterData = '';
  userWeeklyWaterData += weekData.map(day => ` On ${day.date} you drank ${day.numOunces} ounces of water </br>`);
  const chartLabels = weekData.map(day => day.date);
  const chartData = weekData.map(day => day.numOunces);
  const waterData = {
    labels: chartLabels,
    datasets: [{
      label: 'Ounces',
      data: chartData,
      backgroundColor: [
        { fillColor: '#846267' }
      ],
      borderColor: [
        '#846267',
      ],
      borderWidth: 1
    }]
  };
  let myBarChart = new Chart(waterChart, {
    type: 'bar',
    data: waterData,
    options: {
      responsive: true,
      maintainAspectRatio: false,
    }
  });
}

function displayUserTodaySleep(date) {
  const dailySleepHours = sleep.findHoursSleptByDate(date);
  const dailySleepQuality = sleep.findSleepQualityByDate(date);
  userTodaySleep.innerHTML =
  `
  <h3>Today's sleep: ${dailySleepHours} hours</h3>
  <h3>Today's sleep quality: ${dailySleepQuality}</h3>
  `
}

function displayUserWeeklySleep(date) {
  const weeklyHoursSlept = sleep.findDailyHoursSleptByWeek(date);
  const weeklySleepQuality = sleep.findDailySleepQualityByWeek(date);
  const keys = Object.keys(weeklyHoursSlept);
  const hours = keys.map(day => weeklyHoursSlept[day]);
  const quality = keys.map(day => weeklySleepQuality[day]);

  const sleepData = {
    labels: keys,
    datasets: [{
      label: 'Hours Slept',
      data: hours,
      fill: false,
      borderColor: '#7E3A4E',
      tension: 0.1
    }, {
      label: 'Sleep Quality',
      data: quality,
      fill: false,
      borderColor: '#846267',
      tension: 0.1
    }]
  };

  var myLineChart = new Chart(sleepChart, {
      type: 'line',
      data: sleepData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
      }
  })
}

function displayUserSleepAverage() {
  const userAverageSleepHours = sleep.findAverageHoursSlept();
  const userAverageSleepQuality = sleep.findAverageSleepQuality();
  userSleepAverage.innerHTML =
  `
  <h3>Average sleep: ${userAverageSleepHours} hours</h3>
  <h3>Average sleep quality: ${userAverageSleepQuality}</h3>
  `
}

function displayUserDailySteps(date) {
  const userDataByDay = activity.findUserDataByDay(date);
  userDailyNumSteps.innerHTML =
  `
  <h3>Today's steps: ${userDataByDay.numSteps}</h3>
  `
}

function displayUserMinutesActive(date) {
  const userDataByDay = activity.findUserDataByDay(date);
  userDailyNumMinutesActive.innerHTML =
  `
  <h3>Today's active minutes: ${userDataByDay.minutesActive}</h3>
  `
}

function displayUserDailyDistanceWalked(date) {
  const userMilesWalked = activity.calculateMilesWalked(date, user1.strideLength);
  userDailyDistanceWalked.innerHTML =
  `
  <h3>Today's distance: ${userMilesWalked} miles</h3>
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
  <h3>Your steps: ${userDailyNumSteps} </br> All users' steps: ${allUsersDailyNumSteps}</br>
  Your active minutes: ${userDailylMinActive} </br> All users' active minutes: ${allUsersDailyMinActive} </br>
  Your flights climbed: ${userDailyFlightsOfStairs} </br> All users' flights climbed: ${allUsersDailyFlightsOfStairs}
  </h3>
  `
}

function displayUserWeeklyActivityStats(date) {
  const weekData = activity.filterActivityDataByWeek(date);
  let userWeeklyActivity = weekData.map(day =>
    `
      <tr>
       <td>${day.date}</td>
       <td>${day.numSteps}</td>
       <td>${day.flightsOfStairs}</td>
       <td>${day.minutesActive}</td>
      </tr>
    `
  )
  const chartData =
    `<table cellspacing=0>
      <tr>
        <th>Date</th>
        <th>Steps</th>
        <th>Flights Climbed</th>
        <th>Minutes Active</th>
      </tr>
      ${userWeeklyActivity}
    </table>
    `
    userWeeklyActivityStats.innerHTML = chartData.split(',').join('');
}
