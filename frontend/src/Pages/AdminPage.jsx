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
  const [results, setResults] = useState("");

  useEffect(() => {
    async function grabData() {
      const response = await axios.get("http://localhost:3000/clients/Julie");
      console.log(response);
      if (response.status === 200) {
        setResults(response.data);
      }
    }

    grabData();
  }, []);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   try {
  //     axios
  //       .post("http://localhost:3000/adminPage", {
  //         name,
  //         dog_1,
  //         dog_2,
  //         dog_3,
  //         address,
  //       })
  //       .then((result) => {
  //         console.log(result.data);
  //         alert("New Client created, thank you! 🐶🫶🏼🐱");
  //       });
  //   } catch (error) {
  //     //   .catch((err) => console.log(err));
  //     console.error("Error fetching data", error);
  //   }
  // };

  // const handleSubmitFind = (e) => {
  //   e.preventDefault();
  //   const results = document.getElementById("results");
  //   const dogImage = document.getElementById("dog-image");
  //   results.textContent = "";

  //   try {
  //     axios
  //       .post("http://localhost:3000/clients/:name", {
  //         name,
  //         clientName,
  //         address,
  //       })
  //       .then((result) => {
  //         console.log(`client-side response`, result.data);

  //         //   setResults(result.data);
  //         const nameElement = document.createElement("p");
  //         nameElement.className = "client-results-p";
  //         nameElement.textContent = `${result.data}`;

  //         // Append the elements to the "dataDisplay" div
  //         results.appendChild(nameElement);

  //         if (clientName) {
  //           dogImage.innerHTML = `<img src="Images/${clientName}.jpeg"
  //           alt="${clientName}'s Animal photo"
  //           id="pup-img"
  //           width=250px>`;
  //         }
  //       });
  //   } catch (error) {
  //     console.error("Error fetching data", error);
  //   }
  // };

  return (
    <>
      <div className="admin-page">
        <h1 className="admin-header">Welcome to the Admin Page!</h1>
        <Link to="/loginPage" className="go-back-button-admin">
          Go Back
        </Link>
        <form className="create-client-form">
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

          {/* <button
            type="submit"
            onClick={handleSubmit}
            className="create-button"
          >
            Create New Client
          </button>
        </form>

        <form onSubmit={handleSubmitFind} className="find-client-form">
          <label>Existing client name:</label>
          <input
            name="clientName"
            onChange={(e) => setClientName(e.target.value)}
          /> */}
          <button type="submit" className="find-button">
            Find Button
          </button>
        </form>
        {/* <div
          id="results"
          onChange={(e) => setResults(e.target.value)}
          value={setResults}
          className="client-results"
        >
          {results.data}
        </div> */}
        {JSON.stringify(results.data)}
        <div id="dog-image" className="animal-img"></div>
      </div>
    </>
  );
}

export default Admin;
