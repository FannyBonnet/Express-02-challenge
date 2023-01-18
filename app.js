const express = require("express");
require("dotenv").config();
const port = process.env.APP_PORT ?? 5000;

const app = express();

const welcome = (req, res) => {
    res.send("Welcome to my user list");
  };
  
  app.get("/", welcome);

const userHandlers = require("./userHandlers");
app.get("/api/users", userHandlers.getUsers);
app.get("/api/users/:id", userHandlers.getUserById);

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});