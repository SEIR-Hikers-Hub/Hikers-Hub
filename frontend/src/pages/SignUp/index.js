

import { useState } from 'react'
//STYLES
import './styles.css'

function SignUp({ handleSubmit }){
    const [formState, setFormState] = useState({
        username: '', 
        password: '',
        form: 'signup'
    })

    function handleChange(event){
        setFormState({...formState, [event.target.id]: event.target.value})
    }

    return (
      <div>
        <h2>Sign Up</h2>

        <form>
          <div>
            <label htmlFor='username'>Username</label>
            <input 
                type='text' 
                id='username' 
                onChange={handleChange} 
                value={formState.username} 
            />
          </div>

          <div>
            <label htmlFor='password'>Password</label>
            <input 
                type='text' 
                id='password' 
                onChange={handleChange} 
                value={formState.password}
            />
          </div>
          <button 
            type='submit' 
            onClick={(e) => handleSubmit(e, formState)}
           >
            Sign Up
          </button>
        </form>
      </div>
    )
}

export default SignUp