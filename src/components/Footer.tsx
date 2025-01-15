import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-secondary text-sm">
            © 2024 Himanshu Bisen. All rights reserved.
          </p>
          
          <div className="flex gap-4 mt-4 md:mt-0">
            <a
              href="https://github.com/HimanshuBisen1799"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-violet-500 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/himanshu-bisen-279505227/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-violet-500 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:himanshubisen14@gmail.com"
              className="text-secondary hover:text-violet-500 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;