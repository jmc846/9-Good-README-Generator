const inquirer = require ('inquirer');
const fs = require('fs');
const generateMarkdown = ();
const questionsArr = require('');

inquirer.prompt(questionsArr).then(responseObj)

const finishedMarkdown = generateMarkdown(responseObj)

fs.writeFile('./profile.md', finishedMarkdown,)
if(err){
    console.log(err)
} else{
console.log('GOOD JOB')

}