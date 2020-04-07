const express = require ('express')
const app = new express();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const courseOptions = {discriminatorKey: 'course', collection: 'course'};
const CourseSchema = new Schema({
    courseName: String,
    courseValue: String,
    courseProgram: String,
});

const Course = mongoose.model('Course',CourseSchema);

module.exports = Course;
/*
Course.create({
    courseName: "Virksomheders økonomiske styring",
    courseValue: "VØS",
    courseProgram: "HA(it)"},
    (error,Course)=>{
        console.log(error,Course)
    });

Course.create({
        courseName: "Programmering og udvikling af små systemer og databaser",
        courseValue: "Pro",
        courseProgram: "HA(it)"},
    (error,Course)=>{
        console.log(error,Course)
    });

Course.create({
        courseName: "Mikroøkonomi",
        courseValue: "Mik",
        courseProgram: "HA(fil)"},
    (error,Course)=>{
        console.log(error,Course)
    });

 */