import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Tilt } from 'react-tilt';

const Projects = () => {
  const projects = [
    {
      name: "SoftDigiIndia Technologies",
      description: "SoftDigiIndia Technologies is a software company based in Balaghat, Madhya Pradesh, India. They offer hardware and software troubleshooting support to IT firms and software development companies",
      tags: ["MongoDB", "React.js", "Node.js", "Express.js"],
      image: "https://images.unsplash.com/photo-1649424219286-56af1d8ee0cb?q=80&w=1816&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      source_code_link: "https://github.com/HimanshuBisen1799/softdigiIndiaIT.git",
      live_demo_link: "https://softdigi-india-it.vercel.app/"
    },
    {
      
      name: "Rent Room Hub",
      description: "A cutting-edge online platform designed to simplify the process of finding rental rooms in any city. Features include search, compare, and book rooms with real-time availability updates.",
      tags: ["MongoDB", "React.js", "Node.js", "Express.js"],
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&auto=format",
      source_code_link: "https://github.com/HimanshuBisen1799/NRicollege",
      live_demo_link: "https://rentroomhub.onrender.com"
    },
    {
      name: "Railway Station Table Booking",
      description: "An innovative online table booking platform for railway stations. Developed with TechDigi Software, this solution streamlines food ordering and enhances the railway station experience.",
      tags: ["MongoDB", "Node.js", "Express.js", "React.js"],
      image: "https://images.unsplash.com/photo-1517737812598-1a43d0ef2a60?w=500&auto=format",
      source_code_link: "https://github.com/HimanshuBisen1799/table-booking.git",
      live_demo_link: "https://shymaa.onrender.com"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-tertiary">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-secondary text-[14px] uppercase tracking-wider">My work</p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Projects.</h2>
        </motion.div>

        <div className="mt-20 flex flex-wrap gap-7">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="w-full sm:w-[calc(50%-14px)]"
            >
              <Tilt
                options={{
                  max: 15,
                  scale: 1,
                  speed: 450,
                }}
                className="bg-primary/40 backdrop-blur-lg p-5 rounded-2xl h-full"
              >
                <div className="relative w-full h-[230px]">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover rounded-2xl"
                  />

                  <div className="absolute inset-0 flex justify-end m-3 gap-2">
                    <div
                      onClick={() => window.open(project.source_code_link, "_blank")}
                      className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer bg-black/70 hover:bg-black/90"
                    >
                      <Github className="w-5 h-5 text-white" />
                    </div>
                    <div
                      onClick={() => window.open(project.live_demo_link, "_blank")}
                      className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer bg-black/70 hover:bg-black/90"
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                <div className="mt-5">
                  <h3 className="text-white font-bold text-[24px]">{project.name}</h3>
                  <p className="mt-2 text-secondary text-[14px]">{project.description}</p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[14px] text-violet-500 bg-violet-500/20 px-3 py-1 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;