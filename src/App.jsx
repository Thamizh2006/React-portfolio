
import About from "./About/About"
import Contact from "./Contact/Contact";
import Hero from "./Content/Hero"
import Footer from "./Footer/Footer";
import Navbar from "./Header/Navbar"
import ProjectShowcase from "./Tech/ProjectShowCase";

import { Routes, Route } from "react-router-dom";

function App() {
  
  return (
    <>
  
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero name=" Im Muthamil selvan" Title="Frontend Developer" />} />
        <Route path="/about" element={<About />} />
        <Route path="/tech" element={<ProjectShowcase />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </>
  )
}
export default App
