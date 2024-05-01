require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
var cors = require("cors");

const app = express();

/* middleware */
app.use(express.json());
app.use(cors());

/* DB connect */
mongoose
  .connect(process.env.MONGO_URI)
  .then((then) => {
    app.listen(process.env.PORT, async () => {
      console.log(`Example app listening on port ${process.env.PORT}`);
    });
  })
  .catch((err) => console.log("error connecting to mongo", err));

/* ROUTES */
const userRoutes = require("./routes/User");
const loginRoutes = require("./routes/Login");

/* ROUTER */
app.use("/api/users", userRoutes);
app.use("/api/login", loginRoutes);

app.get("/", (req, res) => {
  console.log(process.env.TEST_ME, "yee");

  res.send("Hello World");
});
