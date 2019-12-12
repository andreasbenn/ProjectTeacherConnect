// variable refering to the text-field
var enteredTopic = document.getElementById("Topic");
var courseField = document.getElementById("s1");
var programList = JSON.parse(localStorage.getItem("allPrograms"));
var courseList = JSON.parse(localStorage.getItem("allCourses"));
var topicList = JSON.parse(localStorage.getItem("allTopics"));
var teacherList = JSON.parse(localStorage.getItem("allTeachers"));
var studentList = JSON.parse(localStorage.getItem("allStudents"));
var selectedCourse = localStorage.getItem("selectedCourse");

// variable finding the selected course

// -------------- //
// @author: Jeppe Hornshøj Reuther

// Variable to get the id_generator function to work. It starts at 5, because we already hardcoded 5 topics
var id_generator = 24;
// Function that creates a new id everytime it runs.
function id_gen () {
    id_generator ++;
    return id_generator;
}

// This function checks if allTopics is in local Storage.
// If it isn't in local storage it sets all Topics to the hardTopics variable.
// This will only happen the 1st time the webpage is used. Next time, the topics

// allTopicsLS is here set to the topics in local storage. Here it also gathers the updated popCounter from localstorage.

// -------------- //
// @author: Jeppe Hornshøj Reuther

var currentCourseTopics = [];

 function findCurrentTopics() {
     console.log(courseList.length);
     for(i=0; i<courseList.length; i++) {
         if( currentCourseTopics == null && selectedCourse == courseList[i].courseValue){
             currentCourseTopics.push(courseList[i].topics);
         }
         else if( currentCourseTopics != null && selectedCourse == courseList[i].courseValue){
             currentCourseTopics = [];
             currentCourseTopics.push(courseList[i].topics);
 }
    }
    displayValue();
};

// DisplayValue is a function that sets the first 5 index in allTopicsLS to the 5 different buttons, and also makes sure that
// the topic in the index is written in the topic

// -------------- //
// @author: Jeppe Hornshøj Reuther

function displayValue() {
    //The 5 variables referring to the buttons
    var topic1Button = document.getElementById("topic1");
    var topic2Button = document.getElementById("topic2");
    var topic3Button = document.getElementById("topic3");
    //Changes the value of the buttons to the first 5 index's in the allTopicsLS array
    topic1Button.value = currentCourseTopics[0][0].topic;
    topic2Button.value = currentCourseTopics[0][1].topic;
    topic3Button.value = currentCourseTopics[0][2].topic;
    //Onclick funtion that changes the text-field to the button
    topic1Button.onclick = function () {
        enteredTopic.value = currentCourseTopics[0][0].topic;
    };
    topic2Button.onclick = function () {
        enteredTopic.value = currentCourseTopics[0][1].topic;
    };
    topic3Button.onclick = function () {
        enteredTopic.value = currentCourseTopics[0][2].topic;
    };
}

// -------------- //
// @author: Jeppe Hornshøj Reuther

// Function that checks if the topic already exists or not.
// the for statement makes sure that it runs through all the topics in the array.
// And if the topic written in the text-field is equal to one of the topics in the index,
// it increases the popularity with 1, and breaks the function.

function checkTopic () {
    var boolean = false;
    for (i= 0; i < currentCourseTopics[0].length; i++) {
        for (j = 0; j < courseList.length; j++) {
            for(h = 0; h < courseList[j].topics.length; h++) {
                console.log("The loop runs:" + i + " times");
                if (enteredTopic.value == currentCourseTopics[0][i].topic
                    && currentCourseTopics[0][i].id == courseList[j].topics[h].id) {
                    alert("You have chosen one of the topics that is already stored");
                    courseList[j].topics[h].popCounter++;

                   localStorage.setItem("allCourses",JSON.stringify(courseList));
                    boolean = true;

                    break;
                }
            }
        }
    }


    // If none of the topics in the index is equal to the entered topic, it instead creates a new topic, and pushes it to the allTopicsLS array.
    // The popularity is set to 1, and the id generator function runs so that new topic gets a unique id.

        if (boolean === false) {
            alert("You have chosen one of the topics that is not currently stored");
            id_gen();
            var topicx = new Topic(
                document.getElementById("Topic").value,
                1,
                    );
            topicx.course = selectedCourse;
            topicx.id = id_generator;
            console.log(topicx);
            for (i = 0; i<courseList.length; i++){
                if (courseList[i].courseValue == selectedCourse){
                    courseList[i].topics.push(topicx);
                }
            }

        }
    }

// -------------- //
// @author: Jeppe Hornshøj Reuther

// This function sorts the allTopicsLS index's so the topic with the highest popularity is on index 0  (and so on).
// It takes two values at a time (a and b) the function calculates b.popcounter- a.popcounter.
// If the result is negative b is sorted before a, and if the result is positive, a is sorted before b.
// It then pushes the sorted array into localstorage with JSON.stringify, and then parses it down again.
// https://stackoverflow.com/questions/1063007/how-to-sort-an-array-of-integers-correctly
// ("How to sort an array of integers correctly" 2009)

function sortTopics () {
    for (i = 0; i<courseList.length; i++){
    courseList[i].topics.sort(function(a,b) {return b.popCounter - a.popCounter});
    }
    localStorage.setItem("allCourses", JSON.stringify(courseList));
}

// -------------- //
// @author: Jeppe Hornshøj Reuther

// This function executes the checkTopic function and the sort Topics function

function executeTopics () {
    checkTopic();
   sortTopics();
    };

document.getElementById("submitBtn").addEventListener("click", executeTopics);

/*
function saveTopic () {
    var selectedTopic = document.getElementById("Topic").valueOf();
    localStorage.setItem("selectedTopic", selectedTopic);
}

document.getElementById("Topic").addEventListener("input", saveTopic); */
