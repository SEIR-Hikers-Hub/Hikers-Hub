
// DEPENDENCIES
import { Routes, Route } from 'react-router-dom';

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
          element=
        />

      </Routes>
      <h1>Hikers Hub</h1>

      <Footer />
    </div>
  );
}

export default App;
