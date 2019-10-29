// Funktion til at oprette en linjer

class Program{
    constructor(universityName, name, students, courses, year){
        this.universityName = universityName;
        this.name = name;
        this.students = students;
        this.courses = courses;
        this.year = year;
    }

}

// var inputUniversityName = document.getElementById('inputUniversityName');
// var inputName = document.getElementById('inputName');
// var inputStudents = document.getElementById("inputStudents");
// var inputCourses = document.getElementById("inputCourses");
// var inputYear = document.getElementById("inputYear");

var inputForNewProgram = [];

var registerBtn = document.getElementById("registration_btn")
registerBtn.onclick = function(e){
    e.preventDefault();
    var programObj = new Program (
        document.getElementById('inputUniversityName').value,
        document.getElementById('inputName').value,
        document.getElementById('inputStudents').value,
        document.getElementById('inputCourses').value,
        document.getElementById('inputYear').value

    );

    inputForNewProgram.push(programObj);

    console.log(inputForNewProgram);
    localStorage.setItem('universityKey', JSON.stringify(inputForNewProgram));
    alert("Program has been created");

}

function clearForm() {
    document.getElementById("register-form").reset();
}

// function storeProgram(){
//     localStorage.setItem('inputUniversityName', inputUniversityName.value);
//     localStorage.setItem('inputName', inputName.value);
//     localStorage.setItem('inputStudents', inputStudents.value);
//     localStorage.setItem('inputCourses', inputCourses.value);
//     localStorage.setItem('inputYear', inputYear.value);
//     alert('New program has been created.');
// }


// function storeProgram(){
//     localStorage.setItem('universityKey',  );
//     alert('New program has been created.');
// }

function showProgram() {
    console.log('Show program stored in localStorage.')
    console.log(localStorage);
}

// Function to clear user from localStorage
function clearProgram() {
    localStorage.clear();
    alert('User has been cleared from localStorage.');
}

// make new instances of Program for each program
var program1 = new Program("CBS","HA(it.)", ["Andreas", "Søren", "Oliver"], ["Indføring i organisationers opbygning og funktion", "Business information systems", "Programmering og udvikling af små systemer og databaser", "Virksomhedens økonomiske styring"], "2019");
var program2 = new Program("CBS","HA(fil.)", ["Tine", "Henrik", "Lukas", "Pia"], ["Mikroøkonomi", "Organisationsteori", "Økonomiens teori og idehistorie", "Filosofisk metode 1"], "2019");
var program3 = new Program("CBS","HA(jur.)", ["Rasmus", "Louise", "Michael"], ["Mikroøkonomi", "Juridisk metode og aftaleret", "Formueret", "Organisationsanalyse"], "2019");



// UPDATE
    // save programs to local storage
function storePrograms(){
    localStorage.setItem("program1", JSON.stringify(program1))
    localStorage.setItem("program2", JSON.stringify(program2))
    localStorage.setItem("program3", JSON.stringify(program3))
}
storePrograms();

    // retrieve object from local storage and access a property
var program_1 = localStorage.getItem("program1");

//UPDATE END

var showBTN = document.getElementById("show-btn")
showBTN.onclick = function(e){

    var output = document.getElementById("output")
    var input = document.getElementById("programName")
    e.preventDefault()
    if(input.value == "HA(IT.)"){
        console.log(program1)

    }
    else if(input.value == "HA(fil.)"){

    }
    else if(input.value == "HA jur.)"){
        console.log(program3)

    }
    else {
        console.log("Error")
    }
}

//
// console.log(program1)
// console.log(program2)
// console.log(program3)





