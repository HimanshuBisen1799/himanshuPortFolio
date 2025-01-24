import React from 'react';
import { motion } from 'framer-motion';
import { Award, Code, BookOpen, Trophy } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: "HackerRank Five Star Coder in Java",
      icon: <Trophy className="w-8 h-8" />,
      description: "Achieved 5-star rating in Java programming on HackerRank platform"
    },
    {
      title: "CODECHEF 250+ Questions Solved",
      icon: <Code className="w-8 h-8" />,
      description: "Successfully solved over 250 programming challenges on CodeChef"
    },
    {
      title: "100-Day Coding Challenge",
      icon: <Award className="w-8 h-8" />,
      description: "Successfully completed a 100-day coding challenge on CodeChef"
    },
    {
        title: "State-level Hackathon Participant",
        icon: <Trophy className="w-8 h-8" />,
        description: "Participated in CODEBYTE2K22 State-level Hackathon of Web development"
      }
      
  ];

//   const certifications = [
//     {
//       title: "HackerRank Certification",
//       organization: "HackerRank",
//       description: "Java (Basic), CSS & Problem Solving"
//     },
//     {
//       title: "Introduction to Java",
//       organization: "Coursera",
//       description: "Comprehensive Java programming fundamentals"
//     },
//     {
//       title: "Basic Web Development",
//       organization: "Masai",
//       description: "Web development fundamentals and best practices"
//     }
//   ];

  return (
    <section id="achievements" className="py-20 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-violet-500/20 via-transparent to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-secondary text-[14px] uppercase tracking-wider">Recognition</p>
          <h2 className="text-gradient font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Achievements & Certifications.</h2>
        </motion.div>

        <div className="mt-20">
          <h3 className="text-white text-[24px] font-bold mb-8">Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card hover-card p-6 rounded-xl"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-violet-500/20 text-violet-500">
                    {achievement.icon}
                  </div>
                  <div>
                    <h4 className="text-white text-lg font-semibold">{achievement.title}</h4>
                    <p className="text-secondary mt-2">{achievement.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
{/* 
        <div className="mt-20">
          <h3 className="text-white text-[24px] font-bold mb-8">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card hover-card p-6 rounded-xl"
              >
                <BookOpen className="w-8 h-8 text-violet-500 mb-4" />
                <h4 className="text-white text-lg font-semibold">{cert.title}</h4>
                <p className="text-violet-500 text-sm mt-1">{cert.organization}</p>
                <p className="text-secondary mt-2 text-sm">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Achievements;