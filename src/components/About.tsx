// import React from 'react';
// import { motion } from 'framer-motion';
// import { Code2, Rocket, Users } from 'lucide-react';


// const About = () => {
//   const services = [
//     {
//       title: "Full Stack Developer",
//       icon: <Code2 className="w-16 h-16" />,
//       description: "Experienced in building scalable web applications using React.js, Node.js, and modern databases."
//     },
//     {
//       title: "Software Engineer",
//       icon: <Rocket className="w-16 h-16" />,
//       description: "A Software Engineer is a professional who designs, develops, tests, and maintains software applications, systems"
//     },
//     {
//       title: "Web Developer",
//       icon: <Code2 className="w-16 h-16" />,
//       description: "A Web Developer is a professional who specializes in designing, building, and maintaining websites and web applications. "
//     },
//     {
//       title: "Team Leader",
//       icon: <Users className="w-16 h-16" />,
//       description: "Led development teams and managed projects at TechDigi Software, ensuring successful delivery."
//     },
   
    
//   ];

//   return (
//     <section id="about" className="py-20 bg-tertiary">
//       <div className="max-w-7xl mx-auto px-6">
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//         >
//           <p className="text-secondary text-[14px] uppercase tracking-wider">Introduction</p>
//           <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Overview.</h2>
//         </motion.div>

//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
//         >
//           I am a highly motivated Full Stack Developer with over 1 year of experience in software development.
//           My expertise spans React.js, Node.js, Java, JavaScript, and various databases. As the founder of
//           SoftDigitIndia Technology, I combine technical excellence with entrepreneurial vision to deliver
//           innovative solutions.
//         </motion.p>

//         <div className="mt-20 flex flex-wrap gap-10">
//           {services.map((service, index) => (
//             <motion.div
//               key={service.title}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.2 }}
//               className="xs:w-[250px] w-full bg-primary/40 backdrop-blur-lg rounded-[20px] p-6"
//             >
//               <div className="w-full h-[230px] flex flex-col items-center justify-center">
//                 <div className="w-20 h-20 flex items-center justify-center rounded-full bg-violet-500/20 text-violet-500 mb-4">
//                   {service.icon}
//                 </div>
//                 <h3 className="text-white text-[20px] font-bold text-center">{service.title}</h3>
//                 <p className="mt-2 text-secondary text-[14px] text-center">{service.description}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Rocket, Users,Laptop } from 'lucide-react';

const About = () => {
  const services = [
    {
      title: "Full Stack Developer",
      icon: <Code2 className="w-16 h-16" />,
      description: "Experienced in building scalable web applications using React.js, Node.js, and modern databases.",
    },
    {
      title: "Team Leader",
      icon: <Users className="w-16 h-16" />,
      description: "Led development teams and managed projects at TechDigi Software, ensuring successful delivery.",
    },
    {
      title: "Startup Founder",
      icon: <Rocket className="w-16 h-16" />,
      description: "Founder of SoftDigitIndia Technology, driving innovation in software solutions.",
    },
    {
      title: "Software Engineer",
      icon: <Laptop className="w-16 h-16" />,
      description: "Proficient in designing and implementing robust software solutions, with a focus on clean code and performance optimization.",
    },
  ];
  

  return (
    <section id="about" className="py-20 bg-tertiary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto aspect-[3/4] rounded-2xl overflow-hidden">
              <img
                src="https://i.postimg.cc/Pq5D1F1T/himanshupicboss.png"
                alt="Himanshu Bisen"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-violet-500/50 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-violet-500/20 rounded-full blur-2xl" />
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-violet-500/20 rounded-full blur-2xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-secondary text-[14px] uppercase tracking-wider">Introduction</p>
            <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Overview.</h2>
            <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
              I am a highly motivated Full Stack Developer with over 1 year of experience in software development.
              My expertise spans React.js, Node.js, Java, JavaScript, and various databases. As the founder of
              SoftDigitIndia Technology, I combine technical excellence with entrepreneurial vision to deliver
              innovative solutions.
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 bg-gradient-to-r from-violet-500 to-pink-500 text-white py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-violet-500/25"
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              Download Resume
            </motion.button>
          </motion.div>
        </div>

        <div className="mt-20 flex flex-wrap gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="xs:w-[250px] w-full glass-card hover-card rounded-[20px] p-6"
            >
              <div className="w-full h-[230px] flex flex-col items-center justify-center">
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-violet-500/20 text-violet-500 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-white text-[20px] font-bold text-center">{service.title}</h3>
                <p className="mt-2 text-secondary text-[14px] text-center">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;