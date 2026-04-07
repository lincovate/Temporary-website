// src/components/AppointmentForm.jsx
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Appointment.css";

const servicesList = [
  { icon: "🎨", title: "UI/UX Design" },
  { icon: "💻", title: "Web Development" },
  { icon: "🧩", title: "Application Development" },
  { icon: "📱", title: "Mobile Apps" },
  { icon: "🧑‍💻", title: "Programming Tutoring" },
  { icon: "🖌️", title: "Graphic Design" },
  { icon: "❓", title: "Other" }, // Added Other
];

const AppointmentForm = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    otherService: "",
    tutoringLanguage: "",
    tutoringDuration: "",
    tutoringStartDate: "",
    designType: "",
    designEvent: "",
    designDesc: "",
    designSubmissionDate: "",
    projectTitle: "",
    projectDesc: "",
    priority: "",
    submissionDate: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => (prev > 0 ? prev - 1 : 0));

  const handleSubmit = (e) => {
    e.preventDefault();
    const templateParams = Object.fromEntries(
      Object.entries(formData).filter(([_, v]) => v)
    );

    emailjs
      .send("service_dqyxxni", "template_ulgdn5p", templateParams, "YXHdcFHKyRZlQmcGn")
      .then(() => {
        toast.success(
          "Project successfully booked! Admin will send an email with the appointment date to discuss the requested service."
        );
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          otherService: "",
          tutoringLanguage: "",
          tutoringDuration: "",
          tutoringStartDate: "",
          designType: "",
          designEvent: "",
          designDesc: "",
          designSubmissionDate: "",
          projectTitle: "",
          projectDesc: "",
          priority: "",
          submissionDate: "",
        });
        setStep(0);
      })
      .catch((err) => {
        toast.error("Error sending appointment. Contact support@lincovate.com");
        console.error(err);
      });
  };

  const steps = [
    { key: "name", type: "text", label: "Name / Organisation" },
    { key: "email", type: "email", label: "Email" },
    { key: "phone", type: "text", label: "Phone / Contact" },
    {
      key: "service",
      type: "select",
      label: "Choose Service",
      options: servicesList.map((s) => ({
        label: `${s.icon} ${s.title}`,
        value: s.title,
      })),
    },
    {
      key: "otherService",
      type: "text",
      label: "Please specify your service",
      condition: (data) => data.service === "Other",
    },
    {
      key: "tutoringLanguage",
      type: "text",
      label: "Which language do you want to learn?",
      condition: (data) => data.service === "Programming Tutoring",
    },
    {
      key: "tutoringDuration",
      type: "text",
      label: "How long do you want to learn?",
      condition: (data) => data.service === "Programming Tutoring",
    },
    {
      key: "tutoringStartDate",
      type: "date",
      label: "When do you want to start?",
      condition: (data) => data.service === "Programming Tutoring",
    },
    {
      key: "designType",
      type: "text",
      label: "Type of design",
      condition: (data) => data.service === "Graphic Design",
    },
    {
      key: "designEvent",
      type: "text",
      label: "Event (official, casual, etc.)",
      condition: (data) => data.service === "Graphic Design",
    },
    {
      key: "designDesc",
      type: "textarea",
      label: "Briefly describe the design",
      condition: (data) => data.service === "Graphic Design",
    },
    {
      key: "designSubmissionDate",
      type: "date",
      label: "When should the design be submitted?",
      condition: (data) => data.service === "Graphic Design",
    },
    {
      key: "projectTitle",
      type: "text",
      label: "Project Title",
      condition: (data) =>
        data.service &&
        data.service !== "Programming Tutoring" &&
        data.service !== "Graphic Design" &&
        data.service !== "Other",
    },
    {
      key: "projectDesc",
      type: "textarea",
      label: "Briefly describe the project",
      condition: (data) =>
        (data.service &&
          data.service !== "Programming Tutoring" &&
          data.service !== "Graphic Design") ||
        data.service === "Other",
    },
    {
      key: "priority",
      type: "select",
      label: "Select Priority",
      options: [
        { label: "High (Urgent)", value: "High" },
        { label: "Medium", value: "Medium" },
        { label: "Low (Long-term)", value: "Low" },
      ],
      condition: (data) =>
        (data.service &&
          data.service !== "Programming Tutoring" &&
          data.service !== "Graphic Design" &&
          data.service !== "Other"),
    },
    {
      key: "submissionDate",
      type: "date",
      label: "Submission Date",
      condition: (data) => data.priority === "High",
    },
  ];

  const visibleSteps = steps
    .filter((s) => !s.condition || s.condition(formData))
    .slice(0, step + 1);

  // Check if current step is filled
  const currentStep = visibleSteps[visibleSteps.length - 1];
  const currentValue = formData[currentStep.key];

  return (
    <>
         <div className="glow glow1"></div>
      <div className="glow glow2"></div>
      
    <div className="contact-glass">
      <h1>Book Your Appointment</h1>
      <p>
        Fill in the form step by step. Your information is confidential and only
        used by Lincovate.
      </p>

      <form className="contact-form glass-card" onSubmit={handleSubmit} autoComplete="off">
        {visibleSteps.map((s, index) => (
          <div key={s.key} className="step active">
            <label className="input-label" htmlFor={s.key}>
              {s.label}
            </label>

            {s.type === "textarea" ? (
              <textarea
                id={s.key}
                name={s.key}
                value={formData[s.key] || ""}
                onChange={handleChange}
                autoComplete="off"
                required
              />
            ) : s.type === "select" ? (
              <select
                id={s.key}
                name={s.key}
                value={formData[s.key] || ""}
                onChange={handleChange}
                autoComplete="off"
                required
              >
                <option value="">-- Select --</option>
                {s.options.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            ) : (
              <input
                id={s.key}
                type={s.type}
                name={s.key}
                value={formData[s.key] || ""}
                onChange={handleChange}
                autoComplete="off"
                required
              />
            )}

            {index === visibleSteps.length - 1 && (
              <div className="btn-group">
                <button
                  type="button"
                  className="btn"
                  onClick={handleBack}
                  disabled={step === 0}
                >
                  Back
                </button>

                {/* Next button is disabled until current field is filled */}
                {step < visibleSteps.length - 1 ||
                step < steps.filter((s) => !s.condition || s.condition(formData)).length - 1 ? (
                  <button
                    type="button"
                    className="btn"
                    onClick={handleNext}
                    disabled={!currentValue || currentValue === ""}
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="btn"
                    disabled={!currentValue || currentValue === ""}
                  >
                    Book Project
                  </button>
                )}
              </div>
            )}
          </div>
        ))}
      </form>

      <ToastContainer position="top-right" autoClose={5000} />
    </div>
    </>
  );
};

export default AppointmentForm;