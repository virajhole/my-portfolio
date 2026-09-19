import { useEffect } from 'react';
import ReactGA from 'react-ga4';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';

const TRACKING_ID = 'G-TEZKY7FEER';

function App() {
  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
  }, []);

  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;