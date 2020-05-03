const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
var cors = require('cors');
let mysql = require("mysql");
const cryptoJS = require("crypto-js");

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
  database: "cse442_542_2020_spring_teamm_db",
});
connection.connect(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected!");
  }
});

app.post("/CSE442-542/2020-spring/cse-442m/register", async function(req,res){
var today = new Date();
  var users={
    "firstname":cryptoJS.AES.encrypt(req.body.firstName, "Blood Donaters").toString(),
    "lastname":cryptoJS.AES.encrypt(req.body.lastName, "Blood Donaters").toString(),
    "email":req.body.email,
    "passwords":cryptoJS.SHA256(req.body.password).toString(),
    "bloodgroup": cryptoJS.AES.encrypt(req.body.bloodGroup, "Blood Donaters").toString(),
    "medicalhistory": cryptoJS.AES.encrypt(req.body.medicalHistory, "Blood Donaters").toString(),
    "location": cryptoJS.AES.encrypt(req.body.location, "Blood Donaters").toString(),
    "phonenumber": cryptoJS.AES.encrypt(req.body.phoneNumber, "Blood Donaters").toString(),
    "reg_date":today,
  }

  let query = `SELECT * FROM users WHERE email='${users.email}';`;
  await connection.query(query, function (err, rows, fields) {
    if (rows.length > 0) {
      res.status(401).send("That email is already registered!");
      return;
    }
    else {
      connection.query('INSERT INTO users SET ?',users, function (error, results, fields) {
        if (error) {
          console.log("error ocurred",error);
          res.status(400).send("Error registering to the database.");
          return;
        }
        else {
          res.redirect("/login");
        }
        });
    }
  });

  

});



app.get(`/authenticate/:email/:pass`, async function (req, res) {
  let email = req.params.email;
  let password = cryptoJS.SHA256(req.params.pass).toString();
  if (email == null || password == null) {
    res.statusCode(401);
  } else {
    let query = `SELECT * FROM users WHERE email='${email}' && passwords='${password}';`;
    await connection.query(query, function (err, rows, fields) {
      if (rows.length === 1) {
        let bytes = cryptoJS.AES.decrypt(rows[0].firstname, "Blood Donaters")
        let firstname = bytes.toString(cryptoJS.enc.Utf8);
        res.json({firstname});
      }
      else {
        res.send({firstname:null});
      }
    });
  }
});

//get full database list

app.get(`/listdata`, async function (req, res) {
  let query = `SELECT * FROM users;`;
  await connection.query(query, function (err, rows, fields) {
    let unencryptedData = [];
    for (let row of rows) {
      let firstNameBytes = cryptoJS.AES.decrypt(row.firstname, "Blood Donaters")
      let lastNameBytes = cryptoJS.AES.decrypt(row.lastname, "Blood Donaters")
      let bloodTypeBytes = cryptoJS.AES.decrypt(row.bloodgroup, "Blood Donaters")
      let locationBytes = cryptoJS.AES.decrypt(row.location, "Blood Donaters")
      let phoneNumberBytes = cryptoJS.AES.decrypt(row.phonenumber, "Blood Donaters")
      let FIRSTNAME = firstNameBytes.toString(cryptoJS.enc.Utf8);
      let LASTNAME = lastNameBytes.toString(cryptoJS.enc.Utf8);
      let BLOODTYPE = bloodTypeBytes.toString(cryptoJS.enc.Utf8);
      let LOCATION = locationBytes.toString(cryptoJS.enc.Utf8);
      let PHONE = phoneNumberBytes.toString(cryptoJS.enc.Utf8);
      unencryptedData.push({FIRSTNAME,LASTNAME,BLOODTYPE,LOCATION,PHONE});
    }
    res.json(unencryptedData);
  });
});

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(process.env.PORT || 3000);
