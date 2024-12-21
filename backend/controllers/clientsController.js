const ClientModel = require("../models/clientModel");

//get all clients
const getAllClients = async (req, res) => {
  const clients = await ClientModel.find({}).sort({ name: 1 });
  res.status(200).json(clients);
};

//get one client
const getOneClient = async (req, res) => {
  const { clientName } = req.params;
  const client = await ClientModel.findOne({ name: clientName });

  if (!clientName) {
    return res.status(404).json({ error: "No such client" });
  }
  res.status(200).json(client);
};

//create new client
const createClient = async (req, res) => {
  const { name, dog_1, dog_2, dog_3, address, repeat_client } = req.body;

  try {
    const client = ClientModel.create({
      name,
      dog_1,
      dog_2,
      dog_3,
      address,
      repeat_client,
    });
    res.status(200).json(client);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete client
const deleteClient = async (req, res) => {
  const { clientNameD } = req.params;

  const client = await ClientModel.findOneAndDelete({ name: clientNameD });

  if (!clientNameD) {
    return res.status(404).json({ error: "No such client" });
  }
  res.status(200).json(client);
};

//update a client
const updateClient = async (req, res) => {
  const { clientNameU } = req.params;

  const client = await ClientModel.findOneAndUpdate(
    { name: clientNameU },
    {
      ...req.body,
    }
  );

  if (!clientNameU) {
    return res.status(404).json({ error: "No such client" });
  }
  res.status(200).json(client);
};

module.exports = {
  getAllClients,
  getOneClient,
  createClient,
  deleteClient,
  updateClient,
};
