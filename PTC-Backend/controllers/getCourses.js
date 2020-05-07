// We import the Date model.
const Course = require('../models/Course');

// This line of code exports the module so all the backend endpoints are created in the index file.
module.exports =
    async function (req, res){

        // There is created 1 variable, which is constructed on behalf of the POST request in the "PTC-Frontend Folder" - "js" - "calendar"
        var program = req.body.programID;

        // Since we made the function async, we can here use "await" keyword so the response first is called after the Course.find()
        let course = await Course.find({courseProgram: program});

        // The response is send to the frontend, where it is used in the success (response) function.
        res.json({msg: "Her modtages alle fag fra det korrekte program", course: course});

    };
