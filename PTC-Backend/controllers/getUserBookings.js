const User = require('../models/User');
const Booking = require('../models/Booking');
const jwt = require('jsonwebtoken');

module.exports =
    async function(req,res){
        var decodedToken = jwt.decode(req.body.currentWebToken);
        var currentUser = await User.findById(decodedToken.userId)

        var currentUserBookings = await Booking.find({studentID: currentUser.StudentID})

        res.json(currentUserBookings);
    };
