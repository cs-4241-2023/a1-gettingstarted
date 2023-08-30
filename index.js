// Want to dynamically add experience and maybe change if my experiences have leveled up

// Make an object containing both the list of skills and my experience with them (assuming both lists are even)
const skills = {
    listOfSkills: ["HTML", "CSS", "Java", "JavaScript", "Python", "Unit Testing"],
    experience: ["Some", "A Lot", "A Lot", "Some", "A Lot", "A Lot"]
}

const ul = document.getElementById("experiences")
for(let i = 0; i < skills.listOfSkills.length; i++) {
    let li =  document.createElement('li')
    li.appendChild(document.createTextNode(skills.listOfSkills[i] + ': ' + skills.experience[i]))
    ul.appendChild(li)
}
