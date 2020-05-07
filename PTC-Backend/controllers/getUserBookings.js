// We import the User and Booking Model, and the jwt token.
const User = require('../models/User');
const Booking = require('../models/Booking');
const jwt = require('jsonwebtoken');

module.exports =
    async function(req, res){

        // We take the encoded token from frontend, and decode it, so its stands the same way as it does in the database.
        var decodedToken = jwt.decode(req.body.currentWebToken);

        // We make a currentUser and checks if the decoded token exist as an userId in the database. (Lim,2019, p.56)
        var currentUser = await User.findById(decodedToken.userId)

        // We use the currentUser variable to find the bookings related to the user. That is possible because the Booking object contains an StudentID attribute.
        var currentUserBookings = await Booking.find({studentID: currentUser.StudentID})

        // The currentUserBookings is send to frontend.
        res.json(currentUserBookings);

    };
