import react from "react";
import { Link } from "react-router-dom";

function Heading() {
  return (
    <header className="header">
      {/* <h1 className="title">Paws&Claws Daycare & Resort</h1> */}
      <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className="svgBox"
      >
        <path
          id="circlePath"
          d=" 
          M -90, 70 
          a 150 60, 
          0, 1 1 
          9 50
          "
          fill="none"
        />
        <Link to="/" className="homepageLink">
          <text>
            <textPath
              href="#circlePath"
              textLength={300}
              className="title"
              fill="#2a729b"
              fontSize={28}
            >
              Paws and Claws Daycare & Resort
            </textPath>
          </text>
        </Link>
      </svg>
    </header>
  );
}

export default Heading;
