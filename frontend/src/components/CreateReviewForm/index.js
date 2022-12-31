
// DEPENDENCIES
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
// FUNCTIONS
import { createReview } from '../../utils/api';
// STYLES
import './style.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function CreateReviewForm() {

    // STATE
    const [formState, setFormState] = useState({})
    const navigate = useNavigate()
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

    return (

        <Form onSubmit={handleSubmit} className="mx-auto review-form">

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
                <div className="mb-3">
                    <Form.Check
                        inline
                        label="1"
                        name="rating"
                        type="radio"
                        id="1"
                    />
                    <Form.Check
                        inline
                        label="2"
                        name="rating"
                        type="radio"
                        id="2"
                    />
                    <Form.Check
                        inline
                        label="3"
                        name="rating"
                        type="radio"
                        id="3"
                    />
                    <Form.Check
                        inline
                        label="4"
                        name="rating"
                        type="radio"
                        id="4"
                    />
                    <Form.Check
                        inline
                        label="5"
                        name="rating"
                        type="radio"
                        id="5"
                    />
                </div>
                {/* <Form.Select
                    id="rating"
                    onChange={handleChange}
                    required>
                    <option>Rate this hike</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </Form.Select> */}
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

            <Button variant="outline-success" size="lg" type="submit">Post Review</Button>

        </Form>
    )
}