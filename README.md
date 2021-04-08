# FitLit

## Abstract
Welcome to FitLit! The purpose of this project was to interpret provided health-related user data and display it to a dashboard for a user to see. Specific learning goals of the project included:  
  * Implementing ES6 classes that communicate as needed
  * Using object and array prototype methods to perform data manipulation
  * Creating a responsive dashboard that is clear and easy to use
  * Writing reusable code that follows SRP
  * Implementing a testing suite using test driven development  

We implemented media queries to apply breakpoints to our dashboard design to ensure users could view it across multiple devices.
<p align="center">
  <img width="400" alt="image of user dashboard" src="https://user-images.githubusercontent.com/70901622/113950164-efab4180-97cd-11eb-9b4f-39ed1d6272e8.png">
</p>


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
  * Day.js
  * Chart.js
  * ESLint
  * CSS
  * HTML
  * JavaScript

## Future Considerations
  * Refactor code to follow SRP(single responsibility principle)
  * Add to TDD testing suites to evaluate more sad paths
  * Make the UI interactive so new users can display their information
  * Include a dropdown calendar so a user can change the date of the information displaying

## Contributors
  * Marceline Ball [GitHub Profile](https://github.com/MarcelineBall)
  * Sarah Lane [GitHub Profile](https://github.com/sarahlane8)
  * [Project Repository](https://github.com/sarahlane8/FitLit)  
