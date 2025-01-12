import react from "react";

import Boarding from "/Users/Juliemk/paws-repo-2/paws-repo/frontend/src/Images/Boarding.jpeg";
import Dropin from "/Users/Juliemk/paws-repo-2/paws-repo/frontend/src/Images/Dropin.jpeg";
import { useState } from "react";
import { Link } from "react-router-dom";
import Daycare from "/Users/Juliemk/paws-repo-2/paws-repo/frontend/src/Images/Daycare.jpeg";

function Services() {
  const [hover, setHover] = useState(false);

  return (
    <main className="main">
      <div className="cards">
        <Link
          to="/servicesPage"
          className="daycareLink"
          style={{ textDecoration: "none" }}
        >
          <article className="daycare">
            <h1 className="opt1">Daycare </h1>
            <img className="leo" src={Daycare}></img>

            <p className="firstLast">In our home</p>
          </article>
        </Link>

        <Link
          to="/servicesPage"
          className="boardingLink"
          style={{ textDecoration: "none" }}
        >
          <article className="boarding">
            <h1 className="opt2">Boarding</h1>

            <img className="trio" src={Boarding}></img>
            <p className="middle">In our home</p>
          </article>
        </Link>

        <Link
          to="/servicesPage"
          className="dropinLink"
          style={{ textDecoration: "none" }}
        >
          <article className="dropin">
            <h1 className="opt3">Drop-in Visits </h1>
            <img className="murphy" src={Dropin}></img>

            <p className="firstLast">In your home</p>
          </article>
        </Link>
      </div>
    </main>
  );
}

export default Services;
