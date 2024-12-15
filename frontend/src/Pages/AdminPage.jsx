import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Admin() {
  const [name, setName] = useState("");
  const [dog_1, setDogName1] = useState("");
  const [dog_2, setDogName2] = useState("");
  const [dog_3, setDogName3] = useState("");
  const [address, setAddress] = useState("");

  const [clientName, setClientName] = useState("");
  const [clientNameD, setClientNameD] = useState("");
  const [results, setResults] = useState("");

  //use to immediately see all clients
  /*useEffect(() => {
    async function grabData() {
      const response = await axios.get("http://localhost:3000/clients");
      console.log(response);
      if (response.status === 200) {
        setResults(response.data);
      }
    }

    grabData();
  }, []);*/

  //use to immediately see info of client that's name is in 'Existing client Name'
  /*useEffect(() => {
    async function grabData() {
      const response = await axios.get(
        `http://localhost:3000/clients/${clientName}`,
        {
          clientName,
        }
      );
      console.log(response);
      if (response.status === 200) {
        setResults(response.data);
      }
    }

    grabData();
  }, []);*/

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      axios
        .post("http://localhost:3000/api/clientRoutes/clientsAdd", {
          name,
          dog_1,
          dog_2,
          dog_3,
          address,
        })
        .then((result) => {
          console.log(result.data);
          if (!name) {
            alert("Must enter name of client");
          } else {
            alert("New Client created, thank you! 🐶🫶🏼🐱");
          }
        });
    } catch (error) {
      //   .catch((err) => console.log(err));
      console.error("Error fetching data", error);
    }
  };

  const handleSubmitDelete = (e) => {
    e.preventDefault();
    try {
      axios
        .delete(
          `http://localhost:3000/api/clientRoutes/clients/${clientNameD}`,
          {
            name,
            dog_1,
            dog_2,
            dog_3,
            address,
          }
        )
        .then((result) => {
          console.log(result.data);
          if (result.data === null) {
            alert("client does not exist in system! ):");
          } else {
            alert(
              "Existing client has been deleted from system, thank you! 🐶🫶🏼🐱"
            );
          }
        });
    } catch (error) {
      //   .catch((err) => console.log(err));
      console.error("Error fetching data", error);
    }
  };

  const handleSubmitUpdate = (e) => {
    e.preventDefault();
    try {
      axios
        .patch(`http://localhost:3000/api/clientRoutes/clients/${clientName}`, {
          name,
          dog_1,
          dog_2,
          dog_3,
          address,
        })
        .then((result) => {
          console.log(result.data);
          if (result.data === null) {
            alert("client does not exist in system! ):");
          } else {
            alert("Existing client's info was updated (:");
          }
        });
    } catch (error) {
      //   .catch((err) => console.log(err));
      console.error("Error fetching data", error);
    }
  };

  const handleSubmitFind = (e) => {
    e.preventDefault();
    const results = document.getElementById("results");
    const dogImage = document.getElementById("dog-image");
    results.textContent = "";

    try {
      axios
        .get(`http://localhost:3000/api/clientRoutes/${clientName}`, {
          clientName,
        })
        .then((result) => {
          console.log(`client-side response`, result.data);

          //   setResults(result.data);
          const nameElement = document.createElement("p");
          nameElement.className = "client-results-p";
          nameElement.setAttribute("style", "white-space: pre;");
          // nameElement.textContent = `${result.data}`;

          if (result.data === null) {
            alert("client does not exist in system! ):");
          }
          if (!clientName) {
            alert("Please enter a name!");
          }

          if (result.data.dog_2 === undefined || result.data.dog_2 === "") {
            nameElement.textContent = `Client Name: ${result.data.name} \r\nDog Name: ${result.data.dog_1} \r\nAddress: ${result.data.address} \r\nRepeat Client: ${result.data.repeat_client}`;
          } else if (
            result.data.dog_3 === undefined ||
            result.data.dog_3 === ""
          ) {
            nameElement.textContent = `Client Name: ${result.data.name} \r\nDog Names: ${result.data.dog_1}, ${result.data.dog_2}  \r\nAddress: ${result.data.address}\r\nRepeat Client: ${result.data.repeat_client}`;
          } else {
            nameElement.textContent = `Client Name: ${result.data.name} \r\nDog Names: ${result.data.dog_1}, ${result.data.dog_2}, ${result.data.dog_3}  \r\nAddress: ${result.data.address} \r\nRepeat Client: ${result.data.repeat_client}`;
          }

          // Append the elements to the "dataDisplay" div
          results.appendChild(nameElement);

          if (clientName) {
            dogImage.innerHTML = `<img src="Images/${clientName}.jpeg" 
            alt="${clientName}'s Animal photo"
            id="pup-img"
            width=250px>`;
          }
        });
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  return (
    <>
      <div className="admin-page">
        <h1 className="admin-header">Welcome to the Admin Page!</h1>
        <Link to="/loginPage" className="go-back-button-admin">
          Go Back
        </Link>
        <form className="create-client-form" onSubmit={handleSubmit}>
          <h4>Create a new client:</h4>
          <label htmlFor="name">Client Name:</label>
          <input name="name" onChange={(e) => setName(e.target.value)}></input>
          <label htmlFor="dog_1">Dog Name (1):</label>
          <input
            name="dog_1"
            onChange={(e) => setDogName1(e.target.value)}
          ></input>
          <label htmlFor="dog_2">Dog Name (2)</label>
          <input
            name="dog_2"
            onChange={(e) => setDogName2(e.target.value)}
          ></input>
          <label htmlFor="dog_3">Dog Name(3)</label>
          <input
            name="dog_3"
            onChange={(e) => setDogName3(e.target.value)}
          ></input>
          <label htmlFor="address">Address</label>
          <input
            name="address"
            onChange={(e) => setAddress(e.target.value)}
          ></input>

          <button
            type="submit"
            onClick={handleSubmit}
            className="create-button"
          >
            Create New Client
          </button>
        </form>
        <div className="find-and-delete">
          <form onSubmit={handleSubmitFind} className="find-client-form">
            <label>Existing client name:</label>
            <input
              name="clientName"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
            />
            <button type="submit" className="find-button">
              Find Button
            </button>
          </form>
          <form onSubmit={handleSubmitDelete} className="delete-client-form">
            <label>Delete client name:</label>
            <input
              name="clientNameD"
              value={clientNameD}
              onChange={(e) => setClientNameD(e.target.value)}
            />

            <button
              type="submit"
              onClick={handleSubmitDelete}
              className="delete-button"
            >
              Delete Client
            </button>
          </form>
        </div>

        <div
          id="results"
          onChange={(e) => setResults(e.target.value)}
          value={setResults}
          className="client-results"
        >
          {results.data}
        </div>
        {JSON.stringify(results.data)}
        <div id="dog-image" className="animal-img"></div>

        <form className="update-client-form" onSubmit={handleSubmitUpdate}>
          <h4>Update an existing client:</h4>
          <label htmlFor="name">Client Name:</label>
          <input name="name" onChange={(e) => setName(e.target.value)}></input>
          <label htmlFor="dog_1">Dog Name (1):</label>
          <input
            name="dog_1"
            onChange={(e) => setDogName1(e.target.value)}
          ></input>
          <label htmlFor="dog_2">Dog Name (2)</label>
          <input
            name="dog_2"
            onChange={(e) => setDogName2(e.target.value)}
          ></input>
          <label htmlFor="dog_3">Dog Name(3)</label>
          <input
            name="dog_3"
            onChange={(e) => setDogName3(e.target.value)}
          ></input>
          <label htmlFor="address">Address</label>
          <input
            name="address"
            onChange={(e) => setAddress(e.target.value)}
          ></input>

          <button type="submit" className="create-button">
            Update Client
          </button>
        </form>
      </div>
    </>
  );
}

export default Admin;
