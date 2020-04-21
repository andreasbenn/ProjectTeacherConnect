import * as courses from './modules/courses.mjs';
import * as users from './modules/users.mjs';
import * as teachers from './modules/teachers.mjs';
import * as topics from './modules/topics.mjs';
import Booking from "./classes/bookingClass.js";

var currentWebToken = JSON.parse(localStorage.getItem('token'));

// https://stackoverflow.com/questions/16805306/jquery-return-ajax-result-into-outside-variable/16805366
var currentStudent = function() {
    var tempStudent = null;
    $.ajax({
        url: "http://localhost:3000/user/getUserData",
        method: 'POST',
        datatype: "json",
        async: false,
        data: ({currentWebToken}),
        success: function (response) {
            tempStudent = users.formatUser(response)
        },
    });
    return tempStudent
}();
console.log(currentStudent)

var newBooking = new Booking();
//Denne linje skal tilpasses til det som Oliver laver
newBooking.studentID = currentStudent.StudentID;

var currentProgram = currentStudent.program;
console.log(currentProgram);
var courseTable = "";
var selectedCourse = "";
var selectedTeacher = "";
var teacherTable = "";
var topicTable = "";
var enteredTopic = document.getElementById("Topic");
var enteredDate = "";
var enteredTime = "";


$.ajax({
    url: "http://localhost:3000/course/getCourses",
    method: 'POST',
    datatype: "json",
    data: ({programID : currentProgram}),
    success: function (response) {
        console.log(response);
        var courseArray = response.course;
        courses.formatCourses(courseArray);
        console.log(courseArray);
        courseTable += "<select id = 't1'>";
        courseTable += "<option value=\"\" disabled selected>Select course</option>";
        for (var i=0; i < courseArray.length; i++){
            courseTable += "<option class='courses' value ='" +
                courseArray[i].courseValue+"' id ='" + "course" +
                courseArray[i]._id + "'>" +
                courseArray[i].courseName + "</option>";

        }
        courseTable += "</select>";
        document.getElementsByClassName("optionCourses")[0].innerHTML = courseTable;
    }});

$("#t1").change( function () {
    teacherTable = "";
    selectedCourse = $("#t1").val();
    newBooking.course = selectedCourse;
    console.log(newBooking);
    $.ajax({
        url: "http://localhost:3000/course/selectedCourse",
        method: 'POST',
        datatype: "json",
        data: ({selectedCourse: selectedCourse}),
        success: function (response) {
            console.log(response);
            var teacherArray = response.teacher;
            teachers.formatTeachers(teacherArray);
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
$("#t2").change( function () {
    teacherTable = "";
    topicTable = "";
    selectedTeacher = $("#t2").val();
    newBooking.teacher = selectedTeacher;
    console.log(newBooking);
    $.ajax({
        url: "http://localhost:3000/topic",
        method: 'POST',
        datatype: "json",
        data: ({selectedCourse: selectedCourse}),
        success: function (response) {
            console.log(response);
            var topicArray = response.topic;
            topics.formatTopics(topicArray);
            console.log(topicArray);
            for (var i=0; i < topicArray.length; i++){
                var id= i+1;
                console.log("hej");
                topicTable += "<input type='button' class='topics' value ='" + topicArray[i].topicName+"' id ='topic" + id + "'/></input>";
            }
            document.getElementsByClassName("buttonTopics")[0].innerHTML = topicTable;

            var topic1Button = document.getElementById("topic1");
            var topic2Button = document.getElementById("topic2");
            var topic3Button = document.getElementById("topic3");
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

$("#submitBtn").click((e) => {
    e.preventDefault();
    newBooking.topic = enteredTopic.value;
    console.log(currentStudent.StudentID)
    $.ajax({
        url: "http://localhost:3000/user/getUserDate",
        method: 'POST',
        data: ({studentId: currentStudent.StudentID}),
        success: function (response) {
            console.log(response);
            enteredDate = response.dateOfBooking;
            enteredTime = response.timeOfBooking;
        }
    })
    setTimeout(
        function () {
            newBooking.date = enteredDate;
            newBooking.time = enteredTime
            console.log(newBooking);
            var booking = JSON.stringify(newBooking)
            $.ajax({
                url: "http://localhost:3000/booking/newBooking",
                method: 'POST',
                datatype: "json",
                data: ({booking}),
                success: function (response) {
                    console.log(response);

                }

            })
            alert("Tak for bookingen- du kan se alle dine gemte bookings inde under Mypage")
            window.location.href = 'myPage.html';
        }, 500
    );


});
//course: newBooking.course, teacher: newBooking.teacher, topic: newBooking.topic, date: newBooking.date, studentID: newBooking.studentID