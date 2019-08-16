const express = require('express');

const router = express.Router();

const rootDir = require('../util/path');

const path = require('path');

const adminData = require('./admin');

const StudentData = adminData.students;

router.get('/',(req,res,next)=>{
  //  console.log('Coming from Students ',adminData.students);
    res.render('students',{pageTitle:'Students' , SD : StudentData});
    
});

module.exports = router;