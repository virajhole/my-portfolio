import './App.css';
import About from "./Components/about/About"
import Contact from "./Components/contact/Contact"
import Experience from './Components/experience/Experience';
import Footer from './Components/footer/Footer';
import Header from './Components/header/Header';
import Nav from './Components/nav/Nav';
import Portfolio from './Components/portfolio/Portfolio';
import MyServices from './Components/myServices/MyServices';
import Skills from './Components/skills/Skills';
import ReactGA from "react-ga4"



function App() {

  const TRACKING_ID = "G-TEZKY7FEER"
  ReactGA.initialize(TRACKING_ID)

 

  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Skills />
      <MyServices />
      <Portfolio />
      <Contact />
      <Footer />


    </>
  );
}

export default App;
