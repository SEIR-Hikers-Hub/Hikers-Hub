

import axios from 'axios';
import { useState } from 'react'
//STYLES
import './styles.css'

function AddTrail(){
    
    // STATE
    const [formState, setFormState] = useState([])


    const handleSubmit = (event) => {
        // stops the page from reloading on submit
        event.preventDefault();
        // axios put request
        axios.post(`http://localhost:5001/trail`, formState)
        
    };

    function handleChange(event){
        setFormState({...formState, [event.target.id]: event.target.value})
    };

    return (

      <div>
        <h2>Add a Trail</h2>

        <form onSubmit={handleSubmit}>

        <div className="input">
            <label htmlFor="name">Name:</label>
            <input 
                type="text"
                id="name" 
                onChange={handleChange}
                value={formState.name} 
                required 
            />
        </div>

        <div className="input">
            <label htmlFor="state">state:</label>
            <input 
                type="text"
                id="state" 
                onChange={handleChange}
                value={formState.state} 
                required 
            />
        </div>

        <div className="input">
            <label htmlFor="location">location:</label>
            <input 
                type="text"
                id="location" 
                onChange={handleChange}
                value={formState.location} 
            />
        </div>

        <div className="input">
            <label htmlFor="difficulty">difficulty:</label>
            <input 
                type="text"
                id="difficulty" 
                onChange={handleChange}
                value={formState.difficulty} 
            />
        </div>

        <div className="input">
            <label htmlFor="description">description:</label>
            <input 
                type="text" 
                id="description" 
                onChange={handleChange}
                value={formState.description} 
                required 
            />
        </div>

        <div className="input">
            <label htmlFor="terrain">terrain:</label>
            <input 
                type="text" 
                id="terrain" 
                onChange={handleChange}
                value={formState.terrain} 
                required 
            />
        </div>

        <div className="input">
            <label htmlFor="activity">activity:</label>
            <input 
                type="text" 
                id="activity"
                onChange={handleChange} 
                value={formState.activity} 
            />
        </div>

        <div className="input">
            <label htmlFor="waterfalls">waterfalls:</label>
            <input 
                type="text"
                id="waterfalls" 
                onChange={handleChange}
                value={formState.waterfalls} 
                required 
            />
        </div>

        <div className="input">
            <label htmlFor="distance">distance:</label>
            <input 
                type="number"
                id="distance" 
                onChange={handleChange}
                value={formState.distance} 
                required 
            />
        </div>

        <div className="input">
            <label htmlFor="image">image:</label>
            <input 
                type="text"
                id="image" 
                onChange={handleChange}
                value={formState.image} 
            />
        </div>

          <button type='submit'>Create</button>

        </form>
      </div>
    );
};

export default AddTrail