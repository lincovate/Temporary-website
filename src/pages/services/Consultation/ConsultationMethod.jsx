import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const ConsultationMethod = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const selectedType = location.state?.selectedType;

  const handleMethod = (method) => {
    if (method === "email") {
      navigate("/consultation/email", { state: { selectedType } });
    }

    if (method === "whatsapp") {
      navigate("/consultation/whatsapp", { state: { selectedType } });
    }
     if (method === "call") {
      navigate("/consultation/call", { state: { selectedType } });
    }

    if (method === "appointment") {
      navigate("/appointment");
    }
  };

  return (
    <div className="consultation-container">
      <h1>How would you like to communicate?</h1>

      <div className="card-list">
        <div className="full-card" onClick={() => handleMethod("email")}>
          📧 Email Consultation
        </div>

        <div className="full-card" onClick={() => handleMethod("whatsapp")}>
          💬 WhatsApp Chat
        </div>
           <div className="full-card" onClick={() => handleMethod("call")}>
          💬 Call
        </div>

        <div className="full-card" onClick={() => handleMethod("appointment")}>
          📅 Make Appointment Instead
        </div>
      </div>
    </div>
  );
};

export default ConsultationMethod;