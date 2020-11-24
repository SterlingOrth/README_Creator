const inquirer = require("inquirer");
const fs = require("fs");

// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
    },
    {
        type: "input",
        message: "What is your project's name?",
        name: "project",
    },
    {
        type: "input",
        message: "Please write a short description of your project",
        name: "description",
    },
    {
        type: "list",
        message: "What kind of license should your project have? (Use arrow keys",
        name: "license ex. MIT, APACHE 2.0, GPL 3.0, BSD 3, None",
        choices: ['MIT', 'APACHE 2.0']
    },
    {
        type: "input",
        message: "What command should be run to instal dependencies? ### DEFAULT (npm i)",
        name: "dependencies",
        default: "npm i"
    },
    {
        type: "input",
        message: "What command should be run to run tests? ### DEFAULT (npm test)",
        name: "tests",
    },
    {
        type: "input",
        message: "What does the user need to know about using the repo?",
        name: "usage",
    },
    {
        type: "input",
        message: "What does the user need to know about contributing to the repo?",
        name: "contribution",
    },
    {
        type: "input",
        message: "What questions do you have?",
        name: "questions",
    }
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFile(fileName, data, () => {
    });
};

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((data) => {
       const markDown = `# ${data.project}       

       ## Description
       ${data.description}


       ## Table of Contents
       **Markdown links to sections**


       ## Installation
        ${data.dependencies}


        ## Usage
        ${data.usage}


        ## License
        ${data.license}


        ## Contribution
        ${data.contribution}

        ## Tests
        ${data.tests}

        ## Questions
        ${data.questions}`

        writeToFile("README.md", markDown)
    }
    )
}

// function call to initialize program
init();
