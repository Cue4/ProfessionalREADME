// Function that returns a license badge

function renderLicenseBadge(license) {
  if(license !== "NONE"){
    return `![github license](https://img.shields.io/badge/license-${license.replace(' ','_')}-red.svg)`
  }else {
    return ""
  }
}

// Function that returns the license link, if there is no license it will return empty
function renderLicenseLink(license) {
  if(license !== "NONE"){
    return `* [license](#license)`
  }else {
    return ""
  }
}

// Function that returns the license section of README, if there is no license it will return empty

function renderLicenseSection(license) {
  if(license !== "NONE"){
    return `
     
  🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
  
  ## Badges
  
  (https://img.shields.io/badge/license-)
  
  ## Features
  
  If your project has a lot of features, list them here.
  
  ## How to Contribute
  
  If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
  
    `
  }else {
    return ""
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
 ${renderLicenseBadge(data.license)}

  ### Table of Contents

  ${data.tableOfContents}

${renderLicenseLink(data.license)}

  ## Description
  
  ${data.briefDescription}
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## Credits
  
  ${data.credits}
  
  ## License
  
  ${data.license}
  
  ---
 
  ## License
  
  ${renderLicenseSection(data.license)}
  `

}


module.exports = generateMarkdown;
