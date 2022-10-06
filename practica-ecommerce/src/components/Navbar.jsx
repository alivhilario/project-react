import React from 'react'
import {Navbar, Nav, Container, InputGroup, Form } from 'react-bootstrap' 
import { Link } from 'react-router-dom'

const NavBarExample = () => {
    return (
        <>
            <Navbar className = 'navBg' bg="bg-red" expand="lg" sticky="top">
                <Container>
                    <Logo>Bucky</Logo>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as = {Link} to = '/'> Home</Nav.Link>
                            <Nav.Link as = {Link} to = '/About'>About</Nav.Link>
                            <Nav.Link as = {Link} to = '/Contact'>Contact</Nav.Link>     
                            <InputGroup >
                                <Form.Control placeholder="Search" />
                            </InputGroup>           
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <section>
            </section>
        </>
    )
}

export default NavBarExample

const Logo = (props) => {
    return (
        <div style={{ fontSize: "2rem", fontWeight: "bold", color: "purple" }}>
            {props.children}
        </div>
    )
}