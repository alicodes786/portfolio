import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Code2, Database, Wrench } from "lucide-react";
import { motion } from "framer-motion";

export function About() {
  const skills = ["NextJS", "ReactJS", "Supabase", "SQL"];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Section Text */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-3xl font-bold">About Me</h2>
            <p className="text-lg text-gray-300">
              I&#39;m a passionate full-stack developer with experience in
              creating scalable web and mobile applications. With a strong
              foundation in both frontend and backend technologies, I specialize
              in building robust, user-centric solutions that drive business
              growth.
            </p>
            <motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: 0.3 }}
>
  <Button
    variant="outline"
    size="lg"
    className="border-white text-white hover:bg-white hover:text-black"
    asChild
  >
    <a
      href="/myResumeMirzaAliHassan.pdf"
      download="MyCVMirzaAliHassan.pdf"
      className="flex items-center justify-center"
    >
      Download CV
    </a>
  </Button>
</motion.div>
          </motion.div>

          {/* Skill Cards */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", staggerChildren: 0.2 }}
          >
            {skills.map((skill) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="bg-[#121212] border-gray-800">
                  <CardContent className="p-6 flex items-center justify-center">
                    <div className="text-center">
                      {skill === "NextJS" && (
                        <Globe className="h-8 w-8 mx-auto mb-2 text-white" />
                      )}
                      {skill === "ReactJS" && (
                        <Code2 className="h-8 w-8 mx-auto mb-2 text-white" />
                      )}
                      {skill === "Supabase" && (
                        <Database className="h-8 w-8 mx-auto mb-2 text-white" />
                      )}
                      {skill === "SQL" && (
                        <Wrench className="h-8 w-8 mx-auto mb-2 text-white" />
                      )}
                      <span className="text-sm font-semibold text-white">
                        {skill}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
