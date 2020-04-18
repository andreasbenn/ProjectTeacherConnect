const Date = require('../models/Date');
module.exports =
    async function(req, res){
    const dates = await Date.find({});
    res.json(dates);
};
