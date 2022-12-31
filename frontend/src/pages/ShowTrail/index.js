import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { deleteTrail } from '../../utils/api';
// COMPONENTS
import CreateReviewForm from '../../components/CreateReviewForm';
// STYLES
import './styles.css';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function ShowTrail({ getTrails, shownTrail, region, isLoggedIn }) {

    // STATE
    const initialState = []
    const [editDeleteOptions, setEditDeleteOptions] = useState(initialState)

    // use effect to conditionally render edit and delete functionality if signed in
    useEffect(() => {
        if (isLoggedIn) {
            setEditDeleteOptions(initialState.concat(
                <div>
                    <Link className='underlined-link' to={"/edittrail/" + shownTrail._id}>Edit Trail</Link> <br></br>
                    <Link className='underlined-link' onClick={() => deleteTrail(shownTrail._id)} to='/'>Delete Trail</Link> <br></br>
                    <Link className='underlined-link' onClick={() => getTrails(region)} to='/hikes'>Return to {region} Trails</Link>
                </div>
            ))
        } else {
            setEditDeleteOptions(initialState.concat([
                <div>
                    <Link className='underlined-link' onClick={() => getTrails(region)} to='/hikes'>Return to {region} Trails</Link>
                </div>
            ]))
        }
    }, [isLoggedIn])


    // const [reviews, setReviews] = useState(shownTrail.reviews)

    // const displayReview = (reviews) => {
    //     if (!shownTrail.reviews) return null;
    //     return reviews.map((review, i) => (
    //         <div key={i}>
    //             <div id="review-container">
    //                 <h3>{review.title}</h3>
    //                 <h5>Rating: {review.rating} / 5</h5>
    //             </div>
    //             <h6>{review.reviewer}</h6>
    //             <p>{review.content}</p>
    //         </div>
    //     ));
    // };

    const displayReview = (reviews) => {
        if (!shownTrail.reviews) return null;
        return reviews.map((review, i) => (
            <Container className="review show-hike-section" key={i}>
                <Row>
                    <Col md="auto"><h4>{review.reviewer}</h4></Col>
                </Row>
                <Row>
                    <Col md="auto"><h5 className="review-title">{review.title}</h5></Col>
                    <Col md="auto"><h5>{review.createdAt}</h5></Col>
                </Row>
                <Row>
                    <Col md="auto"><h5>{review.rating} / 5</h5></Col>
                </Row>
                <Row>
                    <Col md="auto">{review.content}</Col>
                </Row>
            </Container>
        ));
    };


    return (
        <main className="center-item show-trail-bg">

            <div className="show-trail-content">

                <img src={shownTrail.image}></img>

                <div className="show-hike-section">
                    <h2 className='shown-trail-name' >{shownTrail.name}</h2>
                </div>

                <br></br>

                <div className="show-hike-section">
                    <h3>Location:</h3><p>{shownTrail.location}</p>
                    <h3>Difficulty:</h3><p>{shownTrail.difficulty}</p>
                    <h3>Description:</h3><p className='description-text'>{shownTrail.description}</p>
                    <h3>Terrain:</h3><p>{shownTrail.terrain}</p>
                    <h3>Activity:</h3><p>{shownTrail.activity}</p>
                    <h3>Waterfalls?:</h3><p>{shownTrail.waterfalls}</p>
                    <h3>Total Distance:</h3><p>{shownTrail.distance} Miles</p>
                </div>

                <br></br>

                <h2 className="show-hike-section">Leave a Review!</h2>

                <br></br>

                <div className="show-hike-section" >
                    <CreateReviewForm />
                </div>
                
                <br></br>

                    <h2 className="show-hike-section" >Reviews For This Hike</h2>

                    <br></br>
                <div>

                    <div>{displayReview(shownTrail.reviews)}</div>
                    

                </div>

                <br></br><br></br>

                {editDeleteOptions}

                <br></br>

            </div>

        </main>
    )
};