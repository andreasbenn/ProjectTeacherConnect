// document.getElementById("logoutKnap").onclick = function() {
//     location.href="login.html";
// };

document.getElementById("logoutKnap").onclick = function(e) {
    e.preventDefault() // denne er blevet brugt for at siden ikke reloader som default hvilket gør at vi ved klik på knappen vil blive viderført tilbage til det ønskede site
    localStorage.removeItem('currentUser');
    window.location.href="login.html";
    alert("You have been logged out")
}

// function clearUser() {
//     localStorage.clear();
//     alert("You have been logged out")