import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Github } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export function Portfolio() {
  const [isClient, setIsClient] = useState(false)

  // Set isClient to true after the component mounts to avoid hydration issues
  useEffect(() => {
    setIsClient(true)
  }, [])

  const projects = [
    {
      title: "E-commerce Platform",
      description: "A scalable e-commerce platform built using Next.js and MongoDB.",
      tech: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      demo: "#",
      code: "#",
      image: "/placeholder.svg",
    },
    {
      title: "AI Content Manager",
      description: "Content management system with AI-powered content generation and optimization features.",
      tech: ["React", "Python", "OpenAI", "PostgreSQL"],
      demo: "#",
      code: "#",
      image: "/placeholder.svg",
    },
    {
      title: "Real-time Analytics Dashboard",
      description: "Interactive dashboard for real-time data visualization and analysis.",
      tech: ["Next.js", "Socket.io", "Redis", "D3.js"],
      demo: "#",
      code: "#",
      image: "/placeholder.svg",
    },
    {
      title: "Social Media Scheduler",
      description: "A tool for scheduling and managing social media posts across multiple platforms.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      demo: "#",
      code: "#",
      image: "/placeholder.svg",
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team features.",
      tech: ["Vue.js", "Firebase", "Vuex", "Element UI"],
      demo: "#",
      code: "#",
      image: "/placeholder.svg",
    },
  ]

  // Return null during SSR to avoid hydration errors
  if (!isClient) {
    return null
  }

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-[#121212] border-gray-800 overflow-hidden group transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden group">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={200}
                  className="object-cover group-hover:scale-110 transition-transform duration-300 filter grayscale group-hover:grayscale-0"
                />
              </div>
              <CardContent className="p-6 space-y-4 group-hover:text-white transition-colors duration-300 ease-in-out">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="text-[#D4D4D4]">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-sm bg-black text-white rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-white text-white hover:bg-white hover:text-black flex items-center gap-2"
                    asChild
                  >
                    <Link href={project.demo}>
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-white text-white hover:bg-white hover:text-black flex items-center gap-2"
                    asChild
                  >
                    <Link href={project.code}>
                      <Github className="h-4 w-4" />
                      Code
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
