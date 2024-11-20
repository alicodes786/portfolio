import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Twitter } from 'lucide-react'
import Link from "next/link"

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#121212]">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-white">Get In Touch</h2>
          <p className="text-[#D4D4D4]">
            Let&#39;s create something amazing together
          </p>
        </div>
        <div className="max-w-xl mx-auto">
          <Card className="bg-black border-gray-800">
            <CardContent className="p-6">
              <form className="space-y-6">
                <div>
                  <Input
                    placeholder="Name"
                    className="bg-[#121212] border-gray-800 text-white placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email"
                    className="bg-[#121212] border-gray-800 text-white placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Message"
                    className="bg-[#121212] border-gray-800 text-white min-h-[150px] placeholder:text-gray-400"
                  />
                </div>
                <Button className="w-full bg-white text-black hover:bg-[#D4D4D4]">Send Message</Button>
              </form>
            </CardContent>
          </Card>
          <div className="flex justify-center gap-4 mt-6">
            <Button variant="outline" size="icon" className="border-white text-white hover:bg-white hover:text-black" asChild>
              <Link href="#">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="outline" size="icon" className="border-white text-white hover:bg-white hover:text-black" asChild>
              <Link href="#">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="outline" size="icon" className="border-white text-white hover:bg-white hover:text-black" asChild>
              <Link href="#">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}