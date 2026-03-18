import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Contact from "../../components/Contact";

const Contacts = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send(
        "service_90tl6do",
        "template_zvhfi3p", 
        form,
        "VPBGxnOYoFQnRNhif"
      )
      .then(() => {
        setStatus("Message sent successfully ✅");
        setForm({ name: "", email: "", message: "" });
      })
      .catch(() => setStatus("Failed to send ❌ Try again."));
  };

  // Reveal effect for sections including Contact
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");

    function revealSections() {
      const windowHeight = window.innerHeight;

      reveals.forEach((section) => {
        const revealTop = section.getBoundingClientRect().top;
        const revealPoint = 120;

        if (revealTop < windowHeight - revealPoint && revealTop + section.offsetHeight > 0) {
          section.classList.add("active");
        } else {
          section.classList.remove("active");
        }
      });
    }

    window.addEventListener("scroll", revealSections);
    window.addEventListener("load", revealSections);

    return () => {
      window.removeEventListener("scroll", revealSections);
      window.removeEventListener("load", revealSections);
    };
  }, []);

  return (
    <>
      <div className="glow glow1"></div>
      <div className="glow glow2"></div>

      <Header />

      <section className="contact reveal active">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you. Send us a message 👇</p>

        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            autoComplete="off"
            value={form.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit" className="btn">
            Send Message
          </button>
        </form>

        {status && <p style={{ marginTop: "20px" }}>{status}</p>}
      </section>

      {/* Contact social links section */}
      <div className="reveal">
        <Contact />
      </div>

      <a
        href="https://wa.me/254719656289"
        target="_blank"
        className="whatsapp"
      >
        <i className="fab fa-whatsapp"></i>
      </a>

      <Footer />
    </>
  );
};

export default Contacts;