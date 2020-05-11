document.getElementById("logoutBtn").onclick = function(e) {

    // This preventDefault method is used so the click on the button will not refresh the current site, but simply run the code and move the user to the login page.
    e.preventDefault()

    $.ajax({
        url: "http://localhost:3000/user/logout",
        method: "GET",
        success: function () {

            // .removeItem() is a javascript method (Mozilla, Storage RemoveItem)
            // (n.d.). Storage.removeItem(). mozilla. Retrieved from https://developer.mozilla.org/en-US/docs/Web/API/Storage/removeItem
            localStorage.removeItem("token");

            alert("You have been logged out")

            // This code returns the client to the specific html site.
            window.location.href = "login.html";

        }
    });
}
