import Project from "../components/Projects";
import projectData from "../utils/projects.js";
import { Container, Row, Col } from "react-bootstrap";

function Projects() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <h1 className="text-center">Projects</h1>
        </Col>
      </Row>
      <Row>
        {projectData.map((project) => (
          <Col xs={12} md={6} lg={4} xl={3} key={project.title}>
            <Project
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
              gitRepo={project.gitRepo}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Projects;
