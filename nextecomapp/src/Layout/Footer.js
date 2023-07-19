import { Card, Container, Row, Col } from "react-bootstrap";
import AQ from "../assests/logo.png";
import Image from "next/image";

const AquaFooter = () => {
  let year = new Date().getFullYear();
  return (
    <Card className="border-0 shadow-lg fixed-bottom text-center">
      <Card.Body>
        <Container>
          <Row>
            <Col sm={12} xs={12} md={4} lg={4}>
              <Image src={AQ} height={100} width={100} />
            </Col>
            <Col sm={12} xs={12} md={4} lg={4}>
              xs=6 md=4
            </Col>
            <Col xs={12} md={4} sm={4} lg={4}>
              xs=6 md=4
            </Col>
          </Row>
        </Container>
      </Card.Body>
      <Card className="aqua-footer border-0 shadow-lg">
        <Card.Body>
          <h5>Aquakart © {year}</h5>
        </Card.Body>
      </Card>
    </Card>
  );
};

export default AquaFooter;
