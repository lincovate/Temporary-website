import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, animate, useMotionValue } from "framer-motion";
import "./about.css";
import "../../styles.css";

/* 🔢 Counter Component */
const Counter = ({ value, suffix = "" }) => {
  const count = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 5,
      ease: "easeOut",
      onUpdate(latest) {
        setDisplay(Math.floor(latest));
      },
    });

    return () => controls.stop();
  }, [value]);

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
};

const About = () => {
  const [showMission, setShowMission] = useState(true);

  // Scroll to top when About mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowMission((prev) => !prev);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const content = showMission
    ? {
        title: "Our Mission",
        text: `We create digital experiences that feel effortless—and leave a lasting impression. 
        By blending bold, innovative design with seamless functionality and accessibility, 
        we craft products that not only look stunning but work beautifully.`,
      }
    : {
        title: "Our Vision",
        text: `To redefine digital experiences by making them more intuitive, immersive, and 
        human-centered—where design and technology work seamlessly together.`,
      };

  return (
    <>
      <div className="glow glow1"></div>
      <div className="glow glow2"></div>

      <section className="about-page">
        <div className="about-content">
          <div className="about-text glass">
            <AnimatePresence mode="wait">
              <motion.div
                key={content.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
              >
                <h2>{content.title}</h2>
                <p>{content.text}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* 🔥 STATS WITH COUNT-UP */}
          <div className="stats">
            <div className="stat-card glass">
              <div className="stat-number">
                <Counter value={50} suffix="+" />
              </div>
              <div className="stat-label">Projects Completed</div>
            </div>

            <div className="stat-card glass">
              <div className="stat-number">
                <Counter value={20} suffix="+" />
              </div>
              <div className="stat-label">Happy Clients</div>
            </div>

            <div className="stat-card glass">
              <div className="stat-number">
                <Counter value={1} />
              </div>
              <div className="stat-label">Years Experience</div>
            </div>

            <div className="stat-card glass">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support Available</div>
            </div>
          </div>
        </div>

        {/* TEAM */}
        <div className="team-section">
          <h2>Meet Our Team</h2>

          <div className="team-grid">
            {[
              {
                name: "Lucas Gitiriku",
                role: "Lead Engineer",
                emoji: "👨‍💻",
                bio: "Leading engineering projects and ensuring top-quality software delivery.",
              },
              {
                name: "Josiah Mwangi",
                role: "Fullstack Developer",
                emoji: "👨‍💻",
                bio: "Building scalable fullstack apps with clean code and best practices.",
              },
              {
                name: "Andrew Kanyi",
                role: "Frontend Developer",
                emoji: "👨‍💻",
                bio: "Designing intuitive user interfaces and seamless web experiences.",
              },
              {
                name: "Stella Githinji",
                role: "Graphic Designer",
                emoji: "👩‍💻",
                bio: "Creating visually stunning graphics and digital designs for all projects.",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                className="team-member glass"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <div className="team-avatar">{member.emoji}</div>
                <h3>{member.name}</h3>
                <p className="role">{member.role}</p>
                <p className="bio">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;