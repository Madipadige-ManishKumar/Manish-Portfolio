import React from "react";
import '../stylesheets/Hero.css'; // Assuming you have a CSS file for styling
import HeroLeft from "../components/HeroLeft";
import HeroRight from "../components/HeroRight";
import MetaBalls from "../blocks/Animations/MetaBalls/MetaBalls"; // Assuming you have a MetaBalls component

const Hero = () => {
  return (
//  <HeroLeft/>
<>
<div className="HeroContainer  lg:block w-full lg:w-1/2 ">
 <div  className="Heroleftcontainer">
  <HeroLeft />
 </div>
 <div className="Herorightcontainer">
  {/* <MetaBalls   enableTransparency={true} /> */}
  <image src="vite.svg" alt="Hero Image" className="hero-image" />
 </div>
 </div>
</>
  );
};

export default Hero;
