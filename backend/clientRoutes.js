const express = require("express");
const database = require("./connections");
const ObjectId = require("mongodb").ObjectId;

let clientRoutes = express.Router();

//#1-Retrieve ALL
clientRoutes.route("/clients").get(async (req, res) => {
  let db = database.getDb();
  let data = await db.collection("clients").find({}).toArray();
  if (data.length > 0) {
    res.json(data);
  } else {
    throw new Error("Data was not found :(");
  }
});
//#2-Retrieve ONE
//new ObjectId(req.params.name)
//Object.keys(data).length > 0
clientRoutes.route("/clients/:name").get(async (req, res) => {
  let db = database.getDb();
  let data = await db.collection("clients").findOne({ name: req.params.name });
  if (data) {
    res.json(Object.keys(data).length > 0);
  } else {
    throw new Error("Data was not found :(");
  }
});
//#3-Create One

clientRoutes.route("/clients").post(async (req, res) => {
  let db = database.getDb();
  let mongoObject = {
    name: request.body.name,
    dog_1: request.body.dog_1,
    dog_2: request.body.dog_2,
    dog_3: request.body.dog_3,
    address: request.body.address,
    repeat_client: request.body.repeat_client,
  };
  let data = await db.collection("clients").insertOne(mongoObject);
  res.json(data);
});

//#4-Update One
clientRoutes.route("/clients/:name").put(async (req, res) => {
  let db = database.getDb();
  let mongoObject = {
    $set: {
      name: request.body.name,
      dog_1: request.body.dog_1,
      dog_2: request.body.dog_2,
      dog_3: request.body.dog_3,
      address: request.body.address,
      repeat_client: request.body.repeat_client,
    },
  };
  let data = await db
    .collection("clients")
    .updateOne({ name: new ObjectId(req.params.name) }, mongoObject);
  res.json(data);
});
//#5-Delete One

clientRoutes.route("/clients/:name").delete(async (req, res) => {
  let db = database.getDb();
  let data = await db
    .collection("clients")
    .deleteOne({ name: new ObjectId(req.params.name) });
  res.json(data);
});

module.exports = clientRoutes;