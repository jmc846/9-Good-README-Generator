const inquirer = require ('inquirer');
const fs = require('fs');
const generateMarkdown = ();
const questionsArr = require('');

inquirer.prompt([ {
    type:'input',
    name:'user',
    message:'What is your GitHub username?',
    validate: user => {
    if (user.length < 1 && user.length)
      return 'User name must be valid'

    }
    else if (user.startsWith('-',0) {
      return 'Username can not start with numbers or special characters'  
    };

const finishedMarkdown = profileWriter.generateMarkdown(responseObj);

fs.writeFile('./profile.md', finishedMarkdown, err =>{
if(err){
    console.log(err)
} else{
console.log('GOOD JOB')

})
})