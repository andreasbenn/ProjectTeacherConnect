const User = require('../models/User');
// bcrypt is used to encrypt passwords.
const bcrypt = require('bcrypt');
// jsonwebtoken is used to create and use access tokens.
const jwt = require('jsonwebtoken');

module.exports =
     async function (req, res){
        var inputEmail = req.body.email;
        var inputPassword = req.body.password;

        // Finds the user in the database of the given email input from the user.
        let user = await User.find({email: inputEmail});

        // Checks if the user does not exist.
        if (user.length === 0) {
            res.json({msg: "Brugeren eksisterer ikke", success: false})
        }

        // If user exists it will take the password typed in and compare it with the database.
        else if (user.length > 0) {

            // bcrypt.compare takes 2 inputs and compares their values. Uses same with if/else.
            bcrypt.compare(inputPassword,user[0].password, (error, same) => {

                // Input is correct
                if (same) {

                    // Creates a token with jwt.sign that is used to store in localStorage to identify the current logged user.
                   const token = jwt.sign({
                        userId: user[0]._id
                    },

                       // To automatically expire the token after X amount of time.
                        "secret",
                        {expiresIn:"1h"},
                        );

                    // Sends the token of the logged user to frontend.
                    res.json({token,msg: "Successfuld login", success: true})

                    // Input is incorrect
                } else res.json({msg: "Øvbøv- du har skrevet forkert password", success: false})
            })
        }
};