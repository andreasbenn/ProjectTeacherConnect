// This is a logout function.
// We have a button in our HTML, with the ID 'logoutBtn'.
// We add an .onclick function to this button, by using the DOM, document.getElementById("id name").
// This function will clear all the irrelevant information in localStorage to reverse back to our login page, which will only contain certain information.
// ('allStudents' and 'allCourses' (which keeps the popularity counter with topics) and 'Bookings').

document.getElementById("logoutBtn").onclick = function(e) {
    // This preventDefault method is used so the click on the button will not refresh the current site, but simply run the code and move the user to the login page.
    e.preventDefault()

    // Removes keys from localStorage that we no longer need.
    localStorage.removeItem('currentStudent');
    localStorage.removeItem('currentProgram');
    localStorage.removeItem('selectedCourseTeachers');
    localStorage.removeItem('allStudents');
    localStorage.removeItem('allPrograms');
    localStorage.removeItem('allTopics');
    localStorage.removeItem('allTeachers');
    localStorage.removeItem('objectOrientated');

    // Simple alert with message for the user to be notified that he or she has been logged out.
    alert("You have been logged out");

    // Here we use the window.location object, which allows us to redirect the user to a specific site, in this case the login page after he or she has logged out.
    window.location.href="login.html";
}