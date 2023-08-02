import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';

const AquaLists = ({ title, description , number}) => {
    return (
        <ListGroup as="ol" numbered={number}>
            <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
            >
                <div className="ms-2 me-auto">
                    <div className="fw-bold">{title}</div>
                    {description}
                </div>
                <Badge bg="primary" pill>
                    14
                </Badge>
            </ListGroup.Item>
        </ListGroup>
    );
}

export default AquaLists;