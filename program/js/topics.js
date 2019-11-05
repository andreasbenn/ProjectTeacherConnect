class Topic{
    constructor(topic, popCounter, id){
        this.topic = topic;
        this.popCounter = popCounter;
        this.id =id;
    }
}
// variable refering to the text-field
var enteredTopic = document.getElementById("Topic");



// Variable to get the id_generator function to work. It starts at 5, because we already hardcoded 5 topics
var id_generator = 5;
// Function that creates a new id everytime it runs.
function id_gen () {
    id_generator ++;
    return id_generator;
}
// Created 5 preset topics as variables
var topic1 = new Topic(
    "Maksimeringsprincippet",
    0,
    1
);
var topic2 = new Topic(
    "Elasticitet",
    0,
    2,
);

var topic3 = new Topic(
    "Isokvanter og MRTS",
    0,
    3,
);
var topic4 = new Topic(
    "MR=MC",
    0,
    4,
    );
var topic5 = new Topic(
    "Fuldkommen konkurrence",
    0,
        5,
);
//Puts the 5 preset topics into the hardcoded Topic.
var hardTopics = [topic1,topic2,topic3,topic4,topic5];


/*This function checks if allTopics is in local Storage.
If it isn't in local storage it sets all Topics to the hardTopics variable.
This will only happen the 1st time the webpage is used. Next time, the topics
 */
function checkLocalStorage (){

    if (localStorage.getItem("allTopics") == null){
        localStorage.setItem("allTopics", JSON.stringify(hardTopics));
    }

}
checkLocalStorage();
//allTopicsLS is here set to the topics in local storage. Here it also gathers the updated popCounter from localstorage.
var allTopicsLS = JSON.parse(localStorage.getItem("allTopics"));

/*DisplayValue is a function that sets the first 5 index in allTopicsLS to the 5 different buttons, and also makes sure that
the topic in the index is written in the topic
 */
function displayValue() {
    //The 5 variables referring to the buttons
    var topic1Button = document.getElementById("topic1");
    var topic2Button = document.getElementById("topic2");
    var topic3Button = document.getElementById("topic3");
    var topic4Button = document.getElementById("topic4");
    var topic5Button = document.getElementById("topic5");
    //Changes the value of the buttons to the first 5 index's in the allTopicsLS array
    topic1Button.value = allTopicsLS[0].topic;
    topic2Button.value = allTopicsLS[1].topic;
    topic3Button.value = allTopicsLS[2].topic;
    topic4Button.value = allTopicsLS[3].topic;
    topic5Button.value = allTopicsLS[4].topic;
    //Onclick funtion that changes the text-field to the button
    topic1Button.onclick = function () {
        enteredTopic.value = allTopicsLS[0].topic;
    };
    topic2Button.onclick = function () {
        enteredTopic.value = allTopicsLS[1].topic;
    };
    topic3Button.onclick = function () {
        enteredTopic.value = allTopicsLS[2].topic;
    };
    topic4Button.onclick = function () {
        enteredTopic.value = allTopicsLS[3].topic;
    };
    topic5Button.onclick = function () {
        enteredTopic.value = allTopicsLS[4].topic;
    };

}
displayValue();

/*Function that checks if the topic already exists or not.
the for statement makes sure that it runs through all the topics in the array.
And if the topic written in the text-field is equal to one of the topics in the index, it increases the popularity with 1, and breaks the function.
 */
function checkTopic () {
    var boolean = false;
    for (i = 0; i < allTopicsLS.length; i++) {
        console.log("Antal gange loopet kører:" + i);
        if (enteredTopic.value == allTopicsLS[i].topic) {
            alert("Du har valgt en af de topics der eksisterer");
            allTopicsLS[i].popCounter++;
            boolean = true;
            break;
        }
    }
    /*
    If none of the topics in the index is equal to the entered topic, it instead creates a new topic, and pushes it to the allTopicsLS array.
    The popularity is set to 1, and the id generator function runs so that new topic gets a unique id.
     */
        if (boolean === false) {
            alert("Du har valgt en af de topics der ikke eksisterer");
            id_gen();
            var topicx = new Topic(
                document.getElementById("Topic").value,
                1);

            topicx.id = id_generator;
            console.log(topicx);
            allTopicsLS.push(topicx);
        }
    }

/*
This function sorts the allTopicsLS index's so the topic with the highest popularity is on index 0  (and so on).
It takes two values at a time (a and b) the function calculates b.popcounter- a.popcounter.
If the result is negative b is sorted before a, and if the result is positive, a is sorted before b.
It then pushes the sorted array into localstorage with JSON.stringify, and then parses it down again.
 */
function sortTopics () {
    allTopicsLS.sort(function(a,b) {return b.popCounter - a.popCounter});
    localStorage.setItem("allTopics", JSON.stringify(allTopicsLS));
   JSON.parse(localStorage.getItem("allTopics"));
}


/*
This function executes the checkTopic function and the sort Topics function

 */
function executeTopics () {
    checkTopic();
    sortTopics();
       // localStorage.setItem("allTopics", JSON.stringify(allTopicsLS));
    //   console.log(JSON.parse(localStorage.getItem("allTopics")));
localStorage.setItem("Topic", enteredTopic.value);

    };

document.getElementById("submitBtn").addEventListener("click", executeTopics);

