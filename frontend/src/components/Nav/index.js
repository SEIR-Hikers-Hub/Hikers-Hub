
// BOOTSTRAP
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// DEPENDENCIES
import { Link } from 'react-router-dom';
import './style.css';

export default function Nav() {


    return (

        <nav classname="navbar navbar-expand-lg bg-light">
            <div classname="container-fluid">
                <Link to="/"><h1 classname="navbar-brand">Logo Here</h1></Link>
                <div classname="collapse navbar-collapse" id="navbarNav">
                    <ul classname="navbar-nav">
                        
                        <li className="nav-item"><h2>Search</h2></li>
                        <li className="nav-item"><Link classname="nav-link" to="/login">Log In</Link></li>
                        <li className="nav-item"><Link classname="nav-link" to="/signup">Sign Up</Link></li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    )
};