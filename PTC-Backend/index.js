const express = require('express');
const app = express();
const bodyParser = require ('body-parser');
const path = require('path');
const mongoose = require ('mongoose');
const expressSession = require('express-session');
const getClickedDateController = require('./controllers/getClickedDate');
const getCoursesController = require('./controllers/getCourses');
const getSelectedCourseController = require('./controllers/getSelectedCourse');
const getTopicController = require('./controllers/getTopic');
const newBookingController = require('./controllers/newBooking');
const getDatesController = require('./controllers/getDates');
const getUsersDateController = require('./controllers/getUserDate')
const getUserIdController = require('./controllers/getUserId')
const userLoginController = require('./controllers/userLogin');
const userUpdateInformationController = require('./controllers/userUpdateInformation');
const userRemoveBookingsController = require('./controllers/userRemoveBookings');
const getUserBookingsController = require('./controllers/getUserBookings');
const userLogoutController = require('./controllers/userLogout');
const getUserDataController = require('./controllers/getUserData');
const Teacher = require('./models/Teacher');
const Topic = require('./models/Topic');
const Booking = require('./models/Booking');

//Cors policy burde virke nu
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:63342"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(expressSession({
    secret: 'keyboard cat'
}));

// secret gør at den er krypteret og dermed ikke som bliver delt med browseren.
mongoose.connect('mongodb://localhost/ptc_db', {useNewUrlParser: true });
const port = 3000;
app.listen(port, ()=>{
    console.log("App listening on port" + port);
});

//Den her får hele lortet til at virke
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// App and get requests through controllers
app.post('/user/getUserData', getUserDataController);
app.post('/user/login', userLoginController);
app.post('/course/getCourses', getCoursesController);
app.post('/user/getUserDate',getUsersDateController)
app.get('/user/date', getDatesController);
app.post('/user/date', getClickedDateController);
app.post('/user/updateInformation', userUpdateInformationController);
app.post('/user/getUserBookings', getUserBookingsController);
app.post('/user/removeBookings', userRemoveBookingsController);
app.post('/user/test', getUserIdController);
app.get('/user/logout', userLogoutController);
app.post('/course/getCourses', getCoursesController);
app.post('/course/selectedCourse', getSelectedCourseController);
app.post('/topic', getTopicController);
app.post('/booking/newBooking', newBookingController);
