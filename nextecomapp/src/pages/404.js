import { Card, Container, Button } from "react-bootstrap"
import AQ from "../assests/logo.png"
import Image from "next/image"
import { FaHome } from "react-icons/fa"

const NotFound = () => {
    return (
        <>
            <Container className="mt-5">
                <div className="row justify-content-center text-center">
                    <Card className="shadow-lg" style={{ width: '30rem' }} >
                        <Card.Body>
                            <Image className="card-img-top" src={AQ} />
                            <Card.Title>Page You are looking for is not available</Card.Title>
                            <div className="text-center">
                            <Button variant="link" href="/"><FaHome size={25} /></Button>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </Container>
        </>
    )
}
export default NotFound