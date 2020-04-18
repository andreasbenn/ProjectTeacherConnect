import * as users from './modules/users.mjs';

$.ajax({
    datatype: 'json',
    url: 'http://localhost:3000/user/getUsers',
    success: function (data) {
        let allUsers = users.formatUsers(data);
        console.log(allUsers);
        localStorage.setItem('allUsers', JSON.stringify(allUsers))
    },
    error: function(xhr, error){
        console.debug(xhr); console.debug(error);
    }
});

$("#login").submit((e) => {
    e.preventDefault();
    var inputData = $("#login").serialize();
    console.log(inputData);
    if(true) {
        $.ajax({
            url: "http://localhost:3000/user/login",
            method: 'POST',
            datatype: "json",
            data: inputData,
            success: function (response) {
                if(response.success) {
                    var token = response.token;
                    localStorage.setItem("token",JSON.stringify(token));
                    window.location.href = 'home.html';
                } else {
                    alert("forkert");
                }
                console.log(response);
            },
        })
    }
});