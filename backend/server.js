const connect = require("./connections");
const express = require("express");
const cors = require("cors");
const clients = require("./clientRoutes");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
//line 12 is used to mount the routes to be usable on the frontend
app.use(clients);

app.listen(PORT, () => {
  connect.connectToServer();
  console.log(`Server is running on ${PORT}`);
});
