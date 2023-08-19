import { Card } from "react-bootstrap"
import Logo from "../assests/Default.png"
import Image from "next/image"
const Custom404 = () => {
    return (
        <>
            <div>
                <Card style={{ width: '18rem' }}>
                    <Image className="text-center" height="200" variant="top" src={Logo} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}
export default Custom404