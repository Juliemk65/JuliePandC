const connect = require("./connections");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const clientRoutes = require("./clientRoutes");

const app = express();
const PORT = 3000;

//middleware
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
//used to mount the routes to be usable on the frontend

//http://localhost:3000/api/clientRoutes/clients
app.use("/api/clientRoutes", clientRoutes);

//connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //listen for requests
    app.listen(PORT, () => {
      console.log(`Connected to db, server is running on ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
