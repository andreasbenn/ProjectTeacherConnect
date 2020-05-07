const Booking = require('../models/Booking');
const Topic = require('../models/Topic');

module.exports =
    async function (req, res){

        // The full booking object from frontend.
        var booking = JSON.parse(req.body.booking);
        console.log(booking);

        var topic = booking.topic;
        var course = booking.course;

        // If no topic selected it will not add it to the booking.
        if(booking.topic == ""){
            Booking.create({
                course: booking.course,
                teacher: booking.teacher,
                date: booking.date,
                time: booking.time,
                studentID: booking.studentID,
            });
        }

        // If a topic was selected
        else {
            Booking.create({
                course: booking.course,
                teacher: booking.teacher,
                topic: booking.topic,
                date: booking.date,
                time: booking.time,
                studentID: booking.studentID,
            });

            // Searches for the topic.
            var topicArray = await Topic.find({topicName: topic});
            console.log(topicArray);

            // Used to see if topic exists or not.
            let topicExists = false;

            if (topicArray.length > 0 ) {
                for (i = 0; i < topicArray.length; i++) {
                    if (topicArray[i].course == course) {
                        // Topic exists
                        topicExists = true;
                        console.log(topicArray[i].topicName);
                        // Finds and updates the topic selected and adds +1 to the popcounter.
                        // https://mongoosejs.com/docs/tutorials/findoneandupdate.html
                        await Topic.findOneAndUpdate({_id: topicArray[i]._id}, {popCounter: topicArray[i].popCounter + 1})
                    }
                }
            }

            // If the topic does not exist.
            if(!topicExists){
                console.log("Der eksisterer intet Topic")

                // Creates a new document in the topic collection.
                Topic.create({
                    topicName: topic,
                    course: course,
                    popCounter: 1,
                }, (error, Topic)=>{
                    console.log(error,Topic)
                });
            }
        }
    };
