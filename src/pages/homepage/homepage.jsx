import { useEffect } from "react"

import Hero from "../../components/Hero"
import Services from "../../components/Services"
import About from "../../components/About"
import Contact from "../../components/Contact"
import VideoLinks from "./video_links"
import Footer from "../../components/Footer"

function Homepage() {

  // 🔝 Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" })
  }, [])

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

      <Hero/>
      <Services/>
      <About/>
      <VideoLinks/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default Homepage