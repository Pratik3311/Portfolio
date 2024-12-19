import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ProjectCard from './Projectcard';
import cityServeImage from '../assets/CityServe.png';
import farmfreshImage from '../assets/FarmFresh.png';
import sivaimage from '../assets/Siva.png';

// Projects Array
const projects = [
  {
    id: 1,
    title: 'CityServe : A Local Service Marketplace',
    description: 'A modern task management application with AI suggestions and smart categorization. Built with React and TypeScript.',
    image: cityServeImage,
    technologies: ['React', 'Javascript', 'Tailwind CSS', 'ExpressJs', 'NodeJs', 'MongoDB'],
    demoLink: 'https://demo.project1.com',
    codeLink: 'https://github.com/Pratik3311/CityServe',
  },
  {
    id: 2,
    title: 'FarmBasket: A Marketplace For Farmers',
    description: 'Developed a Full-Stack web application to facilitate direct interaction between farmers and consumers , eliminating intermediaries using MERN Stack',
    image: farmfreshImage,
    technologies: ['ReactJs', 'NodeJs', 'ExpressJs', 'MaterialUI' , 'ShadCN' , 'MongoDB' ],
    demoLink: 'https://demo.project2.com',
    codeLink: 'https://github.com/Pratik3311/FarmBasket',
  },
  {
    id: 3,
    title: 'Siva.ai : An AI driven Chatbot',
    description: 'Developed an AI-driven enterprise chatbot using Python, GraphQL, and React to automate workflows, enhance customer support, and integrate with enterprise systems.',
    image: sivaimage,
    technologies: ['React', 'Node.js', 'Python', 'MongoDB' , 'GraphRAG', 'ExpressJS' , 'TailwindCSS' , 'Llama3'],
    demoLink: 'https://demo.project3.com',
    codeLink: 'https://github.com/loadinglit/Smart_India_Hackathon_2024',
  },
];

const Projectsection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2, // Trigger when 20% of the section is visible
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView, controls]);

  return (
    <section
      id="projects"
      ref={ref} // Add the intersection observer ref
      className="bg-[#0A0A0A] min-h-screen text-white py-16 sm:px-6 lg:px-8 bg-gradient-to-br from-black to-gray-900"
    >
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.8 }}
        className="max-w-8xl mx-auto"
      >
        <div className="text-center mb-16">
          <motion.h2
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ delay: 0.2 }}
            className="text-5xl font-bold mb-4 text-white"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            transition={{ delay: 0.4 }}
            className="text-gray-650 text-lg max-w-2xl mx-auto"
          >
            Explore my latest work in web development, design, and problem-solving.
          </motion.p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projectsection;
