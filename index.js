 const inquirer = require ('inquirer');
const fs = require('fs');
// const api = require('./util/api.js');
 const generateMarkdown = ('./util/gMkd.js');

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
      message: "What is the user github email address?",
      name: "GitHub user email"
  },
  {   
      message: "Please provide a profile picture",
      name: "GitHub profile picture"
  }
]

// inquirer.prompt([ {
//     type:'input',
//     name:'user',
//     message:'What is your GitHub username?',
//     validate: user => {
//     if (user.length < 1 && user.length);
//       return 'User name must be valid'

//     } 
//     // else({user.startsWith('-',0)}{
//     //   return 'Username can not start with numbers or special characters'
//     // },
    
//     // {
//     //   type:'input',
//     // name:'user',
//     // message:'What is your GitHub username?',
//     // };
//   }]);

// var finishedMarkdown = profileWriter.generateMarkdown(responseObj);

// fs.writeFile('./profile.md', finishedMarkdown, err =>{
// if(err){
//     console.log(err)
// } else{
// console.log('GOOD JOB')
// };

// })



// const fs = require('fs');

// fs.writeFile('log.md', process.argv[2], function(err){
//   if(err){
//   return console.log(err);
  
//   }
  
//   console.log('Success!');
  
  
//   });

function init () {
    inquirer.prompt(questions)
    .then((inquirerResponse, data) => {   
        console.log("ReadMe.md generation has begun, wait one moment");
        fs.writeFileSync("ReadMe.md", `${inquirerResponse}`, data);
    })
    .catch((err) => {
        console.log(err);
    })
}

init();
