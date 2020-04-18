const Date = require('../models/Date');
module.exports =
    function(req, res){
        var selectedDate = req.body.date;
        Date.create({
            date: selectedDate
        })
        res.json({msg:"Du har registreret en booking d." + selectedDate})
    };
