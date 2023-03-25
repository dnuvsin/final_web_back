const express = require("express");
const Quote = require("inspirational-quotes");
const bcrypt = require("bcrypt");
const SALT_ROUNDS = 10;

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

// app.get("/", (req, res) => {
//   const quote = Quote.getQuote();
//   const response = { quote };
//   res.json(response);
// });

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

app.get("/api/photos/:id", (req, res) => {
  const { id } = req.params;
  const query = `SELECT * FROM photos WHERE id = ${id}`;
  connection.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching data from MySQL:", err.stack);
      return res.status(500).send("Internal server error");
    }
    if (results.length === 0) {
      return res.status(404).send("Photo not found");
    }
    res.json(results[0]);
  });
});

app.delete("/api/photos/:id", (req, res) => {
  const id = req.params.id;
  const sql = `DELETE FROM photos WHERE id = ${id}`;
  connection.query(sql, (err, results) => {
    if (err) throw err;
    res.send(results);
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

// app.get("/login", (req, res) => {
//   const email = req.body.email;
//   const password = req.body.password;

//   // Query the database to check if user credentials are valid
//   const sql = `SELECT * FROM users WHERE email = '${email}' AND password = '${password}'`;

//   connection.query(sql, (err, row) => {
//     if (err) {
//       console.log(err);
//       res.status(500).send("Internal Server Error");
//     } else {
//       // If no matching user found, send error response
//       if (results.length === 0) {
//         res.status(401).send("Invalid email or password");
//       } else {
//         // If valid user credentials, generate a JWT token and send success response
//         const token = jwt.sign({ email: email }, secretKey, {
//           expiresIn: "1h",
//         });
//         res.status(200).json({ token: token });
//       }
//     }
//   });
// });

//ใช้อันนี้นะต้อง npm install bcrypt เพิ่ม

app.post("/test_login2", (req, res) => {
  const { email, password } = req.body;
  let query = `SELECT * FROM users WHERE email = "${email}" `;
  connection.query(query, (err, row) => {
    if (err) {
      res.json({
        STATUS: "400",
        MESSAGE: "Error in DB ",
      });
    } else {
      let db_password = row[0].password;
      bcrypt.compare(password, db_password, (err, result) => {
        if (result) {
          let payload = {
            email: row[0].email,
            id: row[0].id,
            name: row[0].name, // Add the user name to the JWT payload
          };
          let token = jwt.sign(payload, TOKEN_SECRET, { expiresIn: "3d" });
          console.log(token);
          res.send(token);
          res.send("login success");
        } else {
          res.send(`${db_password} ${password}`);
        }
      });
    }
  });
});

app.post("/test_login", (req, res) => {
  const { email, password } = req.body;
  let query = `SELECT * FROM users WHERE email = "${email}" `;
  connection.query(query, (err, row) => {
    if (err) {
      res.json({
        STATUS: "400",
        MESSAGE: "Error in DB ",
      });
    } else {
      let db_password = row[0].password;
      bcrypt.compare(password, db_password, (err, result) => {
        if (result) {
          let payload = {
            email: row[0].email,
            id: row[0].id,
            name: row[0].name, // Add the user name to the JWT payload
          };
          let token = jwt.sign(payload, TOKEN_SECRET, { expiresIn: "3d" });
          console.log(token);
          res.send(token);
          res.send("login success");
        } else {
          res.send(`${db_password} ${password}`);
        }
      });
    }
  });
});

app.post("/get_name", (req, res) => {
  const email = req.body.email;
  let query = `SELECT first_name FROM users WHERE email = "${email}" `;
  connection.query(query, (err, result) => {
    if (err) {
      res.json({
        STATUS: "400",
        MESSAGE: "Error in DB ",
      });
    } else {
      console.log(result[0].first_name);
      //console.log(result.data);
      res.send(result[0].first_name);
    }
  });
});

app.post("/edit_tour", (req, res) => {
  let id = req.query.id;
  let title = req.body.title;
  let description = req.body.description;
  let image_url = req.body.image_url;

  let query = `UPDATE photos SET title='${title}' or description='${description}' or image_url='${image_url}' WHERE id = ${id} `;
  connection.query(query, (err, rows) => {
    console.log(err);
    if (err) {
      res.json({
        STATUS: "400",
        MESSAGE: "ERROR can't update ",
      });
    } else {
      res.json({
        STATUS: "200",
        MESSAGE: `Updating ${id} succesful`,
      });
    }
  });
});

app.get("/users", (req, res) => {
  connection.query("SELECT * FROM users", (error, results) => {
    if (error) {
      console.log(error);
      res.status(500).send("Internal Server Error");
    } else {
      res.json(results);
    }
  });
});

app.delete("/users/:id", (req, res) => {
  const id = req.params.id;
  const sql = `DELETE FROM users WHERE id = ${id}`;
  connection.query(sql, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

app.post("/api/contact", (req, res) => {
  const { name, phone, email, message } = req.body;
  // const name = req.query.name;
  // const phone = req.query.phone;
  // const email = req.query.email;
  // const message = req.query.message;

  // Insert the form data into the "contacts" table
  const query = `
    INSERT INTO contacts (name,phone, email, message) VALUES ('${name}','${phone}', '${email}', '${message}')
  `;
  connection.query(query, [name, phone, email, message], (error, results) => {
    if (error) {
      console.error("Error submitting form:", error);
      return res
        .status(500)
        .json({ error: "An error occurred while submitting the form." });
    }

    console.log("Form submitted successfully");
    return res.json({ message: "Form submitted successfully." });
  });
});

app.listen(5001, () => {
  console.log("Server started Succc");
});
