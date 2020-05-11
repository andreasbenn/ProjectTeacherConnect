const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const courseOptions = {discriminatorKey: 'course', collection: 'course'};

// A CourseSchema is created, and the attributes that needs to be fulfilled is added to the schema.
// The group is using MongoDB, and a course could therefore be created without one of the attributes.
const CourseSchema = new Schema({
    courseName: String,
    courseValue: String,
    courseProgram: String,
});

// A model is made for the course, in the database.
const Course = mongoose.model('Course',CourseSchema);

// The module is exported so it can be used in other js files.
module.exports = Course;

async function fillDBCourse() {
    var allCourses = await Course.find({});
    console.log(allCourses[0])
    if (allCourses[0] === undefined) {
        Course.create({
                courseName: "Virksomheders økonomiske styring",
                courseValue: "VØS",
                courseProgram: "HA(it)"
            },
            (error, Course) => {
                console.log(error, Course)
            });

        Course.create({
                courseName: "Programmering og udvikling af små systemer og databaser",
                courseValue: "Pro",
                courseProgram: "HA(it)"
            },
            (error, Course) => {
                console.log(error, Course)
            });

        Course.create({
                courseName: "Mikroøkonomi",
                courseValue: "Mik",
                courseProgram: "HA(fil)"
            },
            (error, Course) => {
                console.log(error, Course)
            });
    }
}

// Calls the function to check if the database needs to be filled with data. If so, it fills.
fillDBCourse();
