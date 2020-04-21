import User from '../classes/userClass.js';
//mjs-file is the standard file to use, when implementing modules in javascript from Node
//This function goes through the inputted array, and changes alle the index's to an instance of the class User.
export function formatUsers(users) {
    let allUsers = [];
    for(let i=0; i< users.length; i++){
        var student = new User();
        $.extend(student, users[i]);
        allUsers.push(student)
    }
    return allUsers;
}
export function formatUser(user) {
    var student = new User();
        $.extend(student, user);
    return student;
}

