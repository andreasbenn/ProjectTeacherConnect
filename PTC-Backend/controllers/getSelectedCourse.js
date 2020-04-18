const Teacher = require('../models/Teacher');
module.exports =
    async function (req,res) {
        var courseValue = req.body.selectedCourse;
        console.log(courseValue);
        let teacher = await Teacher.find({course: courseValue});
        console.log(teacher);
        res.json({msg: "Her modtages alle lærere fra det korrekte fag", teacher: teacher})
    };