import { Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const Project = ({ title, description, image, link, gitRepo }) => {
  return (
    <Card className="mb-4">
      <Card.Img variant="top" src={image} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary" href={link} target="_blank" rel="noreferrer">
          View Project
        </Button>
      </Card.Body>
      <Card.Footer>
        <Button
          variant="secondary"
          href={gitRepo}
          target="_blank"
          rel="noreferrer"
        >
          Source Code
        </Button>
      </Card.Footer>
    </Card>
  );
};

Project.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  gitRepo: PropTypes.string.isRequired,
};

export default Project;
