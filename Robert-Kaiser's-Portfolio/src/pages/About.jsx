import { Container, Row, Col } from "react-bootstrap";
import "../styles/About.css";
import portrait from "../assets/portrait.jpg";

function About() {
  return (
    <Container className="pt-5">
      <Row className="justify-content-md-center">
        <Col className="justify-content-center d-flex">
          {/* TODO */}
          <img src={portrait} id="photo" />
        </Col>
        <Col md="auto">
          <p>
            Detail-oriented Avionics Technician with experience in back-end and
            front-end web development, demonstrating a unique blend of technical
            skills in both avionics and software development. Proven track
            record in avionics testing and repair, combined with a passion for
            coding and web technologies. Adept at problem-solving, team
            collaboration, and continuous learning in fast-paced environments.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
