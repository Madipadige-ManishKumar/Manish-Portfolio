// src/components/Projects.jsx
import React from 'react'
import '../stylesheets/Projects.css'

const projects = [
  {
    title: "AIHealthPro",
    icon: "🧠",
    description:
      "AIHealthPro is an innovative disease prediction platform that uses ML algorithms to analyze health conditions based on everyday questions.",
    link: "AIhealthpro.html",
  },
  {
    title: "Free Broker",
    icon: "🏠",
    description:
      "A real estate platform connecting buyers and sellers with location-based search and predictive analytics for hot properties.",
    link: "freebroker.html",
  },
  {
    title: "PDF Summarizer",
    icon: "📄",
    description:
      "A smart web app that generates summaries from PDFs and answers questions using Hugging Face transformer models.",
    link: "pdf-sum.html",
  },
  {
    title: "Hug Mind",
    icon: "👨‍💼",
    description:
      "an intelligent system that generates text, images, and answers visual questions based on user queries, providing a seamless multimodal AI experience",
    link: "ems.html",
  },
   {
    title: "BirdSense",
    icon: "👨‍💼",
    description:
      "A deep learning-based model that identifies bird species from their sounds, enabling automated acoustic bird monitoring",
    link: "ems.html",
  },
]

const Projects = () => {
  return (
    <section className="projects about-section">
      <div className="section-header">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          Some of the innovative web apps and AI tools I've built
        </p>
      </div>

      <div className="cards-grid">
        {projects.map((project, index) => (
          <div className="card" key={index}>
            <div className="card-icon">{project.icon}</div>
            <h3 className="card-title">{project.title}</h3>
            <p className="card-content">{project.description}</p>
            
              Learn More
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
