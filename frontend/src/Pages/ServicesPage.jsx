import { React, useState } from "react";
import { Link } from "react-router-dom";
import IndividualPlayImg from "/Users/Juliemk/paws-claws-repo/paws1/src/Individual-Play-Images/IMG_3270.jpeg";
import PuppyPlayImg from "/Users/Juliemk/paws-claws-repo/paws1/src/Puppy-play-Images/IMG_0417.jpeg";
import SeniorPlayImg from "/Users/Juliemk/paws-claws-repo/paws1/src/Senior-Play-Images/IMG_0352.jpeg";
import AddOnServices from "./AddOnServices";
import styled from "styled-components";

function ServicesPage() {
  const StyleDropdown = styled.div`
    color: #1e5a7d;
    font-size: 20px;
    height: 13%;
    grid-column: 7;
    grid-row: 2;
    margin-right: 50px;
    margin-top: 10px;
  `;

  return (
    <div className="servicesPage">
      <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className="svgBoxS"
      >
        <path
          id="circlePath"
          d=" 
          M 0, 80 
          a 20 20, 
          30, 1 1 
          120 60
          "
          fill="none"
        />
        <Link to="/" className="homepageLink">
          <text>
            <textPath
              href="#circlePath"
              textLength={150}
              className="title"
              fill="rgb(21, 114, 255)"
              fontSize={15}
            >
              Paws and Claws Daycare & Resort
            </textPath>
          </text>
        </Link>
      </svg>
      <header className="headerS">- Provided Services -</header>

      <img
        className="imgs1"
        alt="Individual Play Image"
        src={IndividualPlayImg}
      ></img>
      <br />
      <article className="oneS">
        <p className="titles">Boarding</p>
        <p id="text" className="first">
          Travel plans that don’t include your furry friend? Your pets stay
          overnight in your sitter’s home. They’ll be treated like part of the
          family in a comfortable environment. Ensure you and your pet can both
          enjoy much-deserved vacations.
        </p>
        <div className="content">
          <p id="text">Starting at $95/night</p>
          <p id="text">$20/Additional pup</p>
          <p id="text">Please inquire for special requests of animals</p>
        </div>
      </article>

      <img className="imgs2" alt="Puppy Play Image" src={PuppyPlayImg}></img>
      <article className="twoS">
        <p className="titles">Daycare</p>
        <p id="text" className="second">
          We created our dog daycare with the wellbeing and happiness of dogs in
          mind. When your pup visits us, they’ll enjoy plenty of interaction,
          exercise, play, and the right amount of socialization for them. Your
          dog spends the day at your sitter’s home. Drop them off in the morning
          and pick up a happy pup in the evening.
        </p>
        <div className="content">
          <p id="text">Starting at $75/day</p>
          <p id="text">$15/Additional pup</p>
          <p id="text">Please inquire for special requests of animals</p>
        </div>
      </article>

      <img className="imgs3" alt="Senior Play Image" src={SeniorPlayImg}></img>
      <article className="threeS">
        <p className="titles">Drop In Visits</p>
        <p id="text" className="third">
          Your sitter drops by your home to play with your pets, offer food, and
          give potty breaks or clean the litter box. Your sitter takes care of
          your pets and your house. Your pets will get all the attention they
          need from the comfort of home.
        </p>
        <div className="content">
          <p id="text">Starting at $25/visit</p>
          <p id="text">$10/Additional pup</p>
          <p id="text">
            Services within a five mile radius, fees may apply for visits
            outside of radius
          </p>
        </div>
      </article>

      <div className="button-container-s">
        <Link to="/bookingpage" type="button">
          <button className="bookingButton">Book now!</button>
        </Link>
      </div>

      <StyleDropdown>
        <AddOnServices></AddOnServices>
      </StyleDropdown>
      <button className="refer-friend">
        Refer a Friend and get 10% off your next booking!
      </button>
    </div>
  );
}

export default ServicesPage;
