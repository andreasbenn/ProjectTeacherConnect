const User = require('../models/User');
// jsonwebtoken is used to create and use access tokens.
const jwt = require('jsonwebtoken');

module.exports =
    async function(req, res){

        // jwt.decode decodes the input(a token), which here has an ID of the user.
        var decodedToken = jwt.decode(req.body.student);

        // Finds the user of the token.
        var currentUser = await User.findById(decodedToken.userId)

        // Saves the ID of the user.
        var currentUserId = currentUser.StudentID

        // Sends the ID of the user to frontend.
        res.json (currentUserId);
    };