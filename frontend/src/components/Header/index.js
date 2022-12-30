
import { useState, useEffect } from 'react';
// BOOTSTRAP
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// DEPENDENCIES
import { Link } from 'react-router-dom';
// Logo
import hikers_hub_logo from '../../assets/hikers_hub_logo.png';
// STYLE
import './style.css';

export default function Header(props) {

    // state declaration: build JSX array of NavBar items
    const initialState = []
    const [navItems, setNavItems] = useState(initialState)

    // add NavBar items to JSX array depending on App login state
    useEffect(() => {
        if (props.isLoggedIn) {
            setNavItems(initialState.concat(
                <Nav className="me-auto" key='2'>
                    <Button className="log" onClick={() => {
                        props.setIsLoggedIn(false)
                        localStorage.clear()
                        console.log(localStorage.token)
                    }}>Log Out</Button>
                    <Nav.Link className="nav-item" href="/addtrail">Add Trail</Nav.Link>
                </Nav>
            ))
        } else {
            setNavItems(initialState.concat([
                <Nav className="me-auto" key='2'>
                    <Nav.Link className="nav-item" href="/login" key='2'>Log In</Nav.Link>
                    <Nav.Link className="nav-item" href="/signup" key='3'>Sign Up</Nav.Link>
                </Nav>
            ]))
        }
    }, [props.isLoggedIn])

    return (

        <Navbar className="navbar" variant="light" fixed="top" expand="lg">
            <Container>
                <Link className="link" to='/'><Navbar.Brand className="nav-logo">Logo</Navbar.Brand></Link>

                {/* <img src="../../assets/hikers_hub_logo.png" className="logo" alt="hikers hub logo"/> */}
            
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    {navItems}
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};