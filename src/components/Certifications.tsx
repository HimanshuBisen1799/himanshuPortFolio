import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Award } from 'lucide-react';

const Certifications = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const certifications = [
    {
      title: "Java with DSA & Basic System Design",
      organization: "PW Skills",
      date: "3rd nov 2024",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=500&auto=format",
      skills: ["Core Java", "Object-Oriented Programming", "DSA", "Basic System-Design"],
      description: "A course covering Core Java, OOP, DSA, and Basic System Design, providing essential skills for software development and problem-solving."
    },
    {
      title: "Postman API Fundamentals Student Expert",
      organization: "Postman",
      date: "27th october 2024",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=500&auto=format",
      skills: ["API Testing", "API Documentation", "Postman", "REST APIs", "API Development"],
      description: "Mastery in API testing, documentation, and development using Postman."
    },
    {
      title: "GirlScript Summer of Code",
      organization: "GirlScript Foundation",
      date: "10th november 2024",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=500&auto=format",
      skills: ["Open Source", "Git", "Collaboration", "Software Development", "Problem Solving"],
      description: "Participated in open-source development program, contributing to real-world projects."
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="certifications" className="py-20 bg-tertiary relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-violet-500/20 via-transparent to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-secondary text-[14px] uppercase tracking-wider">My Credentials</p>
          <h2 className="text-gradient font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Certifications.</h2>
          <p className="mt-4 text-secondary text-[17px] max-w-3xl mx-auto">
            Professional certifications and achievements that validate my expertise.
          </p>
        </motion.div>

        <div className="mt-20 relative">
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-violet-500/20 hover:bg-violet-500/30 text-white p-3 rounded-full backdrop-blur-sm transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-violet-500/20 hover:bg-violet-500/30 text-white p-3 rounded-full backdrop-blur-sm transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="min-w-[400px] glass-card hover-card p-6 rounded-xl snap-center"
              >
                <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <Award className="w-8 h-8 text-violet-500" />
                  </div>
                </div>

                <h3 className="text-white text-xl font-bold">{cert.title}</h3>
                <div className="flex items-center gap-2 mt-2">
                  <p className="text-violet-500 text-sm">{cert.organization}</p>
                  <span className="text-secondary">•</span>
                  <p className="text-secondary text-sm">{cert.date}</p>
                </div>

                <p className="mt-4 text-secondary text-sm">{cert.description}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-violet-500/20 text-violet-500 text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;