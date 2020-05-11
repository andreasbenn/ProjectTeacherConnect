import * as users from './modules/users.mjs';

// Here we use ajax syntax to reference to the login id from the login.html when the user clicks the submit button.
$("#login").submit((e) => {

    // This preventDefault method is used so the click on the button will not refresh the current site, but simply construct the variable inside the function, and afterwwoods send a POST request with the input data.
    e.preventDefault();

    // We create a variable which takes the userinput from the form, and serialize the data so it is possible to send it to the backend in the API call.
    var inputData = $("#login").serialize();

    console.log(inputData);

        $.ajax({
            url: "http://localhost:3000/user/login",
            method: "POST",
            datatype: "json",
            data: inputData,
            success: function (response) {
                // This if statement is called when the function to handle the login in the backend succeed.(the user exists and has passed the right password.)
                if(response.success) {

                    var token = response.token;

                    // The token send from the backend is stored to localStorage.
                    // This token is the users encoded userId
                    localStorage.setItem("token",JSON.stringify(token));

                    // This code returns the client to the specific html site.
                    window.location.href = "home.html";

                // The else statement is called when success:false;
                } else {
                    alert("forkert");
                }
                console.log(response);
            },
        })
});