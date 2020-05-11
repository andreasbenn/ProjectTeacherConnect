const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const dateOptions = {discriminatorKey: 'date', collection: 'date'};

// A dateSchema is created, and the attributes that needs to be fulfilled is added to the schema.
// The group is using MongoDB, and a booking could therefore be created without one of the attributes.
const dateSchema = new Schema({
    date: String,
    time: String,
    student_id: Number,
});

// a model is made for the Date, in the database.
const Date = mongoose.model('Date', dateSchema);

// The module is exported so it can be used in other js files.
module.exports = Date;

// Below, we create four Dates which we use in creation of the booking. These dates will then be connected by the student_id, which the User Schema also contains.
// The date and time is empty because they are updated dynamically when the User makes a booking.
async function fillDBDate() {
    var allDates = await Date.find({});
    console.log(allDates[0])
    if (allDates[0] === undefined) {
        Date.create({
                date: "",
                time: "",
                student_id: 1,
            },
            (error, User) => {
                console.log(error, User)
            });
        Date.create({
                date: "",
                time: "",
                student_id: 2,
            },
            (error, User) => {
                console.log(error, User)
            });
        Date.create({
                date: "",
                time: "",
                student_id: 3,
            },
            (error, User) => {
                console.log(error, User)
            });
        Date.create({
                date: "",
                time: "",
                student_id: 4,
            },
            (error, User) => {
                console.log(error, User)
            });
        Date.create({
                date: "",
                time: "",
                student_id: 5,
            },
            (error, User) => {
                console.log(error, User)
            });
    }
}

// Calls the function to check if the database needs to be filled with data. If so, it fills.
fillDBDate();
