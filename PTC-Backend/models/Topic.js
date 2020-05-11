const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Creates a new schema for the database, similar to a class in JS.
const TopicSchema = new Schema({
    topicName: String,
    course: String,
    popCounter: Number,
});

// Creates a variable that refers to the database. We do that to export it and import in index.js for Topic.js to execute.
const Topic = mongoose.model('Topic',TopicSchema);

module.exports = Topic;

// Function to fill the database with objects that are being used in the program.
async function fillDBTopic() {
    var allTopics = await Topic.find({});
    console.log(allTopics[0])
    if (allTopics[0] === undefined) {
        Topic.create({
                topicName: 'Priselasticitet',
                course: 'VØS',
                popCounter: 0,
            },
            (error, Topic) => {
                console.log(error, Topic)
            });

        Topic.create({
                topicName: 'MR=MC',
                course: 'VØS',
                popCounter: 0,
            },
            (error, Topic) => {
                console.log(error, Topic)
            });
        Topic.create({
                topicName: 'Fuldkommen Konkurrence',
                course: 'VØS',
                popCounter: 0,
            },
            (error, Topic) => {
                console.log(error, Topic)
            });
        Topic.create({
                topicName: 'Arrays',
                course: 'Pro',
                popCounter: 0,
            },
            (error, Topic) => {
                console.log(error, Topic)
            });
        Topic.create({
                topicName: 'Nested for loop',
                course: 'Pro',
                popCounter: 0,
            },
            (error, Topic) => {
                console.log(error, Topic)
            });
        Topic.create({
                topicName: 'Scoping',
                course: 'Pro',
                popCounter: 0,
            },
            (error, Topic) => {
                console.log(error, Topic)
            });
    }
}

// Calls the function to check if the database needs to be filled with data. If so, it fills.
fillDBTopic();
