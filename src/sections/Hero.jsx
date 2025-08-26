import React from "react";
import '../stylesheets/Hero.css'; // Assuming you have a CSS file for styling
import HeroLeft from "../components/HeroLeft";
import HeroRight from "../components/HeroRight";
import MetaBalls from "../blocks/Animations/MetaBalls/MetaBalls"; // Assuming you have a MetaBalls component
import SplitText from "../blocks/TextAnimations/SplitText/SplitText"; // Assuming you have a MetaBalls component
import TextType from "../blocks/TextAnimations/TextType/TextType";

const Hero = () => {
  return (
//  <HeroLeft/>
<>
<div className="HeroContainer  lg:block w-full lg:w-1/2 ">



<TextType 
  text={[
  "Hi",
  "I Am Manish Kumar",
  "A Python Developer",
  "A Full Stack Developer",
  "A MERN Stack Developer",
  "An Open Source Contributor",
  "A Problem Solver",
  "A Tech Enthusiast",
  "A Lifelong Learner"
]}

  typingSpeed={75}
  pauseDuration={1500}
  showCursor={true}
  cursorCharacter="_"
/>
 </div>
</>
  );
};

export default Hero;

