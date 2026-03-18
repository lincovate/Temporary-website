import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/homepage";
import Contacts from "./pages/contact/Contacts";
import NotFound from "./pages/404error/NotFound";

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