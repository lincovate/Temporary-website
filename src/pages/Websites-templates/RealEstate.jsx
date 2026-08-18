import { useState, useEffect } from "react";
import "./website.css";

const tabs = [
  {
    name: "Real Estate 1",
    link: "https://realestate0.lincovate.com/",
    description:
      "Search for your dream house listing in the templates below.",
    images: [
      "/images/RealEstate/RealEstate1.png",
      "/images/RealEstate/RealEstate2.png",
      "/images/RealEstate/RealEstate3.png",
      "/images/RealEstate/RealEstate4.png",
      "/images/RealEstate/RealEstate5.png",
      "/images/RealEstate/RealEstate6.png",
      "/images/RealEstate/RealEstate7.png",
    ],
  },
     {
    name: "Estates 2",
    link: "https://estate1.lincovate.com/",
    description:
      "Search for your dream house listing in the templates below enter and see what you like.",
    images: [
      "/images/estate1/RealEstate1.png",
      "/images/estate1/RealEstate2.png",
      "/images/estate1/RealEstate3.png",
      "/images/estate1/RealEstate4.png",
      "/images/estate1/RealEstate5.png",
      "/images/estate1/RealEstate6.png",
      "/images/estate1/RealEstate7.png",
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