// We import the Topic model.
const Topic = require('../models/Topic');

// This line of code exports the module so all the backend endpoints are created in the index file.
module.exports =

    async function (req,res){

        // An empty array is created
        var sortedTopics = [];

        // A variable is created by using the body parser middleware
        // (Lim, 2019 p.64)
        var courseValue = req.body.selectedCourse;

        // We use the find method to find the documents where course has a value = coursevalue
        let topic = await Topic.find({course: courseValue});

        // Function to sort the array of topics after their popcounter.
        // (2019) array.sort |BitDegree. BitDegree Learn. Retrieved from https://www.bitdegree.org/learn/javascript-array-sort

        //How to sort an array of integers correctly, (2009, July), [Blog comment], Stackoverflow Retrieved 20 November, 2019, from https://stackoverflow.com/questions/1063007/how-to-sort-an-array-of-integers-correctly
        topic.sort(function (a,b) {
            return b.popCounter - a.popCounter});
        sortedTopics.push(topic[0], topic[1], topic[2]);

        res.json({msg: "Her modtages de 3 mest populære topics fra det korrekte fag", topic: sortedTopics})

    };
