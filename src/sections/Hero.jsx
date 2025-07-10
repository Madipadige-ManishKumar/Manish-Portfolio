import React from "react";
import '../stylesheets/Hero.css'; // Assuming you have a CSS file for styling
import HeroLeft from "../components/HeroLeft";
import HeroRight from "../components/HeroRight";
import MetaBalls from "../blocks/Animations/MetaBalls/MetaBalls"; // Assuming you have a MetaBalls component
import SplitText from "../blocks/TextAnimations/SplitText/SplitText"; // Assuming you have a MetaBalls component

const Hero = () => {
  return (
//  <HeroLeft/>
<>
<div className="HeroContainer  lg:block w-full lg:w-1/2 ">
 <SplitText
    text="Hello, I'm Manish Kumar Madipadige" splitType="words"  duration={2}
  />
 </div>
</>
  );
};

export default Hero;

