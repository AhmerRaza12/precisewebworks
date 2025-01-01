import { BrowserRouter as Router } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Banner } from "./components/Banner";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Features from "./components/Features";

function App() {
  return (
    <Router>
      <Navbar />
      <Banner />
      <Services />
      <Portfolio />
      <Contact />
      <Features />
    </Router>
  );
}

export default App;
