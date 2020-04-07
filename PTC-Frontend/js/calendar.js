import * as courses from './modules/courses.mjs';
import * as users from './modules/users.mjs';
var currentStudent = users.formatUser(JSON.parse(localStorage.getItem("user")));

var currentProgram = currentStudent.program;
console.log(currentProgram);
$.ajax({
    url: "http://localhost:3000/course/getCourses",
    method: 'POST',
    datatype: "json",
    data: ({programID : currentProgram}),
    success: function (response) {
        console.log(response);
        var course = response.course;
        courses.formatCourses(course);
    }});
