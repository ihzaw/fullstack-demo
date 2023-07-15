const express = require("express");
const app = express();
require('dotenv').config()

const UserController = require("./controllers/UserController");
const JobController = require("./controllers/JobController");
const { authenticate } = require("./middlewares/authenticate");
const { errorHandler } = require("./middlewares/errorHandler");
const port = process.env.PORT;


app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/login", (req, res) => UserController.login(req, res));

app.use(authenticate);

app.get("/getJobList", (req, res, next) => JobController.getAll(req, res, next));
app.get("/getJobDetail/:id", (req, res, next) => JobController.getDetail(req, res, next))

app.use(errorHandler)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
