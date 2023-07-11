import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown, Dropdown } from 'react-bootstrap';
import Image from 'next/image'
import AQ from "../assests/logo.png"

const AquaHeader = () => {
    return (
        <Navbar expand="lg" className='shadow-lg'>
            <Container>
                <Navbar.Brand href="/">Aquakart</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/shop">Shop</Nav.Link>
                        <Nav.Link href="#link"></Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav className='mr-auto'>
                        <Dropdown>
                            <Dropdown.Toggle variant="link" id="dropdown-basic">
                                <Image src={AQ} width={35}
                                    height={35} />
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Dashboard</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Orders</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default AquaHeader;