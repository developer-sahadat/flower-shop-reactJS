import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { ShoppingBagIcon } from '@heroicons/react/solid';
import '../../Style/Header.css';
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <Navbar bg="white" className='shadow-sm p-3' expand="lg">
                <Container >
                    <NavLink to='/' className='text-uppercase nav-items fs-5 pe-2'> <span>Flower </span> Shop</NavLink>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0 navigation"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                    <NavLink to="/"  className=' nav-items'>Home</NavLink>
                    <NavLink to='/shop'  className='nav-items'>Shop</NavLink>
                    <NavDropdown className=' nav-items' title="Pages" id="navbarScrollingDropdown">
                    <NavLink to='/contact'  className='  nav-items'>Contact</NavLink>
                    <br/>
                    <NavLink to='/about'  className='  nav-items'>About</NavLink>
                    <br/>
                    <NavLink to='/faq'  className='  nav-items'>FAQ</NavLink>

                    </NavDropdown>
                    <Nav.Link  className=' nav-items'><ShoppingBagIcon className='shopping-icons' ></ShoppingBagIcon></Nav.Link>

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