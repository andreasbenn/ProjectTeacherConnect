// Gets currentUser from localStorage down so we can use the information in functions
var currentUser = JSON.parse(localStorage.getItem("currentUser"));

// Show user on My Profile. Reason why we have currentUser[0] is because the currentUser is an array, and the first index is 0.s
function displayUser() {
    document.getElementById("userFirstName").innerHTML = currentUser[0].firstName;
    document.getElementById("userLastName").innerHTML = currentUser[0].lastName;
    document.getElementById("userPhoneNumber").innerHTML = currentUser[0].phoneNumber;
    document.getElementById("userEmail").innerHTML = currentUser[0].email;
    document.getElementById("userAddress").innerHTML = currentUser[0].address;
    document.getElementById("userStudentID").innerHTML = currentUser[0].studentID;
    document.getElementById("userProgram").innerHTML = currentUser[0].program;
}
// Calls the function 'displayUser' so it's being executed.
displayUser();

// Creates a var 'bookings' that gets/saves all the bookings from localStorage, so we can use the information.
var bookings = JSON.parse(localStorage.getItem("Bookings"));

// Here we create an empty array to use in our function below. This array will be the array that will be used to show bookings on My Page.
currentUserBookings = [];

// Here we make a for loop that goes through every index of array 'bookings'. It checks if the individual bookings studentIDs
// matches the currently logged ins studentID. If it is, it will push that index into 'currentUserBookings' array.
function currentIDBookings(){
    for(i = 0; i < bookings.length; i++){
        if(bookings[i].studentID == currentUser[0].studentID) {
            currentUserBookings.push(bookings[i]);
        }
    }
}

// Calls the function currentIDBookings so it's being executed.
currentIDBookings();

// Creates empty string booking so we can use it to "push" HTML code in into it.
booking = "";

// For loop that runs through all the indexes of array currentUserBookings
// It adds a string with HTML syntax to the empty string 'booking' with values from that index' (course, teacher, topic, day, hour)
// This allows us to dynamically create <div> tags for each booking the logged in user has, and adds values to each for it to be shown on the site.
for(i = 0; i < currentUserBookings.length; i++){

    booking += "<div class='bookings' id ='" + "booking" + i +  "' + style='border: 1px solid gray'>" + "<b>" + 'Course: ' + "</b>" + currentUserBookings[i].course + "<br/>" + "<b>" +'Teacher: ' + "</b>" + currentUserBookings[i].teacher + "<br/>" + "<b>" + 'Topic: ' + "</b>" + currentUserBookings[i].topic + "<br/>" + "<b>" + 'Day: ' + "</b>" + currentUserBookings[i].day + "<br/>" + "<b>" + 'Hour: ' + "</b>" + currentUserBookings[i].hour + "<br/>"+ "<br/>" + "</div>";

}

// We have created an empty class in HTML 'bookings', which we here fill in with the string 'booking'
// which now has a <div> for each booking registered. This allows us to show each individual booking in HTML from the class 'bookings'.
document.getElementsByClassName("bookings")[0].innerHTML = booking;