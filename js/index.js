// Add a footer element
const footerElement = document.createElement("footer");
document.body.appendChild(footerElement);

// Insert Copyright Text in Footer
const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector("footer");
const copyright = document.createElement("p");
copyright.innerHTML = `\u00A9 Glenn Bale Carreon ${thisYear}`;
footer.appendChild(copyright);

// Create List of Skills
let skills = ["HTMl/CSS", "Javascript", "Python", 
    "C/C++", "Postman", "GIT/Github/Sourcetree", 
    "Jira", "Confluence", "Bitbucket", "Manual/Automated Testing"]

const skillsSection = document.querySelector("#skills");
const skillsList = skillsSection.querySelector("ul");

skills.forEach(eachSkill => {
    let skill = document.createElement("li");
    skill.innerHTML = eachSkill;
    skillsList.appendChild(skill);
})