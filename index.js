const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const port = process.env.PORT||3000;

const path = require('path');

app.use(bodyParser.urlencoded({extended:false}));

const adminStudents = require('./routes/admin');

const studentRouter = require('./routes/students');

app.use(express.static(path.join(__dirname,'public')));

app.set('view engine', 'ejs');

app.set('views','views');

app.use('/admin',adminStudents.routes);

app.use(studentRouter);

app.use((req,res,next)=>{
    
    res.status(404).render('404',{pageTitle:'Page Not found !'});

    
});



app.listen(port,()=>{console.log(`Listening on port ${port}`)});