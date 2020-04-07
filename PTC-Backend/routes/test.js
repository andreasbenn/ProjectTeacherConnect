const express = require('express');
const app = new express();
const mongoose = require('mongoose');
const User = require('../models/User');
var router = express.Router();


router.get('/getUsers', async (req,res,next) =>{
    try {
        const users = await User.find({});
        res.json (users);
    } catch (err) {
        res.json({msg : 'Fail' + err})
    }
    next();
});
module.exports = router;

