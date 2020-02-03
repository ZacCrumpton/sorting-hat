console.log("HelloWorld!");
//print to dom function for innerhtml
const printToDom = (divId, textToPrint) => {
    console.log(textToPrint);
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint
};

//this is my hogwarts array

const hogwartsHouse = [
    'Griffindor', 'Hufflepuff', 'Slytherin', 'Ravenclaw' 
];

//this variable grabs the users input into my form

const names = document.getElementById("insertName");

//this variable sets the student id to 0
//student id is located inside the sort init function

let studentId = 0;


const students = [];

//this function allows my form to be seen

function openForm() {
   x = document.getElementById("form");
   if(x.style.display === "none") {
       x.style.display = "block";
   } else {
       x.style.display = "none";
   }
};

//this function builds the card

const sortBuilder = (sortingHat) => {
    
    let domString = '';
    for(let i = 0; i < sortingHat.length; i++){
        domString +=    `<div class="cardContainer" col-4>`
        domString +=    `<div class="card" style="width: 18rem;">`
        domString +=        `<div class="card-body">`
        domString +=        `<h5 class="cardTitle">${sortingHat[i].name}</h5>`
        domString +=        `<p class="card-text">${sortingHat[i].house}</p>`
        domString +=        `<a onclick="expelStudentEvent()" id="${sortingHat[i].id}" href="#" class="expel">Expel</a>`
        domString +=        `</div>`
        domString +=    `</div>`
        domString +=    `</div>`
    }
    
    printToDom('studentCard', domString)
    
};

//make function for expel students events
//loops over all of the expel buttons
//adds the remove student function to each button
//need remove student function
//remove student with the id that is equal to the id of the button, e.target.id

//pass in id of the card i'm clicking

//i want this function to delete 1 card when the button on said card is clicked

const expelStudentEvent = (index) => {
    students.splice(index,1);
    sortBuilder(students);
};


//this function takes my users input into the form and my hogwarts array into an array that gives each input an id

const sortInit = () => {

    const student = {
        id: studentId,
        name: names.value,
        house: hogwartsHouse[Math.floor(Math.random() * hogwartsHouse.length)],
    }
    students.push(student);
    console.log(students);
    studentId++;
    sortBuilder(students);
};

// const removeCard = () => {
//     let myCard = document.getElementById(e.target.id);
// }

//this function holds my event listeners

const events = (e) =>{
    document.getElementById('sort').addEventListener('click', sortInit)
    document.getElementsByClassName('cardContainer').addEventListener('click', expelStudentEvent)
}

//this function holds all of the previous functions

const init = () => {
    openForm();
    sortBuilder(students);
    events(students)
    expelStudentEvent(students)
    sortInit(expelStudentEvent)
};

//this function executes all functions

init();