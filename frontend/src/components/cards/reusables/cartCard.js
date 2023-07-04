import { Card, Badge } from 'react-bootstrap';
import { FaTrash, FaHeart } from "react-icons/fa"
const CartCard = (data) => {
    const { title, description, price } = data
    return (
        <>
            <Card className='shadow-lg'>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                        <h4><Badge bg="success">
                            Price : ₹{price}
                        </Badge></h4>
                    </Card.Subtitle>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Link className='text-secondary'><FaTrash size={25} /></Card.Link>
                    <Card.Link className='text-danger'><FaHeart size={25} /></Card.Link>
                </Card.Body>
            </Card>
        </>
    )
}
export default CartCard
