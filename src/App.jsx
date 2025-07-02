import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './sections/Hero'
import About from './sections/About'
import ScrollVelocity from './blocks/TextAnimations/ScrollVelocity/ScrollVelocity'
import Skills from './sections/Skills'
import { Projector } from 'three/examples/jsm/Addons.js'
import Projects from './sections/Projects'
import Contact from './sections/Contact'



function App() {
  return (
    <>
 <Hero/>

 <div className='scroller'>
 <ScrollVelocity texts={["","Web Devlopment ★ Machine Learning ★ Deep Learning ★ Problem Solving "]}/>
 </div>
 
 <About />
 <Skills/>
 <Projects />
 <Contact/>
   </>
  )
}

export default App
