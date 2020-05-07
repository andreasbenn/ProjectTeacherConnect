const Booking = require('../models/Booking');

module.exports =
    async function(req, res){

        // Array of ID's from bookings that needs to be removed
        var bookingsToRemove = JSON.parse(req.body.checkedBookings);

        // Used to check if there was any checked off bookings, if not it will prompt that to the user.
        var removedBookingCounter = 0;

        for(var i = 0; i < bookingsToRemove.length; i++){

            // .deleteOne takes the parameter and searches for that in the database and deletes the document.
            await Booking.deleteOne({_id: bookingsToRemove[i]})
            removedBookingCounter++;
        }

        // Sends the amount of requested bookings removed to frontend.
        res.json(removedBookingCounter)

    };
