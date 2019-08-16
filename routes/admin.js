const express = require('express');

const router = express.Router();

const rootDir = require('../util/path');

const path = require('path');

//initialize new array 
const students = [];

router.get('/add-student',(req,res,next)=>{
  //  console.log('This is add student');
    
    res.render('Add-students' , {pageTitle:'Add New Student'});    
});

router.post('/add-student',(req,res,next)=>{

  //  console.log(req.body);
    
    students.push({ title : req.body.title });

    res.redirect('/');
});

//module.exports = router;

exports.routes = router;
exports.students = students;