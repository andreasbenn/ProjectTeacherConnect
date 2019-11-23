var programList = [];
var courseList = [];
var topicList = [];
var teacherList = [];
var studentList = JSON.parse(localStorage.getItem("allStudents"));
var currentStudentArray = JSON.parse(localStorage.getItem("currentStudent"));
var currentStudent = currentStudentArray[0];

// -------------- //
// @author: Andreas Emanuel Bennecke
// @author: Oliver Langkjær Michelsen
// @author: Jeppe Hornshøj Reuther
// @author: Søren Poulsen

// Beneath we have made a class under which we have described the constructors that needs to be present in order to for fill the class.
// We then use the keyword "this" so that the value of this later on will become our object. We do that so we can use the object in later functions as keywords
// We do the exact same thing for all our classes beneath.
class Program {
    constructor(programID, programName, programCourses, students){
        this.programID = programID;
        this.programName = programName;
        this.programCourses = programCourses;
        this.students = students;
    };
}

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

class Topic{
    constructor(topic, popCounter, course, id){
        this.topic = topic;
        this.popCounter = popCounter;
        this.course = course;
        this.id =id;
    }
}

// -------------- //
// @author: Andreas Emanuel Bennecke
// @author: Oliver Langkjær Michelsen
// @author: Jeppe Hornshøj Reuther

class Teacher {
    constructor(teacherID, teacherName, email, course){
        this.teacherID = teacherID;
        this.teacherName = teacherName;
        this.email = email;
        this.course = course;

    }
}

// -------------- //
// @author: Andreas Emanuel Bennecke
// @author: Oliver Langkjær Michelsen
// @author: Jeppe Hornshøj Reuther

// Beneath we create a function that should store our variables "programs" which we have made via usage of our constructors in our Program class.
// We are using an if statement as we only wish to run the code if local storage is null (empty).
// If the keyword 'allPrograms' is not in local storage already then we push our programs to local storage.
// If it already exists then it should get the information provided by the keyword 'allPrograms' witch is depicted in our setStorage function
// When we describe some keywords as empty arrays we do so in order to make it object orientated so that we later on via various functions can fill the arrays
// with the data that we wish.
function programStorage () {
    if (localStorage.getItem('allPrograms') == null){
        programList.push (new Program(1, "HA(it)",[],[]), new Program(2,"HA(fil)",[],[]));
        /*localStorage.setItem("allPrograms",JSON.stringify(programList));*/
    } else {
        programList = JSON.parse(localStorage.getItem("allPrograms"));
    }
}

// -------------- //
// @author: Andreas Emanuel Bennecke
// @author: Oliver Langkjær Michelsen
// @author: Jeppe Hornshøj Reuther

// In the following storage functions (CourseStorage, topicStorage and teacherStorage) We use the exact same if statement as we use in our storeProgram function
// The only difference between the different storage functions are the classes that they are build upon and which data we wish to push.
function courseStorage () {
    if (localStorage.getItem("allCourses") == null){
        courseList.push(
        new Course(1, "Virksomheders beslutningssituationer", "Vos1", "HA(it)", [], [], []),
        new Course(2, "Programmering og udvikling af små systemer og databaser", "Pro", "HA(it)", [], [], [],),
        new Course(3, "Indføring i organisationers opbygning og funktion", "Ind", "HA(it)", [], [], [],),
        new Course(4, "Business Information Systems", "Bis", "HA(it)", [], [], [],),
        new Course(5, "Mikroøkonomi", "Mik", "HA(fil)", [], [], [],),
        new Course(6, "Organisationsteori", "Org", "HA(fil)", [], [], [],),
        new Course(7, "Økonomiens teori og idehistorie", "Øko", "HA(fil)", [], [], [],),
        new Course(8, "Filosofisk metode 1: Politisk og økonomisk filosofi", "Fil", "HA(fil)", [], [], [],));
        //localStorage.setItem("allCourses", JSON.stringify(courseList));
    }
    else {
        courseList = JSON.parse(localStorage.getItem("allCourses"));
    }
}

// -------------- //
// @author: Andreas Emanuel Bennecke
// @author: Oliver Langkjær Michelsen
// @author: Jeppe Hornshøj Reuther

// function is build upon same terms as depicted in line 64-69 in this file "dataForAllSites.js"
function topicStorage() {
    if(localStorage.getItem("allTopics")== null) {

        topicList.push(
            new Topic("Maksimeringsprincippet", 0, "Vos1", 1),
            new Topic("Elasticitet", 0, "Vos1", 2),
            new Topic("MR=MC", 0, "Vos1", 3,),
            new Topic("Classes", 0, "Pro", 4,),
            new Topic("Functions", 0, "Pro", 5,),
            new Topic("Debugging", 0, "Pro", 6,),
            new Topic("Formelle træk", 0, "Ind", 7,),
            new Topic("Uformelle træk", 0, "Ind", 8,),
            new Topic("Ledelse", 0, "Ind", 10,),
            new Topic("Hardware", 0, "Bis", 10,),
            new Topic("Network", 0, "Bis", 11,),
            new Topic("IS Strategy", 0, "Bis", 12,),
            new Topic("Mik Topic 1", 0, "Mik", 13,),
            new Topic("Mik Topic 2", 0, "Mik", 14,),
            new Topic("Mik Topic 3", 0, "Mik", 15,),
            new Topic("Org Topic 1", 0, "Org", 16,),
            new Topic("Org Topic 2", 0, "Org", 17,),
            new Topic("Org Topic 3", 0, "Org", 18,),
            new Topic("Øko Topic 1", 0, "Øko", 19,),
            new Topic("Øko Topic 2", 0, "Øko", 20,),
            new Topic("Øko Topic 3", 0, "Øko", 21,),
            new Topic("Fil Topic 1", 0, "Fil", 22,),
            new Topic("Fil Topic 2", 0, "Fil", 23,),
            new Topic("Fil Topic 3", 0, "Fil", 24,));
        // localStorage.setItem("allTopics",JSON.stringify(topicList));
    }
    else {
        topicList = JSON.parse(localStorage.getItem("allTopics"));
    }
}

// -------------- //
// @author: Andreas Emanuel Bennecke
// @author: Oliver Langkjær Michelsen
// @author: Jeppe Hornshøj Reuther

// function is build upon same terms as depicted in line 64-69 in this file "dataForAllSites.js"
function teacherStorage (){
    if(localStorage.getItem("allTeachers") == null) {

        teacherList.push(
            new Teacher(1, "Jan Andersen", "jas.om@cbs.dk", "Vos1"),
            new Teacher(2, "Henrik Thorn", "ht.digi@cbs.dk", "Pro"),
            new Teacher(3, "Nicolai Jacobsen", "nfj.digi@cbs.dk", "Pro"),
            new Teacher(4, "Tina Blegind Jensen", "tbj.digi@cbs.dk", "Ind"),
            new Teacher(5, "Ali Shah", "as.digi@cbs.dk", "Ind"),
            new Teacher(6, "Rob Gleasure", "rg.digi@cbs.dk", "Bis"),
            new Teacher(7, "Till Winkler", "tw.digi@cbs.dk", "Bis"),
            new Teacher(8, "Martin Jensen", "mj.fil@cbs.dk", "Mik"),
            new Teacher(9, "Sofie Frandsen", "sf.fil@cbs.dk", "Org"),
            new Teacher(10, "Jeppe Severinsen", "js.fil@cbs.dk", "Øko"),
            new Teacher(11, "Birgitte Hansen", "bh.fil@cbs.dk", "Fil"));
        //localStorage.setItem("allTeachers", JSON.stringify(teacherList));
    }
    else {
        teacherList = JSON.parse(localStorage.getItem("allTeachers"));
    }
}

// -------------- //
// @author: Jeppe Hornshøj Reuther

// Beneath we ensure that we run the functions above by creating a functions that runs all functions called "allStorage" Then we call "allStorage" to run the function
function allStorage() {
    programStorage();
    courseStorage();
    topicStorage();
    teacherStorage();
}
allStorage();

// -------------- //
// @author: Andreas Emanuel Bennecke
// @author: Oliver Langkjær Michelsen
// @author: Jeppe Hornshøj Reuther

// The functions we have created below serves the purpose of storing or variables under specific objects. fx. we want to ensure that the right topics
// are connected to the rightful courses. The same goes for students and teachers. We need to ensure that they are connected to the correct course and program.
// To make this possible we have created a for loop in a for loop. The first for loop defines 'i' to be equal 0. Then we say that 'i' must not be greater than
// courseList. and then we want 'i' to add on with 1 for every time the loop runs.
// Next we make a second for loop within the first but we here define 'j' to 0 and it can not be greater than programList.
// Then comes an if statement stating that if courseList[i].courseProgram (courseProgram is a constructor from our Course class) is equal to
// programList[j].programName (programName is a constructor from our Program Class) then we wish to push our courses under our programs so that we can se
// which courses belong to each program.
// The console.log at the end of each function is to ensure that we run the function.
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
// @author: Andreas Emanuel Bennecke
// @author: Oliver Langkjær Michelsen
// @author: Jeppe Hornshøj Reuther

// Here we do the same thing as above but with a little tweak. Here we have added that if 'i' and 'j' is equal to one another and allCourse is null (empty)
// then we push. The reason for this is to ensure that when we open our program we run all of the functions to store the data.
// Then when a user logs out of the program we still wish to store this data. If we didn't have the code it would run every time a user logs in, and would
// double in storage. This is especially necessary in order for our popcounter to work properly.
// The function below pushes studentList to the rightful courseList.
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
// @author: Andreas Emanuel Bennecke
// @author: Oliver Langkjær Michelsen
// @author: Jeppe Hornshøj Reuther

// The function below is build on the same principles as the functions above but this particular function pushes studentList to programList
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
// @author: Andreas Emanuel Bennecke
// @author: Oliver Langkjær Michelsen
// @author: Jeppe Hornshøj Reuther

// The function below is build on the same principles as the functions above but this particular function pushes topicList to courseList
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
// @author: Andreas Emanuel Bennecke
// @author: Oliver Langkjær Michelsen
// @author: Jeppe Hornshøj Reuther

// The function below is build on the same principles as the functions above but this particular function pushes teacherList to courseList
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
// @author: Andreas Emanuel Bennecke
// @author: Oliver Langkjær Michelsen
// @author: Jeppe Hornshøj Reuther

// Here we have made a function that sets the object connected to the written keyword and turns it into a string
// so that we can use the strings to push into our arrays
function setStorage () {
    localStorage.setItem("allPrograms", JSON.stringify(programList));
    localStorage.setItem("allCourses", JSON.stringify(courseList));
    localStorage.setItem("allTopics", JSON.stringify(topicList));
    localStorage.setItem("allTeachers", JSON.stringify(teacherList));

}

// Here we make an if statement stating that if 'objectOrientated' equals null then it should run the functions within the curly braces.
if(localStorage.getItem("objectOrientated")== null){
    programCourses();
    courseStudents();
    programStudents();
    courseTopics();
    courseTeachers();
    setStorage();
    localStorage.setItem("objectOrientated","true");
}

// Here we have made a for loop that first define 'i' to zero. Then 'i' must not be greater than programList.length
// and we want 'i' to add by 1 for each time the loop runs
// Then we have made an if statement stating thar if currenStudent.program is equal to programList[i].programName then we wish to set our object depicted by the
// keyword: "currentProgram" to strings inside our array, programList.
for (i = 0; i < programList.length; i++){
    if(currentStudent.program == programList[i].programName){
        localStorage.setItem("currentProgram",JSON.stringify(programList[i]))
    }
}
