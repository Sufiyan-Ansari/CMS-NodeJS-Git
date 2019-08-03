const express = require('express');
const router = express.Router();
const rootDir = require('../util/path');
const path = require('path');
router.get('/add-student',(req,res,next)=>{
    console.log('This is add student');
    
    res.sendFile(path.join(rootDir,'views','Add-students.html'));    
});
router.post('/add-student',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;