const Date = require('../models/Date');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

module.exports =
    async function(req, res){

        // We take the encoded token from frontend, and decode it, so its stands the same way as it does in the database.
        var decodedToken = jwt.decode(req.body.student);

        // We make a currentUser and checks if the decoded token exist as an userId in the database. (Lim,2019, p.56)
        var currentUser = await User.findById(decodedToken.userId)

        // We find the dates that belongs to the User.
        let currentDate = await Date.find({student_id: currentUser.StudentID})

        // These variables takes the Date Objects from the database, and adds the data from the frontend to the empty strings in the database.
        //*The Date Objects from the database is empty, so the date and time can be added to the correct User.
        var dateOfBooking = currentDate[0].date;
        var timeOfBooking = currentDate[0].time;

        res.json({dateOfBooking, timeOfBooking});

    };
