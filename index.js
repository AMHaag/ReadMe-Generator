const fs = require("fs");
const inquirer = require("inquirer");
const generateMd = require("./Develop/utils/generateMarkdown");

const questions = [
  {
    name: "name",
    type: "input",
    message: "What is your name?",
    validate: (name) => {
      if (name) {
        return true;
      } else {
        console.log("Please tell me your name");
      }
    },
  },
  {
    name: "username",
    type: "input",
    message: "What is your GitHub username? (required)",
    validate: (username) => {
      if (username) {
        return true;
      } else {
        console.log("Please enter a valid username");
      }
    },
  },
  {
    name: "title",
    type: "input",
    message: "What is the name of this project",
    validate: (title) => {
      if (title) {
        return true;
      } else {
        console.log("Please enter a title");
      }
    },
  },
  {
    name: "description",
    type: "input",
    message: "Please describe your project",
  },
  {
    name: "installation",
    type: "input",
    message: "Please write installation instructions",
  },
  {
    name: "usage",
    type: "input",
    message: "Please write instructions on how to use this app",
  },
  {
    name: "credits",
    type: "input",
    message:
      "Please enter anyone you also want to give credit to, otherwise leave blank",
  },

  {
    name: "screenshotConfirm",
    type: "confirm",
    message: "Is there a screenshot.png saved in ./utils you like included",
    default: false,
  },
  {
    name: "license",
    type: "list",
    choices: [
      "MIT",
      "GNU LGPLv3",
      "Mozilla Public License 2.0",
      "Apache",
      "Other",
      "None",
    ],
    message: "What license would you like to use",
  },
  {
    name: "licenseName",
    type: "input",
    message:
      "Please enter the name of the license you'd like to use (required)",
    when: ({ license }) => license === "Other",
  },
  {
    name: "licenseLink",
    type: "input",
    message: "Please enter the URL where you license can be found (required)",
    when: ({ license }) => license === "Other",
  },
  {
    name: "features",
    type: "input",
    message: "Please detail any features you would like to include",
  },
  {
    name: "contributeConfirm",
    type: "confirm",
    message: "Would you others to contribute",
    default: false,
  },
  {
    name: "contributeText",
    type: "input",
    message: "Please write instructions for contributions",
    when: ({ contributeConfirm }) => contributeConfirm,
  },
  {
    name: "testConfirm",
    type: "confirm",
    message: "Did you provide tests for your application?",
  },
  {
    name: "testText",
    type: "input",
    message: "Please write instructions on how to run included tests",
    default: "",
    when: ({ testConfirm }) => testConfirm,
  },
];


function init() {
  inquirer.prompt(questions).then((answers) => {
    const readmeText = generateMd(answers);
    fs.writeFile("./readme.md", readmeText, (err) => {
      if (err) throw new Error(err);
      console.log("File Created!");
    });
  });
}

// Function call to initialize app
init();


