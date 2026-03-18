import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';


function Header() {

  const [menu,setMenu] = useState(false)

  return (
    <header>

     <Link to="/"><img src={`${import.meta.env.BASE_URL}lincovate-logo.png`} alt="Lincovate Logo" /></Link>

      <nav className={menu ? "active" : ""}>
          <HashLink smooth to="/#services" onClick={() => setMenu(false)}>Services</HashLink>
        <HashLink smooth to="/#about" onClick={() => setMenu(false)}>About</HashLink>
       <Link to="/contact">Contact</Link>
      </nav>

      <div
        className="menu-toggle"
        onClick={() => setMenu(!menu)}
      >
        <i className="fas fa-bars"></i>
      </div>

    </header>
  )
}

export default Header