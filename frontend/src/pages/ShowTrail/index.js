import { Link } from 'react-router-dom';
import { useState } from 'react';

// STYLES
import './styles.css';
import axios from 'axios';


export default function ShowTrail({ getTrails, shownTrail, region }) {

    // const [reviews, setReviews] = useState(shownTrail.reviews)

    const displayReview = async(reviews) => {
        if (!reviews.length) return null;

        return await reviews.map((review, index) => (
            <div key={index}>
                <h3>{review.title}</h3>
                <p>{review.content}</p>
            </div>
        ))
    }

    return (
        <main className="center-item">

            <h2>{shownTrail.name}</h2>
            <img src={shownTrail.image}></img>
            <h3>Location:</h3><p>{shownTrail.location}</p>
            <h3>Difficulty:</h3><p>{shownTrail.difficulty}</p>
            <h3>Description:</h3><p>{shownTrail.description}</p>
            <h3>Terrain:</h3><p>{shownTrail.terrain}</p>
            <h3>Activity:</h3><p>{shownTrail.activity}</p>
            <h3>Waterfalls?:</h3><p>{shownTrail.waterfalls}</p>
            <h3>Total Distance:</h3><p>{shownTrail.distance} Miles</p>

            {/* <p>{shownTrail.reviews}</p> */}
{/* 
            <h3>Reviews:</h3>   
            <p>{displayReview(shownTrail.reviews)}</p> */}


            <Link onClick={() => getTrails(region)} to='/hikes' >Return to {region} Trails</Link>
        </main>
    )
};