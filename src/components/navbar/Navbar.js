import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Hamburger icon & close icon
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking a link
  const handleNavLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      {/* Centered Menu */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><Link to="/" onClick={handleNavLinkClick}>Hem</Link></li>
        <li><a href="#dresscode" onClick={handleNavLinkClick}>Dresscode</a></li>
        <li><a href="#schedule" onClick={handleNavLinkClick}>Schema</a></li>
        <li><a href="#menu" onClick={handleNavLinkClick}>Mat & Dryck</a></li>
        <li><a href="#rsvp" onClick={handleNavLinkClick}>RSVP</a></li>
        <li><Link to="/gifts" onClick={handleNavLinkClick}>Gåvor</Link></li>
      </ul>

      {/* Hamburger Menu Icon */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={30} /> : <Menu size={30} />}
      </div>
    </nav>
  );
}

export default Navbar;
