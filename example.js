const fs = require("fs");
const inquirer = require("inquirer");
const generateMd = require("./Develop/utils/generateMarkdown");



function test() {
  const readmeText = generateMd(mockData);
  fs.writeFile("./example.md", readmeText, (err) => {
    if (err) throw new Error(err);
    console.log("File Created!");
  });
}

//!This is mock data to test with
const mockData = {
  name: "Elsa of Arendale",
  username: "Icequeen",
  title: "Ice-Castle.exe",
  description: "the cold never bother me anyway",
  installation: "Step one: freeze water...",
  usage: "Escape your childhood trauma by running to the mountains",
  credits: "My dead parents",
  screenshotConfirm: true,
  license: "Moz",
  licenseName: "Free bird", //the license name used when selecting Other
  licenseLink: "google.com", //the link used when the license is set to Other
  features: "ice walls, ice roof, sentient snow monster",
  contributeConfirm: true,
  contributeText:
    "Please clone repo and send pull requests with detailed notes on changes made",
  testConfirm: true,
  testText: "Tested using the magic of the forest.",
};
test();
