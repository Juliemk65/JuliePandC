import React from "react";
import { Link, matchPath } from "react-router-dom";
import { useState } from "react";
import AddOnServices from "./AddOnServices";
//import DropdownMenu from "./DropdownMenu";
//import styles from "../App.css";
import styled from "styled-components";

function BookingPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedGuests, setSelectedGuests] = useState("1");
  const [selectedCccasion, setSelectedOccasion] = useState("default");
  const [count, setCount] = useState(0);
  const [selectedTime, setSelectedTime] = useState("default");

  const handleChange = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    alert("Reservation confirmed, thank you for your business!");
    console.log(name);
    console.log(email);
    console.log(selectedDate);
    console.log(selectedCccasion);
    console.log(count);
    console.log(selectedTime);
  };

  const handleTimeChange = (e) => {
    e.preventDefault();
    setSelectedTime(e.target.value);
    console.log(selectedTime);
  };

  const isFormValid = (e) => {
    return selectedDate && selectedCccasion && selectedGuests && name && email;
  };

  const onClickEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleIncrement = (e) => {
    e.preventDefault();
    setCount(count + 1);
    console.log({ count });
    if (Number(count) >= 3) {
      alert("Too many guests!");
    }
  };

  const handleDecrement = (e) => {
    e.preventDefault();
    setCount(count - 1);
    if (Number(count) <= 0) {
      alert("Not enough guests!");
    }
  };

  const myStyles = {
    backgroundColor: "#f092d7",
    color: "#f092d7",
  };

  const StyleDropdown = styled.div`
    color: #1e5a7d;
    font-size: 20px;
    height: 13%;
    grid-column: 3;
    grid-row: 2;
    margin-right: 180px;
    margin-top: 20px;
  `;

  return (
    <body className="body">
      <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className="svgBoxB"
      >
        <path
          id="circlePath"
          d=" 
          M -40, 100 
          a 60 50, 
          0, 1 1 
          180 25
          "
          fill="none"
        />
        <Link
          to="/"
          className="homepageLink"
          style={{ textDecoration: "none" }}
        >
          <text>
            <textPath
              href="#circlePath"
              textLength={240}
              className="title"
              fill="rgb(21, 114, 255)"
              fontSize={25}
            >
              Paws and Claws Daycare & Resort
            </textPath>
          </text>
        </Link>
      </svg>
      <div className="bookingPage">
        <h1 className="bookingHeader">Booking Page </h1>
        <form
          style={{ display: "grid", maxWidth: "300px", gap: "20px" }}
          className="form"
          onSubmit={handleChange}
        >
          <label for="name">Name:</label>
          <input
            id="name"
            minLength="2"
            value={name}
            placeholder="Last, First Name"
            onBlur={(e) => console.log("onBlurName")}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <label for="email">Email:</label>
          <input
            id="email"
            type="email"
            required="true"
            value={email}
            onBlur={(e) => console.log("onBlurEmail")}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Please enter a valid email"
          />
          <label>Occasion:</label>
          <select
            id="occasion"
            value={selectedCccasion}
            onChange={(e) => setSelectedOccasion(e.target.value)}
          >
            <option value="default">-Please select an occasion-</option>
            <option value="daycare">Daycare</option>
            <option value="drop-in">Drop-in Visits</option>
            <option value="boarding">Boarding</option>
          </select>
          <label for="res-date">Choose date:</label>
          <input
            value={selectedDate}
            type="date"
            id="res-date"
            onChange={(e) => setSelectedDate(e.target.value)}
          ></input>

          <label for="res-time">Choose time:</label>
          <select
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            id="res-time"
          >
            <option value="default">-Please select a time-</option>
            // <option value="17:00">17:00</option>
            // <option value="18:00">18:00</option>
            // <option value="19:00">19:00</option>
            // <option value="20:00">20:00</option>
            // <option value="21:00">21:00</option>
            // <option value="22:00">22:00</option>
            //{" "}
          </select>

          <span>
            <label for="guests">Number of Guests</label>
            *max 3*
          </span>
          <div className="button-container">
            {" "}
            <input
              type="button"
              value="-"
              onClick={handleDecrement}
              min="0"
            ></input>
            <label type="number" min={0} className="count">
              {count}
            </label>
            <input
              type="button"
              value="+"
              onClick={handleIncrement}
              max="3"
            ></input>
          </div>
          {/* <input
            value={selectedGuests}
            onChange={onChangeGuest}
            type="number"
            placeholder="1"
            id="guest"
            min={1}
            max={3}
          /> */}
          <button
            type="submit"
            onSubmit={handleChange}
            className="buttonBooking"
            disabled={!isFormValid()}
            aria-label="On Click"
          >
            Make Your reservation
          </button>

          <Link to="/">
            <button className="buttonBookingText"> Go Back </button>
          </Link>
        </form>
      </div>
      <StyleDropdown>
        <AddOnServices></AddOnServices>
      </StyleDropdown>
    </body>
  );
}

export default BookingPage;
