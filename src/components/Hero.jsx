import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';
import Slider from 'react-slick'; // Import react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// Dummy experiences data
const experiences = [
 
  { 
    title: 'SIH 24 Finalist',
    type: 'Hackathon',
    description: 'Selected for the National Level Hackathon Competition. Developed a AI chatbot using python and Reactjs. Worked as a team served as a team'
  },
  { 
    title: 'Software Engineer Intern',
    type: 'Internship',
    description: 'Contributed to the development of a large-scale distributed system at Saras Technologies. Learnt React and Angular over the time'
  },
 
];

export function Hero() {
  // Settings for react-slick
  const carouselSettings = {
    dots: true, // Enable navigation dots
    infinite: true, // Loop the carousel
    speed: 500, // Transition speed
    slidesToShow: 2, // Number of items visible at once
    slidesToScroll: 1, // Number of items to scroll at a time
    responsive: [
      {
        breakpoint: 768, // For screens < 768px
        settings: {
          slidesToShow: 1, // Show one item at a time on smaller screens
        },
      },
    ],
  };

  const handleViewWork = () =>{
    const projectSection = document.getElementById('projects');
    if(projectSection){
      projectSection.scrollIntoView({behavior : 'smooth'})
    }
  }

  const handleAbout = () =>{
    const aboutSection = document.getElementById('about');
    if(aboutSection){
      aboutSection.scrollIntoView({behavior : 'smooth'})
    }
  }

  const openResume = ()=>{
     window.open("https://drive.google.com/file/d/1T51po5M0ka-VqOVP-XlkwaBfXLgegWRT/view?usp=sharing")
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-black py-20">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-900 opacity-50" />
      
      <div className="container px-4 relative z-10 pt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-6 mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text pb-4">
          Full Stack Developer
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
           Hii! I am Pratik Gaikwad a passionate Full Stack Developer expertise in MERN stack developement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button onClick={handleViewWork} className="group bg-white text-black hover:bg-gray-200 py-2 px-4 flex items-center">
              View My Work
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button onClick={openResume} className="border border-gray-700 text-gray-300 hover:bg-gray-800 py-2 px-4">
              Download CV
            </button>
          </div>
         
        </motion.div>

        {/* Experiences Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
            
          <div className="w-full max-w-4xl mx-auto">
            <Slider {...carouselSettings}>
              {experiences.map((exp, index) => (
                <div key={index} className="px-4">
                  <div className="bg-gray-900 border border-gray-800 p-6 rounded-lg">
                    <div>
                      <span className="inline-block mb-2 bg-gray-800 text-gray-200 px-3 py-1 text-sm rounded">
                        {exp.type}
                      </span>
                      <h3 className="font-semibold text-lg mb-2 text-gray-100">{exp.title}</h3>
                      <p className="text-sm text-gray-400">{exp.description}</p>
                    </div>
                    <button onClick={handleAbout} className="mt-4 p-0 text-gray-400 hover:text-gray-200">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          {/* <h2 className="text-2xl font-semibold mb-4 text-gray-200">Let's Connect</h2> */}
          {/* <div className="flex justify-center gap-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-200">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-200">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-200">
              <Twitter className="h-5 w-5" />
            </a>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
}
