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

// Show user on My Profile
function displayUser(user) {
    document.getElementById("userFirstName").innerHTML = user.firstName;
    document.getElementById("userLastName").innerHTML = user.lastName;
    document.getElementById("userPhoneNumber").innerHTML = user.phoneNumber;
    document.getElementById("userEmail").innerHTML = user.email;
    document.getElementById("userAddress").innerHTML = user.address;
    document.getElementById("userStudentID").innerHTML = user.studentID;
}
displayUser(user3);

var testID = "day" +
    1;
var html ='<li id="' + testID + '">'