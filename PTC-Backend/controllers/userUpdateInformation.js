const User = require('../models/User');
// jsonwebtoken is used to create and use access tokens.
const jwt = require('jsonwebtoken');

module.exports =
    async function(req, res){

        // jwt.decode decodes the input(a token), which here has an ID of the user.
        // req.body as that is where the data from the frontend ajax calls are.
        var decodedToken = jwt.decode(req.body.student);

        var updatedUser = JSON.parse(req.body.newInformation);

        // User.findOneAndUpdate takes the first parameter and finds the document we want to update in the database, and the 2nd parameter it takes the values and updates the document.
        // (n.d.). Mongoose V5.9.13: Mongoose Tutorials: How To Use `findOneAndUpdate()` In Mongoose. MongoDB. Retrieved from https://mongoosejs.com/docs/tutorials/findoneandupdate.html
        await User.findOneAndUpdate({_id: decodedToken.userId}, {fullName: updatedUser.fullName, email: updatedUser.email, phoneNumber: updatedUser.phoneNumber, address: updatedUser.address});

        await console.log(updatedUser)

        res.json("Success");
    };
