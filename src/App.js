import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import Seo from "./pages/Seo";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import FirstBlog from "./pages/inner-blogs/FirstBlog";
function App() {
  return (
    <Router>
      {/* on all routes navbar and footer are there */}
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/seo' element={<Seo/>}/>
        <Route path= '/blogs' element={<Blogs/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/blogs/first-blog' element={<FirstBlog/>}/>
        {/* <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} /> */}
      </Routes>
    <Footer/>
    </Router>
  );
}

export default App;
