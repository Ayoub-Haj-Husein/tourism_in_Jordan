require("dotenv").config();
const express = require("express");
const bodyParser = require('body-parser')
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const db = require("./db");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const app = express();

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

app.set("view engine", "ejs")

// Storage Image By Multer Start
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    console.log(file)
    cb(null, Date.now() + path.extname(file.originalname))
  },
});
const upload = multer({ storage: storage });
// Storage Image By Multer End

// test page (test.ejs) Start
app.get("/add_blog", (req, res) => {
  res.render("add_blog")
})

// app.post("/upload", upload.single("image"), (req, res) => {
//   res.send("image uploaded")
// })
// test page (test.ejs) End

// Test Authorization Start
// const posts = [
//   {
//     username: 'Kyle',
//     title: 'Post 1'
//   },
//   {
//     username: 'Jim',
//     title: 'Post 2'
//   }
// ]

// app.get('/posts', authenticateToken, (req, res) => {
//   res.json(posts.filter(post => post.username === req.user.name))
// })

// app.post("/login", (req, res) => {
//   // Authenticate User
//   const username = req.body.username
//   const user = { name: username }
//   const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
//   res.json({accessToken: accessToken})
// })

// function authenticateToken(req, res, next) {
//   const authHeader = req.headers['authorization']
//   const token = authHeader && authHeader.split(' ')[1]
//   if (token == null) return res.sendStatus(401)

//   jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
//     console.log(err)
//     if (err) return res.sendStatus(403)
//     req.user = user
//     next()
//   })
// }
// Test Authorization End

// Create New User Start
// Registration Routes
app.post("/registration", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    const { username, email, password, passwordConfirmation } = req.body;
    // Check if the user already exists based on username or email
    const userExistsQuery = 'SELECT * FROM users WHERE email = $1';
    const existingUser = await db.query(userExistsQuery, [email]);
    if (existingUser.rows.length > 0) {
      return res.status(400).json({ error: "email is already in use" });
    }
    if (password !== passwordConfirmation) {
      return res.status(400).json({ error: "Password and password confirmation do not match" });
    }
    // Add the user to the database
    const insertQuery = 'INSERT INTO users (username, email, password) VALUES ($1, $2, $3)';
    const result = await db.query(insertQuery, [username, email, hashedPassword]);
    res.status(201).json({ message: "User added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while processing your request" });
  }
});
// Create New User End

// Middleware To Check User (Authentication) Old Start 
// const checkUser = async (req, res, next) => {
//   const { email, password } = req.body;
//   try {
//     const result = await db.query("SELECT * FROM users WHERE email = $1", [
//       email,
//     ]);
//     if (result.rows.length === 1) {
//       const user = result.rows[0];
//       if (user.password === password) {
//         req.user = user;
//       } else {
//         req.user = null;
//         res.json({ message: "incorrect password" });
//       }
//     } else {
//       req.user = null;
//     }
//   } catch (error) {
//     console.error(error);
//     req.user = null;
//   }
//   next();
// };
// Middleware To Check User (Authentication) Old End

// Login Routes (Authentication) Start
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    // Execute the query to search for the user
    const query = "SELECT * FROM users WHERE email = $1";
    const result = await db.query(query, [email]);
    // Check for the existence of the user
    if (result.rows.length === 0) {
      return res.status(400).send("Cannot find user");
    }
    // Check the password's validity
    const user = result.rows[0];
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (passwordMatch) {
      res.send("User logged in successfully");
    } else {
      res.send("Incorrect password");
    }
  } catch (error) {
    console.error("Database error: ", error);
    res.status(500).send();
  }
});
// Login Routes (Authentication) End

// Fetch and Display All Blogs Start
app.get("/blogs", async (req, res) => {
  try {
    // Query the database to retrieve all blogs
    const query = "SELECT * FROM blogs";
    const result = await db.query(query);
    // Send the retrieved blogs as a JSON response
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while fetching blogs" });
  }
});
// Fetch and Display All Blogs End

// Create a New Blog with Image Upload Start
app.post("/add_blog", upload.single("image"), async (req, res) => {
  const { title, description } = req.body;
  const image_url = req.file ? req.file.filename : null;
  try {
    // Insert the new blog into the database
    const query =
      "INSERT INTO blogs (title, description, image_url) VALUES ($1, $2, $3) RETURNING *";
    const result = await db.query(query, [title, description, image_url]);
    // Check if the blog was successfully inserted
    if (result.rows.length === 1) {
      const newBlog = result.rows[0];
      res.status(201).json(newBlog); // Respond with the created blog
    } else {
      res.status(500).json({ error: "Failed to create the blog" });
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while creating the blog" });
  }
});
// Create a New Blog with Image Upload End

// Fetch a Single Blog by ID Start
app.get("/blog/:id", async (req, res) => {
  const blogId = req.params.id;
  try {
    // Query the database to retrieve the blog based on the ID
    const query = "SELECT * FROM blogs WHERE blog_id = $1";
    const result = await db.query(query, [blogId]);
    // Check if a blog was found
    if (result.rows.length === 1) {
      const blog = result.rows[0];
      res.json(blog);
    } else {
      res.status(404).json({ error: "Blog not found" });
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching the blog" });
  }
});
// Fetch a Single Blog by ID End

app.listen(5000);
