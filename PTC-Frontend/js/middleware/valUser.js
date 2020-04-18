if(typeof window !== "undefined"){
const token = JSON.parse(localStorage.getItem("token"));
if(token === null) {
    alert('ikke logget ind');
    window.location.href = "login.html"
}
}
