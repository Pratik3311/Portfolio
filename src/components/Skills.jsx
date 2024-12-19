'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Code, Palette, Server, Lightbulb } from 'lucide-react'

// Define skill categories
const skillCategories = [
  {
    id: 'frontend',
    name: 'Frontend',
    icon: <Code className="h-5 w-5" />,
    skills: [
      { name: 'React & Angular', level: 95 },
      { name: 'JavaScript', level: 90 },
      { name: 'CSS & Tailwind', level: 92 },
      { name: 'Responsive Design', level: 88 },
    ],
  },
  {
    id: 'backend',
    name: 'Backend',
    icon: <Server className="h-5 w-5" />,
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express', level: 88 },
      { name: 'MongoDB', level: 80 },
      { name: 'SQL/NoSQL', level: 92 },
    ],
  },
  {
    id: 'design',
    name: 'Languages',
    icon: <Palette className="h-5 w-5" />,
    skills: [
      { name: 'JavaScript', level: 85 },
      { name: 'Java', level: 80 },
      { name: 'TypeScript', level: 65 },
      { name: 'Python', level: 60 },
    ],
  },
  {
    id: 'software',
    name: 'Softwares',
    icon: <Palette className="h-5 w-5" />,
    skills: [
      { name: 'Postman', level: 85 },
      { name: 'MongoDb Atlas', level: 80 },
      { name: 'Vs Code', level: 85 },
      
    ],
  },
  
  {
    id: 'other',
    name: 'Other',
    icon: <Lightbulb className="h-5 w-5" />,
    skills: [
      { name: 'Git & Version Control', level: 90 },
      { name: 'Object-Oriented Programming', level: 85 },
      { name: 'DBMS', level: 78 },
      { name: 'Data Structures And Alogrithms', level: 65 },
    ],
  },
]

export function Skills() {
  const [activeCategory, setActiveCategory] = useState('frontend') // State to manage active category

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-black to-gray-900">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl font-bold text-white">Skills & Expertise</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            With a passion for continuous learning, I've honed a diverse set of skills across various technologies and domains.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-4 mb-8">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                activeCategory === category.id
                  ? 'bg-primary text-white'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Active Skills Section */}
        <motion.div
          key={activeCategory} // Ensures animation runs when the category changes
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <div className="bg-gray-950 p-6 rounded-lg hover:shadow-lg transition-all duration-300 ease-in-out max-w-2xl w-full">
            {skillCategories
              .find((category) => category.id === activeCategory)
              .skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="mb-4"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-white">{skill.name}</span>
                    <span className="text-sm text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-600 rounded-full">
                    <div
                      className="h-2 bg-blue-500 rounded-full" // Set a distinct color for the progress bar
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </motion.div>
              ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
