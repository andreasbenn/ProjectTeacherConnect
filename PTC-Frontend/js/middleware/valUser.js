// This middleware is used to check if a user is locked in. This kind of function should be on the backend, but because the group is using localstorage, to store its users,  it is used on the frontend.

if(typeof window !== "undefined"){

// The const gets the token from the localStorage which is created when a user logs in.
const token = JSON.parse(localStorage.getItem("token"));

if(token === null) {
    alert('ikke logget ind');
    window.location.href = "login.html"
    }
}
