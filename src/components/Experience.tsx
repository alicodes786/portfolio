import { motion, useAnimation } from "framer-motion";
import { useEffect} from "react";
import { useInView } from "react-intersection-observer";

export function Experience() {
  const experiences = [
    {
      role: "Senior Full Stack Developer",
      company: "Google Inc.",
      duration: "2023 - Present",
      description:
        "Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.",
      tech: ["JavaScript", "React.js", "Node.js", "MongoDB"],
    },
    {
      role: "Frontend Developer",
      company: "Adobe",
      duration: "2022 - 2023",
      description:
        "Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.",
      tech: ["HTML", "CSS", "Next.js", "React"],
    },
    {
      role: "Full Stack Developer",
      company: "Facebook",
      duration: "2021 - 2022",
      description:
        "Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.",
      tech: ["JavaScript", "React.js", "Node.js", "RESTful APIs"],
    },
    {
      role: "Junior Developer",
      company: "StartUp Hub",
      duration: "2020 - 2021",
      description:
        "Assisted in developing MVP products for startups. Gained hands-on experience with modern web technologies and agile development methodologies.",
      tech: ["HTML/CSS", "JavaScript", "PHP", "MySQL"],
    },
  ];

  // Animation Controllers
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2, // Trigger animation when 20% of the element is in view
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#121212]">
      <div className="container mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-3xl font-bold mb-12 text-center text-white"
          initial="hidden"
          animate={controls}
          ref={ref}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
          }}
        >
          Experience
        </motion.h2>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline Line */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-white"
            initial="hidden"
            animate={controls}
            ref={ref}
            variants={{
              hidden: { opacity: 0, scaleY: 0 },
              visible: { opacity: 1, scaleY: 1, transition: { duration: 1 } },
            }}
          />

          <motion.div
            className="space-y-12"
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative grid md:grid-cols-[1fr,1fr] gap-8 items-center"
                variants={itemVariants}
              >
                {/* Experience Card */}
                <div
                  className={`bg-black p-6 rounded-lg ${
                    index % 2 === 0 ? "md:col-start-1" : "md:col-start-2"
                  }`}
                >
                  {/* Circle */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-white rounded-full" />
                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                  <p className="text-[#D4D4D4]">{exp.company}</p>
                  <p className="text-sm text-[#D4D4D4]">{exp.duration}</p>
                  <p className="mt-4 text-[#D4D4D4]">{exp.description}</p>
                  {/* Tech Tags */}
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
