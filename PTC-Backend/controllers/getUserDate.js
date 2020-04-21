const Date = require('../models/Date');

module.exports =
    async function(req, res){
        var studentId = req.body.studentId;
        console.log(studentId)
        let currentDate = await Date.find({student_id: studentId})
        console.log(currentDate[0])
       var dateOfBooking = currentDate[0].date;
        var timeOfBooking = currentDate[0].time;

        console.log(dateOfBooking);
        res.json({dateOfBooking, timeOfBooking});

    };
