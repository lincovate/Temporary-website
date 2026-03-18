import { useEffect } from "react"
import Header from "../../components/Header"
import Hero from "../../components/Hero"
import Services from "../../components/Services"
import About from "../../components/About"
import Contact from "../../components/Contact"
import Footer from "../../components/Footer"

function Homepage() {

  useEffect(() => {

    const reveals = document.querySelectorAll(".reveal")

    function revealSections() {
      const windowHeight = window.innerHeight

      reveals.forEach(section => {

        const revealTop = section.getBoundingClientRect().top
        const revealPoint = 120

        if (revealTop < windowHeight - revealPoint) {
          section.classList.add("active")
        }
      })
    }

    window.addEventListener("scroll", revealSections)
    window.addEventListener("load", revealSections)

    return () => {
      window.removeEventListener("scroll", revealSections)
      window.removeEventListener("load", revealSections)
    }

  }, [])

  return (
    <>
      <div className="glow glow1"></div>
      <div className="glow glow2"></div>

      <Header/>
      <Hero/>
      <Services/>
      <About/>
      <Contact/>

      <a
        href="https://wa.me/254719656289"
        target="_blank"
        className="whatsapp"
      >
        <i className="fab fa-whatsapp"></i>
      </a>

      <Footer/>
    </>
  )
}

export default Homepage