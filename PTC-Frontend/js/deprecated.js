import * as users from "./modules/users";

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