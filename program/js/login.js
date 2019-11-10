// Her laver jeg en function som tester om username og password eksistere i min dummydata (ddLogin.js)
// Here I'm making a function that tests if the username and password is corect from my dummydata (ddLogin.js)
var loginButton = document.getElementById("loginButton");
var currentLogIn = [];
var existingStudent = JSON.parse(localStorage.getItem('allStudents'));

//Deletes currentUser if the site was reloaded without logging out (error propagation)
if(localStorage.getItem("currentStudent") !== null){
    localStorage.removeItem("currentStudent");
}
console.log("Hej");

// I'm using "login" because that's the ID i have given it in HTML
// All of the code below is what i would like to run when clicking on the login button. (verify email etc...)
// emailInput get's the id from our email id in HTML and the same for our password
// then we create a for loop that runs if the emailInput and passwordInput is = currentUser which is defined in the top.
// If it's true we break the function. If not we check if it's wrong and if that is "true" we alert "Username or password is incorrect or does not exist, please try again"
loginButton.onclick = function loginFunction (e) {
    var studentExists = false;
    e.preventDefault();
    var emailInput = document.getElementById("email").value;
    var passwordInput = document.getElementById("password").value;

    for (let i = 0; i < existingStudent.length; i++) {
        if (emailInput == existingStudent[i].email && passwordInput == existingStudent[i].password) {
            //push userName to current local storage
            currentLogIn.push(existingStudent[i]);
            alert("Login has been verified");
            document.location.href = "home.html";
            var currentStudentString = JSON.stringify(currentLogIn);
            localStorage.setItem('currentStudent', currentStudentString);
            studentExists = true;
            break;
        }

    }
    if (!StudentExists) {
        alert("Username or password is incorrect or does not exist, please try again")
    }

};

// first we create a variable so that my event listener later on can get the id from password in HTML
// Then we add an eventListener and that should run a function (event)
// If the event is the enter key (keyCode 13) then it should click the button that we have described in HTML
// In HTML we have declared that it should run our loginFunction onclick
// Inspiration found on W3SCHOOLS - https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp
var input = document.getElementById("password");

input.addEventListener("keydown",function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("loginButton").click();
    }
});

//below i will like to create a function that gives an error if the username and password is incorrect or not equal to my dummy data from ddLogin.js
// Ill start by making an alert function and after specifying the criterias in form of an if statement
/*
else if (attempt) //attempt is undefined as we don't have that in our site as of jet
     {
    document.getElementById("email").disabled = true;
    document.getElementById("password").disabled = true;
    document.getElementById("loginButton").disabled = true;
    return false;
     }
}*/
// here I'm making a simple function that alerts a user trying to create a user, with the message "This is currently not a part of this version of the program"
// more or less the same principle as our login function
/* GETTING DELETED var submitButton = document.getElementById("submitButton");
submitButton.onclick = function() {
    alert("Not yet a part of this version of program");
    if (attempt) {
        document.getElementById("createName").disabled = true;
        document.getElementById("createUserName").disabled = true;
        document.getElementById("createPassword").disabled = true;
        document.getElementById("createRepeatPassword").disabled = true;
        document.getElementById("submitButton").disabled = true;
    }
};

function findUser () {

} GETTING DELETED */





