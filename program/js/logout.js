document.getElementById("logoutBtn").onclick = function(e) {
    e.preventDefault() // denne er blevet brugt for at siden ikke reloader som default hvilket gør at vi ved klik på knappen vil blive viderført tilbage til det ønskede site
    localStorage.removeItem('currentStudent'); // bruger remove item "currentUser" for kun og logge den nuverende bruger ud så vi ikke sletter alt local storage
    localStorage.removeItem('currentProgram');
    localStorage.removeItem('selectedCourseTeachers');
    localStorage.removeItem('allStudents');
    localStorage.removeItem('allPrograms');
    localStorage.removeItem('allCourses');
    localStorage.removeItem('allTopics');
    localStorage.removeItem('allTeachers');
    localStorage.removeItem('objectOrientated');
    alert("You have been logged out");
    window.location.href="login.html";
}