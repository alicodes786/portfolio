import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from 'lucide-react'
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
      title: "FitEmirates, E-commerce Platform",
      description: "A custom-coded e-commerce website, which can handle all important operations like product viewing, filtering, checkout, cart and Stripe.",
      tech: ["Nextjs","Supabase","Cloudflare","Drizzle ORM","Docker","React","PostgreSQL"],
      demo: "https://fitemirates.vercel.app/",
      code: "https://github.com/aryanprince/fitemirates",
      image: "/fitemirates.png",
    },
    {
      title: "Portfolio of Mine",
      description: "Developed this portfolio for you to get a brief idea about my experience and projects timeline",
      tech: ["Next.js", "TailwindCSS", "Shadcn", "Supabase", "SendGrid"],
      demo: "#",
      code: "https://github.com/alicodes786/portfolio",
      image: "/portfolio.png",
    },
    {
      title: "Cryptorunner",
      description: "An investment comparison website for cryptocurrencies, investment stocks, options and much more",
      tech: ["React (frontend)", "TailwindCSS", "Wordpress backend", "MySQL", "PHP"],
      demo: "https://cryptorunner.com/",
      code: "https://github.com/alicodes786/PitchDeckAI",
      image: "/cryptorunner.png",
    },
    {
      title: "CrptoVerse",
      description: "A social platform developed for Cryto enthusiasts, which also displays live cryptocurrency rates of every coin.",
      tech: ["React.js", "Node.js", "Firebase", "Tailwind"],
      demo: "https://crypto-verse-ten.vercel.app/CryptoVerse/markets",
      code: "https://github.com/alicodes786/CryptoWall",
      image: "/cryptoverse.png",
    },
  ]

  // Return null during SSR to avoid hydration errors
  if (!isClient) {
    return null
  }

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">Notable Projects</h2>
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
                  className="object-cover group-hover:scale-110 transition-transform duration-300 filter group-hover:grayscale-0"
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
                  
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
