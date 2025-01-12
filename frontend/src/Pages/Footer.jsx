import react, { useState } from "react";
import { Link } from "react-router-dom";

function Footer() {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setComment("");
    console.log("Form submitted!");
    if (comment.length <= 10) {
      alert("comment too short!!!!!!!");
      return;
    }
  };

  const onSubmit = (e) => {
    console.log("successfully submitted!");
  };

  return (
    <footer className="footer">
      <section className="one">
        <h1>Paws&Claws Daycare & Resort</h1>
        <p>325 Cotton CT</p>
        <p>Tel: (770)-689-9699</p>
        <span>
          <label>Email us at:</label>
          <Link
            onClick={() =>
              (window.location.href = "mailto:Juliemk65@gmail.com")
            }
            style={{ color: "blue" }}
          >
            Juliemk65@gmail.com
          </Link>
        </span>
      </section>
      <section className="two">
        <h3 className="hoursHeader">Hours of Operation</h3>
        <ul className="hours">
          <li>Monday 6AM-6PM</li>
          <li>Tuesaday 6AM-6PM</li>
          <li>Wednesay 6AM-6PM</li>
          <li>Thursday 6AM-6PM</li>
          <li>Friday 6AM-6PM</li>
          <li>Saturday 6AM-6PM</li>
          <li>Sunday 6AM-3PM</li>
          <li>potato</li>
        </ul>
      </section>
      <section className="three">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            className="nameInput"
            id="name"
            placeholder="Name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          ></input>
          <label htmlFor="comment">Comments/Questions/Concerns:</label>
          <textarea
            className="commentInput"
            value={comment}
            name="comment"
            onChange={(e) => {
              setComment(e.target.value);
            }}
            required
            wrap="hard"
            placeholder="Please type here.."
          />
          <button className="footerSubmit" type="submit">
            Submit
          </button>
        </form>
      </section>
    </footer>
  );
}

export default Footer;
