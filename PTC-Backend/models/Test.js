const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const embeddedCourseOptions = {discriminatorKey: 'embeddedCourse', collection: 'embeddedCourse'};

const EmbeddedCourseSchema = new Schema({
    courseName: String,
    courseValue: String,
    courseProgram: String,
    courseTopic: [{
        topicName: String,
        popCounter: Number
    }]
});

const EmbeddedCourse = mongoose.model('EmbeddedCourse', EmbeddedCourseSchema);

module.exports = EmbeddedCourse;

function fillEmbeddedCourse() {
    EmbeddedCourse.create({
            courseName: "Virksomheders økonomiske styring",
            courseValue: "VØS",
            courseProgram: "HA(it)",
            courseTopic: [{
                topicName: 'Priselasticitet',
                popCounter: 0
            },{
                topicName: 'MR=MC',
                popCounter: 0
            },{
                topicName: 'Fuldkommen Konkurrence',
                popCounter: 0
            }]
        },
        (error, Course) => {
            console.log(error, Course)
        });

    EmbeddedCourse.create({
            courseName: "Programmering og udvikling af små systemer og databaser",
            courseValue: "Pro",
            courseProgram: "HA(it)",
            courseTopic: [{
                topicName: 'Arrays',
                popCounter: 0
            },{
                topicName: 'Nested for loop',
                popCounter: 0
            },{
                topicName: 'Scoping',
                popCounter: 0
            }]
        },
        (error, Course) => {
            console.log(error, Course)
        });
    /*
    EmbeddedCourse.create({
            courseName: "Mikroøkonomi",
            courseValue: "Mik",
            courseProgram: "HA(fil)",
            courseTopic: [{
                topicName: "",
                popCounter: 0
            },{
                topicName: "",
                popCounter: 0
            },{
                topicName: "",
                popCounter: 0
            }]
        },
        (error, Course) => {
            console.log(error, Course)
        });

     */
}

//fillEmbeddedCourse();