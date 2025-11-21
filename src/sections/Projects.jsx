// src/components/Projects.jsx
import React from 'react'
import '../stylesheets/Projects.css'

const projects = [
  {
    title: "AIHealthPro",
    icon: "🧠",
    description:
      "AIHealthPro is an innovative disease prediction platform that uses ML algorithms to analyze health conditions based on everyday questions.",
    link: "https://github.com/Madipadige-ManishKumar/AIHealthpro",
  },
  {
    title: "Free Broker",
    icon: "🏠",
    description:
      "A real estate platform connecting buyers and sellers with location-based search and predictive analytics for hot properties.",
    link: "https://github.com/Madipadige-ManishKumar/Free_broker",
  },
  {
    title: "PDF Summarizer",
    icon: "📄",
    description:
      "A smart web app that generates summaries from PDFs and answers questions using Hugging Face transformer models.",
    link: "https://github.com/Madipadige-ManishKumar/PDF-summarizer",
  },
  {
    title: "Responsive React Portfolio ",
    icon: "👨‍💼",
    description:
      "a personal portfolio website using React.js with smooth animations and a futuristic dark-themed UI.100% responsive design . Deployed on Vercel, enabling scalable hosting for continuous update",
    link: "https://github.com/Madipadige-ManishKumar/Manish-Portfolio.git",
  },
   {
    title: "BirdSense",
    icon: "👨‍💼",
    description:
      "A deep learning-based model that identifies bird species from their sounds, enabling automated acoustic bird monitoring",
    link: "https://github.com/Madipadige-ManishKumar/Bird_Detection_Using_Sound.git",
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

      <div className="cards-grid ">
        {projects.map((project, index) => (
          <div className="card cursor-target" key={index}>
            <div className="card-icon">{project.icon}</div>
            <h3 className="card-title">{project.title}</h3>
            <p className="card-content">{project.description}</p>
            <a href={project.link} className="cta-button">
              Learn More
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}


export default Projects
