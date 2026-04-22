import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./consultation.css";

const whatsappContacts = [
  { name: "Josiah", number: "254791192398" },
  { name: "Andrew", number: "254719656289" },
  { name: "Lucas", number: "254113210888" },
  { name: "Stella", number: "254713840681" },
];

const ConsultationWhatsApp = () => {
  const location = useLocation();
  const selectedType = location.state?.selectedType || "General Consultation";

  const [name, setName] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);

  const openPopup = (person) => {
    if (!name.trim()) {
      alert("Please enter your name first");
      return;
    }

    setSelectedPerson(person);
    setShowPopup(true);
  };

  const confirmRedirect = () => {
    if (!selectedPerson) return;

    const message = `Hello ${selectedPerson.name}, I am ${name}. I am from Lincovate and I want a consultation about ${selectedType}`;

    const url = `https://wa.me/${selectedPerson.number}?text=${encodeURIComponent(
      message
    )}`;

    setShowPopup(false);

    setTimeout(() => {
      window.open(url, "_blank");
    }, 300);
  };

  return (
    <div className="consultation-container">
      <h1>WhatsApp Consultation</h1>

      {/* NAME INPUT */}
      <div className="step">
        <h3>Enter Your Name</h3>

        <input
          placeholder="Enter your name "
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="email-input"
        />
      </div>

      {/* CONSULTANTS */}
      <div className="step">
        <h3>Choose Consultant</h3>

        <div className="card-list">
          {whatsappContacts.map((p, i) => (
            <div
              key={i}
              className="full-card"
              onClick={() => openPopup(p)}
              style={{
                opacity: name.trim() ? 1 : 0.5,
                pointerEvents: name.trim() ? "auto" : "none",
              }}
            >
              💬 {p.name}
            </div>
          ))}
        </div>
      </div>

      {/* POPUP MODAL */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-card">
            <h3>Redirect Confirmation</h3>

            <p>
              You will be redirected to{" "}
              <b>{selectedPerson?.name}</b> on WhatsApp.
            </p>

            <p style={{ opacity: 0.8 }}>
              Make sure your WhatsApp is installed or logged in.
            </p>

            <div className="popup-buttons">
              <button onClick={() => setShowPopup(false)} className="btn cancel">
                Cancel
              </button>

              <button onClick={confirmRedirect} className="btn confirm">
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConsultationWhatsApp;