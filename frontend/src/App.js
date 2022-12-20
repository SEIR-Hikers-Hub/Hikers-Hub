
// DEPENDENCIES
import { Routes, Route } from 'react-router-dom';

// PAGES
import Home from './pages/Home';
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
          element={<Home />}
        />

      </Routes>

      <Footer />
    </div>
  );
}

export default App;
