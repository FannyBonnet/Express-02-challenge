const express = require("express");
require("dotenv").config();
const port = process.env.APP_PORT ?? 5000;

const app = express();

app.use(express.json());

const welcome = (req, res) => {
    res.send("Welcome to my user list");
  };
  
app.get("/", welcome);

const { hashPassword } = require("./auth.js");
const userHandlers = require("./userHandlers");

app.get("/api/users", userHandlers.getUsers);
app.get("/api/users/:id", userHandlers.getUserById);

app.post("/api/users", hashPassword, userHandlers.postUser);

app.put("/api/users/:id", hashPassword, userHandlers.updateUser);

app.delete("/api/users/:id", userHandlers.deleteUser);


app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});