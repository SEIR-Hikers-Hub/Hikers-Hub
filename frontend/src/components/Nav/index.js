
import { Link } from 'react-router-dom';
import './style.css';

export default function Nav() {


    return (

        <nav>
            <Link to="/"><h1>Logo Here</h1></Link>
            <ul>
                
                <li className="navLink"><h2>Search</h2></li>
                <li className="navLink"><Link to="/login">Log In</Link></li>
                <li className="navLink"><Link to="/signup">Sign Up</Link></li>
                
            </ul>
        </nav>
    )
};