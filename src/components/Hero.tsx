import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  return (
    <section id="hero" className="min-h-screen bg-gradient-to-b from-[#000000] to-[#121212] flex items-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              Hi, I&#39;m Mirza Ali Hassan
            </h1>
            <p className="text-xl text-[#D4D4D4]">
              Full-Stack Developer Crafting Modern Solutions
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-[#000000] text-white hover:bg-[#121212]">
                View My Projects
              </Button>
              <Button variant="outline" className="border-[#000000] text-[#000000] hover:bg-[#000000] hover:text-white">
                Get In Touch
              </Button>
            </div>
          </div>
          <div className="relative mx-auto max-w-[400px] w-full">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9483.jpg-NCtq3jPcBmfhIXa5vYgNMc3U5yvjLz.jpeg"
              alt="Profile"
              width={400}
              height={400}
              className="rounded-full filter grayscale"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  )
}