import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#121212]">
      <div className="container mx-auto">
        {/* Title with Fade-in Animation */}
        <motion.div
          className="max-w-2xl mx-auto text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-white">Get In Touch</h2>
          <p className="text-[#D4D4D4]">
            Let&#39;s create something amazing together
          </p>
        </motion.div>

        <div className="max-w-xl mx-auto">
          {/* Form Card with Slide-in Animation */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 50, delay: 0.5 }}
          >
            <Card className="bg-black border-gray-800">
              <CardContent className="p-6">
                <form className="space-y-6">
                  {/* Input Fields with Fade-in Animation */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                  >
                    <Input
                      placeholder="Name"
                      className="bg-[#121212] border-gray-800 text-white placeholder:text-gray-400"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.7 }}
                  >
                    <Input
                      type="email"
                      placeholder="Email"
                      className="bg-[#121212] border-gray-800 text-white placeholder:text-gray-400"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                  >
                    <Textarea
                      placeholder="Message"
                      className="bg-[#121212] border-gray-800 text-white min-h-[150px] placeholder:text-gray-400"
                    />
                  </motion.div>

                  {/* Button with Bounce Animation */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 15,
                      delay: 0.9,
                    }}
                  >
                    <Button className="w-full bg-white text-black hover:bg-[#D4D4D4]">
                      Send Message
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Social Icons with Slide-in Animation */}
          <motion.div
            className="flex justify-center gap-4 mt-6"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 50, delay: 1 }}
          >
            <Button
              variant="outline"
              size="icon"
              className="border-white text-white hover:bg-white hover:text-black"
              asChild
            >
              <Link href="#">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="border-white text-white hover:bg-white hover:text-black"
              asChild
            >
              <Link href="#">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="border-white text-white hover:bg-white hover:text-black"
              asChild
            >
              <Link href="#">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
