import { useState, useEffect } from "react";
import "./website.css";

const tabs = [
  {
    name: "Hotels",
    link: "https://hotel-cafe-house1.lincovate.com/menu",
    description:
      "Explore modern hotel booking experiences with intuitive navigation and elegant design.",
    images: [
      "/images/hotels1.png",
      "/images/hotels2.png",
      "/images/hotels3.png",
    ],
  },
  {
    name: "Libraries",
    link: "https://example.com",
    description:
      "Digital libraries designed for accessibility, clarity, and seamless browsing.",
    images: [
      "/images/libraries1.jpg",
      "/images/libraries2.jpg",
      "/images/libraries3.jpg",
    ],
  },
];

export default function ShowcaseTabs() {
  const [active, setActive] = useState(0);
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [open, setOpen] = useState(window.innerWidth >= 769);

  // Carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % tabs[active].images.length);
        setFade(true);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, [active]);

  // Responsive auto open/close
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(true);
      } else {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Confirm navigation
  const handleVisit = (link) => {
    const confirmLeave = window.confirm(
      "You are leaving Lincovate and visiting a branch website. Continue?"
    );

    if (confirmLeave) {
      window.open(link, "_blank");
    }
  };

  return (
    <div className="layout">
      {/* TOGGLE BUTTON */}
      <button
        className={`toggle-btn ${open ? "open" : "closed"}`}
        onClick={() => setOpen(!open)}
      >
        ⟳
      </button>

      {/* SIDEBAR */}
      <div className={`sidebar ${open ? "open" : ""}`}>
        <h3>Lincovate</h3>

        {tabs.map((tab, i) => (
          <button
            key={i}
            className={i === active ? "active" : ""}
            onClick={() => {
              setActive(i);
              setIndex(0);
            }}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* MAIN CONTENT */}
      <section className="showcase">
        <div className="tab-content">
          {/* IMAGE */}
          <div className="image-container">
            <div
              className={`image ${fade ? "show" : "hide"}`}
              style={{
                backgroundImage: `url(${tabs[active].images[index]})`,
              }}
            ></div>
          </div>

          {/* TEXT */}
          <div className="text-container">
            <h2>{tabs[active].name}</h2>
            <p>{tabs[active].description}</p>

            <button
              className="visit-btn"
              onClick={() => handleVisit(tabs[active].link)}
            >
              Visit Website
            </button>

            <p className="warning">
              You are about to leave Lincovate.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}