//Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Array of questions for user input
inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Give a short description about the what, how, and why of your project',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the steps required to install this project?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How can users use this project?',
    },
    {
      type: 'checkbox',
      name: 'license',
      message: 'Which license did you use?',
      choices: ['MIT License','Boost Software License 1.0', 'Apache License 2.0', 'GNU General Public License v2.0', 'Other' ]
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'How can users contribute to your project?',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your github username',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email address',
      },
  ])
// TODO: Create a function to write README file
function writeFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
