

//packages
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// BOOTSTRAP
import Card from 'react-bootstrap/Card';
// Images
import ca_hike from '../../assets/ca_hike.jpg';
import or_hike from '../../assets/or_hike.jpg';
import wa_hike from '../../assets/wa_hike.jpg';
// STYLES
import './styles.css';


export default function Home({getTrails}) {
    
    
    return (
        <main className="center-item">


            <h1>Welcome to Hikers Hub!</h1>
            <Card>
                <Link onClick={() => getTrails('CA')} to='/hikes' >
                    <Card.Img variant="top" src={ca_hike} />
                    <Card.Body>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Link>
            </Card>
            <br />

            <Card>
                <Link onClick={() => getTrails('WA')} to='/hikes' >
                    <Card.Img variant="top" src={wa_hike} />
                    <Card.Body>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Link>
            </Card>

            <br />

            <Card>
            <Link onClick={() => getTrails('OR')} to='/hikes' >
                <Card.Img variant="top" src={or_hike} />
                <Card.Body>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                </Card.Body>
                </Link>
            </Card>

        </main>
    )
};