/*
// ----- course.js ----- //
// subjects for the studies
class Course {
    constructor(name, student, teacher, instructor, year) {
        this.name = name;
        this.student = student;
        this.teacher = teacher;
        this.instructor = instructor;
        this.year = year;
// above I have made a class under witch I have described a "recipie" for what needs to be pressent in order to forfill the class
    }
}
// Course 1 is a variable witch contains a object (cource). Course have fields with values in them

let course1 = new Course(
    "Programering og udvikling af små systemer samt databaser",
    ["Frederik" ,"Søren", "Andreas", "Oliver"],
    ["Henrik Thorn", "Nicolai Jacobsen"],
    ["Mikkel Nielsen", "Isabella Burger", "Helena Marqvertsen Frank", "Henriette Lillehagen"],
    "2019");

let course2 = new Course(
    "Virksomhedsøkonomisk styring",
    ["Søren", "Andreas", "Oliver"],
    "Jan Anders Sørensen",
    ["Emma Sofie Møller", "Emil Jan Ehrenreich"],
    "2019");

let course3 = new Course(
    "Introduction to Information Systems and Information Systems Development",
    ["Søren", "Andreas", "Oliver"],
    ["Till Winkler", "Rob Gleasure", "Elham Shafiei Gol"],
    ["Frederik Friborg", "Nicholas Dan Jacobsen"],
    "2019");

let course4 = new Course(
    "Indføring i organisationers opbygning og funktion",
    ["Søren", "Andreas", "Oliver"],
    ["Ali Shah", "Tina Blegind Jensen"],
    ["Emil Øhrgaard", "Christian August Høding"],
    "2019");

console.log(course1);
console.log(course2);
console.log(course3);
console.log(course4);

// all these variables are depicted in order for my storeCourse function to work
var inputUniversityName = document.getElementById('inputCourseName');
var inputName = document.getElementById('inputStudents');
var inputStudents = document.getElementById("inputTeacher");
var inputCourses = document.getElementById("inputInstructor");
var inputYear = document.getElementById("inputYear");

function storeCourse(){
    localStorage.setItem('inputUniversityName', inputUniversityName.value);
    localStorage.setItem('inputName', inputName.value);
    localStorage.setItem('inputStudents', inputStudents.value);
    localStorage.setItem('inputCourses', inputCourses.value);
    localStorage.setItem('inputYear', inputYear.value);
    alert('New course has been created.');
}

function showCourse() {
    console.log('Show course stored in localStorage.')
    console.log(localStorage);
}

// Function to clear user from localStorage
function clearCourse() {
    localStorage.clear();
    alert('User has been cleared from localStorage.');
}







// function setText(text, id) {
//     document.getElementById(id).innerText = text;
// }
//
// // Hjælpefunktioner
// function getUrlParameter(name) {
//     name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
//     var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
//     var results = regex.exec(location.search);
//     return results === null ? '-' : decodeURIComponent(results[1].replace(/\+/g, ' '));
// }
//
// function addLink(text, href, id) {
//     // Et link
//     var link = document.createElement("a");
//     // Noget tekst
//     var link_text = document.createTextNode(text);
//     // Tilføj tekst
//     link.appendChild(link_text);
//     // Tilføj link ref
//     link.href = href;
//     // Select dropdown element
//     let dropdown_menu = document.getElementById(id);
//     // Add link to dropdown element
//     dropdown_menu.appendChild(link);
// }
//
// function addTextLine(text, id) {
//     // Et link
//     var paragraphElement = document.createElement("p");
//     // Noget tekst
//     var _text = document.createTextNode(text);
//     // Tilføj tekst
//     paragraphElement.appendChild(_text);
//     // Select dropdown element
//     let dropdown_menu = document.getElementById(id);
//     // Add link to dropdown element
//     dropdown_menu.appendChild(paragraphElement);
// }
//
// /**
//  * @return null
//  */
// function FindCourse(id) {
//     for (var i = 0; i < Course.all_courses.length - 1; i++) {
//         if (id === Course.all_courses[i].course_id) {
//             return Course.all_courses[i];
//         }
//     }
//     return null;
//*/

// ----- dataFile.js ----- //
/*
// Andreas

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

*/

// ----- program.js ----- //
/*
// Andreas

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

var inputUniversityName = document.getElementById('inputUniversityName');
var inputName = document.getElementById('inputName');
var inputStudents = document.getElementById("inputStudents");
var inputCourses = document.getElementById("inputCourses");
var inputYear = document.getElementById("inputYear");

function storeProgram(){
    localStorage.setItem('inputUniversityName', inputUniversityName.value);
    localStorage.setItem('inputName', inputName.value);
    localStorage.setItem('inputStudents', inputStudents.value);
    localStorage.setItem('inputCourses', inputCourses.value);
    localStorage.setItem('inputYear', inputYear.value);
    alert('New program has been created.');
}

function showProgram() {
    console.log('Show program stored in localStorage.')
    console.log(localStorage);
}

// Function to clear user from localStorage
function clearProgram() {
    localStorage.clear();
    alert('User has been cleared from localStorage.');
}

var program1 = new Program("CBS","HA(it.)", ["Andreas", "Søren", "Oliver"], ["Indføring i organisationers opbygning og funktion", "Business information systems", "Programmering og udvikling af små systemer og databaser", "Virksomhedens økonomiske styring"], "2019");
var program2 = new Program("CBS","HA(fil.)", ["Tine", "Henrik", "Lukas", "Pia"], ["Mikroøkonomi", "Organisationsteori", "Økonomiens teori og idehistorie", "Filosofisk metode 1"], "2019");
var program3 = new Program("CBS","HA(jur.)", ["Rasmus", "Louise", "Michael"], ["Mikroøkonomi", "Juridisk metode og aftaleret", "Formueret", "Organisationsanalyse"], "2019");

// to String
var program1pretty = JSON.stringify(program1, undefined, 2);
var program2pretty = JSON.stringify(program2, undefined, 2);
var program3pretty = JSON.stringify(program3, undefined, 2);


var showBTN = document.getElementById("show-btn")
//showBTN.onclick = function(e){

   var output = document.getElementById("output")
   var input = document.getElementById("programName")
    e.preventDefault()
    if(input.value == "HA(IT.)"){
        console.log(program1)
        output.innerHTML = program1pretty;
    }
    else if(input.value == "HA(fil.)"){
        console.log(program2)
        output.innerHTML = program2pretty;

    }
    else if(input.value == "HA jur.)"){
        console.log(program3)
        output.innerHTML = program3pretty;
    }
    else {
        console.log("Error")
    }
}


function showCourseIT() {
    document.getElementById("courseListOrganisation").style.visibility = "visible";
    document.getElementById("courseListBIS").style.visibility = "visible";
    document.getElementById("courseListProgrammering").style.visibility = "visible";
    document.getElementById("courseListVØS").style.visibility = "visible";

    document.getElementById("courseListMikro").style.visibility = "hidden";
    document.getElementById("courseListOrganisationsteori").style.visibility = "hidden";
    document.getElementById("courseListØkoTeori").style.visibility = "hidden";
    document.getElementById("courseListFilo").style.visibility = "hidden";

    document.getElementById("courseListMikro2").style.visibility = "hidden";
    document.getElementById("courseListJuri").style.visibility = "hidden";
    document.getElementById("courseListFormueret").style.visibility = "hidden";
    document.getElementById("courseListOrganisationsanalyse").style.visibility = "hidden";
}

function showCourseFIL() {
    document.getElementById("courseListOrganisation").style.visibility = "hidden";
    document.getElementById("courseListBIS").style.visibility = "hidden";
    document.getElementById("courseListProgrammering").style.visibility = "hidden";
    document.getElementById("courseListVØS").style.visibility = "hidden";

    document.getElementById("courseListMikro").style.visibility = "visible";
    document.getElementById("courseListOrganisationsteori").style.visibility = "visible";
    document.getElementById("courseListØkoTeori").style.visibility = "visible";
    document.getElementById("courseListFilo").style.visibility = "visible";

    document.getElementById("courseListMirko2").style.visibility = "hidden";
    document.getElementById("courseListJuri").style.visibility = "hidden";
    document.getElementById("courseListFormueret").style.visibility = "hidden";
    document.getElementById("courseListOrganisationanalyse").style.visibility = "hidden";

}

function showCourseJUR() {
    document.getElementById("courseListOrganisation").style.visibility = "hidden";
    document.getElementById("courseListBIS").style.visibility = "hidden";
    document.getElementById("courseListProgrammering").style.visibility = "hidden";
    document.getElementById("courseListVØS").style.visibility = "hidden";

    document.getElementById("courseListMikro").style.visibility = "hidden";
    document.getElementById("courseListOrganisationsteori").style.visibility = "hidden";
    document.getElementById("courseListØkoTeori").style.visibility = "hidden";
    document.getElementById("courseListFilo").style.visibility = "hidden";

    document.getElementById("courseListMikro2").style.visibility = "visible";
    document.getElementById("courseListJuri").style.visibility = "visible";
    document.getElementById("courseListFormueret").style.visibility = "visible";
    document.getElementById("courseListOrganisationsanalyse").style.visibility = "visible";

}



//
// console.log(program1)
// console.log(program2)
// console.log(program3)
*/

