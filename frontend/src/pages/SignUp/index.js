

import { useState } from 'react'
import { createUser } from '../../utils/api';

//STYLES
import './styles.css'

function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  function handleChange(event) {
    setFormData({ ...formData, [event.target.id]: event.target.value })
  }

  // Handle submit function for login and signup forms
  function handleSubmit(e) {
    e.preventDefault()
    createUser(formData)
      .then((data) => {
        localStorage.token = data.token
        props.setLogInStatus(true)
      })
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