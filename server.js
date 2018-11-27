const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const data = require("./routes/api/data");

const app = express();

//Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//DB Config
const db = require("./config/keys").mongoURI;

//Connect to mongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello"));

//Use routes
app.use("/api/data", data);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
