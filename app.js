const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const db = require("./db");
const app = express();

app.use(bodyParser.json());
app.use(cors());

// create user registration
app.post("/register", async (req, res) => {
  try {
    const { username, email, password, passwordConfirmation } = req.body;
    if (password !== passwordConfirmation) {
      return res.json({ error: "Password and confirmation do not match" });
    }
    // Add user to the database
    const insertQuery = `INSERT INTO registration (username, email, password) VALUES ($1, $2, $3)`;
    const result = await db.query(insertQuery, [username, email, password]);
    res.json({ message: "User added successfully" });
  } catch (error) {
    console.error(error);
  }
});

// Middleware to check user credentials
const checkUserCredentials = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const result = await db.query(
      "SELECT * FROM registration WHERE username = $1",
      [username]
    );
    if (result.rows.length === 1) {
      const user = result.rows[0];
      if (user.password === password) {
        req.user = user;
      } else {
        req.user = null;
      }
    } else {
      req.user = null;
    }
  } catch (error) {
    console.error(error);
    req.user = null;
  }
  next();
};

// login routes
app.post("/login", checkUserCredentials, (req, res) => {
  if (req.user) {
    res.json({ message: "User logged in successfully" });
    res.redirect("/");
  } else {
    res.status(401).json({ error: "User not found" });
  }
});

// storage images to image file by multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "/images");
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// insert new blog with image URL, author name, and description
app.post("/upload", upload.single("image"), (req, res) => {
  res.send("image upload")
});

app.listen(3000);
