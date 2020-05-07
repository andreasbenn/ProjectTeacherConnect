const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bookingOptions = {discriminatorKey: 'booking', collection: 'booking'};

// A BookingSchema is created, and the attributes that needs to be fulfilled is added to the schema.
// The group is using MongoDB, and a booking could therefore be created without one of the attributes.
const BookingSchema = new Schema({
    course: String,
    teacher: String,
    topic: String,
    date: String,
    time: String,
    studentID: String,
});

// A model is made for the booking, in the database.
const Booking = mongoose.model('Booking',BookingSchema);

// The module is exported so it can be used in other js files.
module.exports = Booking;

// The module is exported so it can be used in other js files.
function fillDBBooking() {
    Booking.create({
        course: "Virkso",
        teacher: "Hej",
        topic: "med",
        date: "dig",
        studentID: "1234",
    });
}

// This creation is a test used in the start of the project, and the code is now constructed dynamically by user interaction which forces API calls via a three tier model.
//fillDBBooking();


