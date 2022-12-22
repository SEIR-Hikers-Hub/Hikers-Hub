//packages
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//pages


import ca_hike from '../../assets/ca_hike.jpg';
import or_hike from '../../assets/or_hike.jpg';
import wa_hike from '../../assets/wa_hike.jpg';

// BOOTSTRAP
import Card from 'react-bootstrap/Card';
// STYLES
import './styles.css';

export default function Home() {
    const navigate = useNavigate()

    // redirect to home page if logged in
    useEffect(() => {
        if (props.isLoggedIn) {
            navigate('/')
        }
    }, [props.isLoggedIn])

    return (
        <main className="center-item">


            <h1>Welcome to Hikers Hub!</h1>
            <Card>
                <a href="/state/:">
                    <Card.Img variant="top" src={ca_hike} />
                    <Card.Body>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </a>
            </Card>
            <br />

            <Card>
                <a href="/state/:washington">
                    <Card.Img variant="top" src={wa_hike} />
                    <Card.Body>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </a>
            </Card>

            <br />

            <Card>
                <Card.Img variant="top" src={or_hike} />
                <Card.Body>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>

        </main>
    )
};