// -------------- //
// @author: Andreas Emanuel Bennecke

// We use the method JSON.parse, which parses down the JSON string with key 'currentStudent' from localStorage, and turns it back into an object (var in this case).
var currentStudentArray = JSON.parse(localStorage.getItem("currentStudent"));
// Here we set 'currentStudent' as the first index (index 0) in the 'currentStudentArray', as this index has the object of the current user.
// This way we don't have to refer every time to index 0 in the code below.
var currentStudent = currentStudentArray[0];

// -------------- //
// @author: Andreas Emanuel Bennecke

// We use this function to show the information based on the object 'currentStudent' in our HTML.
// To do that we use DOM, with the method document.getElementById("id name").
// We do this for every relevant information/value we have on the object 'currentStudent'.
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

// -------------- //
// @author: Andreas Emanuel Bennecke

// Defining variable bookings (an array) and setting the value by parsing down key 'Bookings' from localStorage.
var bookings = JSON.parse(localStorage.getItem("Bookings"));

// Here we create an empty array to use in our function below. This array will be the array that will be used to show bookings on 'My Page'.
currentStudentBookings = [];

// Here we make a for loop that goes through every index of array 'bookings'.
// It then through an if statement checks if the individual bookings studentIDs matches the currently logged ins studentID (statement inside the parenthesis).
// If the statement is true, it will push that index into 'currentStudentBookings' array.

// -------------- //
// @author: Andreas Emanuel Bennecke

function currentIDBookings(){
    for(i = 0; i < bookings.length; i++){
        if(bookings[i].studentID == currentStudent.studentID) {
            currentStudentBookings.push(bookings[i]);
        }
    }
}

// Calls the function 'currentIDBookings' so it's being executed.
currentIDBookings();

// -------------- //
// @author: Andreas Emanuel Bennecke

// Here we create an empty string 'booking' so we can use it to "push" HTML code in into it with method +++++ (add comment from Oliver with correct name for push)
booking = "";

// Here we have a for loop that runs through every index of the array 'currentStudentBookings'. We do this by letting the loop run for the 'currentStudentBookings' array length amount.
// It adds a string with HTML syntax to the empty string 'booking' with values from that index' (course, teacher, topic, day, hour) +++++ (add comment from Oliver with correct name for push)
// This allows us to dynamically create <div> tags for each booking the logged in user has, and allows us to only show the relevant information to the logged in user.
for(i = 0; i < currentStudentBookings.length; i++){

    booking += "<div class='bookings' id ='" + "booking" + i +  "' + style='border: 1px solid gray'>" + "<b>" + 'Course: ' + "</b>" + currentStudentBookings[i].course + "<br/>" + "<b>" +'Teacher: ' + "</b>" + currentStudentBookings[i].teacher + "<br/>" + "<b>" + 'Topic: ' + "</b>" + currentStudentBookings[i].topic + "<br/>" + "<b>" + 'Day: ' + "</b>" + currentStudentBookings[i].day + "<br/>" + "<b>" + 'Hour: ' + "</b>" + currentStudentBookings[i].hour + "<br/>"+ "<br/>" + "</div>";

}

// We have created an empty class in HTML 'bookings', which we here fill in with the string 'booking'.
// Above we created a <div> for each booking registered for that user, by doing this, it allows us to show each individual booking in HTML from the class 'bookings'.
document.getElementsByClassName("bookings")[0].innerHTML = booking;