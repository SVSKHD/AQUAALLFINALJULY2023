import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';

const AquaLists = ({ title, description , number}) => {
    return (
        <ListGroup as="ol">
            <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
            >
                 <Badge bg="danger" pill>
                    {number}
                </Badge>
                <div className="ms-2 me-auto">
                    <div className="fw-bold">{title}</div>
                    {description}
                </div>
               
            </ListGroup.Item>
        </ListGroup>
    );
}

export default AquaLists;