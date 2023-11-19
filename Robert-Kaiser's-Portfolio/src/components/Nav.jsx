import PropTypes from "prop-types";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav as BootstrapNav, Container } from "react-bootstrap";

function Nav({ setCurrentPage }) {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <Navbar
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      expand="lg"
      bg="light"
      fixed="top"
    >
      <Container>
        <Navbar.Brand href="/">
          <img
            src="/path-to-your-icon.png"
            alt="icon"
            style={{ marginRight: "10px" }}
          />
          My Name
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <BootstrapNav className="ms-auto">
            <BootstrapNav.Link
              as={Link}
              to="/"
              active={isActive("/")}
              onClick={() => {
                setCurrentPage("/");
                setExpanded(false);
              }}
            >
              About
            </BootstrapNav.Link>
            <BootstrapNav.Link
              as={Link}
              to="/projects"
              active={isActive("/projects")}
              onClick={() => {
                setCurrentPage("/");
                setExpanded(false);
              }}
            >
              Projects
            </BootstrapNav.Link>
            <BootstrapNav.Link
              as={Link}
              to="/contact"
              active={isActive("/contact")}
              onClick={() => {
                setCurrentPage("/");
                setExpanded(false);
              }}
            >
              Contact
            </BootstrapNav.Link>
            <BootstrapNav.Link
              as={Link}
              to="/resume"
              active={isActive("/resume")}
              onClick={() => {
                setCurrentPage("/");
                setExpanded(false);
              }}
            >
              Resume
            </BootstrapNav.Link>
          </BootstrapNav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

Nav.propTypes = {
  setCurrentPage: PropTypes.func.isRequired,
};

export default Nav;
