'use client'

import { useState, useEffect } from "react"
import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { About } from "@/components/About" 
import { Experience } from "@/components/Experience"
import { Portfolio } from "@/components/Portfolio"
import { Contact } from "@/components/Contact"
import { Moon, Sun } from 'lucide-react'

export default function Component() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    const root = window.document.documentElement
    if (isDarkMode) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [isDarkMode])

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <Navbar />
      {/* Theme Toggle */}
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="fixed top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-[#121212] z-50"
        aria-label="Toggle theme"
      >
        {isDarkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
      </button>

      <Hero />
      <About />
      <Experience />
      <Portfolio />
      <Contact />

      {/* Footer */}
      <footer className="py-6 bg-black border-t border-gray-800">
        <div className="container px-4 mx-auto text-center text-[#D4D4D4]">
          <p>© {new Date().getFullYear()} Mirza Ali Hassan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}