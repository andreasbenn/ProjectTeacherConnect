// -------------- //
// @author: Andreas Emanuel Bennecke
// @author: Oliver Langkjær Michelsen
// @author: Jeppe Hornshøj Reuther

var programList = JSON.parse(localStorage.getItem("allPrograms"));
var courseList = JSON.parse(localStorage.getItem("allCourses"));
var topicList = JSON.parse(localStorage.getItem("allTopics"));
var teacherList = JSON.parse(localStorage.getItem("allTeachers"));
var studentList = JSON.parse(localStorage.getItem("allStudents"));
var currentStudentArray = JSON.parse(localStorage.getItem("currentStudent"));
var currentStudent = currentStudentArray[0];
var currentProgram = JSON.parse(localStorage.getItem("currentProgram"));

var buttons = document.getElementsByClassName('day');
var submitBtn = document.getElementById("submitBtn");

// -------------- //
// @author: Oliver Langkjær Michelsen

var dt = new Date();
// To start of with we create a variable name 'dt' which use the java method 'new Date' which is used for creating an object constructor function. This variable will now be used in creating the calendar. the variable is because of the () declared to as a function
// https://stackoverflow.com/questions/1646698/what-is-the-new-keyword-in-javascript

function renderDate() {<!-- The class name "content" does not have any relevance for our js file, and is only used for creating overview of the div section. -->

    dt.setDate(1);
// set.Date is a javascript function we use so the date is equal to the weekday. We use the parameter (1) because (0) is equal to the first day of the last month, and we want to get the first day of this month.
// https://www.w3schools.com/jsref/jsref_setdate.asp
    var day = dt.getDay();

    // this is consoled log, so we can see how many dates from last month we have.
console.log(dt.getDay());

    var endDate = new Date(
        dt.getFullYear(),
        dt.getMonth()+1,0
    ).getDate();

    // Test, where we should get the last day of the month. That happens because we in getMonth use +1 besides the parameter, and furthermore use 0 which represents the last day of the last month.
    // This object constructor will also be relevant in a later for loop.
    console.log(endDate);

    var prevDate = new Date(
        dt.getFullYear(),
        dt.getMonth(),0).getDate();
// This variable refers to the HTML arrow symbol and the function executes with an onClick. We use date:0; because that is the last month
    var today = new Date();
    console.log(today);
    // This console log consoles the date of today via a javascript method
    // We declare this variable because we want to use it in or for loop, that via HTML should print all the dates of the month.
    console.log(prevDate);
    // Here we test that the prevDate we just created is the last day of the last month.

// But firstly an array of all the months.
    var months = ["January","February","March","April","May", "June","July","August","September","October","November","December"];

// We here use a object constructor function, which prints the date to our paragraph in html.
// https://www.geeksforgeeks.org/javascript-date-todatestring-function/
    document.getElementById("date_str").innerHTML = 1 + "/" + (dt.getMonth() + 1) + "/" + dt.getFullYear();

    //document.getElementById("date_str").innerHTML = this.id + "/" + (dt.getMonth() + 1) + "/" + dt.getFullYear();

// We use our dt variable new date to get the month.
    document.getElementById("month").innerHTML = months[dt.getMonth()];

   /* for(var d = 1; d <= endDate; d++) {
        if (d <= 31) console.log(d);
    }
*/

cells = "";

    for(x = day; x > 0; x--){
        cells += "<div class='prev_date'>" + (prevDate - x + 1) + "</div>";
    }

// This for loop connects with our div class "'prev_date" it starts out by saying our previous date, which is the last day of the last month=30. Then it says - x = the days that is represented from last month. It then plus with 1 so we get 29, and the loop repeats.

// This for loop is for all the days of the relevant month. We again use a for loop, ad break out of the loop when i is less than our equal to the last day of the month

    for (i = 1; i <= endDate; i++){
        if(i == today.getDate() && dt.getMonth() == today.getMonth()){
            //var newDate = "day" + i;
            cells += "<div class='day' id ='" + i + "'  value ='" + i + "' onclick='dateAndBook()'>" + i  + "</div>";

        } else{

            cells += "<div class='day' id ='" + i + "' value ='" + i + "' onclick='dateAndBook()'>" + i + "</div>";

// If the date is not equal to today's date, we use the conditional else statement, until we hit todays date. Then the if statement will be used. The break happens at the endDate

        }
    }

// Here we use innerHTML to print the cells we have declared above, in the user interface.
    document.getElementsByClassName("days")[0].innerHTML = cells;
}

// -------------- //
// @author: Oliver Langkjær Michelsen

// This is the function that executes when the onclick prev or next is clicked on. We either multiply or substract one month COMMENT PARA!!!!!
function moveDate(para) {
    if (para == 'prev') {
        dt.setMonth(dt.getMonth() - 1);
        renderDate();
    } else {
        (para == 'next')
        dt.setMonth(dt.getMonth() + 1);
    }
    renderDate();
    // We use the renderDate function in here, because the moveDate function needs to have this reference because the other attributed from the calendar is declared inside this function. And eventhough the tuborg klamme had continued, we have not declared an onclick function in the prevDate and nextDate object constructor.
};

// -------------- //
// @author: Andreas Emanuel Bennecke
// @author: Oliver Langkjær Michelsen
// @author: Jeppe Hornshøj Reuther

// This function creates a list of courses based on the logged in students program. It then adds them to the dropdown menu.
course = "";

// Dynamic selector
// This function creates a for loop, that checks which program the student is
// attached to. The courses of this program will then be shown in the dropdown menu.

function setCourses(){

    // We use the addition assignment operator to add the strings to the variable "course". The first string consists of the HTML element select with an id. the second string consists of the element option.
    // We use a disabled attribute inside the option element, to specify that the element is disabled.
    course += "<select id='s1'>";
    course += "<option value=\"\" disabled selected>Select course</option>";

    // This for loop is initialized by 'i=0', the for loop checks if our counter 'i'
    // is less than the array 'programCourses' length. As long as this condition is true,
    // our counter 'i' increases by 1, after every iteration of the for loop.
for (i= 0; i < currentProgram.programCourses.length; i++) {

    // We add another string to the variable "course", which contains a new option element. In the 1st iteration of the for loop, the value of the 1st option is set to the 'courseValue' of the 1st index in the array 'programCourses'
    // The id is set to the 'courseID' of the 1st index in the array "programCourses". We set the innerHTML to the 'courseName' of the 1st index in the array 'programCourses'
        course += "<option class='courses' value = '"+currentProgram.programCourses[i].courseValue+"' id ='" + "course" + currentProgram.programCourses[i].courseID + "' >" + currentProgram.programCourses[i].courseName + "</option>";
    }

// After the last iteration of the for loop we add a string which ends the HTML element.
    course += "</select>";

// We set the HTML class 'coursesMenu'.
    document.getElementsByClassName("coursesMenu")[0].innerHTML = course;
}
setCourses();

// -------------- //
// @author: Andreas Emanuel Bennecke
// @author: Oliver Langkjær Michelsen
// @author: Jeppe Hornshøj Reuther

// These functions finds the teachers for that specific course, and adds them to localStorage, and also makes a new dropdown menu for the user to chose the teacher he/she wants to get help from.

selectedCourse = "";

// We set the variable 'courseField' to the dropdown menu we created in our 'setCourses' function.
var courseField = document.getElementById("s1");

// This is an addEventListener which waits on a change on the first dropdown menu which specifies the chosen course. It then calls functions for the teachers, which is made below.
courseField.addEventListener("change", function () {

    // We push the value of the selected course in the 'courseField' to local Storage as 'selectedCourse'.
    // Afterwards we set our empty variable 'selectedCourse', to the 'selectedCourse' from localStorage
    localStorage.setItem("selectedCourse", (courseField.options[courseField.selectedIndex].value));

    selectedCourse = localStorage.getItem("selectedCourse");
    localStorage.setItem("selectedTeacher", "");

    courseTeachers();
    setTeachers();
});

// -------------- //
// @author: Andreas Emanuel Bennecke
// @author: Oliver Langkjær Michelsen
// @author: Jeppe Hornshøj Reuther

var selectedCourseTeachers = [];

// This for loop iterates through the 'courseValue' in our 'courseList' array.
// If the 'courseValue' of the index in the 'courseList' is equal to the 'selectedCourse', we set our 'selectedCourseTeachers' to the teachers in that index.
// We also push the array into localstorage by using JSON.stringify to serialize the data.
function courseTeachers() {
    for (i = 0; i < courseList.length; i++) {
        if (selectedCourse == courseList[i].courseValue) {
            selectedCourseTeachers = courseList[i].teachers;
            localStorage.setItem("selectedCourseTeachers", JSON.stringify(courseList[i].teachers))
        }
    }
}

// -------------- //
// @author: Andreas Emanuel Bennecke

var teacher2 = "";

// We create the variable teacher2 outside the function and use the addition assignment operator to create a visible dropdown menu
// but without any teachers in it, before course is selected.
teacher2 += "<select class='teachers2' id='s2'>";

// We use a disabled attribute inside the option element, to specify that the element is disabled.
teacher2 += "<option value=\"\" disabled selected> Select teacher</option>"
teacher2 += "</select>";

document.getElementsByClassName("teachersMenu")[0].innerHTML = teacher2;

function setTeachers(){
    // We create a new variable inside the function.
    var teacher = "";

    // We use a disabled attribute inside the option element, to specify that the element is disabled.
    teacher += "<select id='s2'>";

    teacher += "<option value=\"\" disabled selected> Select teacher</option>";

    // We create a similar for loop, as the for loop in our selectedCourse function, but the value, id and the innerHTML is changed to fit the selectedCourseTeachers instead.
    for (i= 0; i < selectedCourseTeachers.length; i++) {
        teacher += "<option class='teachers' value = '"+ selectedCourseTeachers[i].teacherName +"' id ='" + "teacher" + selectedCourseTeachers[i].teacherID + "' >" + selectedCourseTeachers[i].teacherName + "</option>";
    }

    teacher += "</select>";
    // We set the variable outside setTeachers, to the variable inside the function setTeachers.

    teacher2 = teacher;
    // We set the HTML class 'coursesMenu'.

    document.getElementsByClassName("teachers2")[0].innerHTML = teacher2;
}

// -------------- //
// @author: Andreas Emanuel Bennecke

// This is an EventListener that waits on change on the teacherField (dropdown menu), and if there is a function, it finds the new value, and saves the new value to localStorage.

var selectedTeacher = "";

// s2 is the teacherField (dropdown menu)
var teacherField = document.getElementById("s2");

// This addEventListener pushes the selectedTeacher in the dropdown menu to localStorage and runs our function findCurrentTopics.
teacherField.addEventListener("change", function () {
    localStorage.setItem("selectedTeacher", (teacherField.options[teacherField.selectedIndex].innerHTML));
    selectedTeacher = localStorage.getItem("selectedTeacher");

    findCurrentTopics();
});

// -------------- //
// @author: Oliver Langkjær Michelsen

// This functions is used in or checkbox, where time is selected.
function executeCalendar(e){
    e.preventDefault()
    var checkbox = document.getElementsByClassName('time1');

    // We declare a variable named 'len' show we can use all the different inputs in our select form.
    var len = checkbox.length;
    var rating = "";

    // This rating does not have anything inside its quotation marks this variable depends on which input button that is clicked on.

//var i = 0;
// We create a for loop that counts up, and choose the checked input.
// The input is then stored in localStorage.
    // we dont have to use a <= sign in the for loop because we also have a submit button that also is represented as a input in or select element.
    for (i = 0; i < len; i++) {
        if (checkbox[i].checked) {
            rating = checkbox[i].value;
            localStorage.setItem('rating', checkbox[i].value);
        }
    }
    createBooking();
    document.location.href = "myPage.html";
    }

// -------------- //
// @author: Oliver Langkjær Michelsen

function dateAndBook() {
    // (document.getElementById("hello").textContent)

    var buttons = document.getElementsByClassName('day');

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function () {
            //console.log(this.id + "/" + (dt.getMonth() + 1) + "/" + dt.getFullYear());
            // local storage

            var dateOfBooking = document.getElementById("date_str").innerHTML = this.id + "/" + (dt.getMonth() + 1) + "/" + dt.getFullYear();
            localStorage.setItem('dateOfBooking', this.id + "/" + (dt.getMonth() + 1) + "/" + dt.getFullYear())

        });
        function book() {
            document.getElementById("panel").style.display = "block";}
            book();

        // var todayDate = document.getElementsByClassName('day').onclick = function() {
        //    console.log(this.id);
        // };

        // console.log(todayDate);
        // book()
    }
}

// -------------- //
// @author: Andreas Emanuel Bennecke

// Constructor for a booking, we're using to make our bookings objectorientated and lets us store our information in an array.
class Booking{
    constructor(course, teacher, topic, day, hour, studentID){
        this.course = course;
        this.teacher = teacher;
        this.topic = topic;
        this.day = day;
        this.hour = hour;
        this.studentID = studentID;
    }
}

// Creating an empty array if we're restarting without a LocalStorage array
if(localStorage.getItem("Bookings") === null){
    var bookings = [];
    localStorage.setItem("Bookings", JSON.stringify(bookings));
}

// Parses the array from LocalStorage down
if(localStorage.getItem("Bookings") !== null){
    var bookings = JSON.parse(localStorage.getItem("Bookings"));
}

// var newBooking = new Booking(localStorage.getItem("s1"),localStorage.getItem("s2"), "test", localStorage.getItem("dateOfBooking"), localStorage.getItem("rating"));

//Function to get the items from LocalStorage and stores them in the array

function createBooking() {

    var selectedTopic = document.getElementById("Topic").value;

    var newestBooking = new Booking(localStorage.getItem("selectedCourse"), localStorage.getItem("selectedTeacher"), selectedTopic, localStorage.getItem("dateOfBooking"), localStorage.getItem("rating"), currentStudent.studentID);
    bookings.push(newestBooking);
    console.log(bookings);

    // Deletes the keys "selectedCourse", "selectedTeacher", "dateOfBooking" and "rating" from LocalStorage
    localStorage.removeItem("selectedCourse");
    localStorage.removeItem("selectedTeacher");
    localStorage.removeItem("dateOfBooking");
    localStorage.removeItem("rating");

    //Stores the array in LocalStorage with the key "Booking"
    localStorage.setItem("Bookings", JSON.stringify(bookings));

}

document.getElementById("submitBtn").addEventListener("click", executeCalendar);

// ----- OLD CODE WE NO LONGER USE ----- //
// ----- OLD CODE WE NO LONGER USE ----- //
// ----- OLD CODE WE NO LONGER USE ----- //

/*
function savesInfo (){
    // This functions is used in or checkbox, where time is selected.
    var checkbox = document.getElementsByClassName('time1');
    // We declare a variable named 'len' show we can use all the different inputs in our select form.
    var len = checkbox.length;
    var rating = "";
    // This rating does not have anything inside its quotation mark this variable depends on which input button that is clicked on.

//var i = 0;
// We create a for loop that counts up, and choose the checked input.
// The input is then stored in localStorage.
    // we dont have to use a <= sign in the for loop because we also have a submit button that also is represented as a input in or select element.
    for (i = 0; i < len; i++) {
        if (checkbox[i].checked) {
            rating = checkbox[i].value;
            localStorage.setItem('rating', checkbox[i].value);

        }

    }

//localStorage.setItem('dateOfBooking', this.id + "/" + (dt.getMonth() + 1) + "/" + dt.getFullYear())
    course = courseField.options[courseField.selectedIndex].value;
    teacher = teacherField.options[teacherField.selectedIndex].value;

    //console.log(course);
    //console.log(teacher);

    //localStorage.setItem('dateOfBooking', this.id + "/" + (dt.getMonth() + 1) + "/" + dt.getFullYear())

}
*/

/*
var s1 = document.getElementById('s1');
var s2 = document.getElementById('s2');
console.log(s1.value)

var course = s1.value
var teacher = s2.value
var booking = {course, teacher}
console.log(booking)
*/

/*
console.log(s2)
var option =  s2.options[0]
console.log(option)
var booking = {s1}
console.log(booking)
*/

// -------------- //


// @author: Oliver Langkjær Michelsen

// Old code which does the same as above, but more hardcoded and not objectorientated.

/*  if (courseField.options[courseField.selectedIndex].value == "Ind"){
      var opt1 = document.createElement('option');
      var opt2 = document.createElement('option');

      opt1.value = "Ali";
      opt2.value = "Tina";
      opt1.innerHTML = "Ali";
      opt2.innerHTML = "Tina";
      removeAll(s2);
      // We here use the function declared above, so we are sure that the only thing s2 contains is the two options we have just added.
      s2.options.add(opt1);
      s2.options.add(opt2);
      localStorage.setItem('s1', s1.value);
      //localStorage.setItem('s2', s2.value);
      // We here use localstorage to store our options. The only problem is that the default is the first teacher. Because it adds the first value displayed in options of s2

  }
  else if (s1.options[s1.selectedIndex].value == "Pro"){
      var opt1 = document.createElement('option')
      var opt2 = document.createElement('option')
      opt1.value = "Henrik";
      opt2.value = "Mikkel";
      opt1.innerHTML = "Henrik";
      opt2.innerHTML = "Mikkel";
      removeAll(s2);
      s2.options.add(opt1);
      s2.options.add(opt2);
      localStorage.setItem('s1', s1.value);
      //localStorage.setItem('s2', s2.value);
// Here we just use conditional statements for all the other courses an HA (it) student has.

  }else if (s1.options[s1.selectedIndex].value == "Bis"){
      var opt1 = document.createElement('option')
      var opt2 = document.createElement('option')
      opt1.value = "Rob";
      opt2.value = "Till";
      opt1.innerHTML = "Robb";
      opt2.innerHTML = "Till";
      removeAll(s2);
      s2.options.add(opt1);
      s2.options.add(opt2);
      localStorage.setItem('s1', s1.value);
      //localStorage.setItem('s2', s2.value);

  }else if (s1.options[s1.selectedIndex].value == "Vos"){
      var opt1 = document.createElement('option')
      var opt2 = document.createElement('option')
      opt1.value = "Jan";
      opt2.value = "Jan";
      opt1.innerHTML = "Jan";
      opt2.innerHTML = "Jan";
      removeAll(s2);
      s2.options.add(opt1);
      s2.options.add(opt2);
      localStorage.setItem('s1', s1.value);
      //localStorage.setItem('s2', s2.value);
  }

 /* else{
      var opt1 = document.createElement('option')
      opt1.value = "--"
      opt1.innerHTML = "--"
      removeAll(s2);
      s2.options.add(opt1);
  }
}*/
// This function is executed by an onclick event. When clicked on a date, the panel is shown. This is possible by chancing the default value of the panel in css to 'none'

// js til local storage af alt

// buttons

//var endDate = new Date(
//  dt.getFullYear(),
//dt.getMonth()+1,0
//).getDate();

// array til value

/*
function dayS() {
    for (var d = 1; d <= endDate; d++) {
        if (d <= 31)
document.getElementsByClassName('day').value = d;
    }
}
 */

//

// -------------- //

//localStorage.setItem('dateOfBooking', this.id + "/" + (dt.getMonth() + 1) + "/" + dt.getFullYear())


// Commented out because it is no longer in use, as we moved to a more object orientated solution.

/*

course = courseField.options[courseField.selectedIndex].value;
teacher = teacherField.options[teacherField.selectedIndex].value;

function s4() {
    var s1 = document.getElementById('s1');
    var s2 = document.getElementById('s2');
    if (s1.options[s1.selectedIndex].value == "Org") {
        var opt1 = document.createElement('option');
        var opt2 = document.createElement('option');

        opt1.value = "Ali";
        opt2.value = "Tina";
        opt1.innerHTML = "Ali";
        opt2.innerHTML = "Tina";
        // we here use the function declared above, so we are sure that the only thing s2 contains is the two options we have just added.
        localStorage.setItem('s2', s2.value);
    } else if (s1.options[s1.selectedIndex].value == "Pro") {
        var opt1 = document.createElement('option')
        var opt2 = document.createElement('option')
        opt1.value = "Henrik";
        opt2.value = "Mikkel";
        opt1.innerHTML = "Henrik";
        opt2.innerHTML = "Mikkel";
        localStorage.setItem('s2', s2.value);

// Here we just use conditional statements for all the other courses an HA (it) student has.

    } else if (s1.options[s1.selectedIndex].value == "Bis") {
        var opt1 = document.createElement('option')
        var opt2 = document.createElement('option')
        opt1.value = "Rob";
        opt2.value = "Till";
        opt1.innerHTML = "Robb";
        opt2.innerHTML = "Till";
        localStorage.setItem('s2', s2.value);

    } else if (s1.options[s1.selectedIndex].value == "Vos") {
        var opt1 = document.createElement('option')
        var opt2 = document.createElement('option')
        opt1.value = "Jan";
        opt2.value = "Jan";
        opt1.innerHTML = "Jan";
        opt2.innerHTML = "Jan";
        localStorage.setItem('s2', s2.value);
        */

// -------------- //

/*
$(document).click(function(event) {
    var text = $(event.target).text();
    console.log((text))
});*/
/*document.addEventListener("click", myFunction);

function myFunction() {
  var todayDate = document.getElementById('hello');
    //  document.getElementsByClassName("day")
    console.log(todayDate)
}*/

/*
var list = document.getElementsByClassName('day');
var n;
for (n = 1; n < list.length; ++n) {
    list[n].value = '31';
}
*/
