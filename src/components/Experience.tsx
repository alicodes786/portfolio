export function Experience() {
    const experiences = [
      {
        role: "Senior Full Stack Developer",
        company: "Google Inc.",
        duration: "2023 - Present",
        description: "Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.",
        tech: ["JavaScript", "React.js", "Node.js", "MongoDB"],
      },
      {
        role: "Frontend Developer",
        company: "Adobe",
        duration: "2022 - 2023",
        description: "Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.",
        tech: ["HTML", "CSS", "Next.js", "React"],
      },
      {
        role: "Full Stack Developer",
        company: "Facebook",
        duration: "2021 - 2022",
        description: "Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.",
        tech: ["JavaScript", "React.js", "Node.js", "RESTful APIs"],
      },
      {
        role: "Junior Developer",
        company: "StartUp Hub",
        duration: "2020 - 2021",
        description: "Assisted in developing MVP products for startups. Gained hands-on experience with modern web technologies and agile development methodologies.",
        tech: ["HTML/CSS", "JavaScript", "PHP", "MySQL"],
      },
    ]
  
    return (
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#121212]">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Experience</h2>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-white" />
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative grid md:grid-cols-[1fr,1fr] gap-8 items-center">
                  <div className={`bg-black p-6 rounded-lg ${index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2'}`}>
                    <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-white rounded-full" />
                    <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                    <p className="text-[#D4D4D4]">{exp.company}</p>
                    <p className="text-sm text-[#D4D4D4]">{exp.duration}</p>
                    <p className="mt-4 text-[#D4D4D4]">{exp.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-sm bg-[#121212] text-white rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }