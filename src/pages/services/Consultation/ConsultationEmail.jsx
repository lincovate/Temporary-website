  import React, { useState } from "react";
  import { useLocation, useNavigate } from "react-router-dom";
  import emailjs from "@emailjs/browser";

  const ConsultationEmail = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const selectedType = location.state?.selectedType;

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const sendEmail = () => {
    if (!email.includes("@")) {
      alert("Invalid email");
      return;
    }

    const templateParams = {
      to_name: name,
      to_email: email,
      message: `Consultation request for: ${selectedType || "General Consultation"}`,
      time: new Date().toLocaleString()
    };

    emailjs
      .send(
        "service_9l08h1e",
        "template_wwrildo",
        templateParams,
        "D7HeK3-q2DiMxn6qW"
      )
      .then(() => {
        alert("Email sent successfully!");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        alert("Failed to send email");
      });
  };

    return (
      <div className="consultation-container">
        <h1>Email Consultation</h1>

        <input
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="email-input"
        />

        <input
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="email-input"
        />

        <button className="btn-consultation" onClick={sendEmail}>
          Send Email
        </button>
      </div>
    );
  };

  export default ConsultationEmail;