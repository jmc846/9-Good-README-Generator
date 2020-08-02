 const inquirer = require ('inquirer');
const fs = require('fs');

const questions = [
  {   
      message: "What is the name of the project?",
      name: "title"
  },
  {   
      message: "Please provide a table on content",
      name: "table of content"
  },
  {   
      message: "What is the name of the user?",
      name: "userName"
  },
  {  
      message: "Please provide a description of the project",
      name: "description"
  },
  {   
      message: "What is the installation process?",
      name: "installation"
  },
  {   
      message: "How will this project be used?",
      name: "usage"
  },
  {   
      message: "What licenses are required with this project?",
      name: "licenses"
  },
  {   
      message: "Who were the contributors to this project?",
      name: "contribution"
  },
  {   
      message: "What is the test process for this project?",
      name: "test"
  },
  {   
      message: "What is the user github link?",
      name: "GitHub link"
  },
  {   
      message: "Please provide a profile picture",
      name: "GitHub profile picture"
  }
]


function init () {
    inquirer.prompt(questions)
    .then((inquirerResponse, data) => {   
        console.log("ReadMe.md generation has begun, wait one moment");
        fs.writeFileSync("ReadMe.md", generateMarkdown(inquirerResponse));
    })
    .catch((err) => {
        console.log(err);
    })
}


init();


const generateMarkdown = function generateMarkdown({response}) {
    return `
  
//   # ${response.title}
// ##title:

  -[title](#title)
  # Table of Content
  -[description](#description)
  -[installation](#installation)
  -[usage](#usage)
  -[licenses](#licenses)
  -[contribution](#contribution)
  -[test](#test)
  -[username](#username)
  -[profile](#profile)
  
  ${response.username}
  ##username:
  
      ${response.description}
  ##description:
  
      ${response.installation}
  ##installation:
  ${response.usage}
##usage:

    ${response.licenses}
##licenses:

    ${response.contribution}
##contribution:

    ${response.test}
##test:

    ${response.email}
##email:

    ${response.profile}
##profile:
`;
}

module.exports = generateMarkdown;