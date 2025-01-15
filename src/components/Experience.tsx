import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Tryidol Technologies",
      location: "Bhopal, Madhya Pradesh, India",
      date: "Dec 2024 - Present",
      description: "Specializing in React.js, Node.js, and SQL development. Building innovative solutions and contributing to team growth.",
      skills: ["Node.js", "React.js", "SQL", "Software Development", "SQL", ]
    },
    {
      title: "Full-stack Developer",
      company: "TechDigi Software Pvt Ltd",
      location: "Bhopal, Madhya Pradesh, India",
      date: "Sep 2023 - Oct 2024",
      description: "Developed railway station website for food ordering and table booking with mobile responsiveness.",
      skills: ["Software Testing", "Design Patterns", "Full Stack Development"]
    },
    {
      title: "Frontend Developer",
      company: "CRTD Technologies",
      location: "Bhopal, Madhya Pradesh, India",
      date: "Aug 2022 - Oct 2022",
      description: "Gained hands-on experience in HTML, CSS, and JavaScript for web development.",
      skills: ["HTML", "CSS", "JavaScript", "Responsive Design"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-secondary text-[14px] uppercase tracking-wider">What I have done so far</p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Work Experience.</h2>
        </motion.div>

        <div className="mt-20 flex flex-col">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative pl-8 pb-12 border-l-2 border-violet-500 last:pb-0"
            >
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-violet-500" />
              
              <div className="bg-tertiary p-6 rounded-lg shadow-xl">
                <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
                <p className="text-violet-500 text-[16px] font-semibold">{experience.company}</p>
                
                <div className="mt-2 flex items-center gap-4 text-secondary">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{experience.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{experience.location}</span>
                  </div>
                </div>

                <p className="mt-4 text-secondary text-[14px] leading-[24px]">
                  {experience.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {experience.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-violet-500/20 text-violet-500 text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;