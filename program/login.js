// Her laver jeg en function som tester om username og password eksistere i min dummydata (ddLogin.js)
// Here I'm making a function that tests if the username and password is corect from my dummydata (ddLogin.js)
var loginKnap = document.getElementById("loginKnap");
var currentLogIn = [];
var existingUser = JSON.parse(localStorage.getItem('User'));
// var existingAdmin = JSON.parse(localStorage.getItem("Admin"));
// (var attempt = 3; -- dette er ikke nødvendigt for vores kode men kunne deffinere denne til fx 3 og så nede i min attempt skrive 3 og så lave et forloop så den efter
// hver fejlagtigt login forsøg tæller ned såden, at attempt nu er lig 2 osv.)


//I'm using "login" because that's the ID i have given it in HTML
// All of the code below is what i would like to run when clicking on the login button. (verrify email etc...)
loginKnap.onclick = function () {
    //user loginn
    var emailInput = document.getElementById("email").value;
    var passwordInput = document.getElementById("password").value;
    // now i will do the same for our admin login info
   // var adminUserNameInput = document.getElementById("email").value;
   // var adminPasswordInput = document.getElementById("password").value;


    for(i = 0;  i < existingUser.length; i++) {
        if (emailInput == existingUser[i].email && passwordInput == existingUser[i].password) {
            //push userName to current local storage
            currentLogIn.push({email: emailInput});
            document.location.href = "test.html";
            var IDString = JSON.stringify(currentLogIn);
            localStorage.setItem('currentUser', IDString);
            userExists = true;

        }
        // else if (emailInput == existingAdmin[i].adminUserName && passwordInput == existingAdmin[i].adminPassword) {
        //     currentLogIn.push({adminUserName: emailInput});
        //     document.location.href = "adminPage.html";
        //     var adminIDString = JSON.stringify(currentLogIn);
        //     localStorage.setItem('currentAdmin', adminIDString);
        //     userExists = true;
        }
             alert("Username or password is incorrect or doesn't not exist, plaese try again")
             if (emailInput != existingUser[i].email || passwordInput != existingUser[i].password)
            return false;
        }
    // alert("Username or password is incorrect or does not exist, plaese try again")
    // if (attempt) //attempt is undefiened as we don't have that in our site as of jet
    // {
    //     document.getElementById("email").disabled = true;
    //     document.getElementById("password").disabled = true;
    //     document.getElementById("loginKnap").disabled = true;
    //     return false;
    // }






// here I'm making a simple function that alerts a user trying to create a user, with the message "This is currently not a part of this version of the program"
// more or less the same principle as my create course but with the difference being that's it not possible.
var submitKnap = document.getElementById("submitKnap");
submitKnap.onclick = function() {
    alert("Not yet a part of this version of program")
    if (attempt) {
        document.getElementById("createName").disabled = true;
        document.getElementById("createUserName").disabled = true;
        document.getElementById("createPassword").disabled = true;
        document.getElementById("createRepeatPassword").disabled = true;
        document.getElementById("submitKnap").disabled = true;
    }
}
// linjen hvor der står 'attempt' skal jeg lige have forklaret hvorfor den skal stå der. hvis jeg sletter den virker min funktion ikke. jeg ikke noget med attempts

//below i will like to create a function that gives an error if the username and password is incorrect or not equal to my dummy data from ddLogin.js
// Ill start by making an alert function and after specifie the criterias in form of an if statement


    //
    // alert("Username or password is incorrect or does not exist, plaese try again")
    // if (attempt) //attempt is undefiened as we don't have that in our site as of jet
    //      {
    //     document.getElementById("email").disabled = true;
    //     document.getElementById("password").disabled = true;
    //     document.getElementById("loginKnap").disabled = true;
    //     return false;
    //      }
