import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Footer from "../../components/Footer";


const Contacts = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send("service_s62cegl", "template_a14cr9f", form, "YXHdcFHKyRZlQmcGn")
      .then(() => {
        setStatus("Message sent successfully ✅");
        setForm({ name: "", email: "", message: "" });
      })
      .catch(() => setStatus("Failed to send ❌ Try again."));
  };

  // Reveal animation
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");

    function revealSections() {
      const windowHeight = window.innerHeight;

      reveals.forEach((section) => {
        const revealTop = section.getBoundingClientRect().top;
        const revealPoint = 120;

        if (
          revealTop < windowHeight - revealPoint &&
          revealTop + section.offsetHeight > 0
        ) {
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

     

      <section className="contact-glass reveal active">
        
        <h1>Get In Touch</h1>
        <p>Let’s build something amazing together 👇</p>

        <div className="contact-grid">
          {/* FORM */}
          <div className="glass-card">
            <form onSubmit={handleSubmit} className="contact-form">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                value={form.name}
                onChange={handleChange}
                autoComplete="name"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                value={form.email}
                onChange={handleChange}
                autoComplete="email"
              />

            

              <textarea
                name="message"
                placeholder="Your Message..."
                rows="5"
                required
                value={form.message}
                onChange={handleChange}
                autoComplete="off"
              />

              <button type="submit" className="btn">
                Send Message
              </button>
            </form>

            {status && <p className="status">{status}</p>}
          </div>

          {/* CONTACT INFO */}
         <div className="glass-card contact-info">
  <h2>Contact Info</h2>

  <div className="info-item">
    <span className="icon"><i className="fas fa-envelope"></i></span>
    <a
      className="Linking"
      href="mailto:info@lincovate.com"
      target="_blank"
      rel="noreferrer"
    >
     Gmail
    </a>
  </div>

  <div className="info-item">
    <span className="icon"><i className="fab fa-instagram"></i> </span>
    <a
      className="Linking"
      href="https://www.instagram.com/lincovate4?utm_source=qr"
      target="_blank"
      rel="noreferrer"
    >
      Instagram
    </a>
  </div>
  <div className="info-item">
    <span className="icon"><i className="fab fa-tiktok"></i></span>
    <a
      className="Linking"
      href="https://www.tiktok.com/@lincovate"
      target="_blank"
      rel="noreferrer"
    >
   Tiktok
    </a>
  </div>
  <div className="info-item">
    <span className="icon"><i className="fab fa-linkedin"></i></span>
    <a
      className="Linking"
      href="https://www.linkedin.com/company/lincovate-tech/about/?viewAsMember=true"
      target="_blank"
      rel="noreferrer"
    >
      LinkedIn
    </a>
  </div>

  <div className="info-item">
    <span className="icon"><i className="fab fa-facebook"></i></span>
    <a
      className="Linking"
      href="https://www.facebook.com/share/1DvRKVNAWe/"
      target="_blank"
      rel="noreferrer"
    >
     Facebook
    </a>
  </div>


  <div className="info-item">
    <span className="icon"><i className="fas fa-clock"></i></span>
    <p>Mon - Fri: 7AM - 4PM</p>
  </div>
</div>
        </div>
      </section>

  

    

      <Footer />
    </>
  );
};

export default Contacts;