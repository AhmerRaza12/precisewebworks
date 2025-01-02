import { BrowserRouter as Router } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Banner } from "./components/Banner";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Features from "./components/Features";
import GetIntouch from "./components/GetIntouch";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Banner />
      <Services />
      <Contact />
      <Features />
      <Portfolio />
      <GetIntouch/>
    <Footer/>
    </Router>
  );
}

export default App;
