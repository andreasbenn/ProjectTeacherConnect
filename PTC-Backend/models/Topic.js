const express = require ('express');
const app = new express();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const topicOptions = {discriminatorKey: 'topic', collection: 'topic'};
const TopicSchema = new Schema({
    topicName: String,
    course: String,
    popCounter: Number,
});

const Topic = mongoose.model('Topic',TopicSchema);


module.exports = Topic;
/*
Topic.create({
        topicName: 'Priselasticitet',
        course: 'VØS',
        popCounter: 0,
    },
    (error,Topic)=>{
        console.log(error,Topic)
    });

Topic.create({
        topicName: 'MR=MC',
        course: 'VØS',
        popCounter: 0,
    },
    (error,Topic)=>{
        console.log(error,Topic)
    });
Topic.create({
        topicName: 'Fuldkommen Konkurrence',
        course: 'VØS',
        popCounter: 0,
    },
    (error,Topic)=>{
        console.log(error,Topic)
    });
Topic.create({
        topicName: 'Arrays',
        course: 'Pro',
        popCounter: 0,
    },
    (error,Topic)=>{
        console.log(error,Topic)
    });
Topic.create({
        topicName: 'Nested for loop',
        course: 'Pro',
        popCounter: 0,
    },
    (error,Topic)=>{
        console.log(error,Topic)
    });
Topic.create({
        topicName: 'Scoping',
        course: 'Pro',
        popCounter: 0,
    },
    (error,Topic)=>{
        console.log(error,Topic)
    });

 */
