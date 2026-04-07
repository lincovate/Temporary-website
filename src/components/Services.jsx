import { useNavigate } from "react-router-dom";

function Services() {
  const navigate = useNavigate();

  const goToVideos = () => {
    navigate("/videos");
  };

  return (
    <section id="services" className="reveal">
      <h2>Our Services</h2>

      <div className="services">

        {/* Web Design */}
        <div
          className="card"
          onClick={goToVideos}
          style={{ cursor: "pointer" }}
        >
          <i className="fas fa-globe icon-teal"></i>
          <h3>Web Design</h3>
          <p>Modern, responsive and user-centered website designs.</p>
        </div>

        {/* Web Development */}
        <div
          className="card"
          onClick={goToVideos}
          style={{ cursor: "pointer" }}
        >
          <i className="fas fa-code icon-green"></i>
          <h3>Web Development</h3>
          <p>Scalable, secure and high-performance web applications.</p>
        </div>

        {/* Graphic Design (not clickable) */}
        <div className="card">
          <i className="fas fa-palette icon-yellow"></i>
          <h3>Graphic Design</h3>
          <p>Creative branding and marketing visuals.</p>
        </div>

      </div>

      <a href="#services" className="btn">
        View all Services
      </a>
    </section>
  );
}

export default Services;