// Søren

// make constructor for class user
class User{
    constructor(firstName, lastName, phoneNumber, email, address, studentID, password){
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.address = address;
        this.studentID = studentID;
        this.password = password;
    }
}

// make new instances of Program for each program
if (localStorage.getItem('User') == null) {
var user1 = new User(
    "Andreas",
    "Bennecke",
    "27593610",
    "anbe17aj@student.cbs.dk",
    "Howitzvej 60, 2000 Frederiksberg",
    "1111111111",
    "1234");

var user2 = new User(
    "Oliver",
    "Michelsen",
    "12345678",
    "olivermichelsen@test.dk",
    "Howitzvej 61, 2000 Frederiksberg",
    "2222222222",
    "Oliver");

var user3 = new User(
    "Søren",
    "Poulsen",
    "87654321",
    "SørenPoulsen@test.com",
    "Howitzvej 62, 2000 Frederiksberg",
    "3333333333",
    "1234")


    var usserListString = JSON.stringify(userList)
    localStorage.setItem("User", usserListString    )
} else {
    var userList = JSON.parse(localStorage.getItem("User"))
}


// saves created users to local storage
function storeUsers(){
    localStorage.setItem("user1", JSON.stringify(user1))
    localStorage.setItem("user2", JSON.stringify(user2))
    localStorage.setItem("user3", JSON.stringify(user3))
}

// Dummydata for en database: Tjekke om  burgernavn og password eksistere (hvis ikke kan vi overveje om vi skal have "Create" muligheden med)
class User {
    constructor(userName, password,) {

        this.userName = userName;
        this.password = password;
    }
}

if (localStorage.getItem('User') == null) {
    var userList = [];
    userList.push(new User(
        "sopo19ad@student.cbs.dk",
        "1234"));

    userList.push(new User(
        "qwer12ty@student.cbs.dk",
        "5678"));

    userList.push(new User(
        "anbe17aj@student.cbs.dk",
        "1234"));

    userList.push(new User(
        "olmi19ab@student.cbs.dk",
        "Oliver"));

    //Jeg vil gerne pushe overstående værdier ind i mit forloop i "login.js" men får ikke rigtig lov, men det kan jeg love dig for, at jeg gør nu og så ikke
    // det virker nu og det er fordi man inde i consolen skal cleare local storage hvis man tilføjer flere

    //JSON bruger jeg da man kun kan have strings i localStorage og jeg har det pt i arrays. JSON konverterer dette til strings.

    var usserListString = JSON.stringify(userList)
    localStorage.setItem("User", usserListString    )
} else {
    var userList = JSON.parse(localStorage.getItem("User"))
}

// make new instances of Program for each program
if (localStorage.getItem('User') == null) {
    var userList = [];
    userList.push(new User(
        "Andreas",
        "Bennecke",
        "27593610",
        "anbe17aj@student.cbs.dk",
        "Howitzvej 60, 2000 Frederiksberg",
        "1111111111",
        "1234");

    userList.push(new User(
        "Oliver",
        "Michelsen",
        "12345678",
        "olmi19ab@student.cbs.dk",
        "Howitzvej 61, 2000 Frederiksberg",
        "2222222222",
        "Oliver");

    userList.push(new User(
        "Søren",
        "Poulsen",
        "87654321",
        "sopo19ad@student.cbs.dk",
        "Howitzvej 62, 2000 Frederiksberg",
        "3333333333",
        "1234")


    var usserListString = JSON.stringify(userList)
    localStorage.setItem("User", usserListString    )
} else {
    var userList = JSON.parse(localStorage.getItem("User"))
}

// saves users to local storage
// function storeUsers(){
//     localStorage.setItem("user1", JSON.stringify(user1))
//     localStorage.setItem("user2", JSON.stringify(user2))
//     localStorage.setItem("user3", JSON.stringify(user3))
