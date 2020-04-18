const User = require('../models/User');
module.exports =
    async function(req,res){
        const users = await User.find({});
        res.json (users);
};
