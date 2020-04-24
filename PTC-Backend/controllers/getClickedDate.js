const Date = require('../models/Date');

module.exports =
   async function(req, res){
        var selectedDate = req.body.date;
        var selectedTime = req.body.time;
        var studentId = req.body.studentId;
        await Date.findOneAndUpdate({student_id: studentId}, {date: selectedDate, time: selectedTime} )
           
        res.json({selectedDate, selectedTime});
    };
