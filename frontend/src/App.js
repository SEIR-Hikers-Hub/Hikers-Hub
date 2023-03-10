
// DEPENDENCIES
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

// PAGES
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import AddTrail from './pages/AddTrail';
import Hikes from './pages/Hikes';
import ShowTrail from './pages/ShowTrail';
import EditTrail from './pages/EditTrail';
import Weather from './pages/Weather';
// COMPONENTS
import Header from './components/Header';
import Footer from './components/Footer';
// STYLES
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  // STATE
  const [trails, setTrails] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState({})
  const [shownTrail, setShownTrail] = useState({})
  const [region, setRegion] = useState('')
  const [reviews, setReviews] = useState([])
  const [weatherData, setWeatherData] = useState([]);


  // function to grab trails by state
  async function getTrails(region) {
    const allTrails = await axios.get(`trail/${region}`)
    setTrails(allTrails.data)
    setRegion(region)
  }

  // function to grab trails by state
  async function getTrail(id) {
    const shownTrailData = await axios.get(`trail/${id}`)
    setShownTrail(shownTrailData.data)
    setReviews(shownTrailData.data.reviews)
  }

  // Function to grab token from active user
  async function getUser() {
    const config = {
      headers: {
        'Authorization': localStorage.token
      }
    };
    // Grab user data from database
    const userData = await axios.get('user', config)
    setUser(userData.data)
  };

  // API REQUEST ON COMPONENT MOUNT
  useEffect(() => {
    if (localStorage.token) {
      getUser()
      setIsLoggedIn(true)
      // console.log('logged in!')
    }
  }, [])


  return (
    <div className="App">
      <Header setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} setWeatherData={setWeatherData} />

      <Routes>

        <Route
          path='/'
          element={<Home getTrails={getTrails} />}
        />

        <Route
          path='/login'
          element={<Login setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />}
        />

        <Route
          path='/signup'
          element={<SignUp setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />}
        />

        <Route
          path='/addtrail'
          element={<AddTrail />}
        />

        <Route
          path='/hikes'
          element={<Hikes getTrail={getTrail} trails={trails} region={region} />}
        />

        <Route
          exact path='/trail/:id'
          element={<ShowTrail shownTrail={shownTrail} getTrails={getTrails} region={region} reviews={reviews} isLoggedIn={isLoggedIn} />}
        />

        <Route
          path='/edittrail/:id'
          element={<EditTrail />}
        />

        <Route
            path='/weather'
            element={<Weather weatherData={weatherData}/>}
          />
        
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
