import Home from './Home';
import About from './About';
import Experience from './Experience';
import Skills from './Skills';
import Interest from './Interest';
import Contact from './Contact';

function LandingPage() {
  return (
    <div>
      <Home id="satu" />
      <Experience id="tiga" />
      <Skills id="empat" />
      <Interest id="lima" />
      <About id="dua" />
      <Contact id="enam" />
    </div>
  );
}

export default LandingPage;
