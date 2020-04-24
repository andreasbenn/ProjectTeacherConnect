const Booking = require('../models/Booking');
const Topic = require('../models/Topic');

module.exports =
    async function (req,res) {
        var booking = JSON.parse(req.body.booking);
        console.log(booking);
        var topic = booking.topic;
        var course = booking.course;
        if(booking.topic == ""){
            Booking.create({
                course: booking.course,
                teacher: booking.teacher,
                date: booking.date,
                time: booking.time,
                studentID: booking.studentID,
            })
        }
        else{
            Booking.create({
                course: booking.course,
                teacher: booking.teacher,
                topic: booking.topic,
                date: booking.date,
                time: booking.time,
                studentID: booking.studentID,
            })
                var topicArray = await Topic.find({topicName: topic});
                console.log(topicArray);
                let topicExists = false;
                if (topicArray.length > 0 ) {
                for (i = 0; i < topicArray.length; i++) {
                    if (topicArray[i].course == course) {
                        topicExists = true;
                        console.log(topicArray[i].topicName);
                        await Topic.findOneAndUpdate({_id: topicArray[i]._id}, {popCounter: topicArray[i].popCounter + 1})
                    }
                }
            }
            if(!topicExists){
                console.log("Der eksisterer intet Topic")
                Topic.create({
                    topicName: topic,
                    course: course,
                    popCounter: 1,
                }, (error, Topic)=>{
                    console.log(error,Topic)
                })
            }


        }



    };