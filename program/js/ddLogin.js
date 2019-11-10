var studentList = [];

class Student{
    constructor(fullName, phoneNumber, email, address, studentID, password, program ){
        this.fullName = fullName;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.address = address;
        this.studentID = studentID;
        this.password = password;
        this.program = program;
    }
}

// -------------- //

function studentStorage (){
    if (localStorage.getItem('allStudents') == null) {
        var student1 = new Student(
            "Søren Poulsen",
            "27240520",
            "sopo19ad@student.cbs.dk",
            "Syrefabriksvej 24, 1411 København K",
            "1997",
            "1234",
            "HA(it)");

        var student2 = new Student(
            "Oliver Michelsen",
            "12345678",
            "olmi19ab@student.cbs.dk",
            "Howitzvej 61, 2000 Frederiksberg",
            "2222222222",
            "Oliver",
            "HA(fil)");

        var student3 = new Student(
            "Andreas Bennecke",
            "27593610",
            "anbe17aj@student.cbs.dk",
            "Howitzvej 60, 2000 Frederiksberg",
            "1111111111",
            "1234",
            "HA(it)");

        var student4 = new Student(
            'Jeppe Reuther',
            '88888888',
            'jere19ac@student.cbs.dk',
            'howitzvej 90, 2000 Frederiksberg',
            '1234567890',
            '1234',
            "HA(it)");

        studentList.push(student1,student2, student3, student4);
// here I'm pushing my students data to my login function sp that we can asure that only valid users can login to our site
        //  localStorage.setItem("allStudents", JSON.stringify(studentList));

    } else {
        studentList = JSON.parse(localStorage.getItem("allStudents"));
    }
}

studentStorage();
localStorage.setItem("allStudents", JSON.stringify(studentList));
