import { Container, Nav, Navbar, NavDropdown, Form , Button } from 'react-bootstrap';
import {FaFingerprint} from "react-icons/fa"

function AquaNav() {
    return (
        <Navbar expand="lg" className="shadow-lg mb-">
            <Container>
                <Navbar.Brand href="/">Aquakart</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/shop">Shop</Nav.Link>
                        <Nav.Link href="/compare">Compare</Nav.Link>
                        <Nav.Link href="/services">Services</Nav.Link>
                        <NavDropdown title="Link" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#" disabled>
                            Link
                        </Nav.Link>
                    </Nav>
                    <Nav className='me-auto'>
                    <Form className="d-flex me-2">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    <Button variant="outline-danger"><FaFingerprint size={25}/></Button>
                    </Nav>
                  
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default AquaNav;