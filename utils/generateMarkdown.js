const generateMarkdown = function (response) {
    return `
  
# ${response.title}
  
# Table of Content
${response.contents.map(index => {
        return `
[${index}](#${index})
    `
    })}

  
  
 ## username:
 ${response.userName}
  
    
  ## description:
  ${response.description}
  
      
  ## installation:
  ${response.installation}

  
## usage:
${response.usage}

    
## licenses:
${response.licenses}

    
## contribution:
${response.contribution}

    
## test:
${response.test}

    
## email:
${response.email}

## userName:
${response.userName}
    
## video:
${response.video}

`;
}

module.exports = { generateMarkdown: generateMarkdown };