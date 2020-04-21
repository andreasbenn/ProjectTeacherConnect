const User = require('../models/User');
const jwt = require('jsonwebtoken');

module.exports =
    async function(req,res){
        var decodedToken = jwt.decode(req.body.currentWebToken);
        var updatedUser = JSON.parse(req.body.newInformation);

        await User.findOneAndUpdate({_id: decodedToken.userId}, {fullName: updatedUser.fullName, email: updatedUser.email, phoneNumber: updatedUser.phoneNumber, address: updatedUser.address});

        await console.log(updatedUser)
    };
