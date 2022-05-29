// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license, licenseName, licenseLink) {
  let shorthandLicense = license.substr(0, 3);
  let otherName = licenseName;
  let otherLink = licenseLink;
  if (!otherName) {
    otherName = "";
  }
  if (!otherLink) {
    otherLink = "";
  }
  const matchLicense = {
    MIT: {
      name: "MIT",
      link: "https://choosealicense.com/licenses/mit/",
      badge: "https://img.shields.io/badge/license-MIT-brightgreen",
    },
    GNU: {
      name: "GNU Lesser General Public License v3.0",
      link: "https://choosealicense.com/licenses/lgpl-3.0/",
      badge:
        "https://img.shields.io/badge/license-GNU%20Lesser%20General%20Public%20License%20v3.0-brightgreen",
    },
    Mozilla: {
      name: "Mozilla Public License 2.0",
      link: "https://choosealicense.com/licenses/mpl-2.0/",
      badge:
        "https://img.shields.io/badge/license-Mozilla%20Public%20License%202.0-brightgreen",
    },
    Apache: {
      name: "Apache License 2.0",
      link: "https://choosealicense.com/licenses/apache-2.0/",
      badge:
        "https://img.shields.io/badge/license-Apache%20License%202.0-brightgreen",
    },
    Other: {
      name: otherName,
      link: otherLink,
      badge: `https://img.shields.io/badge/license-${otherName.replace(
        / /g,
        "%20"
      )}-brightgreen`,
    },
  };
  if (shorthandLicense === "MIT") {
    return `
## License
![license-badge](${matchLicense.MIT.badge})  

You can read the details of the ${matchLicense.MIT.name} license [here](${matchLicense.MIT.link})
`;
  }
  if (shorthandLicense === "GNU") {
    return `
## License
![license-badge](${matchLicense.GNU.badge})  

You can read the details of the ${matchLicense.GNU.name} license [here](${matchLicense.GNU.link})
    `;
  }
  if (shorthandLicense === "Moz") {
    return `
## License
![license-badge](${matchLicense.Mozilla.badge})  

You can read the details of the ${matchLicense.Mozilla.name} license [here](${matchLicense.Mozilla.link})
    `;
  }
  if (shorthandLicense === "Apa") {
    return `
## License
![license-badge](${matchLicense.Apache.badge})  

You can read the details of the ${matchLicense.Apache.name} license [here](${matchLicense.Apache.link})
    `;
  }
  if (shorthandLicense === "Oth") {
    return `
## License
![license-badge](${matchLicense.Other.badge})  

You can read the details of the ${matchLicense.Other.name} license [here](${matchLicense.Other.link})
    `;
  }
  if (shorthandLicense === "Non") {
    return "";
  }
}

// function to generate markdown for README
function generateMarkdown(data) {
  var testText = `## Tests
${data.testText}`;
  var screenshot = "";
  if (!data.testText) {
    testText = "";
  }
  if (data.screenshotConfirm) {
    screenshot = "![alt text](./Develop/utils/screenshot.png)";
  }
  return `# ${data.title}
  ## Description
${data.description}

${renderLicenseLink(data.license, data.licenseName, data.licenseLink)}
## Table of Contents
### - [Installation](#installation)
### - [Usage](#Usage)
### - [Credits](#Credits)
### - [Features](#features)
### - [How to Contribute](#how-to-contribute)
### - [Tests](#tests)

## Installation
${data.installation}
## Usage
${data.usage}

${screenshot}

## Credits
(${data.name})[https://github.com/${data.username}]
${data.credits}


## Features
${data.features}
## How to Contribute
${data.contributeText}

${testText}
`;
}

module.exports = generateMarkdown;
