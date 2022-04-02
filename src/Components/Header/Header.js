import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown, NavLink } from 'react-bootstrap';
import { ShoppingBagIcon } from '@heroicons/react/solid'
import '../../Style/Header/Header.css'
const Header = () => {
    return (
        <div>
            <Navbar bg="white" className='shadow-sm p-3' expand="lg">
                <Container >
                    <NavLink to='/' className='text-uppercase nav-items fs-5'> <span>Flower </span> Shop</NavLink>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                    <Nav.Link  className=' nav-items' href="/">Home</Nav.Link>
                    <Nav.Link  className='  nav-items' href="#action2">Shop</Nav.Link>
                    <NavDropdown  className=' nav-items' title="Pages" id="navbarScrollingDropdown">
                    <NavDropdown.Item  className='  nav-items' href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item  className='nav-items' href="#action4">Another action</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item  className=' nav-items' href="#action5">
                            Something else here
                    </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link  className=' nav-items' href="/"><ShoppingBagIcon className='shopping-icons' ></ShoppingBagIcon></Nav.Link>

                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        />
                        <Button variant="outline-danger">Search</Button>

                    </Form>
                         
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;