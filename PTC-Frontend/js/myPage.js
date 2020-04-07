import * as users from './modules/users.mjs';
var currentStudent = users.formatUser(JSON.parse(localStorage.getItem("user")));
console.log(currentStudent);
document.getElementById("userFullName").innerHTML = currentStudent.fullName;
document.getElementById("userPhoneNumber").innerHTML = currentStudent.phoneNumber;
document.getElementById("userEmail").innerHTML = currentStudent.email;
document.getElementById("userAddress").innerHTML = currentStudent.address;
document.getElementById("userStudentID").innerHTML = currentStudent.StudentID;
document.getElementById("userProgram").innerHTML = currentStudent.program;