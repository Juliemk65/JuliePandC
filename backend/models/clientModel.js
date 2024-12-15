const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ClientSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    dog_1: String,
    dog_2: String,
    dog_3: String,
    address: String,
    repeat_client: Boolean,
  },
  { timestamps: true }
);

const ClientModel = mongoose.model("Client", ClientSchema);
module.exports = ClientModel;
