import React, { useEffect, useRef } from "react";
import GradientText from "../blocks/TextAnimations/GradientText/GradientText";
import "../stylesheets/About.css";

const About = () => {
  const fadeRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    fadeRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const addFadeRef = (el) => {
    if (el && !fadeRefs.current.includes(el)) {
      fadeRefs.current.push(el);
    }
  };

  return (
    <section className="about-container">
      {/* Heading */}
      <div className="heading fade-up" ref={addFadeRef}>
        <GradientText>About Me</GradientText>
      </div>

      <div className="terminal-wrapper">
        <aside className="terminal-card fade-up" ref={addFadeRef}>
          {/* Terminal Header */}
          <div className="terminal-header fade-up" ref={addFadeRef}>
            <div className="terminal-dots">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
            </div>
            <span className="terminal-title">bash</span>
          </div>

          {/* Terminal Body */}
          <div className="terminal-body">
            <p className="cmd fade-up" ref={addFadeRef}>
              <span className="prompt">$</span> whoami
            </p>
            <p className="output indent fade-up" ref={addFadeRef}>
              Manish Kumar Madipadige
            </p>

            <p className="cmd fade-up" ref={addFadeRef}>
              <span className="prompt">$</span> cat about.txt
            </p>
            <p className="output indent fade-up" ref={addFadeRef}>
              Full-Stack Developer building MERN stack applications with Tailwind
              CSS, delivering responsive, production-grade interfaces with
              optimized performance.
            </p>
            <p className="output indent fade-up" ref={addFadeRef}>
              Developed 20+ full-stack applications with REST APIs,
              authentication, and MongoDB/Express/React/Node.js backend.
            </p>

            <p className="output indent strong fade-up" ref={addFadeRef}>
              Machine Learning Focus
            </p>
            <p className="output indent fade-up" ref={addFadeRef}>
              Building ML/DL models using TensorFlow and scikit-learn:
            </p>
            <p className="output indent bullet fade-up" ref={addFadeRef}>
              • ML models achieving up to 90% accuracy/F1.
            </p>
            <p className="output indent bullet fade-up" ref={addFadeRef}>
              • Data preprocessing, feature engineering, tuning.
            </p>
            <p className="output indent bullet fade-up" ref={addFadeRef}>
              • Integrated ML inference into web apps.
            </p>

            <p className="cmd fade-up" ref={addFadeRef}>
              <span className="prompt">$</span> cat programming_skills.txt
            </p>
            <p className="output indent fade-up" ref={addFadeRef}>
              JavaScript, Python, Java, C++, C
            </p>

            <p className="cmd fade-up" ref={addFadeRef}>
              <span className="prompt">$</span> cat frontend_skills.txt
            </p>
            <p className="output indent fade-up" ref={addFadeRef}>
              HTML, CSS, React.js, Tailwind CSS, GSAP, Bootstrap
            </p>

            <p className="cmd fade-up" ref={addFadeRef}>
              <span className="prompt">$</span> cat backend_skills.txt
            </p>
            <p className="output indent fade-up" ref={addFadeRef}>
              Flask, FastAPI, Express.js, Node.js
            </p>

            <p className="cmd fade-up" ref={addFadeRef}>
              <span className="prompt">$</span> cat databases.txt
            </p>
            <p className="output indent fade-up" ref={addFadeRef}>
              SQLite, Oracle, MySQL, MongoDB, Firebase
            </p>

            <p className="cmd fade-up" ref={addFadeRef}>
              <span className="prompt">$</span> cat ml_frameworks.txt
            </p>
            <p className="output indent fade-up" ref={addFadeRef}>
              Scikit-learn, TensorFlow
            </p>

            <p className="cmd fade-up" ref={addFadeRef}>
              <span className="prompt">$</span> cat tools.txt
            </p>
            <p className="output indent fade-up" ref={addFadeRef}>
              Git, GitHub, Hugging Face, OpenRouter
            </p>

            <p className="cmd fade-up" ref={addFadeRef}>
              <span className="prompt">$</span>
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default About;
