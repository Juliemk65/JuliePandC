import react from "react";
import team from "/Users/Juliemk/paws-claws-repo/paws1/src/images/Team.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function Team() {
  return (
    <section className="teamSection">
      {" "}
      <img alt="team" src={team} className="teamPicture"></img>
      <h1 className="team-header">About the Team!</h1>
      <p className="teamParagraph">
        We are a small group of indiviuals striving to provide the friendliest,
        cleanest, and most loyal services to be offered. Our companions offer us
        love and protection in ways beyond us, it is our duty to return that
        same care & comfort. We are fully insured to care for your pets and
        home! Please reach out for any assistance, here to help paws&claws
        alike! 🥰
        <br />
        <br />
        <h3>Want to get to know us better?</h3>
        <section>Check us out in more places! 🤩</section>
        <span>
          <Link to="https://www.instagram.com/more.of.clover/" target="blank">
            <FontAwesomeIcon icon={faInstagram} size="2xl" />
          </Link>
          <Link
            to="https://www.linkedin.com/in/julie-kim-758a14182/"
            target="blank"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2xl" />
          </Link>
          <Link to="https://www.facebook.com/julie.kim4/" target="blank">
            <FontAwesomeIcon icon={faFacebook} size="2xl" />
          </Link>
        </span>
      </p>
    </section>
  );
}

export default Team;
