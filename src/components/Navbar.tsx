// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Menu, X } from 'lucide-react';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const navLinks = [
//     { id: "about", title: "About" },
//     { id: "experience", title: "Experience" },
//     { id: "projects", title: "Projects" },
//     { id: "contact", title: "Contact" },
//   ];

//   return (
//     <nav className="w-full flex items-center py-5 fixed top-0 z-20 bg-primary/80 backdrop-blur-sm">
//       <div className="w-full flex justify-between items-center max-w-7xl mx-auto px-6">
//         <Link
//           to="/"
//           className="flex items-center gap-2"
//           onClick={() => window.scrollTo(0, 0)}
//         >
//           <p className="text-white text-[18px] font-bold cursor-pointer flex">
//             Himanshu&nbsp;<span className="sm:block hidden">| Portfolio</span>
//           </p>
//         </Link>

//         <ul className="list-none hidden sm:flex flex-row gap-10">
//           {navLinks.map((link) => (
//             <li
//               key={link.id}
//               className="text-white hover:text-violet-500 text-[18px] font-medium cursor-pointer"
//             >
//               <a href={`#${link.id}`}>{link.title}</a>
//             </li>
//           ))}
//         </ul>

//         <div className="sm:hidden flex flex-1 justify-end items-center">
//           <button
//             className="text-white w-[28px] h-[28px] object-contain cursor-pointer"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             {isOpen ? <X /> : <Menu />}
//           </button>

//           <div className={`${!isOpen ? "hidden" : "flex"} p-6 bg-primary/90 backdrop-blur-lg absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
//             <ul className="list-none flex justify-end items-start flex-col gap-4">
//               {navLinks.map((link) => (
//                 <li
//                   key={link.id}
//                   className="text-white font-poppins font-medium cursor-pointer text-[16px]"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   <a href={`#${link.id}`}>{link.title}</a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { id: "about", title: "About" },
    { id: "experience", title: "Experience" },
    { id: "projects", title: "Projects" },
    { id: "skills", title: "Skills" },
    { id: "achievements", title: "Achievements" },
    // { id: "certifications", title: "Certifications" },
    { id: "contact", title: "Contact" },
  ];

  return (
    <nav className="w-full flex items-center py-5 fixed top-0 z-20 bg-primary/80 backdrop-blur-sm">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto px-6">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => window.scrollTo(0, 0)}
        >
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Himanshu&nbsp;<span className="sm:block hidden">| Portfolio</span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className="text-white hover:text-violet-500 text-[18px] font-medium cursor-pointer"
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <button
            className="text-white w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>

          <div className={`${!isOpen ? "hidden" : "flex"} p-6 bg-primary/90 backdrop-blur-lg absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className="text-white font-poppins font-medium cursor-pointer text-[16px]"
                  onClick={() => setIsOpen(false)}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;