// Her laver jeg en function som tester om username og password eksistere i min dummydata (ddLogin.js)
var loginKnap = document.getElementById("loginKnap");
var currentLogIn = [];
var existingUser = JSON.parse(localStorage.getItem('User'));
// var attempt = 3; -- dette er ikke nødvendigt for vores kode men kunne deffinere denne til fx 3 og så nede i min attempt skrive 3 og så lave et forloop så den efter
// hver fejlagtigt login forsøg tæller ned såden, at attempt nu er lig 2 osv.



// vælger login da jeg har givet den det id inde i html
// hele den nedenstående element starter her da alt dette er en del af min login onklick funktion
loginKnap.onclick = function () {

    var emailInput = document.getElementById("email").value;
    var passwordInput = document.getElementById("password").value;

    for (let i = 0; i < existingUser.length; i++) {
        if (emailInput == existingUser[i].email && passwordInput == existingUser[i].password) {
            //skub username til nuværende locale lagring
            currentLogIn.push({email: emailInput})
            document.location.href = "test.html";
            var IDString = JSON.stringify(currentLogIn);
            localStorage.setItem('currentUser', IDString);
            return true;
        }
    }

// Nu vil jeg gerne lave en funktion som giver en fejmelding hvis inputtet ikke er lig med array-elementerne.
//jeg starter og lave en alert og derefter giver jeg den kriterier i form af en if statment
    alert("Username or password is incorrect or does not exist, plaese try again")
    if (attempt) {
        document.getElementById("email").disabled = true;
        document.getElementById("password").disabled = true;
        document.getElementById("loginKnap").disabled = true;
        return false;
    }
}

//her vil jeg lave en simple function der gør, at når vi trykker på vores submitkanp at den giver meddelesen om,
// at denne function ikke er en del af vores nuværende version - jeg laver mere elle mindre den samme funktion som til vores login
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