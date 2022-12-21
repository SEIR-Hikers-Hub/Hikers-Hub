

import ca_hike from '../../assets/ca_hike.jpg';

// BOOTSTRAP
import Card from 'react-bootstrap/Card';
// STYLES
import './styles.css';

export default function State() {


    return (
        <main className="center-item">
            

            <h1>Welcome to Hikers Hub!</h1>
            <Card>
                <a href="/state/:california">
                    <Card.Img variant="top" src={ca_hike} />
                    <Card.Body>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    </Card.Body>
                </a>
            </Card>
           
            
        </main>
    )
};