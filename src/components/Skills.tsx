import React from 'react';
import { motion } from 'framer-motion';
import { Database, Globe, Server, Code } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      icon: <Globe className="w-8 h-8" />,
      items: [
        { name: "React.js", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "HTML/CSS", level: 90 },
        { name: "Tailwind CSS", level: 85 },
      ]
    },
    {
      category: "Backend",
      icon: <Server className="w-8 h-8" />,
      items: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "Java SE", level: 75 },
        { name: "REST APIs", level: 85 },
      ]
    },
    {
      category: "Database",
      icon: <Database className="w-8 h-8" />,
      items: [
        { name: "MongoDB", level: 85 },
        { name: "SQL", level: 80 },
        { name: "AWS S3", level: 70 },
      ]
    },
    {
      category: "Other",
      icon: <Code className="w-8 h-8" />,
      items: [
        { name: "Git", level: 85 },
        { name: "Team Leadership", level: 80 },
        { name: "Problem Solving", level: 90 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-violet-500/20 via-transparent to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-secondary text-[14px] uppercase tracking-wider">My abilities</p>
          <h2 className="text-gradient font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Skills.</h2>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: groupIndex * 0.2 }}
              className="glass-card hover-card rounded-2xl p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-violet-500/20 text-violet-500">
                  {skillGroup.icon}
                </div>
                <h3 className="text-white text-[24px] font-bold">{skillGroup.category}</h3>
              </div>

              <div className="space-y-6">
                {skillGroup.items.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between">
                      <span className="text-white">{skill.name}</span>
                      <span className="text-secondary">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700/50 rounded-full overflow-hidden skill-bar">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="h-full bg-gradient-to-r from-violet-500 to-pink-500 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;