import { Button } from "@/components/ui/button"
import { motion } from "framer-motion";
import Image from "next/image"

export function Hero() {
  return (
    <section
  id="hero"
  className="min-h-screen bg-gradient-to-b from-[#000000] to-[#121212] flex items-center justify-center"
>
  <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 px-4">
    <motion.div
      className="text-center lg:text-left space-y-6"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
        Hi, I&#39;m Mirza Ali Hassan
      </h1>
      <p className="text-xl text-[#D4D4D4]">
        A Full-Stack Developer Crafting Modern Solutions, MVPs & Custom Apps
      </p>
      <motion.div
        className="flex flex-wrap gap-4 justify-center lg:justify-start"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Button className="bg-white text-black hover:bg-gray-200">
          View My Projects
        </Button>
        <Button
          variant="outline"
          className="border-white text-white hover:bg-white hover:text-black"
        >
          Get In Touch
        </Button>
      </motion.div>
    </motion.div>
    <motion.div
      className="relative mx-auto max-w-[400px] w-full"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9483.jpg-NCtq3jPcBmfhIXa5vYgNMc3U5yvjLz.jpeg"
        alt="Profile"
        width={400}
        height={400}
        className="rounded-full filter grayscale"
        priority
      />
    </motion.div>
  </div>
</section>
  )
}
