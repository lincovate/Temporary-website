import { useState } from "react"

function Header() {

  const [menu,setMenu] = useState(false)

  return (
    <header>

      <img src="/lincovate-logo.png" alt="Lincovate Logo"/>

      <nav className={menu ? "active" : ""}>
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
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