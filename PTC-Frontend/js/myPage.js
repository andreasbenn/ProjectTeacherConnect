function tokenForData() {
    // currentWebToken is an encrypted token in the localStorage. If you decrypt it it will be an ID in the database of an user.
    var currentWebToken = JSON.parse(localStorage.getItem('token'))

    // ajax call to post the current logged user to the API and get the users information from the database.
    $.ajax({
        url: "http://localhost:3000/user/getUserData",
        method: 'POST',
        datatype: "json",
        // {} as we don't want it as a string in the backend because the database does not contain " "s.
        data: ({student: currentWebToken}),
        success: function (response) {
            // Fills the MyPage with the current logged users information.
            document.getElementById("userFullName").value = response.fullName;
            document.getElementById("userPhoneNumber").value = response.phoneNumber;
            document.getElementById("userEmail").value = response.email;
            document.getElementById("userAddress").value = response.address;
            document.getElementById("userStudentID").innerHTML = response.StudentID;
            document.getElementById("userProgram").innerHTML = response.program;
            console.log(response)
        },
    })
}
tokenForData();

// This jquery function adds an onclick function to an id that allows the user to update his or her information in the database.
// # = id, . = class
$('#updateInformation').click(function () {
        var currentWebToken = JSON.parse(localStorage.getItem('token'));

        // The user is only allowed to change 4 attributes of his or her user. So we create an object with those 4 current information(after they have been possibly changed, unchanged values will stay the same)
        var updatedUser = {
            fullName: document.getElementById("userFullName").value,
            phoneNumber: document.getElementById("userPhoneNumber").value,
            email: document.getElementById("userEmail").value,
            address: document.getElementById("userAddress").value,
        }
        console.log(updatedUser)

        // ajax call to send the current logged user and the new updated information to the API so it can update it in the database.
        $.ajax({
            url: "http://localhost:3000/user/updateInformation",
            method: 'POST',
            datatype: "json",

            // newInformation / currentWebToken assigns that name to the values we pass as data.
            data: ({newInformation: JSON.stringify(updatedUser), student: currentWebToken}),
            success: function (response) {
                // We call tokenForData, to get the function that gets the information from the database back, as we just updated it.
                tokenForData();
                console.log(response)
                alert("Du har nu opdateret dine personlige oplysninger");
            },
        })
    }
);

// This function shows the current logged users registered bookings in the database.
function showCurrentUserBookings() {
    var currentWebToken = JSON.parse(localStorage.getItem('token'))

    // ajax call to get all the bookings that the current logged user have made. It also creates the elements on the HTML page.
    $.ajax({
        url: "http://localhost:3000/user/getUserBookings",
        method: 'POST',
        datatype: "json",
        data: ({student: currentWebToken}),
        success: function (response) {
            console.log(response)
            // saves the response (array) equal to an object we can use here in the frontend.
            var currentUserBookings = response;

            // empty string that we can use additional assign to so we can create HTML objects from JS.
            var booking = "";

            for(var i = 0; i < currentUserBookings.length; i++){
                if(currentUserBookings[i].topic == undefined){
                    currentUserBookings[i].topic = "Not a specific one";
                }
                console.log(currentUserBookings[i].topic)
                // additional assignment that adds the attributes of the current index' of currentUserBookings into HTML values to be showed on the database.
                // We create individual divs but also make them <input type='radio' since we want to allow the user to tick off current bookings to remove/cancel.
                booking += "<div><input type='radio' class='bookings' id ='" + currentUserBookings[i]._id + "'>" +"<br/> <b>" + 'Course: ' + "</b>" + currentUserBookings[i].course + "<br/> <b>" +'Teacher: ' + "</b>" + currentUserBookings[i].teacher + "<br/> <b>" + 'Topic: ' + "</b>" + currentUserBookings[i].topic + "<br/> <b>" + 'Date: ' + "</b>" + currentUserBookings[i].date + "<br/> <b>" + 'Time: ' + "</b>" + currentUserBookings[i].time + "<br/> </input></div>";
            }

            // there's an empty class in HTML 'allBookings', which we here fill in with the string 'booking'.
            // Above we created a <div> for each booking registered for that user, by doing this, it allows us to show each individual booking in HTML from the class 'bookings'.
            document.getElementsByClassName("allBookings")[0].innerHTML = booking;
        },
    })
}
showCurrentUserBookings();

// This jquery function adds an onclick function to an id that allows the user to remove bookings registered in his or her name in the database.
// # = id, . = class
$('#removeBookings').click(function(){
    var allCheckedBookings = []
    // [0] because we have a form that inside has an 'array' that has multiple objects in it.
    var checkbox = document.getElementsByClassName('allBookings')[0];

    // Runs through and sees if the checkbox on that booking is checked.
    for (var i = 0; i < checkbox.length; i++){
        if(checkbox[i].checked){
            allCheckedBookings.push(checkbox[i].id);
        }
    }

    // ajax call to send the checked booking id's (the ids are booking id's in the database) to the API which allows us from there to delete them from the database.
    $.ajax({
        url: "http://localhost:3000/user/removeBookings",
        method: 'POST',
        datatype: "json",
        data: ({checkedBookings: JSON.stringify(allCheckedBookings)}),
        success: function (response) {
            console.log(response)
            if(response == 0){
                alert("Du har ikke valgt nogle bookings du ønsker at slette");
            }
            else{
                alert("De valgte bookings er nu slettet.")
            }

            // location.reload to reload the page with the new updated bookings for the current logged user.
            // https://www.w3schools.com/jsref/met_loc_reload.asp
            location.reload();
        },
    })

});
