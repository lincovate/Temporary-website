import { useState } from "react";
import { HashLink } from 'react-router-hash-link'; // only HashLink needed

function Header() {
  const [menu, setMenu] = useState(false);

  return (
    <header>
      {/* Logo */}
      <HashLink smooth to="/">
        <img src={`${import.meta.env.BASE_URL}lincovate-logo.png`} alt="Lincovate Logo" />
      </HashLink>

      {/* Navigation */}
      <nav className={menu ? "active" : ""}>
        
        <HashLink smooth to="/services" onClick={() => setMenu(false)}>Services</HashLink>
        <HashLink smooth to="/websites" onClick={() => setMenu(false)}>Projects</HashLink>
        <HashLink smooth to="/appointment" onClick={() => setMenu(false)}>Appointments</HashLink>
        <HashLink smooth to="/contact" onClick={() => setMenu(false)}>Contact</HashLink>
      </nav>

      {/* Mobile menu toggle */}
      <div className="menu-toggle" onClick={() => setMenu(!menu)}>
        <i className="fas fa-bars"></i>
      </div>
    </header>
  );
}

export default Header;