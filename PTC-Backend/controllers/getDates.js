// We import the Date model.
const Date = require('../models/Date');

// This line of code exports the module so all the backend endpoints are created in the index file.
module.exports =
    async function (req, res){

    const dates = await Date.find({});

    res.json(dates);

};
