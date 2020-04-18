const express = require ('express')
const app = new express();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dateOptions = {discriminatorKey: 'date', collection: 'date'};
const dateSchema = new Schema({
    date: String
});

const Date = mongoose.model('Date', dateSchema);

module.exports = Date;

function fillDBDate() {
    Date.create({
            date: "13/04/2020"
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
