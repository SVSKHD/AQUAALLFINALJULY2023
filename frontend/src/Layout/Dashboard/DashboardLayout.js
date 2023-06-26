import { Badge, ListGroup, Container } from 'react-bootstrap';
import DashboardNav from './DashboardNav';
import { useSelector, useDispatch } from "react-redux"

const DashboardLayout = (props) => {
    const dispatch = useDispatch()
    const { user } = useSelector((state) => ({ ...state }))
    const UserMenuMap = [
        {
            name: "Profile",
            path: "/user/profile"
        },
        {
            name: "Orders",
            path: "/user/orders"
        },
        {
            name: "History",
            path: "/user/history"
        }
    ]
    return (
        <>
            <DashboardNav />
            <Container>
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <ListGroup className='shadow-lg mb-3'>
                            <ListGroup.Item
                                as="li"
                                className="d-flex justify-content-between align-items-start"
                            >
                                <div className="ms-2 me-auto">
                                    Hello
                                    <div className="fw-bold">{user ? user.name : "Aquakart User"}</div>

                                </div>
                            </ListGroup.Item>
                        </ListGroup>
                        <ListGroup as="ol" numbered>
                            {UserMenuMap.map((r, i) => (
                                <ListGroup.Item
                                    key={i}
                                    as="li"
                                    className="d-flex justify-content-between align-items-start shadow-lg"
                                >
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">{r.name}</div>
                                        Cras justo odio
                                    </div>
                                    <Badge bg="primary" pill>
                                        14
                                    </Badge>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                        {props.children}
                    </div>
                </div>
            </Container>
        </>
    )
}
export default DashboardLayout