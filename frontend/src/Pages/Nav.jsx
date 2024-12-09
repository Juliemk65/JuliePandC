import react from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/loginPage");
  };

  return (
    <>
      <nav className="nav">
        <ul className="nav-links">
          <Link to="/servicesPage" className="navItems">
            Services/Pricing
          </Link>
          <Link to="/" className="navItems">
            Promotions
          </Link>
          <Link to="/bookingpage" className="navItems">
            Book Now!
          </Link>
          <Link to="/teamSection" className="navItems">
            About us
          </Link>
        </ul>
      </nav>
      <button className="admin-login-button" onClick={handleSubmit}>
        Admin Login
      </button>
    </>
  );
}

export default Nav;
