

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



export default function Home({ getTrails, region }) {

    console.log(region);
    return (
        <main className="center-item">


            <h1 className='hikers-hub-title' >Welcome to Hikers Hub!</h1>
            <Card>
                <Link class='link' onClick={() => getTrails('CA')} to='/hikes' >
                    <Card.Img variant="top" src={ca_hike} />
                    <Card.Body>
                        <Card.Text>
                            From sandy beaches to snow-capped mountains, California has a hike for lovers of any terrain.
                        </Card.Text>
                    </Card.Body>
                </Link>
            </Card>
            <br />

            <Card>
                <Link class='link' onClick={() => getTrails('OR')} to='/hikes' >
                    <Card.Img variant="top" src={or_hike} />
                    <Card.Body>
                        <Card.Text>
                            Adventure your way through lush forests and maybe even encounter a world-renowned winery or two.
                        </Card.Text>
                    </Card.Body>
                </Link>
            </Card>

            <br />
            <Card>
                <Link class='link' onClick={() => getTrails('WA')} to='/hikes' >
                    <Card.Img variant="top" src={wa_hike} />
                    <Card.Body>
                        <Card.Text>
                            Here are some trails that will help you escape life in the city and connect your spirit with nature.
                        </Card.Text>
                    </Card.Body>
                </Link>
            </Card>


        </main>
    )
};