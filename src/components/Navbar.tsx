import Link from "next/link"
import { useState, useEffect } from "react"
import { motion } from "framer-motion";

export function Navbar() {
  const [activeSection, setActiveSection] = useState("")
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'portfolio', 'contact']
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom > 100
        }
        return false
      })
      if (currentSection) setActiveSection(currentSection)

      // Set scrolled state for floating effect
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
  className={`sticky top-4 z-50 mx-auto w-[95%] rounded-xl py-3 px-6 shadow-lg transition-all ${
    isScrolled ? "bg-white text-black" : "bg-white/100 text-black"
  }`}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
      <div className="flex justify-between items-center">
        <Link href="/" className="text-xl font-mono text-black">
          Mirza<span className="text-black">.</span>
        </Link>
        <div className="flex items-center gap-6">
          {['hero', 'about', 'experience', 'portfolio', 'contact'].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={`transition-colors text-sm md:text-base font-medium ${
                activeSection === section ? 'text-black' : 'text-black'
              } hover:text-black`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  )
}
