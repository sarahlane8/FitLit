# FitLit

## Abstract
Welcome to FitLit! The purpose of this project was to interpret provided health-related user data and display it to a dashboard for a user to see. Specific learning goals of the project included:  
  * Implementing ES6 classes that communicate as needed
  * Using object and array prototype methods to perform data manipulation
  * Creating a responsive dashboard that is clear and easy to use
  * Writing reusable code that follows SRP
  * Implementing a testing suite using test driven development  

We implemented media queries to apply breakpoints to our dashboard design to ensure users could view it across multiple devices.

PICTURE OF DASHBOARD AND GIF HERE

View our application [here!](https://sarahlane8.github.io/FitLit/)

## Install
  * From your terminal, clone the repo  
`$git clone git@github.com:sarahlane8/FitLit.git`  
  * Move into the root directory of the project  
  * Now you must install the required npm dependencies  
  `$npm install`
  * Open the application and enjoy!
  `open index.html`  

*Some class files have commented out code.  To evaluate TDD, please comment these lines back in before running the tests for those files.

## User Interaction
The page is mainly divided with the user's personal information card on the left hand side, and the widget section to the right.   

The widgets are grouped by border color to display information in the following categories:
  * Step Goal  
  * Hydration
  * Sleep
  * Activity
Graphs and tables are utilized when appropriate to help the user interpret the information.


## Accessibility
When creating the dashboard, consideration was given to ensure the dashboard would be accessible to all users.  Luminance and color contrast were examined for users that are colorblind.  Semantic HTML was utilized to help users using voiceover technology.  The WAVE Evaluation Tool and Lighthouse tool were utilized to evaluate the UI's accessibility.

## Resources
  * MDN Web Docs
  * WAVE Evaluation Tool
  * Lighthouse

## Technologies Used
  * Chart.js
  * ESLint
  * CSS
  * HTML
  * JavaScript


future considerations
refactor code to be DRY and SRP
consider more sad paths for TDD
change the user
let the user choose a date to pull data from



## Contributors
  * Marceline Ball [GitHub Profile](https://github.com/MarcelineBall)
  * Sarah Lane [GitHub Profile](https://github.com/sarahlane8)
  * [Project Repository](https://github.com/sarahlane8/FitLit)  
