class User{
  constructor(firstName,lastName, phoneNumber, email, address, studentID, password){
      this.firstName = firstName;
      this.lastName = lastName;
      this.phoneNumber = phoneNumber;
      this.email = email;
      this.address = address;
      this.studentID = studentID;
      this.password = password;
  }

}

var user1 = new User(
    "Søren",
    "Poulsen",
    "27240520",
    "sopo19ad@student.cbs.dk",
    "Syrefabriksvej 24, 1411 København K",
    "1997",
    "1234");

var user2 = new User(
    "Oliver",
    "Michelsen",
    "12345678",
    "olmi19ab@student.cbs.dk",
    "Howitzvej 61, 2000 Frederiksberg",
    "2222222222",
    "Oliver");

var user3 = new User(
    "Andreas",
    "Bennecke",
    "27593610",
    "anbe17aj@student.cbs.dk",
    "Howitzvej 60, 2000 Frederiksberg",
    "1111111111",
    "1234")

var user4 = new User(
    'Jeppe',
    'Reuther',
    '88888888',
    'jere19ac@student.cbs.dk',
    'howitzvej 90, 2000 Frederiksberg',
    '1234567890',
    '1234')


// make new instances of Program for each program
if (localStorage.getItem('User') == null) {
    var userList = [];
    userList.push(user1)
    userList.push(user2)
    userList.push(user3)
    userList.push(user4)



    var usserListString = JSON.stringify(userList)
    localStorage.setItem("User", usserListString    )
} else {
    var userList = JSON.parse(localStorage.getItem("User"))
}

