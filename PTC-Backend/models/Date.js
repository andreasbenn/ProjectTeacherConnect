const express = require ('express')
const app = new express();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dateOptions = {discriminatorKey: 'date', collection: 'date'};
const dateSchema = new Schema({
    date: String,
    time: String,
    student_id: Number,
});

const Date = mongoose.model('Date', dateSchema);

module.exports = Date;

function fillDBDate() {
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
}

//fillDBDate();

/*
async function updateDBDate() {
    await Date.updateOne({date: "Updated date"}, {date: "New date"})
}

updateDBDate();

 */
