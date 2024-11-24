import { motion, useAnimation } from "framer-motion";
import { useEffect} from "react";
import { useInView } from "react-intersection-observer";

export function Experience() {
  const experiences = [
    {
      role: "Full Stack Developer",
      company: "FitEmirates",
      duration: "10/2024 - Present",
      description:
        "Developed a full-stack e-commerce site using Next.js for a fitness equipment business. Integrated features like dynamic product pages, cart system, user authentication, and secure payment processing. Implemented REST APIs to manage inventory, orders, and user data efficiently.",
      tech: ["Next.js", "Supabase", "Drizzle ORM", "Cloudflare", "TailwindCSS", "Stripe", "Vercel"],
    },
    {
      role: "React Native Mobile Developer",
      company: "Actable Accountability App",
      duration: "10/2024 - Present",
      description:
        "Built a mobile app using React Native combining AI and human coaching for tracking deadlines and accountability. Integrated push notifications, real-time updates, and local storage. Implemented responsive UI/UX designs and optimized performance. Developed database using Supabase and connected with Frontend using APIs.",
      tech: ["React Native", "Supabase", "TailwindCSS"],
    },
    {
      role: "Software Developer",
      company: "Axone Accelerate",
      duration: "09/2023 - 09/2024",
      description:
        "Responsible for building AI Automation Workflows and developing AI Assistants tailored for clients. Developed customised AI Models for client systems to enhance business processes. Worked with Real estate, Recruitment, Marketing, E-commerce and Education clients.",
      tech: ["AI", "Automation", "Custom Models"],
    },
    {
      role: "Software Engineer",
      company: "Accenture",
      duration: "08/2022 - 09/2023",
      description:
        "Designed, developed and maintained crucial APIs for Accounting & Payment Systems. Responsible for developing Authorization APIs for bank employees to manage operations and transactions. Performed unit testing and worked in an Agile Framework (Scrum). Used GCP, RESTful APIs, JavaScript & ReactJS for configurations, Java for security, and Jenkins for deployment.",
      tech: ["GCP", "RESTful APIs", "JavaScript", "ReactJS", "Java", "Jenkins"],
    },
    {
      role: "Backend Developer",
      company: "Accenture (Internal - GCP)",
      duration: "10/2022 - 03/2023",
      description:
        "Developed the entire backend for a crypto social platform using Firebase. Connected with ReactJS Frontend built using TypeScript and TailwindCSS. Implemented RBAC Authentication to protect sensitive information. Project was awarded best in the University and sold for $15,000 to an education company.",
      tech: ["Firebase", "ReactJS", "TypeScript", "TailwindCSS", "RBAC"],
    }
  ];

  // Animation Controllers
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
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
                <div
                  className={`bg-black p-6 rounded-lg ${
                    index % 2 === 0 ? "md:col-start-1" : "md:col-start-2"
                  }`}
                >
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}