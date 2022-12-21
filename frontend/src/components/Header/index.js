
// BOOTSTRAP
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// DEPENDENCIES
import { Link } from 'react-router-dom';
// STYLE
import './style.css';

export default function Header() {


    return (

        <Navbar className="navbar" variant="light" fixed="top" expand="lg">
            <Container>
                <Navbar.Brand className="nav-logo" href="#home">Logo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/login">Log In</Nav.Link>
                    <Nav.Link href="/signup">Sign Up</Nav.Link>
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
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

//         <nav classname="navbar navbar-expand-lg bg-light">
//             <div classname="container-fluid">
//                 <Link to="/"><h1 classname="navbar-brand">Logo Here</h1></Link>
//                 <div classname="collapse navbar-collapse" id="navbarNav">
//                     <ul classname="navbar-nav">
                        
//                         <li className="nav-item"><h2>Search</h2></li>
//                         <li className="nav-item"><Link classname="nav-link" to="/login">Log In</Link></li>
//                         <li className="nav-item"><Link classname="nav-link" to="/signup">Sign Up</Link></li>
                        
//                     </ul>
//                 </div>
//             </div>
//         </nav>
//     )
// };