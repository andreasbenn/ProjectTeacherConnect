const Date = require('../models/Date');

module.exports =
   async function(req, res){
        var selectedDate = req.body.date;
        var selectedTime = req.body.time;
        var studentId = req.body.studentId;
        await Date.findOneAndUpdate({student_id: studentId}, {date: selectedDate, time: selectedTime} )
        console.log('linje 7' + studentId)
           
        res.json({selectedDate, selectedTime});
    };
