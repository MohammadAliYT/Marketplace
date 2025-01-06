const express = require("express");
const app = express();
var cors = require("cors");
// const errorMiddleware = require("./middleware/error");
const cookieParser = require("cookie-parser");
app.use(express.json());
app.use(cookieParser());
app.use(cors());

// Route Import
// const product = require("./routes/productRoute");
const user = require("./src/routes/userRoutes");
app.use("/api/v1/users", user);

//Middleware for errors
// app.use(errorMiddleware);

module.exports = app;
