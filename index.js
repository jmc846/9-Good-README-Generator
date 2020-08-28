const inquirer = require ('inquirer');
const fs = require('fs');
const makeMarkdown = require('./utils/generateMarkdown');

const questions = [
  {   type: 'input',
      message: "What is the name of the project?",
      name: "title"
  },
  {   type: 'checkbox',
      message: "Please provide a table on content",
      name: "contents",
      choices: ["Description", "installation","Badges", "username","Questions", "licenses","contributions", "test", "email", "app video"]
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
  { type: 'input',
    message: 'Provide any Badges',
    name: 'badges'

  },
  { type: 'input',
    message: 'Provide Questions Section',
    name: 'question'

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
    message: "What is the user's github profile link",
    name: "GitHub"
  },
  {   
    type: 'input', 
    message: "What is the Contributor's Email",
    name: "email"
  },
  {   
    type: 'input',
    message: "Please provide video of the deployed app",
    name: "video"
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

