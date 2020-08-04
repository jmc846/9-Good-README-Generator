const generateMarkdown = function (response) {
    return `
  
# ${response.title}
  
# Table of Content
${response.contents.map(index =>{
    return `
[${index[0]}](#${index[0]})
    `
})}
  -[description](#description)
  -[installation](#installation)
  -[usage](#usage)
  -[licenses](#licenses)
  -[contribution](#contribution)
  -[test](#test)
  -[username](#username)
  -[profile](#profile)
  
  
## username: ${response.username}
  
      ${response.description}
  ## description:
  
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

module.exports = {generateMarkdown : generateMarkdown};