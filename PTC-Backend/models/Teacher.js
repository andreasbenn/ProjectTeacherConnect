const express = require ('express')
const app = new express();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const teacherOptions = {discriminatorKey: 'teacher', collection: 'teacher'};
const TeacherSchema = new Schema({
    fullName: String,
    email: String,
    course: String,
});

const Teacher = mongoose.model('Teacher',TeacherSchema);

module.exports = Teacher;

function fillDBTeacher() {
    Teacher.create({
            fullName: 'Jan Anders Sørensen',
            email: 'jan.anders.sørensen@gmail.com',
            course: 'VØS',
        },
        (error, Teacher) => {
            console.log(error, Teacher)
        });

    Teacher.create({
            fullName: 'Henrik Thorn',
            email: 'Henrikthorn@cbs.dk',
            course: 'Pro',
        },
        (error, Teacher) => {
            console.log(error, Teacher)
        });

    Teacher.create({
            fullName: 'Nicolai Frost Jacobsen ',
            email: 'nicolai.frost@gmail.com',
            course: 'Pro',
        },
        (error, Teacher) => {
            console.log(error, Teacher)
        });
}

//fillDBTeacher();