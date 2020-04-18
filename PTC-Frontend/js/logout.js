document.getElementById("logoutBtn").onclick = function(e) {
    // This preventDefault method is used so the click on the button will not refresh the current site, but simply run the code and move the user to the login page.
    e.preventDefault()

    $.ajax({
        url: "http://localhost:3000/user/logout",
        method: 'GET',
        success: function () {

            localStorage.removeItem('token');

            alert('You have been logged out')

            window.location.href = 'login.html';
        }
    });
}
