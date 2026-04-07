import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/homepage";
import Header from "./components/Header";
import Contacts from "./pages/contact/Contacts";
import About from "./pages/about/About";
import Services from "./pages/services/Services";
import AppointmentForm from "./pages/appointment/Appointment";
import NotFound from "./pages/404error/NotFound";
import Videos from "./pages/homepage/Videos";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
         
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/appointment" element={<AppointmentForm />} />
        <Route path="/videos" element={<Videos />} />

        {/* Catch-all route for 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
        <a
        href="https://wa.me/254719656289?text=Hello%20sir,%20I%20am%20texting%20in%20regards%20to%20Lincovate.%20I%20would%20like%20to%20inquire%20about,"
        target="_blank"
        rel="noreferrer"
        className="whatsapp"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
    </Router>
  );
}

export default App;