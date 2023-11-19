import PropTypes from "prop-types";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "../styles/Nav.css";

function Nav({ setCurrentPage }) {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="custom-navbar">
      <div className="custom-container">
        <a className="navbar-brand" href="/">
          Robert Kaiser
        </a>
        <button
          className="navbar-toggle"
          onClick={() => setExpanded(!expanded)}
        >
          <FontAwesomeIcon icon={faBars} /> {/* Hamburger icon */}
        </button>
        <div
          className={`navbar-collapse ${expanded ? "show" : ""}`}
          id="basic-navbar-nav"
        >
          <ul className="navbar-nav ms-auto">
            {/* About Link */}
            <li className="nav-item">
              <Link
                to="/"
                className={`nav-link ${isActive("/") ? "active" : ""}`}
                onClick={() => {
                  setCurrentPage("/");
                  setExpanded(false);
                }}
              >
                About
              </Link>
            </li>
            {/* Projects Link */}
            <li className="nav-item">
              <Link
                to="/projects"
                className={`nav-link ${isActive("/projects") ? "active" : ""}`}
                onClick={() => {
                  setCurrentPage("/projects");
                  setExpanded(false);
                }}
              >
                Projects
              </Link>
            </li>
            {/* Contact Link */}
            <li className="nav-item">
              <Link
                to="/contact"
                className={`nav-link ${isActive("/contact") ? "active" : ""}`}
                onClick={() => {
                  setCurrentPage("/contact");
                  setExpanded(false);
                }}
              >
                Contact
              </Link>
            </li>
            {/* Resume Link */}
            <li className="nav-item">
              <Link
                to="/resume"
                className={`nav-link ${isActive("/resume") ? "active" : ""}`}
                onClick={() => {
                  setCurrentPage("/resume");
                  setExpanded(false);
                }}
              >
                Resume
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

Nav.propTypes = {
  setCurrentPage: PropTypes.func.isRequired,
};

export default Nav;
