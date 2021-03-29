const header = document.getElementById('header');
const userInfoCard = document.getElementById('userInfoCard');
const userStepGoals = document.getElementById('userStepGoals');
const userRepository = new UserRepository()
const user1 = new User(userData[0])

//event listeners
window.addEventListener('load', manageLoadingFunctions)


function manageLoadingFunctions() {
  displayUserGreeting(user1);
  displayUserInfoCard(user1);
  displayUserStepGoal(user1)
}

function displayUserGreeting(user) {
  header.innerHTML = `<h1>Hello, ${user1.findUserFirstName()}</h1>`
}

function displayUserInfoCard(user) {
  userInfoCard.innerHTML =
`
<h3>${user.name}</h3>
<p>Address: ${user.address}</p>
<p>Daily Step Goal: ${user.dailyStepGoal}</p>
<p>Email: ${user.email}</p>
<p>You are friends with: </p>
<p>Your stride length: ${user.strideLength}</p>

`

}

function displayUserStepGoal() {

}
//on page load, takes a user and displays their name in header accessing user class
//on page load, takes a user and displays their step userStepGoals
