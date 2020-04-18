const User = require('../models/User');
const jwt = require('jsonwebtoken');

module.exports =
    async function(req,res){
        var decodedToken = jwt.decode(req.body.currentWebToken);
        var currentUser = await User.findById(decodedToken.userId)

        res.json (currentUser);
    };
