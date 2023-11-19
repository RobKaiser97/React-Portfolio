import { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopCode,
  faServer,
  faToolbox,
  faCode,
  faSpinner,
  faDatabase,
  faStream,
  faCloud,
  faFileCode,
  faMailBulk,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import {
  faBootstrap,
  faCss3Alt,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import "../styles/Resume.css";
import resumePdfLink from "../assets/Robert_Kaiser_Resume_Standard.pdf";

const categories = [
  {
    name: "Frontend Development",
    skills: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "Ajax"],
    icon: faLaptopCode,
  },
  {
    name: "Backend Development",
    skills: ["Node JS", "MongoDB", "SQL", "Sequelize", "Heroku"],
    icon: faServer,
  },
  {
    name: "Development Tools",
    skills: ["Git", "JSON", "Postman", "Agile"],
    icon: faToolbox,
  },
];

const skillIcons = {
  HTML: faHtml5,
  CSS: faCss3Alt,
  JavaScript: faJsSquare,
  jQuery: faCode,
  Bootstrap: faBootstrap,
  Ajax: faSpinner,
  "Node JS": faNodeJs,
  MongoDB: faDatabase,
  SQL: faDatabase,
  Sequelize: faStream,
  Heroku: faCloud,
  Git: faGitAlt,
  JSON: faFileCode,
  Postman: faMailBulk,
  Agile: faUsers,
};

const Resume = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const timeoutId = useRef(null);

  useEffect(() => {
    if (hoveredCategory) {
      setIsVisible(true);
    } else {
      // Delay the removal of the 'visible' class by 2 seconds
      timeoutId.current = setTimeout(() => {
        setIsVisible(false);
      }, 2000);
    }

    // Clear the timeout if the effect is re-run
    return () => clearTimeout(timeoutId.current);
  }, [hoveredCategory]);

  return (
    <Container fluid className="resume-container py-5">
      {/* Download button for resume */}
      <Row className="justify-content-center my-4">
        <Col className="text-center">
          <a href={resumePdfLink} download="Robert_Kaiser_Resume_Standard.pdf">
            <Button variant="primary">Download My Resume</Button>
          </a>
        </Col>
      </Row>

      {/* Categories and skills grid */}
      <Row className="justify-content-center">
        {categories.map((category, index) => (
          <Col key={index} xs={6} md={4} lg={3} className="mb-4">
            <div
              className="category-container"
              onMouseEnter={() => setHoveredCategory(category.name)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <div className="category-icon">
                <FontAwesomeIcon icon={category.icon} size="4x" />
              </div>
              <div className="category-text">{category.name}</div>
            </div>
            {hoveredCategory === category.name && (
              <Row className={`fade-in ${isVisible ? "visible" : ""}`}>
                {category.skills.map((skill, skillIndex) => (
                  <Col key={skillIndex} xs={4} className="mb-2">
                    <div className="skill-icon">
                      <FontAwesomeIcon icon={skillIcons[skill]} size="2x" />
                    </div>
                    <div className="skill-text">{skill}</div>
                  </Col>
                ))}
              </Row>
            )}
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Resume;
