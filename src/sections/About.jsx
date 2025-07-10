import React from 'react'
import GradientText from '../blocks/TextAnimations/GradientText/GradientText'
import '../stylesheets/About.css'

import ProfileCard from '../blocks/Components/ProfileCard/ProfileCard'

const About = () => {
  const handleevent = () => {
  window.location.href = 'https://www.linkedin.com/in/manish-kumar-madipadige/';
};

  return (
    <div  className='contanier'>
      <div className='Heading'>
        <GradientText  children="About Me"/>
        </div>
        <div className='subcontainer'>
          <div  className='left'>
        <ProfileCard  avatarUrl="avatar.jpg"  name='Manish ' title='Student' handle='manish'  showUserInfo={true}  onContactClick={handleevent} contactText="Contact" />
        </div>
        <div className='right'>
       
          <section className="about-section">
      

      <div className="cards-grid">
        <div className="card hero-card">
          <h3 className="card-title">Hi, I'm Manish 👋</h3>
          <p className="card-content">
           I'm a full-stack developer with a strong passion for solving real-world problems through clean, efficient, and scalable code. I specialize in building responsive, high-performance web applications using modern technologies like React, Node.js, and Tailwind CSS. I’m also deeply interested in Machine Learning and Deep Learning, leveraging tools like TensorFlow and scikit-learn to build intelligent systems that learn from data and make impactful decisions.
          </p>
          
        </div>

       <div className="card hero-card">
          <h3 className="card-title">🚀Academic Achievements </h3>
          
           <ul className="card-content">
  <li>
    Secured a <strong>perfect 10.0 GPA</strong> in S.S.C. from Dilsuknagar Public School.
  </li>
  <li>
    Achieved an <strong> Rank of 1371</strong> in the POLYCET-2021 examination.
  </li>
  <li>
    Graduated with a <strong>CGPA of 9.7</strong> in Diploma (Computer Science Engineering) from Government Polytechnic Hyderabad (Masab Tank).
  </li>
  <li>
    Ranked <strong>31st in the  ECET-2024</strong> at the state level.
  </li>
  <li>
    Admitted into <strong>CBIT</strong>, one of the top engineering institutes in Telangana, for B.E. in Computer Science.
  </li>
</ul>

          
        </div>

      </div>
    </section>


       
      </div>
    
        
        
        </div>
    </div>
  )
}

export default About
