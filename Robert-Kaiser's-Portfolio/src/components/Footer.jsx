import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { Container } from "react-bootstrap";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="text-center">
          <span className="footerText">Robert Kaiser&apos;s Links</span>
          <div className="mt-3">
            <a
              href="https://github.com/RobKaiser97"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2"
            >
              <FontAwesomeIcon id="gHLogo" icon={faGithub} size="2x" />
            </a>
            <a
              href="https://linkedin.com/in/robert-kaiser1"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2"
            >
              <FontAwesomeIcon id="lILogo" icon={faLinkedin} size="2x" />
            </a>
            <a
              href="https://facebook.com/RobertScottKaiserJR"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2"
            >
              <FontAwesomeIcon id="fBLogo" icon={faFacebook} size="2x" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

Footer.propTypes = {
  github: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
  facebook: PropTypes.string.isRequired,
};

export default Footer;
