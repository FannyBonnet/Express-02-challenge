const express = require("express");
const userHandlers = require("./userHandlers");
const { hashPassword, verifyPassword, verifyToken, verifyPayload } = require("./auth.js");
require("dotenv").config();
const port = process.env.APP_PORT ?? 5000;

const app = express();

app.use(express.json());

const welcome = (req, res) => {
    res.send("Welcome to my user list");
  };
  
  app.post(
    "/api/login",
    userHandlers.getUserByEmailWithPasswordAndPassToNext,
    verifyPassword
  );
  
app.get("/", welcome);

app.get("/api/users", userHandlers.getUsers);

app.get("/api/users/:id", userHandlers.getUserById);

app.use(verifyToken);

app.post("/api/users", hashPassword, verifyToken, userHandlers.postUser);

app.put("/api/users/:id", verifyPayload, hashPassword, userHandlers.updateUser);

app.delete("/api/users/:id", verifyPayload, userHandlers.deleteUser);


app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});