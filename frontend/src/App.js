
// DEPENDENCIES
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

// PAGES
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Hikes from './pages/Hikes';
// COMPONENTS
import Header from './components/Header';
import Footer from './components/Footer';
// STYLES
import './App.css';

function App() {

  // STATE
  const [trails, setTrails] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState({})

  // Grab trails from database
  async function getIndexRoute() {
    const trailData = await axios.get("http://localhost:5001/trail")
    setTrails(trailData.data)
  };

  // Function to grab token from active user
  async function getUser(){
    const config = {
      headers:{
        'Authorization': localStorage.getItem('token')
      }
    };
    // Grab user data from database
    const userData = await axios.get("http://localhost:5001/user", config)
    console.log(userData.data)
    setUser(userData.data)
  };

  // API REQUEST ON COMPONENT MOUNT
  useEffect(() => {
    getIndexRoute()
    if(localStorage.token){
      getUser()
      setIsLoggedIn(true)
    }
  }, [])

  // Handle submit function for login and signup forms
  const handleSubmit = async (e, formData) => {
    e.preventDefault()
    const res = await axios.post(`http://localhost:5001/user/${formData.form}`, {
      username: formData.username,
      password: formData.password
    })
    console.log(res.data)
    localStorage.token = res.data.token
    setIsLoggedIn(true)
  };

  const handleLogOut = () => {
    localStorage.clear()
    setIsLoggedIn(false)
  };

  return (
    <div className="App">
      <Header />
      
      <Routes>

        <Route
          path='/'
          element={ <Home /> }
        />

        <Route
          path='/login'
          element={ <Login handleSubmit={handleSubmit} /> }
        />

        <Route
          path='/signup'
          element={ <SignUp handleSubmit={handleSubmit} /> }
        />

        <Route
          path='/hikes'
          element={ <Hikes /> }
        />

      </Routes>

      <Footer />
    </div>
  );
}

export default App;
