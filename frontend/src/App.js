
// DEPENDENCIES
import { Routes, Route } from 'react-router-dom';

// PAGES
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
// COMPONENTS
import Nav from './components/Nav';
import Footer from './components/Footer';
// STYLES
import './App.css';

function App() {


  return (
    <div className="App">
      <Nav />
      
      <Routes>

        <Route
          path='/'
          element={ <Home /> }
        />

        <Route
          path='/login'
          element={ <Login /> }
        />

        <Route
          path='/signup'
          element={ <SignUp /> }
        />

      </Routes>

      <Footer />
    </div>
  );
}

export default App;
