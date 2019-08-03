const express = require('express');
const router = express.Router();
const rootDir = require('../util/path');
const path = require('path');

router.get('/',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','Students.html'))
});

module.exports = router;