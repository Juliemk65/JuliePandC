const express = require("express");
const database = require("./connections");
const ObjectId = require("mongodb").ObjectId;
const ClientModel = require("./models/clientModel");
const {
  getAllClients,
  getOneClient,
  createClient,
  deleteClient,
  updateClient,
} = require("./controllers/clientsController");

let clientRoutes = express.Router();

// //#1-Retrieve ALL
// //http://localhost:3000/clients
clientRoutes.get("/clients", getAllClients);

// //#2-Retrieve ONE
// //http://localhost:3000/clients/Julie
// //new ObjectId(req.params.name)
// //Object.keys(data).length > 0
clientRoutes.get("/:clientName", getOneClient);

//http://localhost:3000/api/clientRoutes/:clientName

// //#3-Create/Add One
// //http://localhost:3000/clientsAdd
clientRoutes.post("/clientsAdd", createClient);

// //#4-Update One
clientRoutes.patch("/clients/:clientNameU", updateClient);

// //#5-Delete One
clientRoutes.delete("/clients/:clientNameD", deleteClient);

module.exports = clientRoutes;
