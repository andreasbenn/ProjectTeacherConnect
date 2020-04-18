const Topic = require('../models/Topic');
module.exports =
    async function (req,res) {
        var sortedTopics = [];
        var courseValue = req.body.selectedCourse;
        console.log(courseValue);
        let topic = await Topic.find({course: courseValue});
        console.log(topic);
        topic.sort(function (a,b) {
            return b.popCounter - a.popCounter});
        sortedTopics.push(topic[0], topic[1], topic[2]);
        res.json({msg: "Her modtages de 3 mest populære topics fra det korrekte fag", topic: sortedTopics})
    };