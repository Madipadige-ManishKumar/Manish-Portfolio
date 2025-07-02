import React from 'react'
import DecryptedText from '../blocks/TextAnimations/DecryptedText/DecryptedText'
import GradientText from '../blocks/TextAnimations/GradientText/GradientText';
import '../stylesheets/HeroLeft.css'; // Assuming you have a CSS file for styling

const HeroLeft = () => {
  return (
    <>
    <div  className='Heading'>
      <GradientText  children="Hello, I'm Manish Kumar" />
     
    </div>
    <div className='SubHeading'>
    <DecryptedText
    text="A passionate Full-Stack Web Developer and Machine Learning enthusiast. 
  "
      />

      <DecryptedText
      text="I specialize in building responsive web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js)"  revealDirection="start"
      />
      <DecryptedText
      text=" and have hands-on experience applying machine learning to solve real-world problems. I enjoy blending smart algorithms " revealDirection="center"
      />
      <DecryptedText
      text="with clean user interfaces to create impactful digital solutions."  revealDirection="end"
      />
      </div>
    </>
  )
}

export default HeroLeft;
