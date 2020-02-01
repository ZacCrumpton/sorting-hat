console.log("HelloWorld!");

const printToDom = (divId, textToPrint) => {
    console.log(textToPrint);
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint
};

const hogwartsHouse = [
    'Griffindor', 'Hufflepuff', 'Slytherin', 'Ravenclaw' 
];

const names = document.getElementById("insertName");

let studentId = 0;


const students = [];

function openForm() {
   x = document.getElementById("form");
//    y = document.getElementById("jumbo");
   if(x.style.display === "none") {
       x.style.display = "block";
    //    y.style.display = "none";
   } else {
       x.style.display = "none";
    //    y.style.display = "block";
   }
};

const sortBuilder = (sortingHat) => {
    
    let domString = '';
    for(let i = 0; i < sortingHat.length; i++){
        domString +=    `<div class="card" style="width: 18rem;">`
        domString +=        `<div class="card-body">`
        domString +=        `<h5 class="cardTitle">${sortingHat[i].name}</h5>`
        domString +=        `<p class="card-text">${sortingHat[i].house}</p>`
        domString +=        `<a id="${sortingHat[i].id}" href="#" class="expel">Expel</a>`
        domString +=        `</div>`
        domString +=    `</div>`
    }
    
    printToDom('studentCard', domString)
    
};


const sortInit = (e) => {

    const student = {
        id: studentId,
        name: names.value,
        house: hogwartsHouse[Math.floor(Math.random() * hogwartsHouse.length)],
    }
    students.push(student);
    console.log(students);
    studentId++;
    sortBuilder(students);
    // const z = [];
    // for(let i = 0; i < student.length; i++){
    //     if(student[i].names){
    //         z.push(student[i].names)
    //     }
    // }
};

const removeCard {
getElementByC
}

const events = () =>{
    document.getElementById('sort').addEventListener('click', sortInit)
}

const init = () => {
    openForm();
    sortBuilder(students);
    events()
};

init();