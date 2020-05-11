const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
async function fillDBTeacher() {
    var allTeachers = await Teacher.find({});
    console.log(allTeachers[0])
    if (allTeachers[0] === undefined) {
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
}

// Calls the function to check if the database needs to be filled with data. If so, it fills.
fillDBTeacher();
