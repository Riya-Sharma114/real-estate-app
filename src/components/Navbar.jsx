import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {

  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenus = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      {/* LOGO */}
      <div className="logo" onClick={() => navigate("/")}>
        DreamEstate
      </div>

      {/* NAV LINKS */}
      <div className={`nav-links ${menuOpen ? "active" : ""}`}>

        <Link to="/" onClick={closeMenus}>Home</Link>

        <Link to="/about" onClick={closeMenus}>About</Link>

        <Link to="/properties" onClick={closeMenus}>Properties</Link>

        <Link to="/contact" onClick={closeMenus}>Contact</Link>

      </div>

      {/* RIGHT SECTION */}
      <div className="nav-right">

        {/* LOGIN BUTTON */}
        <button
          className="nav-btn"
          onClick={() => {
            navigate("/login");
            closeMenus();
          }}
        >
          Create Account / Login
        </button>

        {/* HAMBURGER */}
        <div
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>

    </nav>
  );
}

export default Navbar;

