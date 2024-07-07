// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const README = ({ projectTitle, briefDescription, installation, usage, credits,   }) =>

  `# <${projectTitle}>

  ## Description
  
  <${briefDescription}>
  
  ## Installation
  
  <${installation}>
  
  ## Usage
  
  <${usage}>
  
  ## Credits
  
  <${credits}>
  
  ## License
  
  <${license}>
  
  ---
  
  🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
  
  ## Badges
  
  ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
  
  Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
  
  ## Features
  
  If your project has a lot of features, list them here.
  
  ## How to Contribute
  
  If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
  
  ## Tests
  
  Go the extra mile and write tests for your application. Then provide examples on how to run them here.`;

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


.then((data) => {
    console.log(data);
    const myData = generateHTML(data)
    fs.writeFile('index.html', myData, (err) =>
    err ? console.error(err) : console.log('Success!')
    );

});