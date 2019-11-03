document.getElementById("logoutKnap").onclick = function(e) {
    e.preventDefault() // denne er blevet brugt for at siden ikke reloader som default hvilket gør at vi ved klik på knappen vil blive viderført tilbage til det ønskede site
    localStorage.removeItem('currentUser'); // bruger remove item "currentUser" for kun og logge den nuverende bruger ud så vi ikke sletter alt local storage
    window.location.href="login.html";
    alert("You have been logged out")
}