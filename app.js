const express = require("express");
const Quote = require("inspirational-quotes");
const bcrypt = require('bcrypt')
const SALT_ROUNDS = 10

const mysql = require("mysql");
const cors = require("cors");
const TOKEN_SECRET = process.env.TOKEN_SECRET;
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const connection = mysql.createConnection({
  host: "localhost",
  user: "DnuvsinL",
  password: "24990088",
  database: "tour",
});

connection.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Connected to the database");
});

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Heafers",
    "Origin, X-Requested-With, Content-Type,Accept"
  );
  next();
});

app.get("/", (req, res) => {
  const quote = Quote.getQuote();
  const response = { quote };
  res.json(response);
});

app.get("/api/photos", (req, res) => {
  connection.query("SELECT * FROM photos", (error, results) => {
    if (error) {
      console.log(error);
      res.status(500).send("Internal Server Error");
    } else {
      res.json(results);
    }
  });
});

app.post("/signup", (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const sql = `INSERT INTO users (first_name, last_name, email, password) VALUES ('${firstName}', '${lastName}', '${email}', '${password}')`;

  connection.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    console.log("User data inserted into database");
    res.send("User data inserted into database");
  });
});

app.get("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  // Query the database to check if user credentials are valid
  const sql = `SELECT * FROM users WHERE email = '${email}' AND password = '${password}'`;

  connection.query(sql, (err, row) => {
    if (err) {
      console.log(err);
      res.status(500).send("Internal Server Error");
    } else {
      // If no matching user found, send error response
      if (results.length === 0) {
        res.status(401).send("Invalid email or password");
      } else {
        // If valid user credentials, generate a JWT token and send success response
        const token = jwt.sign({ email: email }, secretKey, {
          expiresIn: "1h",
        });
        res.status(200).json({ token: token });
      }
    }
  });
});

//ใช้อันนี้นะต้อง npm install bcrypt เพิ่ม
app.post("/test_login" , (req,res) => {
  let email = req.query.email;
  let password = req.query.password;

  let query = `SELECT * FROM users WHERE email = "${email}" `

  connection.query(query ,(err,row) => {
      if(err){
          res.json({
              "STATUS" : "400" ,
              "MESSAGE" : "Error in DB "
          })
      }else{
          let db_password = row[0].password
          bcrypt.compare(password, db_password , (err,result) => {
              if(result){
                  let payload = {
                      "email" : row[0].email,
                      "id" : row[0].id,
                  }
                  let token = jwt.sign(payload , TOKEN_SECRET , {expiresIn : '3d'})
                  res.send(token)
              }else {res.send(`${db_password} ${password}` )}
          })
      }
  })
})

app.post("/edit_tour", (req,res) => {
  let id = req.query.id;
  let title = req.body.title;
  let description = req.body.description;
  let image_url = req.body.image_url;

  let query = `UPDATE photos SET title='${title}' or description='${description}' or image_url='${image_url}' WHERE id = ${id} `
  connection.query(query,(err,rows) =>{
    console.log(err)
    if (err){
      res.json({
        "STATUS" : "400",
        "MESSAGE" : "ERROR can't update "
      })
    }else{
      res.json({
        "STATUS" : "200",
        "MESSAGE" : `Updating ${id} succesful`
      })
    }
  })
})


app.listen(5001, () => {
  console.log("Server started Succc");
});
