const Booking = require('../models/Booking');

module.exports =
    async function(req,res){
        var bookingsToRemove = JSON.parse(req.body.checkedBookings);

        for(var i = 0; i < bookingsToRemove.length; i++){
            await Booking.remove({_id: bookingsToRemove[i]})
        }

    };