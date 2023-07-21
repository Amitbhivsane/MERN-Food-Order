const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const authController = require("./controllers/authController");
const productController = require("./controllers/productController");
const uploadController = require("./controllers/uploadController");
const app = express();

//connect to db
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to Db");
  })
  .catch((err) => {
    console.log(err);
  });

//routes and middleware
//those two middelware makes req.body accesible ,otherwise it would be undefined
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/images", express.static("public/images"));
app.use("/auth", authController);
// product controller
app.use("/product", productController);
//upload controler
app.use("/upload", uploadController);
//start server
app.listen(process.env.PORT, () => console.log("server is starting"));

//server 5000 //client 3000
//we are going to get error cors but remove cors()error
