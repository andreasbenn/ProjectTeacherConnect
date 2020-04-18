const express = require ('express')
const app = new express();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const userOptions = {discriminatorKey: 'user', collection: 'user'};

const UserSchema = new Schema({
    StudentID: Number,
    fullName: String,
    email: String,
    password: String,
    phoneNumber: Number,
    address: String,
    program: String
});

UserSchema.pre('save',function (next) {
    const user = this;

    bcrypt.hash(user.password,10,(error,hash)=>{
        user.password = hash;
        next()
    })
});

const User = mongoose.model('User',UserSchema);
module.exports = User;

function fillDBUsers () {
    User.create({
            StudentID: 1,
            fullName: 'Oliver Langkjær Michelsen',
            email: 'olmi19ab@student.cbs.dk',
            password: '1234',
            phoneNumber: 12345678,
            address: 'Engholmen 20, 1. tv',
            program: 'HA(fil)'
        },
        (error, User) => {
            console.log(error, User)
        });
    User.create({
            StudentID: 2,
            fullName: 'Jeppe Hornshøj Reuther',
            email: 'jere19ac@student.cbs.dk',
            password: '1234',
            phoneNumber: 23880118,
            address: 'Gammeltoftsgade 8, 4. th',
            program: 'HA(it)'
        },
        (error, User) => {
            console.log(error, User)
        });
    User.create({
            StudentID: 3,
            fullName: 'Andreas Emanuel Bennecke',
            email: 'anbe17aj@student.cbs.dk',
            password: '1234',
            phoneNumber: 87654321,
            address: 'Amalienborg Plads',
            program: 'HA(it)'
        },
        (error, User) => {
            console.log(error, User)
        });
    User.create({
            StudentID: 4,
            fullName: 'Aksel Toftgaard Pedersen',
            email: 'akpe19ab@student.cbs.dk',
            password: '1234',
            phoneNumber: 87654321,
            address: 'Rådhuspladsen',
            program: 'HA(it)'
        },
        (error, User) => {
            console.log(error, User)
        });
    User.create({
            StudentID: 5,
            fullName: 'test',
            email: 'dk',
            password: '1',
            phoneNumber: 7189,
            address: 'Gen',
            program: 'HA(it)'
        },
        (error, User) => {
            console.log(error, User)
        })
}

//fillDBUsers();