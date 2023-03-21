const express = require("express");
const Quote = require("inspirational-quotes");

const mysql = require("mysql");
const cors = require("cors");
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

app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  // Query the database to check if user credentials are valid
  db.query(
    "SELECT * FROM users WHERE email = ? AND password = ?",
    [email, password],
    (err, results) => {
      if (err) throw err;

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
  );
});

app.listen(5001, () => {
  console.log("Server started Succc");
});
