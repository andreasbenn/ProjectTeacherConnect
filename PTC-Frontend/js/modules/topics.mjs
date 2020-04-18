import Topic from "../classes/topicClass.js";

export function formatTopics(topics){
    let allTopics = [];
    for(let i=0; i< topics.length; i++){
        var topicObject = new Topic();
        $.extend(topicObject, topics[i]);
        allTopics.push(topicObject)
    }
    return allTopics;
}