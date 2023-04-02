import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Interest from './components/Interest';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skill" element={<Skills />} />
          <Route path="/interest" element={<Interest />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
