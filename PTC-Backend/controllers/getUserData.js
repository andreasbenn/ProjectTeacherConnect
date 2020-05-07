const User = require('../models/User');
// jsonwebtoken is used to create and use access tokens.
const jwt = require('jsonwebtoken');

module.exports =
    async function(req, res){

        // jwt.decode decodes the input(a token), which here has an ID of the user.
        var decodedToken = jwt.decode(req.body.currentWebToken);

        // Saves the object of the current user(user of the token).
        var currentUser = await User.findById(decodedToken.userId);

        // Sends the full user object to frontend.
        res.json (currentUser);
    };



