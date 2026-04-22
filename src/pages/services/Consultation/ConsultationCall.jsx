import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./consultation.css";

const callContacts = [
  { name: "Josiah", number: "+254791192398" },
  { name: "Andrew", number: "+254719656289" },
  { name: "Lucas", number: "+254113210888" },
  { name: "Stella", number: "+254713840681" },
];

const ConsultationCall = () => {
  const location = useLocation();
  const selectedType = location.state?.selectedType || "General Consultation";

  const [name, setName] = useState("");
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [showFallback, setShowFallback] = useState(false);

  const openCallPopup = (person) => {
    if (!name.trim()) {
      alert("Please enter your name first");
      return;
    }

    setSelectedPerson(person);
    setShowPopup(true);
  };

  const confirmCall = () => {
    if (!selectedPerson) return;

    setShowPopup(false);

    // simulate mobile call capability check
    const canCall = typeof window !== "undefined";

    if (canCall) {
      // initiate phone call
      window.location.href = `tel:${selectedPerson.number}`;
    } else {
      setShowFallback(true);
    }
  };

  return (
    <div className="consultation-container">
      <h1>Phone Call Consultation</h1>

      {/* NAME INPUT */}
      <div className="step">
        <h3>Enter Your Name</h3>

        <input
          className="email-input"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      {/* CONTACT LIST */}
      <div className="step">
        <h3>Choose Consultant</h3>

        <div className="card-list">
          {callContacts.map((person, i) => (
            <div
              key={i}
              className="full-card"
              onClick={() => openCallPopup(person)}
              style={{
                opacity: name.trim() ? 1 : 0.5,
                pointerEvents: name.trim() ? "auto" : "none",
              }}
            >
              📞 {person.name}
            </div>
          ))}
        </div>
      </div>

      {/* POPUP BEFORE CALL */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-card">
            <h3>Phone Call Redirect</h3>

            <p>
              You will be taken to a phone call with{" "}
              <b>{selectedPerson?.name}</b>.
            </p>

            <p style={{ opacity: 0.8 }}>
              Make sure your device supports calling.
            </p>

            <div className="popup-buttons">
              <button className="btn cancel" onClick={() => setShowPopup(false)}>
                Cancel
              </button>

              <button className="btn confirm" onClick={confirmCall}>
                Continue Call
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FALLBACK MESSAGE */}
      {showFallback && (
        <div className="popup-overlay">
          <div className="popup-card">
            <h3>Call Not Available</h3>

            <p>
              Your device does not support direct phone calls or the dialer is
              not activated.
            </p>

            <p>Please install or enable calling features on your device.</p>

            <button className="btn confirm" onClick={() => setShowFallback(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConsultationCall;