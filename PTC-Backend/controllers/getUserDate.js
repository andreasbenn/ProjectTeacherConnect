const Date = require('../models/Date');

module.exports =
    async function(req, res){

        // We make a variable which takes the studentId from the the frontend. This is done by using the functionality of the bodyparser.
        var studentId = req.body.studentId;

        // We find the dates that belongs to the User.
        let currentDate = await Date.find({student_id: studentId})

        // These variables takes the Date Objects from the database, and adds the data from the frontend to the empty strings in the database.
        //*The Date Objects from the database is empty, so the date and time can be added to the correct User.
        var dateOfBooking = currentDate[0].date;
        var timeOfBooking = currentDate[0].time;

        res.json({dateOfBooking, timeOfBooking});

    };
