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
            I&apos;m Robert Kaiser, hailing from New Jersey. My professional
            journey encompasses a dynamic blend of technical expertise and
            leadership skills, honed over six years in the United States Marine
            Corps, where I excelled as an Avionics Repair Technician and a small
            unit leader. My career in the Marines not only sharpened my
            technical acumen in avionics testing and repair but also instilled
            in me a strong sense of discipline and team collaboration. Fueling
            my technical journey is a deep-rooted passion for web design and
            coding. Currently, I am actively expanding my knowledge and
            experience in both front-end and back-end web development. My
            approach is detail-oriented, combining the precision I practiced in
            avionics with the creativity and problem-solving skills essential in
            software development. Away from work, I serve as a volunteer
            firefighter, a role that reflects my commitment to community
            service. My personal interests include hiking, indulging in video
            games, and enjoying winter sports like skiing and snowboarding. This
            diverse array of activities complements my professional life, as
            each pursuit hones different facets of my character – from teamwork
            and resilience to strategic thinking and continuous learning in
            fast-paced environments.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
