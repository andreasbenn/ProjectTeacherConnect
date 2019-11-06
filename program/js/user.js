// Andreas

class User{
    constructor(firstName, lastName, phoneNumber, email, address, studentID){
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.address = address;
        this.studentID = studentID;
    }
}

// make new instances of Program for each program
var user1 = new User("Andreas","Bennecke", "27593610", "anbe17aj@student.cbs.dk", "Howitzvej 60, 2000 Frederiksberg", "1111111111");
var user2 = new User("Oliver", "Michelsen", "12345678", "olivermichelsen@test.dk", "Howitzvej 61, 2000 Frederiksberg", "2222222222");
var user3 = new User("Søren", "Poulsen", "87654321", "SørenPoulsen@test.com", "Howitzvej 62, 2000 Frederiksberg", "3333333333")

// saves users to local storage
function storeUsers(){
    localStorage.setItem("user1", JSON.stringify(user1))
    localStorage.setItem("user2", JSON.stringify(user2))
    localStorage.setItem("user3", JSON.stringify(user3))
}

// calls the function storeUsers to initiate the storing
storeUsers();

var currentUser = JSON.parse(localStorage.getItem("currentUser"));

// Show user on My Profile
function displayUser() {
    document.getElementById("userFirstName").innerHTML = currentUser[0].firstName;
    document.getElementById("userLastName").innerHTML = currentUser[0].lastName;
    document.getElementById("userPhoneNumber").innerHTML = currentUser[0].phoneNumber;
    document.getElementById("userEmail").innerHTML = currentUser[0].email;
    document.getElementById("userAddress").innerHTML = currentUser[0].address;
    document.getElementById("userStudentID").innerHTML = currentUser[0].studentID;
    document.getElementById("userProgram").innerHTML = currentUser[0].program;
}
displayUser();

var testID = "day" +
    1;
var html ='<li id="' + testID + '">'