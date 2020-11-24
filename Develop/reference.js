const inquirer = require("inquirer");
const fs = require("fs");
const questions = [
  {
    type: "input",
    message: "What is your name?",
    name: "name",
  },
  {
    type: "input",
    message: "Where are you from?",
    name: "location",
  },
  {
    type: "input",
    message: "What are your hobbies?",
    name: "hobbies",
  },
  {
    type: "input",
    message: "What is your git hub username?",
    name: "github",
  },
  {
    type: "input",
    message: "What is your linkedIn homepage?",
    name: "linkedIn",
  },
];
const htmlFile = function (information) {
  return ` <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
            <link rel="stylesheet" href="index.js" />
            <title>Information Collector</title>
          </head>
          <body>
            <h1 id="name">Hello, My name is ${information.name}</h1>
            <h4 id="location">I am from ${information.location}</h4>
            <p> My favorite hobbies are ${information.hobbies}</p>
            <p> My github username is: ${information.github}</p>
            <p> My linkedIn account is: ${information.linkedIn}</p>
          </body>
        </html>`;
};
inquirer
  .prompt(questions)
  .then((data) => {
    //   const filename = `${data.name.toLowerCase().split("").join("")}.html`;
    return fs.writeFile("shawn.html", htmlFile(data), () =>
      console.log("success")
    );
  });