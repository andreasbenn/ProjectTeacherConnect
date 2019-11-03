class Topic{
    constructor(topic, popCounter, id){
        this.topic = topic;
        this.popCounter = popCounter;
        this.id =id;
    }
}
var enteredTopic = document.getElementById("Topic");
// The empty array, that the users will get stored into


// Variable to get the id_generator function to work
var id_generator = 5;
// Function that creates an ID
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
This will only happen the 1st time, the webpage is used
 */
function checkLocalStorage (){

    if (localStorage.getItem("allTopics") == null){
        localStorage.setItem("allTopics", JSON.stringify(hardTopics));
    }

}
checkLocalStorage();
//allTopicsLS is here set to the topics in local storage
var allTopicsLS = JSON.parse(localStorage.getItem("allTopics"));
/*function that sets the first 5 index to the button, and also makes sure that
the topic in the index is written in the topic
 */
function displayValue() {
    var topic1Button = document.getElementById("topic1");
    var topic2Button = document.getElementById("topic2");
    var topic3Button = document.getElementById("topic3");
    var topic4Button = document.getElementById("topic4");
    var topic5Button = document.getElementById("topic5");
    document.getElementById("topic1").value = allTopicsLS[0].topic;
    document.getElementById("topic2").value = allTopicsLS[1].topic;
    document.getElementById("topic3").value = allTopicsLS[2].topic;
    document.getElementById("topic4").value = allTopicsLS[3].topic;
    document.getElementById("topic5").value = allTopicsLS[4].topic;
    topic1Button.onclick = function () {
        document.getElementById("Topic").value = allTopicsLS[0].topic;
    };
    topic2Button.onclick = function () {
        document.getElementById("Topic").value = allTopicsLS[1].topic;
    };
    topic3Button.onclick = function () {
        document.getElementById("Topic").value = allTopicsLS[2].topic;
    };
    topic4Button.onclick = function () {
        document.getElementById("Topic").value = allTopicsLS[3].topic;
    };
    topic5Button.onclick = function () {
        document.getElementById("Topic").value = allTopicsLS[4].topic;
    };

}
displayValue();
/*console.log(allTopics);
console.log(allTopics.length);*/
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


function sortTopics () {
    allTopicsLS.sort(function(a,b) {return b.popCounter - a.popCounter});
    localStorage.setItem("allTopics", JSON.stringify(allTopicsLS));
   JSON.parse(localStorage.getItem("allTopics"));
}



var submitButton = document.getElementById("submitBtn");
submitButton.onclick = function () {
    checkTopic();
    sortTopics();
        localStorage.setItem("allTopics", JSON.stringify(allTopicsLS));
localStorage.setItem("Topic", enteredTopic.value);
        console.log(JSON.parse(localStorage.getItem("allTopics")));
        //Sorterer arrayet efter popularitet.
  /*  allTopics.sort(function(a,b) {return b.popCounter - a.popCounter});
    console.log(allTopics);*/

    };

