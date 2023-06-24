import { Container, Card, Button } from "react-bootstrap";
import { FaHome } from "react-icons/fa";
import NF from "../assests/NF.png";

const NotFound = () => {
  return (
    <Container className="p-4 text-center">
      <Card>
        <Card.Img variant="top" src={NF} />
        <Card.Body>
          <Button variant="primary">
            <FaHome />
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default NotFound;
