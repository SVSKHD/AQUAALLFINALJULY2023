import { Card, Container } from "react-bootstrap"
import AQ from "../assests/logo.png"
const NotFound = () => {
    return (
        <>
            <Container className="mt-5">
                <div className="row justify-content-center">
                <Card className="" style={{ width: '30rem' }}>
                    <Card.Body>
                    <Card.Img variant="top" src="../assests/logo.png" />
                        <Card.Title>Card Title</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>
                </div>
            </Container>
        </>
    )
}
export default NotFound