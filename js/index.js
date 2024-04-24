//select body of web page and create footer element

const body = document.body;

const today = new Date();
const thisYear = today.getFullYear();

const footer = document.createElement('footer');
const copyright = document.createElement('p');
copyright.innerHTML= `<small>Kionish Binns &copy; ${thisYear}</small>`;

// Append the footer element to the body
footer.appendChild(copyright);
document.body.appendChild(footer);
body.appendChild(footer);


let skills = ["Javacript","HTML","CSS","GitHub","Canvas"];
let skillsSection = document.getElementById("Skills");
let skillsList = document.createElement("ul");
skillsSection.appendChild(skillsList);

for (let i = 0; i < skills.length; i++) {

    const skill = document.createElement('li');

    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}

// phew

