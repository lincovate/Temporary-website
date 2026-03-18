import { useEffect } from "react"
import Homepage from "./pages/homepage/homepage";
import Contacts from "./pages/contact/Contacts";
import NotFound from "./pages/404error/NotFound"; 
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<Contacts />} />
        {/* Catch-all route for 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;