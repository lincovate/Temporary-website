import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./service.css";

const servicesData = [
  {
    icon: "🎨",
    title: "UI/UX Design",
    desc: "Create stunning user interfaces with modern design principles.",
    features: [
      "User Research & Analysis",
      "Wireframing & Prototyping",
      "Visual Design & Branding",
      "Responsive Design",
    ],
  },
  {
    icon: "💻",
    title: "Web Development",
    desc: "Build fast, secure, and scalable websites.",
    features: [
      "Frontend Development",
      "Backend Integration",
      "Performance Optimization",
      "SEO Implementation",
    ],
  },
  {
    icon: "🧩",
    title: "Application Development",
    desc: "Custom-built applications tailored to your business needs.",
    features: [
      "Custom Software Development",
      "Enterprise Applications",
      "API Development & Integration",
      "System Maintenance & Support",
    ],
  },
  {
    icon: "📱",
    title: "Mobile Apps",
    desc: "Develop high-quality mobile applications.",
    features: [
      "iOS & Android Development",
      "Cross-platform Solutions",
      "App Store Optimization",
      "Maintenance & Updates",
    ],
  },
  {
    icon: "🧑‍💻",
    title: "Programming Tutoring",
    desc: "Learn to code with hands-on guidance and real-world projects.",
    features: [
      "Python Programming",
      "C Programming",
      "HTML & CSS",
      "JavaScript & React",
      "Java Development",
      "Project-Based Learning",
    ],
  },
  {
    icon: "🖌️",
    title: "Graphic Design",
    desc: "Professional visual design to elevate your brand identity.",
    features: [
      "Logo Design",
      "Social Media Graphics",
      "Flyers & Posters",
      "Brand Identity Kits",
      "Infographics",
      "Business Card Design",
    ],
  },
];

const Services = () => {
  const navigate = useNavigate();

  // 🔝 Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const handleStartNow = () => {
    navigate("/appointment");
  };

  const handleWebDevClick = () => {
    navigate("/videos"); // 👈 goes to your videos page
  };

  return (
    <>
      <div className="glow glow1"></div>
      <div className="glow glow2"></div>

      <div className="page active">
        <div className="container">
          <div className="content-wrapper">

            {/* HERO */}
            <section className="hero glass">
              <div className="hero-content">
                <h1>Our Services</h1>
                <p>
                  Comprehensive design and development solutions tailored to your needs
                </p>
              </div>
            </section>

            {/* SERVICES GRID */}
            <section className="services-grid">
              {servicesData.map((service, index) => {
                const isWebDev = service.title === "Web Development";

                return (
                  <div
                    className="service-card glass"
                    key={index}
                    onClick={isWebDev ? handleWebDevClick : null}
                    style={{
                      cursor: isWebDev ? "pointer" : "default",
                    }}
                  >
                    <div className="service-header">
                      <div className="service-icon">{service.icon}</div>
                      <h3>{service.title}</h3>
                    </div>

                    <p>{service.desc}</p>

                    <ul className="service-features">
                      {service.features.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </section>

            {/* START NOW BUTTON */}
            <div className="start-now-wrapper">
              <button className="start-now-btn glass" onClick={handleStartNow}>
                Start Now
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Services;