import { Link, useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { deleteTrail, editTrail, createReview } from '../../utils/api';
// STYLES
import './styles.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default function ShowTrail({ getTrails, shownTrail, region, isLoggedIn }) {

    // STATE
    const [formState, setFormState] = useState({})
    const navigate = useNavigate()
    const initialState = []
    const [editDeleteOptions, setEditDeleteOptions] = useState(initialState)

    const { id } = useParams()

    function handleChange(event) {
        setFormState({ ...formState, [event.target.id]: event.target.value })
    }

    const handleSubmit = (event) => {
        // stops the page from reloading on submit
        event.preventDefault();
        createReview(id, formState);
        navigate('/');
    };

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

    const displayReview = (reviews) => {
        if (!shownTrail.reviews) return null;
        return reviews.map((review, i) => (
            <div key={i}>
                <h3>{review.title}</h3>
                <h5>Rating :{review.rating}</h5>
                <h6>{review.reviewer}</h6>
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
            <br></br><br></br>
            <h2>Leave a Review!</h2>
            <br></br>

                <Form onSubmit={handleSubmit} className="mx-auto">

                    <Form.Group className="mb-3">
                        <Form.Label>Title:</Form.Label>
                        <Form.Control
                            type="text"
                            id="title"
                            title="title"
                            onChange={handleChange}
                            placeholder="Title for review goes here"
                            required />
                    </Form.Group>



                    <Form.Group className="mb-3">
                        <Form.Label>Rating:</Form.Label>
                        <Form.Select
                            id="rating"
                            onChange={handleChange}
                            required>
                            <option>Rate this hike</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </Form.Select>
                    </Form.Group>



                    <Form.Group className="mb-3">
                        <Form.Label>Content:</Form.Label>
                        <Form.Control
                            type="text"
                            id="content"
                            name="content"
                            onChange={handleChange}
                            placeholder="Leave your review here" />
                    </Form.Group>



                    <Form.Group className="mb-3">
                        <Form.Label>Reviewer:</Form.Label>
                        <Form.Control
                            type="text"
                            id="reviewer"
                            name="reviewer"
                            onChange={handleChange}
                            placeholder="Your name" />
                    </Form.Group>

                    <br></br>

                    <Button variant="primary" type="submit">Post Review</Button>

                </Form>
            
            <br></br><br></br><br></br>

            <h2>Reviews For This Hike</h2>

            <br></br><br></br>

            <p>{displayReview(shownTrail.reviews)}</p>

            <br></br><br></br>

            {editDeleteOptions}

        </main>
    )
};