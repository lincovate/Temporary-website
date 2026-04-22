import { useNavigate } from "react-router-dom";
import "./changes.css";

function Services() {
  const navigate = useNavigate();

  const goToVideos = () => {
    navigate("/videos");
  };
  const goToWebsites = () => {
    navigate("/Websites");
  };

  return (
    <section id="services" className="reveal">
      <h2>Our Services</h2>
      <br />

      <p>
        We support your digital presence and help your business reach a global audience,
        not just a local one.
      </p>

      <p>
        Some of our services are shown below. Press on the icon to see more details.
      </p>

      <div className="services">

        {/* Web Design */}
        <div className="card service-card" onClick={goToVideos}>
          <i className="fas fa-globe icon-teal"></i>
          <h3>Web Design</h3>
          <p>Modern, responsive and user-centered website designs.</p>

          <div className="glow-click">Click Me</div>
        </div>

        {/* Web Development */}
        <div className="card service-card" onClick={goToWebsites}>
          <i className="fas fa-code icon-green"></i>
          <h3>Web Development</h3>
          <p>Scalable, secure and high-performance web applications.</p>

          <div className="glow-click">Click Me</div>
        </div>

        {/* Graphic Design */}
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