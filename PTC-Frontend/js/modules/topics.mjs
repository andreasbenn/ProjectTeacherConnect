// mjs-file is the standard file to use, when implementing modules in javascript from Node

import Topic from "../classes/topicClass.js";

// This function goes through the inputted array, and changes all the index's to an instance of the class Topic.(frontend class)
export function formatTopics(topics){
    let allTopics = [];

    for(let i=0; i< topics.length; i++){

        var topicObject = new Topic();

        // Extend merges 2 objects into the first defined, so in this case topics[i] gets merged into topicObject
        $.extend(topicObject, topics[i]);
        allTopics.push(topicObject)
    }
    return allTopics;
}