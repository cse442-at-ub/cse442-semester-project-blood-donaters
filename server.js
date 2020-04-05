const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
let mysql = require("mysql");

app.use(express.static(path.join(__dirname, "build")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
let dirname = __dirname;
console.log(dirname);
if (dirname.includes("C:\\")) {
  dirname = "";
  console.log(dirname);
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

app.get(`/authenticate/:user/:pass`, async function (req, res) {
  console.log("app.get function called");
  let username = req.params.user;
  let password = req.params.pass;
  if (username == null || password == null) {
    res.statusCode(401);
  } else {
    let query = `SELECT * FROM test WHERE username='${username}' && password='${password}';`;
    let queriedRow;
    await connection.query(query, function (err, rows, fields) {
      queriedRow =
        rows.length === 1
          ? { username: rows[0].username, password: rows[0].password }
          : null;
      res.json(queriedRow);
    });
  }
});

//get full database list

app.get(`/listdata`, async function (req, res) {
  let query = `SELECT * FROM donor_list_test;`;
  let queriedRows;
  console.log("requested list data");
  await connection.query(query, function (err, rows, fields) {
    queriedRows = rows;
    console.log(queriedRows);
    res.json(queriedRows);
  });
});

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(process.env.PORT || 3000);
//app.listen(8080);
