const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const ClientModel = require("./Client");
// const results = document.getElementById("results");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://Admin:Qwertyuiop@cluster-test1.rf7dw.mongodb.net/sample_clients"
);

app.post("/login", (req, res) => {
  const { email, password } = req.body;
});

app.post("/adminPage2", (req, res) => {
  const { clientName } = req.body;
  ClientModel.findOne({ name: clientName })
    .then((result) => {
      if (result) {
        if (result.name === clientName) {
          //res.json("Success!! ${result}");
          if (result.dog_2 === undefined || result.dog_2 === "") {
            res.json(
              `Name: ${result.name}                           
              
            Address: ${result.address}      
                      
            Dog Name: ${result.dog_1}`
            );
          } else if (result.dog_3 === undefined || result.dog_3 === "") {
            res.json(`Name: ${result.name}  
           
            Address: ${result.address}  
           
            Dog Name(1): ${result.dog_1}  
            
           Dog Name(2): ${result.dog_2} `);
          } else {
            res.json(`Name: ${result.name}  
           
            Address: ${result.address} 
           
            Dog Name(1): ${result.dog_1} 
            
           Dog Name(2): ${result.dog_2} 
    
            Dog Name(3): ${result.dog_3}
            
            `);
          }
        }
      } else {
        res.json("Client does not exist!");
      }
    })
    .catch((err) => res.json(err));
});

app.post("/adminPage", (req, res) => {
  ClientModel.create(req.body)
    .then((client) => res.json(`New Client Created!, ${client} `))
    .catch((err) => res.json(err));
});

app.listen(3000, () => {
  console.log("server is running");
});
