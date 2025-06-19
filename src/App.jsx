import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; 
import Home from "./pages/Home";
import About from "./pages/About";
import Certificates from "./pages/Certificates";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import NotFound from "./components/NotFound";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/certificate" element={<Certificates />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
