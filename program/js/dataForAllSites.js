var programList = [];
var courseList = [];
var topicList = [];
var teacherList = [];
var studentList = JSON.parse(localStorage.getItem("allStudents"));
var currentStudentArray = JSON.parse(localStorage.getItem("currentStudent"));
var currentStudent = currentStudentArray[0];

// -------------- //

// above I have made a class under which I have described a "recipie" for what needs to be pressent in order to forfill the class. I'm currentley only "activating"
// email and password as that is what i need for my login function

// make new instances of Program for each program

class Program {
    constructor(programID, programName, programCourses, students){
        this.programID = programID;
        this.programName = programName;
        this.programCourses = programCourses;
        this.students = students;
    };
}

// -------------- //

class Course {
    constructor(courseID, courseName, courseValue, courseProgram, topics, teachers,  students){
        this.courseID = courseID;
        this.courseName = courseName;
        this.courseValue = courseValue;
        this.courseProgram = courseProgram;
        this.topics = topics;
        this.teachers = teachers;

        this.students = students;
    }
}

// -------------- //

class Topic{
    constructor(topic, popCounter, course, id){
        this.topic = topic;
        this.popCounter = popCounter;
        this.course = course;
        this.id =id;
    }
}

// -------------- //

class Teacher {
    constructor(teacherID, teacherName, email, course){
        this.teacherID = teacherID;
        this.teacherName = teacherName;
        this.email = email;
        this.course = course;

    }
}

// -------------- //

function programStorage () {
    if (localStorage.getItem('allPrograms') == null){
        var program1 = new Program(
            1,
            "HA(it)",
            [],
            [],

        );
        var program2 = new Program(
            2,
            "HA(fil)",
            [],
            [],
        );
        programList.push (program1, program2);
        //localStorage.setItem("allPrograms",JSON.stringify(programList));

    } else {
        programList = JSON.parse(localStorage.getItem("allPrograms"));
    }
}

// -------------- //

function courseStorage () {
    if (localStorage.getItem("allCourses") == null){
        var course1 = new Course(
            1,
            "Virksomheders beslutningssituationer",
            "Vos1",
            "HA(it)",
            [],
            [],
            [],
        );

        var course2 = new Course(
            2,
            "Programmering og udvikling af små systemer og databaser",
            "Pro",
            "HA(it)",
            [],
            [],
            [],
        );

        var course3 = new Course(
            3,
            "Indføring i organisationers opbygning og funktion",
            "Ind",
            "HA(it)",
            [],
            [],
            [],

        );

        var course4 = new Course(
            4,
            "Business Information Systems",
            "Bis",
            "HA(it)",
            [],
            [],
            [],

        );

        var course5 = new Course(
            5,
            "Mikroøkonomi",
            "Mik",
            "HA(fil)",
            [],
            [],
            [],
        );

        var course6 = new Course(
            6,
            "Organisationsteori",
            "Org",
            "HA(fil)",
            [],
            [],
            [],
        );

        var course7 = new Course(
            7,
            "Økonomiens teori og idehistorie",
            "Øko",
            "HA(fil)",
            [],
            [],
            [],
        );

        var course8 = new Course(
            8,
            "Filosofisk metode 1: Politisk og økonomisk filosofi",
            "Fil",
            "HA(fil)",
            [],
            [],
            [],
        );

        courseList.push(course1, course2, course3, course4, course5, course6, course7, course8);
        //localStorage.setItem("allCourses", JSON.stringify(courseList));
    }
    else {
        courseList = JSON.parse(localStorage.getItem("allCourses"));
    }
}

// -------------- //

function topicStorage() {
    if(localStorage.getItem("allTopics")== null) {
        var topic1 = new Topic(
            "Maksimeringsprincippet",
            0,
            "Vos1",
            1
        );

        var topic2 = new Topic(
            "Elasticitet",
            0,
            "Vos1",
            2
        );

        var topic3 = new Topic(
            "MR=MC",
            0,
            "Vos1",
            3,
        );

        var topic4 = new Topic(
            "Classes",
            0,
            "Pro",
            4,
        );

        var topic5 = new Topic(
            "Functions",
            0,
            "Pro",
            5,
        );

        var topic6 = new Topic(
            "Debugging",
            0,
            "Pro",
            6,
        );

        var topic7 = new Topic(
            "Formelle træk",
            0,
            "Ind",
            7,
        );

        var topic8 = new Topic(
            "Uformelle træk",
            0,
            "Ind",
            8,
        );

        var topic9 = new Topic(
            "Ledelse",
            0,
            "Ind",
            10,
        );

        var topic10 = new Topic(
            "Hardware",
            0,
            "Bis",
            10,
        );

        var topic11 = new Topic(
            "Network",
            0,
            "Bis",
            11,
        );

        var topic12 = new Topic(
            "IS Strategy",
            0,
            "Bis",
            12,
        );

        var topic13 = new Topic(
            "Mik Topic 1",
            0,
            "Mik",
            13,
        );

        var topic14 = new Topic(
            "Mik Topic 2",
            0,
            "Mik",
            14,
        );

        var topic15 = new Topic(
            "Mik Topic 3",
            0,
            "Mik",
            15,
        );

        var topic16 = new Topic(
            "Org Topic 1",
            0,
            "Org",
            16,
        );

        var topic17 = new Topic(
            "Org Topic 2",
            0,
            "Org",
            17,
        );

        var topic18 = new Topic(
            "Org Topic 3",
            0,
            "Org",
            18,
        );

        var topic19 = new Topic(
            "Øko Topic 1",
            0,
            "Øko",
            19,
        );

        var topic20 = new Topic(
            "Øko Topic 2",
            0,
            "Øko",
            20,
        );

        var topic21 = new Topic(
            "Øko Topic 3",
            0,
            "Øko",
            21,
        );

        var topic22 = new Topic(
            "Fil Topic 1",
            0,
            "Fil",
            22,
        );

        var topic23 = new Topic(
            "Fil Topic 2",
            0,
            "Fil",
            23,
        );

        var topic24 = new Topic(
            "Fil Topic 3",
            0,
            "Fil",
            24,);


        topicList.push(topic1,topic2,topic3,topic4,topic5,topic6,topic7,topic8,topic9,topic10, topic11, topic12, topic13, topic14, topic15, topic16, topic17, topic18, topic19, topic20, topic21, topic22, topic23, topic24);
        // localStorage.setItem("allTopics",JSON.stringify(topicList));
    }
    else {
        topicList = JSON.parse(localStorage.getItem("allTopics"));
    }
}

// -------------- //

function teacherStorage (){
    if(localStorage.getItem("allTeachers") == null) {
        var teacher1 = new Teacher(
            1,
            "Jan Andersen",
            "jas.om@cbs.dk",
            "Vos1"
        );

        var teacher2 = new Teacher(
            2,
            "Henrik Thorn",
            "ht.digi@cbs.dk",
            "Pro"
        );

        var teacher3 = new Teacher(
            3,
            "Nicolai Jacobsen",
            "nfj.digi@cbs.dk",
            "Pro"
        );

        var teacher4 = new Teacher(
            4,
            "Tina Blegind Jensen",
            "tbj.digi@cbs.dk",
            "Ind"
        );

        var teacher5 = new Teacher(
            5,
            "Ali Shah",
            "as.digi@cbs.dk",
            "Ind"

        );

        var teacher6 = new Teacher(
            6,
            "Rob Gleasure",
            "rg.digi@cbs.dk",
            "Bis"
        );

        var teacher7 = new Teacher(
            7,
            "Till Winkler",
            "tw.digi@cbs.dk",
            "Bis"
        );

        var teacher8 = new Teacher(
            8,
            "Martin Jensen",
            "mj.fil@cbs.dk",
            "Mik"
        );

        var teacher9 = new Teacher(
            9,
            "Sofie Frandsen",
            "sf.fil@cbs.dk",
            "Org"
        );

        var teacher10 = new Teacher(
            10,
            "Jeppe Severinsen",
            "js.fil@cbs.dk",
            "Øko"
        );

        var teacher11 = new Teacher(
            11,
            "Birgitte Hansen",
            "bh.fil@cbs.dk",
            "Fil"
        );
        teacherList.push(teacher1,teacher2,teacher3,teacher4,teacher5,teacher6,teacher7,teacher8,teacher9,
            teacher10,teacher11);
        //localStorage.setItem("allTeachers", JSON.stringify(teacherList));
    }
    else {
        teacherList = JSON.parse(localStorage.getItem("allTeachers"));
    }
}

// -------------- //

function allStorage() {
    programStorage();
    courseStorage();
    topicStorage();
    teacherStorage();

}
allStorage();

// -------------- //

function programCourses () {
    for (i= 0; i < courseList.length; i++){
        for(j= 0; j <programList.length; j++){
            if(courseList[i].courseProgram == programList[j].programName){
                programList[j].programCourses.push(courseList[i]);
            }
        }
    }
    console.log(programList);
}

// -------------- //

function courseStudents (){
    for (i= 0; i < studentList.length; i++){
        for(j= 0; j <courseList.length; j++){
            if(studentList[i].program == courseList[j].courseProgram && localStorage.getItem("allCourses") == null){
                courseList[j].students.push(studentList[i])
            }
        }
    }
    console.log(courseList);
}

// -------------- //

function programStudents() {
    for (i= 0; i < studentList.length; i++){
        for(j= 0; j <programList.length; j++) {
            if (studentList[i].program == programList[j].programName) {
                programList[j].students.push(studentList[i]);
            }

        }
    }

}

// -------------- //

function courseTopics () {
    for (i = 0; i < topicList.length; i++) {
        for (j = 0; j < courseList.length; j++) {
            if(topicList[i].course == courseList[j].courseValue && localStorage.getItem("allCourses") == null) {
                courseList[j].topics.push(topicList[i]);
            }
        }
    }
    console.log(topicList);
}

// -------------- //

function courseTeachers() {
    for (i = 0; i < teacherList.length; i++) {
        for (j = 0; j < courseList.length; j++) {
            if (teacherList[i].course == courseList[j].courseValue && localStorage.getItem("allCourses") == null){
                courseList[j].teachers.push(teacherList[i]);
            }
        }
    }
    console.log(teacherList);
}

// -------------- //

function setStorage () {
    localStorage.setItem("allPrograms", JSON.stringify(programList));
    localStorage.setItem("allCourses", JSON.stringify(courseList));
    localStorage.setItem("allTopics", JSON.stringify(topicList));
    localStorage.setItem("allTeachers", JSON.stringify(teacherList));

}
if(localStorage.getItem("objectOrientated")== null){
    programCourses();
    courseStudents();
    programStudents();
    courseTopics();
    courseTeachers();
    setStorage();
    localStorage.setItem("objectOrientated","true");
}

for (i = 0; i < programList.length; i++){
    if(currentStudent.program == programList[i].programName){
        localStorage.setItem("currentProgram",JSON.stringify(programList[i]))
    }
}



