const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports =
     async function (req, res) {
        var inputEmail = req.body.email;
        var inputPassword = req.body.password;
        let user = await User.find({email: inputEmail});
        if (user.length === 0) {
            res.json({msg: "Brugeren eksisterer ikke", success: false})
        } else if (user.length > 0) {
            bcrypt.compare(inputPassword,user[0].password, (error, same) => {
                // hvorfor sker det som der sker...
                if (same) {
                    // auth succesfull
                   const token = jwt.sign({
                        userId: user[0]._id
                    },
                        "secret",
                        {expiresIn:"1h"},
                        );
                    res.json({token,msg: "Juhu", success: true, user: user[0]})
                } else res.json({msg: "Øvbøv- du har skrevet forkert password", success: false})
            })
        } else if (user.length > 0 && user[0].password != inputPassword) {
            res.json({msg: "Øvbøv- du har skrevet forkert password", success: false})
        }
};
