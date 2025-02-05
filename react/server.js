import express from "express";
import cors from "cors";
import mysql2 from "mysql2";

const app = express();
app.use(cors()); // allows cros origin reuqest to be allowed

// create a connection to the database
const db = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "e_commerce",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database", err);
  } else {
    console.log("Connected to the database");
  }
});

//create an endpoint to the products
app.get("/api/products", (req, res) => {
  const query = "SELECT * FROM products";
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error retrieving products:", err);
      res.status(500).send("Error retrieving products");
    } else {
      res.json(results);
    }
  });
});

app.listen(5000, () => {
  console.log("server up");
});
