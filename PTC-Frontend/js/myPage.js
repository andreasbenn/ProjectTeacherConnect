import User from "./classes/userClass.js";

function tokenForData() {
    var currentWebToken = JSON.parse(localStorage.getItem('token'))

    $.ajax({
        url: "http://localhost:3000/user/getUserData",
        method: 'POST',
        datatype: "json",
        data: ({currentWebToken}),
        success: function (response) {
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

$('#updateInformation').click(function () {
        var currentWebToken = JSON.parse(localStorage.getItem('token'));

        var updatedUser = {
            fullName: document.getElementById("userFullName").value,
            phoneNumber: document.getElementById("userPhoneNumber").value,
            email: document.getElementById("userEmail").value,
            address: document.getElementById("userAddress").value,
        }
        console.log(updatedUser)

        $.ajax({
            url: "http://localhost:3000/user/updateInformation",
            method: 'POST',
            datatype: "json",
            data: ({newInformation: JSON.stringify(updatedUser), currentWebToken: currentWebToken}),
            success: function (response) {
                tokenForData();
                console.log(response)
            },
        })
    }
);

function showCurrentUserBookings() {
    var currentWebToken = JSON.parse(localStorage.getItem('token'))

    $.ajax({
        url: "http://localhost:3000/user/getUserBookings",
        method: 'POST',
        datatype: "json",
        data: ({currentWebToken}),
        success: function (response) {
            console.log(response)
            var currentUserBookings = response;
            var booking = "";
            for(var i = 0; i < currentUserBookings.length; i++){

                booking += "<div><input type='radio' class='bookings' id ='" + currentUserBookings[i]._id + "'>" +"<br/> <b>" + 'Course: ' + "</b>" + currentUserBookings[i].course + "<br/> <b>" +'Teacher: ' + "</b>" + currentUserBookings[i].teacher + "<br/> <b>" + 'Topic: ' + "</b>" + currentUserBookings[i].topic + "<br/> <b>" + 'Date: ' + "</b>" + currentUserBookings[i].date + "<br/> <b>" + 'Time: ' + "</b>" + currentUserBookings[i].time + "<br/> </input></div>";
            }

// We have created an empty class in HTML 'bookings', which we here fill in with the string 'booking'.
// Above we created a <div> for each booking registered for that user, by doing this, it allows us to show each individual booking in HTML from the class 'bookings'.
            document.getElementsByClassName("allBookings")[0].innerHTML = booking;
        },
    })
}
showCurrentUserBookings();

$('#removeBookings').click(function(){
    var allCheckedBookings = []
    var checkbox = document.getElementsByClassName('allBookings')[0];

    for (var i = 0; i < checkbox.length; i++){
        if(checkbox[i].checked){
            allCheckedBookings.push(checkbox[i].id);
        }
    }

    $.ajax({
        url: "http://localhost:3000/user/removeBookings",
        method: 'POST',
        datatype: "json",
        data: ({checkedBookings: JSON.stringify(allCheckedBookings)}),
        success: function () {
            alert("De valgte bookings er nu slettet.")
            location.reload();
        },
    })

});
