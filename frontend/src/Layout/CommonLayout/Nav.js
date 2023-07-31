import { Button, Container, Form, Nav, Navbar, Dropdown, DropdownButton } from 'react-bootstrap';

import LOGO from "../../assests/logo.png"
import { FaCartPlus, FaUser } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux";

const AquaNav = () => {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => ({ ...state }))
  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">
          <img src={LOGO} height="40" alt='Aquakart-emb' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >

            <Nav.Link href="/compare">Compare</Nav.Link>
            <Nav.Link href="/cart">Cart</Nav.Link>
            <Nav.Link href="/service">Services</Nav.Link>
            <Nav.Link href="/shop">Shop</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>

          {user ? (<>
            <Button className='m-1' variant='light' onClick={() => {
              dispatch({
                type: "SET_CART_DRAWER_VISIBLE",
                payload: true,
              })
            }} >
              <FaUser size={25} />
            </Button>
          </>) : (
            <>
              <Button className='m-1'
                onClick={() => {
                  dispatch({
                    type: "SET_CART_DRAWER_VISIBLE",
                    payload: true,
                  })
                }}
              ><FaCartPlus size={25} /></Button>
              <Button className='m-1' onClick={() => {
                dispatch({
                  type: "SET_AUTH_DRAWER_VISIBLE",
                  payload: true,
                })
              }}>Signup</Button>
            </>
          )}

        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default AquaNav;
