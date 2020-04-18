const Course = require('../models/Course');
module.exports =
    async function (req,res){
            var program = req.body.programID;
            console.log(program);
            let course = await Course.find({courseProgram: program});
            res.json({msg: "Her modtages alle fag fra det korrekte program", course: course});
    };
