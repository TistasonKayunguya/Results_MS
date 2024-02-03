const express = require("express");
const bdp = require("body-parser");
const {createPool} = require("mysql");

const pool = createPool({host:"localhost", user:"root", password:"", database:"resultms"});

app = express();
app.use(bdp.urlencoded({extended: true}));
app.set("view engine", "pug");

app.listen(8080, (err, req)=>{
    console.log("The server is listening to port:8080...");
});

app.get('/', (req, res)=>{
    res.render('index');
});

app.get('/result',(req, res)=>{
    res.render('result');
});

app.get('/home', (req, res)=>{
    res.render('home');
});

app.post('/login', (req, res)=>{
    const {student_name, user_password}=req.body;
    const danta ={student_name, user_password};
    console.log(student_name, user_password);
    
    pool.query("insert into student SET ?",danta, (err, result, field)=>{
        if(err){
            console.log(err);
        }else{
            console.log("Query sent successifully");
        }
    });
});

