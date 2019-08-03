const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT||3000;
const path = require('path');
app.use(bodyParser.urlencoded({extended:false}));
const adminRouter = require('./routes/admin');
const studentRouter = require('./routes/students');

app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminRouter);
app.use(studentRouter);
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
});



app.listen(port,()=>{console.log(`Listening on port ${port}`)});