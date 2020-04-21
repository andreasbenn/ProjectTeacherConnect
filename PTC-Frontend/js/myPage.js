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

