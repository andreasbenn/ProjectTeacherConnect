var courseField = document.getElementById('s1');
var teacherField = document.getElementById('s2');
var course;
var teacher;
var buttons = document.getElementsByClassName('day');
var submitBtn = document.getElementById("submitBtn");

// console.log course
console.log(courseField.options[courseField.selectedIndex].value);
console.log(teacherField.options[teacherField.selectedIndex].value);
console.log(courseField.options[courseField.selectedIndex].value);

/*function savesInfo (){
    // this functions is used in or checkbox, where time is selected.
    var checkbox = document.getElementsByClassName('time1');
    //we declare a variable named 'len' show we can use all the different inputs in our select form.
    var len = checkbox.length;
    var rating = "";
    // this rating does not have anything inside its cituationstegn this variable depends on which input button that is clicked on.

//var i = 0;
// we create a for loop that counts up, and choose the checked input.
// the input is then stored in localStorage.
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

}*/

/*
var s1 = document.getElementById('s1');
var s2 = document.getElementById('s2');
console.log(s1.value)

var course = s1.value
var teacher = s2.value
var booking = {course, teacher}
console.log(booking)*/

/*
console.log(s2)
var option =  s2.options[0]
console.log(option)
var booking = {s1}
console.log(booking)*/

// constructor for app

var dt = new Date();
// to start of with we create a variable name 'dt' which use the java method 'new Date' which is used for creating an object constructor function. This variable will now be used in creating the calendar. the variable is because of the () declared to as a function
//https://stackoverflow.com/questions/1646698/what-is-the-new-keyword-in-javascript

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

// test, where we should get the last day of the month. That happens because we in getMonth use +1 besides the parameter, and furthermore use 0 which represents the last day of the last month.
    //this object constructor will also be relevant in a later for loop.
    console.log(endDate);
//
    var prevDate = new Date(
        dt.getFullYear(),
        dt.getMonth(),0).getDate();
// This variable refers to the HTML arrow symbol and the function executes with an onClick. We use date:0; because that is the last month
    var today = new Date();
    console.log(today);
    // this console log consoles the date of today via a javascript method
    // we declare this variable because we want to use it in or for loop, that via HTML should print all the dates of the month.
    console.log(prevDate);
    // here we test that the prevDate we just created is the last day of the last month.

// But firstly an array of all the months.
    var months = ["January","February","March","April","May", "June","July","August","September","October","November","December"];

// We here use a object constructor function, which prints the date to our paragraph in html.
// https://www.geeksforgeeks.org/javascript-date-todatestring-function/
    document.getElementById("date_str").innerHTML = 1 + "/" + (dt.getMonth() + 1) + "/" + dt.getFullYear();

    //document.getElementById("date_str").innerHTML = this.id + "/" + (dt.getMonth() + 1) + "/" + dt.getFullYear();

// we use our dt variable new date to get the month.
    document.getElementById("month").innerHTML = months[dt.getMonth()];


    // array til value

   /* for(var d = 1; d <= endDate; d++) {
        if (d <= 31) console.log(d);
    }
*/

cells = "";

    for(x = day; x > 0; x--){
        cells += "<div class='prev_date'>" + (prevDate - x + 1) + "</div>";
    }

//this for loop connects with our div class "'prev_date" it starts out by saying our previous date, which is the last day of the last month=30. Then it says - x = the days that is represented from last month. It then plus with 1 so we get 29, and the loop repeats.

// this for loop is for all the days of the relevant month. We again use a for loop, ad break out of the loop when i is less than our equal to the last day of the month

    for (i = 1; i <= endDate; i++){
        if(i == today.getDate() && dt.getMonth() == today.getMonth()){
            //var newDate = "day" + i;

            cells += "<div class='day' id ='" + i + "'  value ='" + i + "' onclick='dateAndBook()'>" + i  + "</div>";

            // cells += "<div class='day'  value ='" + i + "' onclick='dateAndBook()'>" + i  + "</div>";

        } else{

            cells += "<div class='day' id ='" + i + "' value ='" + i + "' onclick='dateAndBook()'>" + i + "</div>";

            // cells += "<div class='day' value ='" + i + "' onclick='dateAndBook()'>" + i + "</div>";

// if the date is not equal to today's date, we use the conditional else statement, until we hit todays date. Then the if statement will be used. The break happens at the endDate

        }
    }

// id skal være unikke derfor bruges class tidligere blev id brugt

// here we use innerHTML to print the cells we have declared above, in the user inteface.
    document.getElementsByClassName("days")[0].innerHTML = cells;
}

// this is the function that executes when the onclick prev or next is clicked on. We either multiply or substract one month COMMENT PARA!!!!!
function moveDate(para) {
    if (para == 'prev') {
        dt.setMonth(dt.getMonth() - 1);
        renderDate();
    } else {
        (para == 'next')
        dt.setMonth(dt.getMonth() + 1);
    }
    renderDate();
    // we use the renderDate function in here, because the moveDate function needs to have this reference because the other attributed from the calendar is declared inside this function. And eventhough the tuborg klamme had continued, we have not declared an onclick function in the prevDate and nextDate object constructor.
}

//https://www.youtube.com/watch?v=BiOXf9HHGUA
// this function is used to remove the options = "teachers" that is not relevant, when you have clicked on one of the course options. And is used in the function under it.
function removeAll(s2) {
    for(var i = s2.options.length - 1; i >= 0; i--){
        // the for loop goes will because of the s2.options.length always be 2 because, there always will be two teachers to each course.
        s2.remove(i);
    }
}

//Dynamic selector
function insertOptions(s1,s2){
    var s1 = document.getElementById('s1');
    var s2 = document.getElementById('s2');

    if (s1.options[s1.selectedIndex].value == "Org"){
        var opt1 = document.createElement('option');
        var opt2 = document.createElement('option');

        opt1.value = "Ali";
        opt2.value = "Tina";
        opt1.innerHTML = "Ali";
        opt2.innerHTML = "Tina";
        removeAll(s2);
        // we here use the function declared above, so we are sure that the only thing s2 contains is the two options we have just added.
        s2.options.add(opt1);
        s2.options.add(opt2);
        localStorage.setItem('s1', s1.value);
        //localStorage.setItem('s2', s2.value);
        // we here use localstorage to store our options. The only problem is that the default is the first teacher. Because it adds the first value displayed in options of s2

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
// here we just use conditional statements for all the other courses an HA (it) student has.

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
    }*/
}

// this function is executed by an onclick event. When clicked on a date, the panel is shown. This is possible by chancing the default value of the panel in css to 'none'

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

function executeCalendar(){
    // this functions is used in or checkbox, where time is selected.
    var checkbox = document.getElementsByClassName('time1');
    //we declare a variable named 'len' show we can use all the different inputs in our select form.
    var len = checkbox.length;
    var rating = "";

    // this rating does not have anything inside its cituationstegn this variable depends on which input button that is clicked on.

//var i = 0;
// we create a for loop that counts up, and choose the checked input.
// the input is then stored in localStorage.
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
// here we just use conditional statements for all the other courses an HA (it) student has.

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
        }
    }

    s4();
    saveBooking();

}

function dateAndBook() {
    // (document.getElementById("hello").textContent)

// mikkel
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

// Constructor for a booking, we're using to make our bookings objectorientated and lets us store our information in an array.
class Booking{
    constructor(course, teacher, comment, day, hour, id){
        this.course = course;
        this.teacher = teacher;
        this.comment = comment;
        this.day = day;
        this.hour = hour;
        this.id = id;
    }
}

// Creating an empty array if we're restarting without a LocalStorage array
var bookings = [];

// Parses the array from LocalStorage down
//var bookings = JSON.parse(localStorage.getItem("Bookings"));

// var newBooking = new Booking(localStorage.getItem("s1"),localStorage.getItem("s2"), "test", localStorage.getItem("dateOfBooking"), localStorage.getItem("rating"));

//Function to get the items from LocalStorage and stores them in the array
function saveBooking() {
    var newestBooking = new Booking(localStorage.getItem("s1"), localStorage.getItem("s2"), "test", localStorage.getItem("dateOfBooking"), localStorage.getItem("rating"), i);
    bookings.push(newestBooking);
    console.log(bookings);

    // Deletes the keys "s1", "s2", "dateOfBooking" and "rating" from LocalStorage
    localStorage.removeItem("s1");
    localStorage.removeItem("s2");
    localStorage.removeItem("dateOfBooking");
    localStorage.removeItem("rating");

    //Stores the array in LocalStorage with the key "Booking"
    localStorage.setItem("Bookings", JSON.stringify(bookings));
}

document.getElementById("submitBtn").addEventListener("click", executeCalendar);
