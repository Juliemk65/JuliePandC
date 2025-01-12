import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Admin() {
  const [name, setName] = useState("");
  const [dog_1, setDogName1] = useState("");
  const [dog_2, setDogName2] = useState("");
  const [dog_3, setDogName3] = useState("");
  const [address, setAddress] = useState("");
  const [repeat_client, SetRepeat_Client] = useState("");

  const [clientName, setClientName] = useState("");
  const [clientNameD, setClientNameD] = useState("");
  const [clientNameU, setClientNameU] = useState("");
  const [results, setResults] = useState("");

  const [data, setData] = useState([]);
  //use to immediately see all clients
  // const AllUsers = useEffect(() => {
  //   async function grabData() {
  //     const response = await axios.get(
  //       "http://localhost:3000/api/clientRoutes/clients"
  //     );
  //     //console.log(response.data);
  //     const allUsers = document.getElementById("all-users");
  //     let people = response.data;
  //     const names = people.map((person) => person.name);
  //     console.log(names);
  //     allUsers.textContent = `${names}`;

  //     // if (response.status === 200) {
  //     //   setResults(response.data);
  //     // }
  //   }

  //   grabData();
  // }, []);

  //use to immediately see info of client that's name is in 'Existing client Name'
  useEffect(() => {
    try {
      axios
        .get("http://localhost:3000/api/clientRoutes/clients")
        .then((result) => setData(result.data));
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const radioButtons = document.getElementById("radio-buttons");
    try {
      axios
        .post("http://localhost:3000/api/clientRoutes/clientsAdd", {
          name,
          dog_1,
          dog_2,
          dog_3,
          address,
          repeat_client,
        })
        .then((result) => {
          console.log(result);

          if (!name) {
            alert("Must enter name of client");
          } else {
            alert("New Client created, thank you! 🐶🫶🏼🐱");
          }
          radioButtons.checked = false;
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

  //http://localhost:3000/api/clientRoutes/clients/${clientName}`
  const handleSubmitUpdate = (e) => {
    e.preventDefault();
    try {
      axios
        .patch(
          `http://localhost:3000/api/clientRoutes/clients/${clientNameU}`,
          {
            name,
            dog_1,
            dog_2,
            dog_3,
            address,
            repeat_client,
          }
        )
        .then((result) => {
          console.log(result);

          if (result.data === null) {
            alert("client does not exist in system! ):");
          } else {
            alert("Existing client's info was updated! (:");
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
    dogImage.innerHTML = "";

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

          if (result.data.dog_2 === undefined || result.data.dog_2 === "") {
            nameElement.textContent = `Client Name: ${result.data.name} \r\nDog Name: ${result.data.dog_1} \r\nAddress: ${result.data.address} \r\nRepeat Client: ${result.data.repeat_client}`;
          } else if (
            result.data.dog_3 === undefined ||
            result.data.dog_3 === ""
          ) {
            nameElement.textContent = `Client Name: ${result.data.name} \r\nDog Names: ${result.data.dog_1} & ${result.data.dog_2}  \r\nAddress: ${result.data.address}\r\nRepeat Client: ${result.data.repeat_client}`;
          } else {
            nameElement.textContent = `Client Name: ${result.data.name} \r\nDog Names: ${result.data.dog_1}, ${result.data.dog_2}, ${result.data.dog_3}  \r\nAddress: ${result.data.address} \r\nRepeat Client: ${result.data.repeat_client}`;
          }

          if (!clientName) {
            alert("Please enter a name!");
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

  const handleSubmitFind2 = (e) => {
    e.preventDefault();
    const results = document.getElementById("results");
    const dogImage = document.getElementById("dog-image");
    results.textContent = "";
    dogImage.innerHTML = "";

    try {
      axios
        .get(`http://localhost:3000/api/clientRoutes/${item.name}`, {
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

          if (result.data.dog_2 === undefined || result.data.dog_2 === "") {
            nameElement.textContent = `Client Name: ${result.data.name} \r\nDog Name: ${result.data.dog_1} \r\nAddress: ${result.data.address} \r\nRepeat Client: ${result.data.repeat_client}`;
          } else if (
            result.data.dog_3 === undefined ||
            result.data.dog_3 === ""
          ) {
            nameElement.textContent = `Client Name: ${result.data.name} \r\nDog Names: ${result.data.dog_1} & ${result.data.dog_2}  \r\nAddress: ${result.data.address}\r\nRepeat Client: ${result.data.repeat_client}`;
          } else {
            nameElement.textContent = `Client Name: ${result.data.name} \r\nDog Names: ${result.data.dog_1}, ${result.data.dog_2}, ${result.data.dog_3}  \r\nAddress: ${result.data.address} \r\nRepeat Client: ${result.data.repeat_client}`;
          }

          if (!clientName) {
            alert("Please enter a name!");
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
          <br />
          <span id="radio-buttons">
            <h6>Are they a repeat client?</h6>
            <input
              type="radio"
              value={true}
              name="repeat_client"
              id="radio-button"
              onChange={(e) => SetRepeat_Client(e.target.value)}
            ></input>{" "}
            <label>True</label>
            <input
              type="radio"
              value={false}
              name="repeat_client"
              id="radio-button"
              onChange={(e) => SetRepeat_Client(e.target.value)}
            ></input>{" "}
            <label>False</label>
          </span>

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
              required
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
              required
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
        <div id="dog-image" className="animal-img"></div>{" "}
        <form className="update-client-form" onSubmit={handleSubmitUpdate}>
          <h4>Update an existing client:</h4>
          <label htmlFor="clientNameU">Client Name:</label>
          <input
            name="clientNameU"
            value={clientNameU}
            onChange={(e) => setClientNameU(e.target.value)}
            required
          ></input>
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
          <br />
          <span id="radio-buttons">
            <h6>Are they a repeat client?</h6>
            <input
              type="radio"
              value={true}
              name="repeat_client"
              onChange={(e) => SetRepeat_Client(e.target.value)}
            ></input>{" "}
            <label>True</label>
            <input
              type="radio"
              value={false}
              name="repeat_client"
              onChange={(e) => SetRepeat_Client(e.target.value)}
            ></input>{" "}
            <label>False</label>
          </span>

          <button
            type="submit"
            className="create-button"
            onClick={handleSubmitUpdate}
          >
            Update Client
          </button>
        </form>
        <div className="all-users">
          <label className="list-names">List of all current clients:</label>
          <ul id="all-users">
            {data.map((item, index) => (
              <li key={item.index}>{item.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Admin;
