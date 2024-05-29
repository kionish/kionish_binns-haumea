// Select body of web page and create footer element
const body = document.body;

const today = new Date();
const thisYear = today.getFullYear();

const footer = document.createElement("footer");
const copyright = document.createElement("p");
copyright.innerHTML = `<small>Kionish Binns &copy; ${thisYear}</small>`;

// Append the footer element to the body
footer.appendChild(copyright);
document.body.appendChild(footer);

let skills = ["Javascript", "HTML", "CSS", "GitHub", "Canvas"];
let skillsSection = document.getElementById("Skills");
let skillsList = document.createElement("ul");
skillsSection.appendChild(skillsList);

for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
}

// Code for message form
let messageForm = document.querySelector("[name='leave_message']");
let messageSection = document.getElementById("messages-received");
let messageList = messageSection.querySelector("ul");
messageSection.hidden = true;

messageForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let name = event.target.usersName.value;
  let email = event.target.usersEmail.value;
  let message = event.target.usersMessage.value;

  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  let newMessage = document.createElement("li");
  newMessage.classList.add("message-item");

  newMessage.innerHTML = `<a href="mailto:${email}">${name}</a><span> wrote: ${message}</span>`;
  newMessage.appendChild(makeRemoveButton());
  messageList.appendChild(newMessage);
  messageForm.reset();
  messageSection.hidden = false;
});

function makeRemoveButton() {
  let removeButton = document.createElement("button");
  removeButton.innerText = "remove";
  removeButton.type = "button";
  removeButton.className = "remove-button";
  removeButton.addEventListener("click", () => {
    let entry = removeButton.parentNode;
    entry.parentNode.removeChild(entry);
  });
  return removeButton;
}

const userName = "kionish";

// fetch repositories and present JSON data
fetch(`https://api.github.com/users/${userName}/repos`)
  .then((response) => {
    if (!response.ok) {
      return new Error("Failed to gather repositories");
    }
    return response.json();
  })
  .then((repositories) => {
    console.log(repositories);

    //Selecting the Projects section using DOM
    const projectSection = document.getElementById("Projects");

    //Making a ul in projects section
    let projectList = document.createElement("ul");
    projectSection.appendChild(projectList);

    for (let i = 0; i < repositories.length; i++) {
      let project = document.createElement("li");
      project.innerText = repositories[i].name;
      projectList.appendChild(project);
    }
  });
