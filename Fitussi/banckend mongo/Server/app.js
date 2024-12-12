const express = require("express");
const mongoose = require("mongoose");


const dotenv = require("dotenv");
dotenv.config();


const app = express();
app.use(express.json());


const jokesRoutes = require("./routes/jokesRoutes");
const usersRoutes = require("./routes/usersRoutes")

app.use("/jokes", jokesRoutes);
app.use("/users", usersRoutes);



// console.log(process.env);

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("Connected to MongoDB");
})


app.get("/", (req, res) => {
  res.send("Hello World");
});



app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
