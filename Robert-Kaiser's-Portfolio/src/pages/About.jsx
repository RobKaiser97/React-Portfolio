import { Container, Row, Col, Image } from "react-bootstrap";

function About() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs lg="2">
          {/* TODO */}
          <Image src="path_to_your_image.jpg" rounded />
        </Col>
        <Col md="auto">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
