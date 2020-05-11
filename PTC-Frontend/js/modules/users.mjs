// mjs-file is the standard file to use, when implementing modules in javascript from Node

import User from "../classes/userClass.js";

// This function goes through the inputted array, and changes all the index's to an instance of the class User.(frontend class)
export function formatUsers(users) {
    let allUsers = [];

    for(let i=0; i< users.length; i++){

        var student = new User();

        // Extend merges 2 objects into the first defined, so in this case users[i] gets merged into student
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

