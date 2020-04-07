const express = require ('express')
const app = new express();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
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

const User = mongoose.model('User',UserSchema);

module.exports = User;

/*
User.create({
        StudentID: 1,
        fullName: 'Oliver Langkjær Michelsen',
        email: 'olmi19ab@student.cbs.dk',
        password: '1234',
        phoneNumber: 12345678,
        address: 'Engholmen 20, 1. tv',
        program: 'HA(fil)' },
    (error,User)=>{
    console.log(error,User)
});
User.create({
        StudentID: 2,
        fullName: 'Jeppe Hornshøj Reuther',
        email: 'jere19ac@student.cbs.dk',
        password: '1234',
        phoneNumber: 23880118,
        address: 'Gammeltoftsgade 8, 4. th',
        program: 'HA(it)' },
    (error,User)=>{
    console.log(error,User)
});
User.create({
        StudentID: 3,
        fullName: 'Andreas Emanuel Bennecke',
        email: 'anbe17ac@student.cbs.dk',
        password: '1234',
        phoneNumber: 87654321,
        address: 'Amalienborg Plads',
        program: 'HA(it)' },
    (error,User)=>{
    console.log(error,User)
});

User.create({
        StudentID: 4,
        fullName: 'Aksel Toftegaard Pedersen',
        email: 'akpe19ac@student.cbs.dk',
        password: '1234',
        phoneNumber: 76523189,
        address: 'Gentofte',
        program: 'HA(it)' },
    (error,User)=>{
    console.log(error,User)
})
*/
