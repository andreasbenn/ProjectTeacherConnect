const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Defining what the database should be named (properties)
const teacherOptions = {discriminatorKey: 'teacher', collection: 'teacher'};

// Creates a new schema for the database, similar to a class in JS.
const TeacherSchema = new Schema({
    fullName: String,
    email: String,
    course: String,
});

// Creates a variable that refers to the database. We do that to export it and import in index.js for Teacher.js to execute.
const Teacher = mongoose.model('Teacher',TeacherSchema);

module.exports = Teacher;

// Function to fill the database with objects that are being used in the program.
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
                email: 'henrik.thorn@gmail.com',
                course: 'Pro',
            },
            (error, Teacher) => {
                console.log(error, Teacher)
            });

        Teacher.create({
                fullName: 'Nicolai Frost Jacobsen',
                email: 'nicolai.frost@gmail.com',
                course: 'Pro',
            },
            (error, Teacher) => {
                console.log(error, Teacher)
            });
        Teacher.create({
                fullName: 'Bo Bensen',
                email: 'bo.bensen@gmail.com',
                course: 'Mik',
            },
            (error, Teacher) => {
                console.log(error, Teacher)
            });
    }

// Call this function if you need to create the data in the database.
//fillDBTeacher();
