const express = require("express");

require("dotenv").config();

const connectDB = require("./config/db");

const app = express();
// middleware
app.use(express.json());

//Koppla authRoutes
const authRoutes = require("./routes/authRoutes");
app.use("/auth", authRoutes);

//test route

app.get("/", (req, res) => {
  res.send("server is running");
});

// starta serveren

const port = 5000;

connectDB();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
