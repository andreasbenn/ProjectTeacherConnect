import * as users from './modules/users.mjs';
/*
$.getJSON("http://localhost:3000/user/getUsers", function(data){
    console.log(data)
});
 */

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
                    var user = response.user;
                    localStorage.setItem("user", JSON.stringify(user));
                    window.location.href = 'home.html';
                } else {
                    alert("forkert");
                }
                console.log(response);
            },
        })
}


    });
/*
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
});

 */
/*
$("#login").submit((e) => {
    e.preventDefault();
    let inputData = $("#login").serialize();
    console.log(inputData);
    $.ajax({
        url:'http://localhost:3000/user/login',
        success:function () {
        alert('test')
        },
        error: function (xhr,error) {
            console.debug(xhr); console.debug(error)
        }

    })
});
*/


/*
$("#login").submit((e) => {
    e.preventDefault();
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    var settings = {
        "url": `http://localhost:3000/user/login`,
        "method": "POST",
        "timeout": 0,
        "data": {email:email},
        success:function (response) {
            $('body').append(response)
        }
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
});
 */