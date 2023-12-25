const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin, Course} = require("../db/index");
const jwt = require('jsonwebtoken');
require('dotenv').config()

router.post('/signup', async(req, res) => {

    await Admin.create({
        username: req.body.username,
        password: req.body.password
    })
    res.json({
        message: 'Admin created successfully'
    })
});

router.post('/signin', async(req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    const checkUsername = await Admin.findOne({ username: username });
    const checkPassword = await Admin.findOne({password: password});

    if(checkUsername !== null && checkPassword !== null){
        var token = jwt.sign({ username: username }, process.env.jwtPassword);
        res.json(token);
    } else {
    res.json({message: "Username or password not valid"});
    }
});

router.post('/courses', adminMiddleware, async(req, res) => {

    const newCourse = await Course.create({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        imageLink: req.body.imageLink
    })
    res.json({
        message: 'Course created successfully', 
        courseId: newCourse._id
    })
});

router.get('/courses', adminMiddleware, async(req, res) => {

    const allCourses = await Course.find({});
    res.json({courses: allCourses});
});

module.exports = router;