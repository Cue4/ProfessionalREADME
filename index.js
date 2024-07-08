// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown')

const questions = [
  {
    type: "input",
    name: "title",
    message: "what's the title of the application"
  },
  {
    type: "input",
    name: "briefDescription",
    message: "write a brief desciption"
  },
  {
    type: "input",
    name: "tableOfContents",
    message: "list table of contents"
  },
  {
    type: "input",
    name: "installation",
    message: "what do you need to install for the application"
  },
  {
    type: "input",
    name: "usage",
    message: "how do you use this application"
  },
  {
    type: "input",
    name: "credits",
    message: "any collaborators"
  },
  {
    type: "list",
    name: "license",
    message: "choose a license",
    choices: ["MIT", "APACHE 2.0", "BSD 3", "NONE" ]
  }
];

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(path.join(fileName), data, (err) =>
  err ? console.error(err) : console.log('Success!')
  );
    
}

// Function to initialize app
function init() {
  inquirer.prompt(questions)
  .then((data) => {
    console.log(data);
    writeToFile("readme.md", generateMarkdown({...data}) )
});
}

// Function call to initialize app
init();


