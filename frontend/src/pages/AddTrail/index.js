
import { createTrail } from '../../utils/api';
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
//STYLES
import './styles.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



function AddTrail() {

    // STATE
    const [formState, setFormState] = useState({})
    const navigate = useNavigate()


    const handleSubmit = (event) => {
        // stops the page from reloading on submit
        event.preventDefault();
        // axios put request
        // axios.post(`http://localhost:5001/trail`, formState)
        createTrail(formState);
        navigate('/');
    };

    function handleChange(event) {
        console.log(event.target.id)
        console.log(event.target.value)
        setFormState({ ...formState, [event.target.id]: event.target.value })
    };

    return (

        <div>
            <h2>Add a Trail</h2>
            <div className="row row-cols-sm-2 row-cols-md-4 mx-auto">
                <Form onSubmit={handleSubmit} className="mx-auto">


                    {/* <div className="input">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        onChange={handleChange}
                        value={formState.name}
                        required
                    />
                </div> */}
                    <Form.Group className="mb-3">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                            type="text"
                            id="name"
                            name="name" 
                            placeholder="Trail Name"
                            onChange={handleChange}
                            value={formState.name || ''}
                            required />
                    </Form.Group>


                    {/* <div className="input">
                    <label htmlFor="state">state:</label>
                    <input
                        type="text"
                        id="state"
                        onChange={handleChange}
                        value={formState.state}
                        required
                    />
                </div> */}
                    <Form.Group className="mb-3">
                        <Form.Label>State:</Form.Label>
                        <Form.Select
                            id="state"
                            onChange={handleChange}
                            value={formState.state}
                            required>
                            <option>Choose the State</option>
                            <option value="CA">California</option>
                            <option value="OR">Oregon</option>
                            <option value="WA">Washington</option>
                        </Form.Select>
                    </Form.Group>


                    {/* <div className="input">
                    <label htmlFor="location">location:</label>
                    <input
                        type="text"
                        id="location"
                        onChange={handleChange}
                        value={formState.location}
                    />
                </div> */}
                    <Form.Group className="mb-3">
                        <Form.Label>Location:</Form.Label>
                        <Form.Control
                            type="text"
                            id="location"
                            name="location" 
                            placeholder="Nearest City"
                            onChange={handleChange}
                            value={formState.location || ''} />
                    </Form.Group>


                    {/* <div className="input">
                    <label htmlFor="difficulty">difficulty:</label>
                    <input
                        type="text"
                        id="difficulty"
                        onChange={handleChange}
                        value={formState.difficulty}
                    />
                </div> */}
                    <Form.Group className="mb-3">
                        <Form.Label>Difficulty:</Form.Label>
                        <Form.Select
                            id="difficulty"
                            onChange={handleChange}
                            value={formState.difficulty}>
                            {/* <option>Difficulty</option> */}
                            <option value="Beginner">Beginner</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Advanced">Advanced</option>
                        </Form.Select>
                    </Form.Group>


                    {/* <div className="input">
                    <label htmlFor="description">description:</label>
                    <input
                        type="text"
                        id="description"
                        onChange={handleChange}
                        value={formState.description}
                        required
                    />
                </div> */}
                    <Form.Group className="mb-3">
                        <Form.Label>Description:</Form.Label>
                        <Form.Control
                            type="text"
                            id="description" 
                            name="description" 
                            placeholder="Why do you love this trail?"
                            onChange={handleChange}
                            value={formState.description || ''}
                            required />
                    </Form.Group>


                    {/* <div className="input">
                    <label htmlFor="terrain">terrain:</label>
                    <input
                        type="text"
                        id="terrain"
                        onChange={handleChange}
                        value={formState.terrain}
                        required
                    />
                </div> */}
                    <Form.Group className="mb-3">
                        <Form.Label>Terrain:</Form.Label>
                        <Form.Select
                            id="terrain"
                            name="terrain"
                            onChange={handleChange}
                            value={formState.terrain} required>
                            {/* <option>Terrain</option> */}
                            <option value="canyon">Canyon</option>
                            <option value="coast">Coast</option>
                            <option value="desert">Desert</option>
                            <option value="hill">Hill</option>
                            <option value="forest">Forest</option>
                            <option value="mountain">Mountain</option>
                        </Form.Select>
                    </Form.Group>


                    {/* <div className="input">
                    <label htmlFor="activity">activity:</label>
                    <input
                        type="text"
                        id="activity"
                        onChange={handleChange}
                        value={formState.activity}
                    />
                </div> */}
                    <Form.Group className="mb-3">
                        <Form.Label>Activity:</Form.Label>
                        <Form.Select
                            id="activity"
                            name="activity"
                            onChange={handleChange}
                            value={formState.activity}>
                            {/* <option>Activity</option> */}
                            <option value="backpacking">Backpacking</option>
                            <option value="hiking">Hiking</option>
                            <option value="mountain-biking">Mountain Biking</option>
                            <option value="offroading">Offroading</option>
                        </Form.Select>
                    </Form.Group>


                    {/* <div className="input">
                    <label htmlFor="waterfalls">waterfalls:</label>
                    <input
                        type="text"
                        id="waterfalls"
                        onChange={handleChange}
                        value={formState.waterfalls}
                        required
                    />
                </div> */}
                    <Form.Group className="mb-3">
                        <Form.Label>Waterfalls:</Form.Label>
                        <Form.Select
                            id="waterfalls"
                            name="waterfalls"
                            onChange={handleChange}
                            value={formState.waterfalls}
                            required>
                            {/* <option>Waterfalls</option> */}
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </Form.Select>
                    </Form.Group>


                    {/* <div className="input">
                    <label htmlFor="distance">distance:</label>
                    <input
                        type="number"
                        id="distance"
                        onChange={handleChange}
                        value={formState.distance}
                        required
                    />
                </div> */}
                    <Form.Group className="mb-3">
                        <Form.Label>Distance:</Form.Label>
                        <Form.Control
                            type="number" 
                            id="distance" 
                            name="distance" 
                            placeholder="Miles"
                            onChange={handleChange}
                            value={formState.distance || ''}
                            required />
                    </Form.Group>


                    {/* <div className="input">
                    <label htmlFor="image">image:</label>
                    <input
                        type="text"
                        id="image"
                        onChange={handleChange}
                        value={formState.image}
                    />
                </div> */}
                    <Form.Group className="mb-3">
                        <Form.Label>Image:</Form.Label>
                        <Form.Control
                            type="text"
                            id="image"
                            name="image"
                            placeholder="Enter image address"
                            onChange={handleChange}
                            value={formState.image || ''} />
                        <Form.Text className="text-muted">
                            If you have a favorite image of this trail, provide a link to it here.
                        </Form.Text>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Create
                    </Button>


                </Form>
            </div>
        </div>
    );
};

export default AddTrail