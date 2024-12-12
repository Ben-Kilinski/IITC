const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const jokesRoutes = require("./routes/jokesRoutes");
const usersRoutes = require("./routes/usersRoutes")

app.use("/jokes", jokesRoutes);
app.use("/users", usersRoutes);
app.use(express.json());

dotenv.config();

// console.log(process.env);

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("Connected to MongoDB");
})


app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/say-my-name", (req, res) => {
  const { name } = req.query;
  res.send(`Hello ${name}`);
});



app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
