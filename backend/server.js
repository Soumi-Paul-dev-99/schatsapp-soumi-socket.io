const express = require("express");
const dotenv = require("dotenv").config();
const chats = require("./data/data");
const cors = require("cors");
const app = express();
const connectDB = require("./config/db");
const port = process.env.port || 5000;
const colors = require("colors");
const userRoutes = require("./Router/userroutes");

const { notfound, errorHandler } = require("./middleware/errorMiddleware");

app.use(cors());
connectDB();

app.use(express.json()); // to accept json data

app.use("/api/user", userRoutes);

app.use(notfound);
app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("get method called");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  //   console.log(req.params.id);
  const singleChat = chats.find((c) => c._id === req.params.id);
  res.send(singleChat);
});

app.listen(port, () => {
  console.log(
    `server running on the port http://localhost:${port}`.yellow.bold
  );
});
