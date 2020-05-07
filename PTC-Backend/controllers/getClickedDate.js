// We import the Date model.
const Date = require('../models/Date');

module.exports =

    // This line of code exports the module so all the backend endpoints are created in the index file.
    // This module is used as an post request, and is called in the index.js file.
    // A asynchronous function is created
   async function(req, res){

        // There is created 3 variables, which is constructed on behalf of the POST request in the "PTC-Frontend Folder" - "js" - "actual calendar"
        var selectedDate = req.body.date;
        var selectedTime = req.body.time;
        var studentId = req.body.studentId;

        //*Since we made the function an async function, we can here use "await" keyword so the response is created after the data in the database is updated, with the userinput from frontend.
        await Date.findOneAndUpdate({student_id: studentId}, {date: selectedDate, time: selectedTime} )

        // This response is only used as a test, so we can see if the response is send to the frontend
        res.json({selectedDate, selectedTime});

    };
