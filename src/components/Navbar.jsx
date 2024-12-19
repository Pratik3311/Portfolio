
import * as React from 'react'
import { ArrowRight, Github, Linkedin, Twitter , Instagram } from 'lucide-react';
import { motion } from 'framer-motion'
import { Moon, Sun, Menu } from 'lucide-react'
// import { useTheme } from 'next-themes'

export function Navbar() {
  // const { setTheme } = useTheme()
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className={`fixed w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-sm' : 'bg-transparent'}`}
    >
      <div className="container mx-auto px-4 bg-black">
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="text-2xl font-bold text-white ">
            Pratik
          </a>
          <nav className="hidden md:flex space-x-6">
            {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            {/* <button
              onClick={() => setTheme("light")}
              className="text-gray-300 hover:text-white"
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <span className="sr-only">Light Mode</span>
            </button>
            <button
              onClick={() => setTheme("dark")}
              className="text-gray-300 hover:text-white"
            >
              <Moon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Dark Mode</span>
            </button>
            <button className="md:hidden text-gray-300 hover:text-white">
              <Menu className="h-5 w-5" />
            </button> */}

             <div className="flex justify-center gap-4">
                        <a href="https://github.com/Pratik3311" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-200">
                          <Github className="h-5 w-5" />
                        </a>
                        <a href="https://www.linkedin.com/in/pratik-gaikwad33/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-200">
                          <Linkedin className="h-5 w-5" />
                        </a>
                        <a href="https://www.instagram.com/pratik_g_33/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-200">
                          <Instagram className="h-5 w-5" />
                        </a>
                      </div>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
