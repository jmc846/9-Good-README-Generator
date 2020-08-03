 const inquirer = require ('inquirer');
const fs = require('fs');
const CheckboxPrompt = require('inquirer/lib/prompts/checkbox');

const questions = [
  {   
      message: "What is the name of the project?",
      name: "title"
  },
  {   
      message: "Please provide a table on content",
      name: "table of content"
  },
  {   type: 'input',
      message: "What is the name of the user?",
      name: "userName"
  },
  {  
    type: 'input',  
    message: "Please provide a description of the project",
      name: "description"
  },
  {   
    type: 'input',  
    message: "What is the installation process?",
      name: "installation"
  },
  {   
    type: 'input', 
    message: "How will this project be used?",
      name: "usage"
  },
  {   
     type: "checkbox",
     message: "What licenses are required with this project?",
      name: "licenses",
      choices:
      ["MIT",
      'Apache',
      "e6",]
  },
  {   
    type: 'input',
    message: "Who were the contributors to this project?",
      name: "contribution"
  },
  {   
    type: 'input', 
    message: "What is the test process for this project?",
      name: "test"
  },
  {   
    type: 'input', 
    message: "What is the user github link?",
      name: "GitHub link"
  },
  {   
    type: 'input',
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
    return 
     
    `

  
//   #  ${response.title}
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