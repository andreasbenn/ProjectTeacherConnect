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


/*var showBTN = document.getElementById("show-btn")
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

 */

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





