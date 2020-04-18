const express = require ('express')
const app = new express();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bookingOptions = {discriminatorKey: 'booking', collection: 'booking'};
const BookingSchema = new Schema({
    course: String,
    teacher: String,
    topic: String,
    date: String,
    studentID: String,
});

const Booking = mongoose.model('Booking',BookingSchema);

module.exports = Booking;

function fillDBBooking() {
    Booking.create({
        course: "Virkso",
        teacher: "Hej",
        topic: "med",
        date: "dig",
        studentID: "1234",
    });
}

//fillDBBooking();

