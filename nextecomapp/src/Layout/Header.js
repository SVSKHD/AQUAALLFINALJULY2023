import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown, Dropdown, Button } from 'react-bootstrap';
import { FaCartPlus, FaUser } from "react-icons/fa"
import Image from 'next/image'
import AQ from "../assests/logo.png"
import { useState } from 'react';
import AuthReusableDialog from '@/auth/authDialog';

const AquaHeader = () => {
    const [authDialog, setAuthDialog] = useState(false)
    return (
        <div className='mb-3'>
            <Navbar expand="lg" className='shadow-lg'>
                <Container>
                    <Navbar.Brand href="/">Aquakart</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/shop">Shop</Nav.Link>
                            <Nav.Link href="/cart">cart</Nav.Link>
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
                            <button type="button" className="btn btn-primary position-relative">
                                <FaCartPlus size={25} />
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    99+
                                    <span className="visually-hidden">unread messages</span>
                                </span>
                            </button>
                            <Button variant="dark" className='ms-2' onClick={() => setAuthDialog(!authDialog)} >
                                <FaUser size={25} />
                            </Button>
                            <AuthReusableDialog show={authDialog} close={() => setAuthDialog(false)} />
                            {/* <Dropdown>
                                <Dropdown.Toggle variant="link" id="dropdown-basic">
                                    <Image src={AQ} width={35}
                                        height={35} />
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Dashboard</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Orders</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default AquaHeader;