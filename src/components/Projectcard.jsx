import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Code } from "lucide-react";

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
     
      className="bg-gray-950 rounded-xl overflow-hidden shadow-lg w-full transform transition-transform duration-300 ease-in-out  hover:shadow-[0_4px_6px_0px_rgba(255,255,255,0.4)] "
    >
      <div className="relative transition duration-300 ease-in-out hover:scale-105 ">
        {/* Aspect ratio wrapper */}
        <div className="aspect-video bg-gray-900">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover" // Ensures the image scales correctly within the container
          />
        </div>

        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 text-white">
            {project.title}
          </h3>
          <p className="text-gray-400 mb-4 text-sm line-clamp-2">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-900 rounded-full text-xs text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-lg text-sm bg-black text-blue-500 font-medium transition-colors duration-300"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </a>
            <a
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-2xl text-sm text-white font-medium transition-colors duration-300 hover:bg-gray-700"
            >
              <Code className="w-4 h-4 mr-2" />
              View Code
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
