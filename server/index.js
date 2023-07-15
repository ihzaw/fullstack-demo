const express = require("express");
const app = express();
require('dotenv').config()

const UserController = require("./controllers/UserController");
const { authenticate } = require("./middlewares/authenticate");
const port = process.env.PORT;


app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/login", (req, res) => UserController.login(req, res));

app.use(authenticate);
app.get("/something", (req, res) => UserController.getAll(req, res));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
