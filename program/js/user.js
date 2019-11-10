// Gets currentUser from localStorage down so we can use the information in functions
var currentStudentArray = JSON.parse(localStorage.getItem("currentStudent"));
var currentStudent = currentStudentArray[0];

// Show user on My Profile. Reason why we have currentUser[0] is because the currentUser is an array, and the first index is 0.s
function displayUser() {
    document.getElementById("userFullName").innerHTML = currentStudent.fullName;
    document.getElementById("userPhoneNumber").innerHTML = currentStudent.phoneNumber;
    document.getElementById("userEmail").innerHTML = currentStudent.email;
    document.getElementById("userAddress").innerHTML = currentStudent.address;
    document.getElementById("userStudentID").innerHTML = currentStudent.studentID;
    document.getElementById("userProgram").innerHTML = currentStudent.program;
}
// Calls the function 'displayUser' so it's being executed.
displayUser();

// Creates a var 'bookings' that gets/saves all the bookings from localStorage, so we can use the information.
var bookings = JSON.parse(localStorage.getItem("Bookings"));

// Here we create an empty array to use in our function below. This array will be the array that will be used to show bookings on My Page.
currentStudentBookings = [];

// Here we make a for loop that goes through every index of array 'bookings'. It checks if the individual bookings studentIDs
// matches the currently logged ins studentID. If it is, it will push that index into 'currentStudentBookings' array.
function currentIDBookings(){
    for(i = 0; i < bookings.length; i++){
        if(bookings[i].studentID == currentStudent.studentID) {
            currentStudentBookings.push(bookings[i]);
        }
    }
}

// Calls the function currentIDBookings so it's being executed.
currentIDBookings();

// Creates empty string booking so we can use it to "push" HTML code in into it.
booking = "";

// For loop that runs through all the indexes of array currentStudentBookings
// It adds a string with HTML syntax to the empty string 'booking' with values from that index' (course, teacher, topic, day, hour)
// This allows us to dynamically create <div> tags for each booking the logged in user has, and adds values to each for it to be shown on the site.
for(i = 0; i < currentStudentBookings.length; i++){

    booking += "<div class='bookings' id ='" + "booking" + i +  "' + style='border: 1px solid gray'>" + "<b>" + 'Course: ' + "</b>" + currentStudentBookings[i].course + "<br/>" + "<b>" +'Teacher: ' + "</b>" + currentStudentBookings[i].teacher + "<br/>" + "<b>" + 'Topic: ' + "</b>" + currentStudentBookings[i].topic + "<br/>" + "<b>" + 'Day: ' + "</b>" + currentStudentBookings[i].day + "<br/>" + "<b>" + 'Hour: ' + "</b>" + currentStudentBookings[i].hour + "<br/>"+ "<br/>" + "</div>";

}

// We have created an empty class in HTML 'bookings', which we here fill in with the string 'booking'
// which now has a <div> for each booking registered. This allows us to show each individual booking in HTML from the class 'bookings'.
document.getElementsByClassName("bookings")[0].innerHTML = booking;