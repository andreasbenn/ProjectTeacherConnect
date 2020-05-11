const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Needed for password encryption
const bcrypt = require('bcrypt');
// Defining what the database should be named (properties)
const userOptions = {discriminatorKey: 'user', collection: 'user'};

// Creates a new schema for the database, similar to a class in JS.
const UserSchema = new Schema({
    StudentID: Number,
    fullName: String,
    email: String,
    password: String,
    phoneNumber: Number,
    address: String,
    program: String
});

// This function adds a password encryption to the users in the database.
UserSchema.pre('save',function (next) {
    const user = this;

    // bcrypt.hash hashes the user password into the function so it encrypts it with bcrypt.
    // https://www.npmjs.com/package/bcrypt
    bcrypt.hash(user.password,10,(error,hash)=>{
        user.password = hash;
        next()
    })
});

// Creates a variable that refers to the database. We do that to export it and import in index.js for Topic.js to execute.
const User = mongoose.model('User',UserSchema);

module.exports = User;

// Function to fill the database with objects that are being used in the program.
async function fillDBUsers () {
    var allUsers = await User.find({});
    console.log(allUsers[0])
    if (allUsers[0] === undefined) {
        User.create({
                StudentID: 1,
                fullName: 'Oliver Langkjær Michelsen',
                email: 'olmi19ab@student.cbs.dk',
                password: '1234',
                phoneNumber: 12345678,
                address: 'Engholmen 20, 1. tv',
                program: 'HA(fil)'
            },
            (error, User) => {
                console.log(error, User)
            });
        User.create({
                StudentID: 2,
                fullName: 'Jeppe Hornshøj Reuther',
                email: 'jere19ac@student.cbs.dk',
                password: '1234',
                phoneNumber: 12345678,
                address: 'Gammeltoftsgade 8, 4. th',
                program: 'HA(it)'
            },
            (error, User) => {
                console.log(error, User)
            });
        User.create({
                StudentID: 3,
                fullName: 'Andreas Emanuel Bennecke',
                email: 'anbe17aj@student.cbs.dk',
                password: '1234',
                phoneNumber: 12345678,
                address: 'Amalienborg Plads',
                program: 'HA(it)'
            },
            (error, User) => {
                console.log(error, User)
            });
        User.create({
                StudentID: 4,
                fullName: 'Aksel Toftgaard Pedersen',
                email: 'akpe19ab@student.cbs.dk',
                password: '1234',
                phoneNumber: 12345678,
                address: 'Rådhuspladsen',
                program: 'HA(it)'
            },
            (error, User) => {
                console.log(error, User)
            });
        User.create({
                StudentID: 5,
                fullName: 'test',
                email: 'test@cbs.dk',
                password: '1234',
                phoneNumber: 12345678,
                address: 'Solbjerg Pl. 3',
                program: 'HA(it)'
            },
            (error, User) => {
                console.log(error, User)
            })
    }
}

// Calls the function to check if the database needs to be filled with data. If so, it fills.
fillDBUsers();
