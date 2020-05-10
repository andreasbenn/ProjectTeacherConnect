// We import the Date model.
const Course = require('../models/Course');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

// This line of code exports the module so all the backend endpoints are created in the index file.
module.exports =
    async function (req, res){

        // We take the encoded token from frontend, and decode it, so its stands the same way as it does in the database.
        var decodedToken = jwt.decode(req.body.student);

        // We make a currentUser and checks if the decoded token exist as an userId in the database. (Lim,2019, p.56)
        var currentUser = await User.findById(decodedToken.userId)

        // Since we made the function async, we can here use "await" keyword so the response first is called after the Course.find()
        let course = await Course.find({courseProgram: currentUser.program});

        // The response is send to the frontend, where it is used in the success (response) function.
        res.json({msg: "Her modtages alle fag fra det korrekte program", course: course});

    };
