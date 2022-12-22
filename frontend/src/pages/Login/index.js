
import { loginToAccount } from '../../utils/api';
import { useState } from 'react'
//STYLES
import './styles.css'

export default function Login(props){
    const [formData, setFormData] = useState({
        username: '', 
        password: '',
        form: 'login'
    })
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    function handleChange(event){
        setFormData({...formData, [event.target.id]: event.target.value})
    };

    // Handle submit function for login and signup forms
  function handleSubmit(e) {
    e.preventDefault()
    loginToAccount(formData)
        .then((data) => {
            localStorage.token = data.token
            props.setLogInStatus(true)
        })
  };

    return (
      <div>
        <h2>Login</h2>

        <form>
          <div>
            <label htmlFor='username'>Username</label>
            <input 
                type='text' 
                id='username' 
                onChange={handleChange} 
                value={formData.username}
                required
            />
          </div>

          <div>
            <label htmlFor='password'>Password</label>
            <input 
                type='password' 
                id='password' 
                onChange={handleChange} 
                value={formData.password}
                required
            />
          </div>
          <button 
            type='submit' 
            onClick={(e) => handleSubmit(e, formData)}
           >
            Login
          </button>
          
        </form>
      </div>
    )
};