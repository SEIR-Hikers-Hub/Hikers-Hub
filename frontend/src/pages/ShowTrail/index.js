import { Link } from 'react-router-dom';
import { useState } from 'react';
import { deleteTrail, editTrail } from '../../utils/api';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
// STYLES
import './styles.css';
import axios from 'axios';


export default function ShowTrail({ getTrails, shownTrail, region }) {


    // const [reviews, setReviews] = useState(shownTrail.reviews)

const displayReview = (reviews) => {
	if (!shownTrail.reviews) return null;
	console.log('this is review', reviews);
	return reviews.map((review, i) => (
		<div key={i}>
			<h5>{review.title}</h5>
			<p>{review.content}</p>
		</div>
	));
};


    return (
        <main className="center-item">

            <h2 className='shown-trail-name' >{shownTrail.name}</h2>
            <img src={shownTrail.image}></img>
            <h3>Location:</h3><p>{shownTrail.location}</p>
            <h3>Difficulty:</h3><p>{shownTrail.difficulty}</p>
            <h3>Description:</h3><p className='description-text'>{shownTrail.description}</p>
            <h3>Terrain:</h3><p>{shownTrail.terrain}</p>
            <h3>Activity:</h3><p>{shownTrail.activity}</p>
            <h3>Waterfalls?:</h3><p>{shownTrail.waterfalls}</p>
            <h3>Total Distance:</h3><p>{shownTrail.distance} Miles</p>

            {/* <p>{shownTrail.reviews}</p> */}
            
            <h3>Reviews:</h3>   
            <p>{displayReview(shownTrail.reviews)}</p>


            <Link className='underlined-link' to={"/edittrail/" + shownTrail._id}>Edit Trail</Link> <br></br>
            <Link className='underlined-link' onClick={() => deleteTrail(shownTrail._id)} to='/'>Delete Trail</Link> <br></br>
            <Link className='underlined-link' onClick={() => getTrails(region)} to='/hikes'>Return to {region} Trails</Link>
        </main>
    )
};