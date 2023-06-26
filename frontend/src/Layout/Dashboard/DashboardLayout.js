import { Badge, ListGroup, Container, Card } from 'react-bootstrap';
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
        },
        {
            name: "Services",
            path: "/user/services"
        },
        {
            name: "Coupons",
            path: "/user/coupons"
        },
        {
            name: "userIndex",
            path: "/user/home"
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
                                className="d-flex justify-content-between align-items-start p-4"
                            >
                                <div className="ms-2 me-auto">
                                    Hello
                                    <div className="fw-bold text-primary">{user ? user.name : "Aquakart User"}</div>
                                </div>
                            </ListGroup.Item>
                        </ListGroup>
                        <ListGroup as="ol" numbered>
                            {UserMenuMap.map((r, i) => (
                                <ListGroup.Item
                                    key={i}
                                    as="li"
                                    className="d-flex justify-content-between align-items-start shadow-lg p-4 m-1 text-primary"
                                >
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">{r.name}</div>
                                    </div>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                        <Card className="shadow-lg p-3 dashboard-height">
                            <Card.Body>{props.children}</Card.Body>
                        </Card>
                    </div>
                </div>
            </Container>
        </>
    )
}
export default DashboardLayout