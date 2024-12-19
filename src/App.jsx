import { useState } from 'react'


import './App.css'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'

import Projectsection from './components/Projectsection'

import { Contact } from './components/Contact'

function App() {
 

  return (
    <>
       <div className=''>

       
       <Navbar></Navbar>
       <Hero></Hero>
       <About></About>
       <Skills></Skills>
       <Projectsection></Projectsection>
       <Contact></Contact>
       </div>
    </>
  )
}

export default App
