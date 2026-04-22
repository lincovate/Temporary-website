import { useEffect, useState } from "react";
import "./changes.css";

function About() {
  const slides = [
    {
      title: "Design + Development in Harmony",
      text: "At Lincovate, we merge creative design with powerful engineering. Every interface is crafted with intention, ensuring that visual appeal and technical performance work seamlessly together to create meaningful digital experiences.",
    },
    {
      title: "Built for Real-World Use",
      text: "We focus on solving real problems, not just creating visuals. Our systems are tested in practical environments to ensure they are intuitive, reliable, and easy to use for everyone—from first-time users to advanced professionals.",
    },
    {
      title: "Future-Ready Digital Systems",
      text: "Technology never stands still, and neither do we. Our solutions are built to scale, adapt, and evolve—ensuring that what we create today remains relevant and powerful tomorrow.",
    },
    {
      title: "User-Centered Thinking",
      text: "Every decision we make starts with the user. From accessibility to interaction flow, we design experiences that feel natural, reduce friction, and empower users to achieve more with less effort.",
    },
    {
      title: "Innovation with Purpose",
      text: "We don’t innovate for the sake of complexity. Every feature, animation, and system we build has a purpose—delivering clarity, efficiency, and real value to the people using it.",
    },
  ];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // start fade-out

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % slides.length);
        setFade(true); // fade-in new content
      }, 300); // small delay for smooth transition
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="about reveal">

      <h2>About Us</h2>
      <br />

      {/* Rotating content box */}
      <div className={`about-card smooth ${fade ? "show" : "hide"}`}>
        <h3>{slides[index].title}</h3>
        <br />
        <p>{slides[index].text}</p>
      </div>

      <br />

      <a href="#about" className="btn">
        Find out More
      </a>

    </section>
  );
}

export default About;