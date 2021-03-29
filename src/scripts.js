const header = document.getElementById('header');
const userInfoCard = document.getElementById('userInfoCard');
const userStepGoals = document.getElementById('userStepGoals');
const userRepository = new UserRepository()
const user1 = new User(userData[0])

//event listeners
window.addEventListener('load', manageLoadingFunctions)


function manageLoadingFunctions() {
  displayUserGreeting(user1);
  displayUserInfoCard();
  displayUserStepGoal()
}

function displayUserGreeting(user) {
  header.innerHTML = `<h1>Hello, ${user1.findUserFirstName()}</h1>`
}

function displayUserInfoCard() {

}

function displayUserStepGoal() {

}
//on page load, takes a user and displays their name in header accessing user class
//on page load, takes a user and displays their step userStepGoals
