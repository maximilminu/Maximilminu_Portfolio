import { Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ProjectCard = ({ title, description, imgUrl, link }) => {

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };

    return (
        <Card id="proj-card">
            <Card.Img id="proj-img" src={imgUrl} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text id="proj-text">{description}</Card.Text>
                <Button variant="primary" id="btn-card" onClick={() => openInNewTab(link)}>Github Repo
                </Button>
            </Card.Body>
        </Card>
    )
}

export default ProjectCard