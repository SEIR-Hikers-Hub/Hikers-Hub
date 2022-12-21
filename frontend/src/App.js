
// DEPENDENCIES
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
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
  const [isLoggedIn, setIsLoggedIn] = useState(false)

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
