const inquirer = require ('inquirer');
const fs = require('fs');
const generateMarkdown = ();
const questionsArr = require('');

inquirer.prompt(questionsArr).then(responseObj => {

const finishedMarkdown = profileWriter.generateMarkdown(responseObj)

fs.writeFile('./profile.md', finishedMarkdown, err =>{
if(err){
    console.log(err)
} else{
console.log('GOOD JOB')

})
})