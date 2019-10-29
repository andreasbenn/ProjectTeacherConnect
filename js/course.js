// Søren

// fag for linjer på CBS
class Course {
    constructor(name, student, teacher, instructor, year) {
        this.name = name;
        this.student = student;
        this.teacher = teacher;
        this.instructor = instructor;
        this.year = year;

    }
}

// Course 1 er en variabel, som indeholder et object (cource). Course har fields med værdier i
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
