import React from "react";
import { Github, Linkedin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8 px-4">
      <div className="max-w-2xl mx-auto flex justify-center gap-4">
        <a
          href="https://github.com/lucas-kaminski"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-black transition-colors duration-200"
        >
          <Github className="h-5 w-5" />
          <span className="sr-only">GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/lucas-kaminski/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-black transition-colors duration-200"
        >
          <Linkedin className="h-5 w-5" />
          <span className="sr-only">LinkedIn</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
