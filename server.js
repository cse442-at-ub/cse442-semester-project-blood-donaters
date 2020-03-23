var mysql = require('mysql');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var cors = require('cors');
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());
var mysql      = require('mysql');
let connection = mysql.createConnection({
  host:'tethys.cse.buffalo.edu',
  user: 'rahman46',
  password: '50294827',
  database: 'cse442_542_2020_spring_teamm_db'
});
connection.connect(function(err) {
  if (err) {
    console.log(err);
  } 
  console.log('Connected!');
});

app.post("/CSE442-542/2020-spring/cse-442m/register", function(req,res){
  console.log("hello");

  
var today = new Date();
  var users={
    "firstname":req.body.firstName,
    "lastname":req.body.lastName,
    "email":req.body.email,
    "passwords":req.body.password,
    "bloodgroup": req.body.bloodGroup,
    "medicalhistory": req.body.medicalHistory,
    "reg_date":today,
   
  }
  
  connection.query('INSERT INTO users SET ?',users, function (error, results, fields) {
  if (error) {
    console.log("error ocurred",error);
    res.send({
      "code":400,
      "failed":"error ocurred"
    })
  }else{
    console.log('The user is: ', results);
    res.send("You have successfully registered!!!");
  }
  });

});

app.listen(5000, function() {
    console.log("Server is running on Port: " + 5000);
});

