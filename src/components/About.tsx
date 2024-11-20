import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Globe, Code2, Database, Wrench } from 'lucide-react'

export function About() {
  const skills = ["NextJS", "ReactJS", "Supabase", "SQL"]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">About Me</h2>
            <p className="text-lg text-gray-300">
              I&#39;m a passionate full-stack developer with experience in creating scalable web and mobile applications. With a strong foundation in both frontend and backend technologies, I specialize in building robust, user-centric solutions that drive business growth.
            </p>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-black"
            >
              Download CV
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill) => (
              <Card key={skill} className="bg-[#121212] border-gray-800">
                <CardContent className="p-6 flex items-center justify-center">
                  <div className="text-center">
                    {skill === 'NextJS' && <Globe className="h-8 w-8 mx-auto mb-2 text-white" />}
                    {skill === 'ReactJS' && <Code2 className="h-8 w-8 mx-auto mb-2 text-white" />}
                    {skill === 'Supabase' && <Database className="h-8 w-8 mx-auto mb-2 text-white" />}
                    {skill === 'SQL' && <Wrench className="h-8 w-8 mx-auto mb-2 text-white" />}
                    <span className="text-sm font-semibold text-white">{skill}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}