const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema({
  name: String,
  dog_1: String,
  dog_2: String,
  dog_3: String,
  address: String,
  repeat_client: Boolean,
});

const ClientModel = mongoose.model("clients", ClientSchema);
module.exports = ClientModel;
