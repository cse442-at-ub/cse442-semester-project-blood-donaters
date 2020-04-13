const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
var cors = require('cors');
let mysql = require("mysql");

app.use(cors());
app.use(express.static(path.join(__dirname, "build")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
let dirname = __dirname;
if (dirname.includes("C:\\")) {
  dirname = "";
}

let connection = mysql.createConnection({
  host: "tethys.cse.buffalo.edu",
  user: "ethanarm",
  password: "37694242",
  database: "cse442_542_2020_spring_teamm_db"
});
connection.connect(function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected!!");
  }
});

app.post("/CSE442-542/2020-spring/cse-442m/register", function(req,res){
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

    
  

app.get(`${dirname}/authenticate/:user/:pass`, async function(req, res) {
  console.log(path.join(dirname, "test/testing"));
  let username = req.params.user;
  let password = req.params.pass;
  if (username == null || password == null) {
    res.statusCode(401);
  } else {
    let query = `SELECT * FROM users WHERE email='${username}' && passwords='${password}';`;
    let queriedRow;
    await connection.query(query, function(err, rows, fields) {
      if (err) throw err;

      queriedRow =
        rows.length === 1
          ? { username: rows[0].email, password: rows[0].passwords }
          : null;
      res.json(queriedRow);
    });
  }
});


//get full database list

app.get(`${dirname}/listdata`, async function(req, res) {
  let query = `SELECT * FROM donor_list_test;`;
  let queriedRows;
  await connection.query(query, function(err, rows, fields) {
    if (err) throw err;

    queriedRows = rows;
    res.json(queriedRows);
  });
});

app.get(`/profile-api`, async function(req, res) {
  let query = `SELECT * FROM user_profile WHERE username = "admin";`;
  let queriedRows;
  await connection.query(query, function(err, rows, fields) {
    if (err) throw err;

    queriedRows = rows;
    res.json(queriedRows);
  });
});


app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});


//Getting information for the user profile
app.get('./user-profile', function(req, res) {
  let usrnm = "seniorbleh";
  let query = `SELECT * FROM user_profile WHERE username='seniorbleh';`;

  connection.query(query, function(err, results, fields) {
    if (err) throw err;
    console.log("Working");

    res.json(results)
  });
});

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});


app.listen(process.env.PORT || 3000);
