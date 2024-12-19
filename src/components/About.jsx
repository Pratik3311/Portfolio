'use client'

import { motion } from 'framer-motion'
import { Code2, Briefcase, Trophy } from 'lucide-react'

const features = [
  {
    icon: <Code2 className="h-6 w-6" />,
    title: 'Full Stack Development',
    description: 'Proficient in both frontend and backend technologies, creating seamless, end-to-end solutions.',
    details: [
      'Frontend: HTML, CSS, JavaScript, frameworks like React.js, Angular, or Vue.js.',
'Backend: Node.js, Express.js, Java .',
'Databases: MongoDB, MySQL. NoSQL',
'Version Control: Git/GitHub for collaborative development.'
    ]
  },
  {
    icon: <Briefcase className="h-6 w-6" />,
    title: 'Software Engineering Internship',
    description: 'Gained valuable industry experience through a challenging internship at a tech Startup .',
    details: [
      'Proficient in ReactJs Framework, with a proven track record of enhancing frontend efficiency by 20%.',
' Optimized project codebase with modular structures, achieving 100% compliance during code reviews.',
'Successfully developed  two projects independently using Angular & ReactJs, Tailwind CSS, and Material UI.'

    ]
  },
  {
    icon: <Trophy className="h-6 w-6" />,
    title: 'SIH 24 Finalist',
    description: 'Led a team to finals in a national hackathon, showcasing innovation and technical prowess.',
    details: [
      'Developed an AI-powered sustainability app in 36 hours',
      'Implemented machine learning algorithms for predictive analysis',
      'Created an intuitive UI/UX design, praised by judges',
      'Pitched the product successfully to a panel of industry experts'
    ]
  }
]

export function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden bg-gradient-to-br from-black to-gray-900">
      <div className="container px-4 ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl font-bold text-white">About Me</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Passionate about creating innovative solutions and pushing the boundaries of technology.
            Here's a glimpse into my journey and achievements in the world of software development.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="bg-gray-900 border border-gray-800 hover:bg-gray-800 transition-all duration-300 ease-in-out h-full p-6 text-center space-y-4 rounded-lg">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center mx-auto text-white"
                >
                  {feature.icon}
                </motion.div>
                <h3 className="font-semibold text-xl text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
                <ul className="text-left space-y-2 pt-4">
                  {feature.details.map((detail, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-gray-500 mr-2">•</span>
                      <span className="text-gray-300 text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
