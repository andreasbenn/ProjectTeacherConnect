// We import the Teacher model.
const Teacher = require('../models/Teacher');

// This line of code exports the module so all the backend endpoints are created in the index file.
module.exports =
    async function (req, res){

        // This creates a variable which use the bodyparser to get the element from frontend.
        var courseValue = req.body.selectedCourse;

        //*Since we we made the function async, we can here use "await" keyword so the response first is called after the Teacher.find()
        let teacher = await Teacher.find({course: courseValue});

        res.json({msg: "Her modtages alle lærere fra det korrekte fag", teacher: teacher})

    };