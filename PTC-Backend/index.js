const express = require('express');
const app = express();
const bodyParser = require ('body-parser');

const path = require('path');
const mongoose = require ('mongoose');
const User = require('./models/User');
const Course = require('./models/Course');


//Cors policy burde virke nu
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:63342"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});



mongoose.connect('mongodb://localhost/ptc_db', {useNewUrlParser: true});
const port = 3000;
app.listen(port, ()=>{
    console.log("App listening on port" + port);
});
app.use(express.static(__dirname));
//Den her får hele lortet til at virke
app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

app.get('/user/getUsers', async function(req, res){
    const users = await User.find({});
    res.json (users);
});

app.post('/user/login', async function (req, res) {
    var inputEmail = req.body.email;
    var inputPassword = req.body.password;
    let user = await User.find({email: inputEmail});
    if(user.length === 0) {
        res.json({msg:"Brugeren eksisterer ikke", success: false})
    }
    else if (user.length > 0 && user[0].password == inputPassword){
        res.json({msg:"Juhu", success: true, user: user[0]})
}
    else if(user.length > 0 && user[0].password != inputPassword){
        res.json({msg:"Øvbøv- du har skrevet forkert password", success: false})
    }

});

app.post('/course/getCourses', async function (req,res){
    var program = req.body.programID;
    console.log(program);
    let course = await Course.find({courseProgram: program})
    res.json({msg: "Her modtages alle fag fra det korrekte program", course: course});
    }
);

/*
app.use('/user/login',async function(req,res) {
    res.json([req.query.username,req.query.password])
});
*/


/*
app.use('/user', require('./routes/test'));
*/