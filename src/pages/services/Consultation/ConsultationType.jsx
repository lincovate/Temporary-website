import React from "react";
import { useNavigate } from "react-router-dom";

const consultationTypes = [
  "UI/UX & Web Design",
  "Web Development",
  "Application Development",
  "Mobile Apps",
  "General Consultation",
];

const ConsultationType = () => {
  const navigate = useNavigate();

  const handleSelect = (type) => {
    navigate("/consultation/method", { state: { selectedType: type } });
  };

  return (
    <div className="consultation-container">
      <h1>Choose Consultation Type</h1>

      <div className="card-list">
        {consultationTypes.map((type, i) => (
          <div
            key={i}
            className="full-card"
            onClick={() => handleSelect(type)}
          >
            {type}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConsultationType;