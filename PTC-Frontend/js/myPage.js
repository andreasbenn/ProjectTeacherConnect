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
            document.getElementById("userStudentID").value = response.StudentID;
            document.getElementById("userProgram").value = response.program;
            console.log(response)
        },
    })
}
tokenForData();

$('#day').click(function () {

});
