import React, { useEffect, useRef } from "react";
import "../stylesheets/Projects.css";

const projects = [
  {
    title: "AIHealthPro",
    description:
      "AIHealthPro is an innovative disease prediction platform that uses ML algorithms to analyze health conditions based on everyday questions.",
    link: "https://github.com/Madipadige-ManishKumar/AIHealthpro",
  },
  {
    title: "Free Broker",
    description:
      "A real estate platform connecting buyers and sellers with location-based search and predictive analytics for hot properties.",
    link: "https://github.com/Madipadige-ManishKumar/Free_broker",
  },
  {
    title: "PDF Summarizer",
    description:
      "A smart web app that generates summaries from PDFs and answers questions using Hugging Face transformer models.",
    link: "https://github.com/Madipadige-ManishKumar/PDF-summarizer",
  },
  {
    title: "Responsive React Portfolio",
    description:
      "A futuristic dark-themed React portfolio with smooth animations and 100% responsive design.",
    link: "https://github.com/Madipadige-ManishKumar/Manish-Portfolio.git",
  },
  {
    title: "BirdSense",
    description:
      "A deep learning model that identifies bird species from audio using sound classification.",
    link: "https://github.com/Madipadige-ManishKumar/Bird_Detection_Using_Sound.git",
  },
];

const Projects = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = containerRef.current.querySelectorAll(".project-wrapper");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="projects-swipe">
      <div className="timeline-container" ref={containerRef}>
        {projects.map((project, index) => (
          <div
            className={`project-wrapper ${index % 2 === 0 ? "left" : "right"}`}
            key={index}
          >
            <div className="timeline-dot"></div>
            <div className="project-card">
              <h3 className="card-title">{project.title}</h3>
              <a
                href={project.link}
                className="cta-button"
                target="_blank"
                rel="noreferrer"
              >
                Learn More
              </a>
              <p className="project-description">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
