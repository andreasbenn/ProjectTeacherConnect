import * as courses from "./modules/courses.mjs";
import * as users from "./modules/users.mjs";
import * as teachers from "./modules/teachers.mjs";
import * as topics from "./modules/topics.mjs";
import Booking from "./classes/bookingClass.js";

// Creating new variable to fill it's properties throughout the booking process.
var newBooking = new Booking();

// Creating needed variables for later use.
var courseTable = "";
var selectedCourse = "";
var teacherTable = "";
var selectedTeacher = "";
var topicTable = "";
var enteredTopic = document.getElementById("Topic");
var enteredDate = "";
var enteredTime = "";

// This functions gets all the courses the current logged in user has, which then will create the HTML drop down menu with these courses.
function getCourses() {
    // An encoded token that has the ID of the current logged in user.
    var currentWebToken = JSON.parse(localStorage.getItem('token'))

    $.ajax({
        url: "http://localhost:3000/course/getCourses",
        method: "POST",
        datatype: "json",
        data: ({student: currentWebToken}),
        success: function (response) {
            console.log(response);

            var courseArray = response.course;

            // This takes the response(array of courses) and makes it into instances of class Course.
            courses.formatCourses(courseArray);
            console.log(courseArray);

            // Additional assignment to create HTML from JavaScript.
            courseTable += "<select id = 't1'>";
            courseTable += "<option value=\"\" disabled selected>Select course</option>";

            // This for loops creates each "[]" of the dropdown menu.
            for (var i = 0; i < courseArray.length; i++) {
                courseTable += "<option class='courses' value ='" +
                    courseArray[i].courseValue + "' id ='" + "course" +
                    courseArray[i]._id + "'>" +
                    courseArray[i].courseName + "</option>";

            }
            courseTable += "</select>";

            // Inserts the above "HTML" into the site with DOM.
            document.getElementsByClassName("optionCourses")[0].innerHTML = courseTable;
        }
    });
}
getCourses();

// The following function is an eventlistener on "#t1", which is the dropdown menu that contains courses.
// So when you click on a course, the following function will execute.
$("#t1").change( function () {
    teacherTable = "";
    // Gets the value of the selected course(from drop down).
    selectedCourse = $("#t1").val();
    // Adds the value to the booking.
    newBooking.course = selectedCourse;
    console.log(newBooking);

    // jQuery AJAX call that sends the selected course to API, so we can get it's teachers from the database.
    $.ajax({
        url: "http://localhost:3000/course/selectedCourse",
        method: "POST",
        datatype: "json",
        data: ({selectedCourse: selectedCourse}),
        success: function (response) {
            console.log(response);

            var teacherArray = response.teacher;
            // This takes the response(array of teachers) and makes it into instances of class Teacher.
            teachers.formatTeachers(teacherArray);

            // Additional assignment to create dropdown menu for teachers for the selected course.
            teacherTable += "<select id = 't2'>";
            teacherTable += "<option value=\"\" disabled selected>Select teacher</option>";
            for (var i=0; i < teacherArray.length; i++){
                teacherTable += "<option class='teachers' value ='" +
                    teacherArray[i].fullName+"' id ='" + "course" +
                    teacherArray[i]._id + "'>" +
                    teacherArray[i].fullName + "</option>";
            }
            teacherTable += "</select>";
            document.getElementsByClassName("optionTeachers")[0].innerHTML = teacherTable;
        }

    });
});

// The following function is an eventlistener on "#t2", which is the dropdown menu that contains teachers.
// So when you click on a teacher, the following function will execute.
$("#t2").change( function () {
    teacherTable = "";
    topicTable = "";

    // Gets the value of the selected teacher(from drop down).
    selectedTeacher = $("#t2").val();

    newBooking.teacher = selectedTeacher;

    // After the user has selected a teacher, we need the topics for the course.
    // This jQuery AJAX call will send the selected course, and find all topics for that course so we can display the 3 most popular ones.
    $.ajax({
        url: "http://localhost:3000/topic",
        method: "POST",
        datatype: "json",
        data: ({selectedCourse: selectedCourse}),
        success: function (response) {
            console.log(response);

            var topicArray = response.topic;

            // This takes the response(array of topics) and makes it into instances of class Topic.
            topics.formatTopics(topicArray);

            // For loop with additional assignment to elements for the 3 most popular topics in the selected course.
            for (var i=0; i < topicArray.length; i++){
                var id= i+1;

                topicTable += "<input type='button' class='topics' value ='" + topicArray[i].topicName+"' id ='topic" + id + "'/></input>";
            }
            // Puts the HTML we created above onto the site using DOM.
            document.getElementsByClassName("buttonTopics")[0].innerHTML = topicTable;

            // Adds buttons to each of the 3 most popular topics.
            var topic1Button = document.getElementById("topic1");
            var topic2Button = document.getElementById("topic2");
            var topic3Button = document.getElementById("topic3");

            // On click function so when you click on the topic it will take that value and put it into the textinput box.
            topic1Button.onclick = function () {
                enteredTopic.value = topicArray[0].topicName;
            };
            topic2Button.onclick = function () {
                enteredTopic.value = topicArray[1].topicName;
            };
            topic3Button.onclick = function () {
                enteredTopic.value = topicArray[2].topicName;
            };


        }
    })
});

// Submit button that takes all the parameters for the booking and saves it in a single object.
$("#submitBtn").click((e) => {
    // Used so the site won't instantly refresh.
    e.preventDefault();

    newBooking.topic = enteredTopic.value;

    // This function is an async function, since it contains 2 AJAX calls, where the 2nd ones 'data', is dependent of the first calls' success function.
    async function submitBooking() {
        var currentWebToken = JSON.parse(localStorage.getItem("token"));

        // AJAX call that gets the chosen date and time for the booking. This is stored in the database as the information could only be retrieved from actualCalendar.js.
        await $.ajax({
            url: "http://localhost:3000/user/getUserDate",
            method: "POST",
            data: ({student: currentWebToken}),
            success: function (response) {
                console.log(response);
                enteredDate = response.dateOfBooking;
                enteredTime = response.timeOfBooking;
            }
        })

        newBooking.date = enteredDate;
        newBooking.time = enteredTime;
        console.log(newBooking);

        // Stringifys the entire booking object (excluded from currents users studentID).
        var booking = JSON.stringify(newBooking);

        // AJAX call that sends the booking object to the backend, so it can be stored in the database.
        $.ajax({
            url: "http://localhost:3000/booking/newBooking",
            method: "POST",
            datatype: "json",
            data: ({booking: booking, student: currentWebToken}),
            success: function (response) {
                console.log(response);
            }
        })
        alert("Tak for bookingen - du kan se alle dine gemte bookings under My page");

        // Redirects the user to myPage after booking is successful. Here the user can see his/her bookings.
        window.location.href = "myPage.html";
        }
        submitBooking();
});
