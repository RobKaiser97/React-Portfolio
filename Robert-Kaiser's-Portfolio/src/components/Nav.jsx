import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Nav({ currentPage, setCurrentPage }) {
  return (
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link
          to="/"
          className={currentPage === "/" ? "nav-link active" : "nav-link"}
          onClick={() => setCurrentPage("/")}
        >
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/projects"
          className={
            currentPage === "/projects" ? "nav-link active" : "nav-link"
          }
          onClick={() => setCurrentPage("/projects")}
        >
          Projects
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/contact"
          className={
            currentPage === "/contact" ? "nav-link active" : "nav-link"
          }
          onClick={() => setCurrentPage("/contact")}
        >
          Contact
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/resume"
          className={currentPage === "/resume" ? "nav-link active" : "nav-link"}
          onClick={() => setCurrentPage("/resume")}
        >
          Resume
        </Link>
      </li>
    </ul>
  );
}

Nav.propTypes = {
  currentPage: PropTypes.string.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};

export default Nav;
