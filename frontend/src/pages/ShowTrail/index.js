import { Link } from 'react-router-dom';
import { useState } from 'react';

// STYLES
import './styles.css';
import axios from 'axios';


export default function ShowTrail({ getTrails, shownTrail, region }) {

    const [reviews, setReviews] = useState(shownTrail.reviews)

    // function to grab trails by state
    // async function getReview(id) {
    //     const showReview = await axios.get(`http://localhost:5001/trail/${id}`)
    //     setReview(showReview.data)
    // }



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
            {/* <h3>{getReview(shownTrail._id)}</h3> */}
            <p>{shownTrail.reviews}</p>
            {/* {reviews.map((singleReview, i) => {
                return(
                    <h1 key={i}>{singleReview.title}</h1>
                    <h1>{singleReview.reviewer.username}</h1>
                )
            })} */}

            <Link onClick={() => getTrails(region)} to='/hikes' >Return to {region} Trails</Link>
        </main>
    )
};