import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import Seo from "./pages/Seo";

function App() {
  return (
    <Router>
      {/* on all routes navbar and footer are there */}
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/seo' element={<Seo/>}/>
        {/* <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} /> */}
      </Routes>
    <Footer/>
    </Router>
  );
}

export default App;
