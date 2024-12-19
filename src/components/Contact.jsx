'use client'

import { motion } from 'framer-motion'
import { Mail, MessageSquare, Phone } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-black to-gray-900 text-white">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl font-bold text-white">Get in Touch</h2>
          <p className="text-white max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something amazing.
          </p>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="bg-gray-900 shadow-md rounded-lg p-6 flex items-start space-x-4">
              <Mail className="h-6 w-6 text-white" />
              <div>
                <h3 className="font-semibold text-white">Email</h3>
                <p className="text-gray-400">pratikgaikwad1133@gmail.com</p>
              </div>
            </div>
            <div className="bg-gray-900 shadow-md rounded-lg p-6 flex items-start space-x-4">
              <Phone className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold text-white">Phone</h3>
                <p className="text-gray-400">+91 8976374735</p>
              </div>
            </div>
            
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gray-900 shadow-md rounded-lg">
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white">Send Message</h3>
                <p className="text-gray-400">Fill out the form below and I'll get back to you as soon as possible.</p>
              </div>
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-200">Name</label>
                  <input
                    id="name"
                    placeholder="Your name"
                    className="w-full p-3 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-gray-800 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-200">Email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    className="w-full p-3 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-gray-800 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-200">Message</label>
                  <textarea
                    id="message"
                    placeholder="Your message"
                    className="w-full p-3 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-primary min-h-[150px] bg-gray-800 text-white"
                  />
                </div>
                <button className="w-full bg-primary text-white py-3 rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary">
                  Send Message
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
