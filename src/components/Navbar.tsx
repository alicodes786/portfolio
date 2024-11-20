import Link from "next/link"
import { useState, useEffect } from "react"

export function Navbar() {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'portfolio', 'contact']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom > 100
        }
        return false
      })
      if (currentSection) setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="sticky top-0 z-50 bg-black bg-opacity-90 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-mono">
          Mirza<span className="text-[#00FF94]">.</span>
        </Link>
        <div className="flex items-center gap-6">
          {['hero', 'about', 'experience', 'portfolio', 'contact'].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={`hover:text-[#00FF94] transition-colors ${
                activeSection === section ? 'text-[#00FF94]' : 'text-white'
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}