const inquirer = require ('inquirer');
const fs = require('fs');
// const CheckboxPrompt = require('inquirer/lib/prompts/checkbox');
const makeMarkdown = require('./utils/generateMarkdown');

const questions = [
  {   type: 'input',
      message: "What is the name of the project?",
      name: "title"
  },
  {   type: 'checkbox',
      message: "Please provide a table on content",
      name: "contents",
      choices: ["Description", "installation", "unsername", "licenses","contributions", "test", "email", "profile pic"]
  },
  {   type: 'input',
      message: "What is the name of the developer",
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
    message: "What is the user github profile link",
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
    .then((response) => {   
        console.log("ReadMe.md generation has begun, wait one moment");
        const finishedMarkdown = makeMarkdown.generateMarkdown(response);
        fs.writeFile("README.md",finishedMarkdown, err =>{
          if(err){
            console.log(err);
          } else {
            console.log("YAY!!!")
          }
        });
    })
    .catch((err) => {
        console.log(err);
    })
}


init();

