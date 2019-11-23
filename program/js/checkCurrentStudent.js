var currentStudent = JSON.parse(localStorage.getItem("currentStudent"));


if(currentStudent === null){
    alert("You are currently not logged in-" +
        "We will now direct you to our login page");
    window.location.href="login.html";
}