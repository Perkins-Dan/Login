const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;

app.listen(PORT, () => console.log(`Server running: Port ${PORT}`));

// view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// mongo connect
mongoose.set("useNewUrlParser", true);
mongoose.set("useUnifiedTopology", true);
mongoose.connect(
  "mongodb+srv://Dan:dLv7BAZ0XNQkRgBw@cluster0.6oynq.mongodb.net/Users?retryWrites=true&w=majority"
);

// routes
var routes = require("./routes/index");

app.use("/", routes);

module.exports = app;
