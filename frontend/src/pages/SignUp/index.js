

import { useState, useEffect} from 'react'
import { createUser } from '../../utils/api';

import { useNavigate } from "react-router-dom";

//STYLES
import './styles.css'



function SignUp(props) {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
  const navigate = useNavigate()

  function handleChange(event) {
    setFormData({ ...formData, [event.target.id]: event.target.value })
  }

  // Handle submit function for login and signup forms
  function handleSubmit(e) {
    e.preventDefault()
    createUser(formData)
      .then((data) => {
        localStorage.token = data.token
        props.setIsLoggedIn(true)
      })
  }

// // redirect to home page if logged in
    useEffect(() => {
        if (props.setIsLoggedIn) {
            navigate('/')
        }
    }, [props.setIsLoggedIn])

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
            value={formData.username} required
          />
        </div>

        <div>
          <label htmlFor='password'>Password</label>
          <input
            type='text'
            id='password'
            onChange={handleChange}
            value={formData.password} required
          />
        </div>
        <button type='submit' onClick={handleSubmit}>Sign Up</button>
      </form>
    </div>
  )
}

export default SignUp