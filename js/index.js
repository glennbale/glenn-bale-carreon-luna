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

const messageForm = document.forms["leave_message"];

messageForm.addEventListener("submit", function(event){
    event.preventDefault();

    const usersName = event.target.usersName.value;
    const usersEmail = event.target.usersEmail.value;
    const usersMessage = event.target.usersMessage.value;

    console.log("Name:", usersName);
    console.log("Email:", usersEmail);
    console.log("Message:", usersMessage);

    const messageSection = document.querySelector("#messages");
    const messageList = messageSection.querySelector("ul");
    const newMessage = document.createElement("li")
    newMessage.innerHTML = `<a href="mailto:${usersEmail}">${usersName}</a>:<span>${usersMessage}</span>`;

    
    const removeButton = document.createElement("button");
    removeButton.innerText = "remove";
    removeButton.type = "button";
    removeButton.addEventListener("click", function(){
        const entry = removeButton.parentNode;
        entry.remove();
    if (messageList.children.length === 0){
            messageSection.style.display = "none";
        }
    });
    const editButton = document.createElement("button");
    editButton.innerText = "edit";
    editButton.type = "button";
    editButton.addEventListener("click", function(){
    const span = newMessage.querySelector("span");
    const newText = prompt("Edit your message:", span.textContent.trim());
    if (newText !== null && newText.trim() !== "") {
            span.textContent = " " + newText;
        }
    });

    
    newMessage.appendChild(editButton);
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

    messageSection.style.display = "block";

    event.target.reset(); 
});

//Handle your JSON data
fetch(`https://api.github.com/users/glennbale/repos`)
.then(response => {
    //Handling errors
    if (!response.ok){
        throw new Error(`Error status: ${response.status}`)
    };
    return response.json();
})
.then(repositories => {
    console.log(repositories);

    const projectSection = document.querySelector('#projects');
    const projectList = projectSection.querySelector('ul');

    for (let i = 0; i < repositories.length; i++){
        const project = document.createElement("li");
        project.innerText = repositories[i].name;
        projectList.appendChild(project);
    }
});



