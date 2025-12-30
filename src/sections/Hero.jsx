import React, { useEffect, useRef } from "react";
import "../stylesheets/Hero.css";
import PixelBlast from "../blocks/Backgrounds/PixelBlast";
import DarkVeil from "../blocks/Backgrounds/Dark Veil/DarkVeil";
const Hero = () => {
  const canvasRef = useRef(null);
useEffect(() => {
  const canvas = canvasRef.current;
  const ctx = canvas.getContext("2d");

  const dpr = window.devicePixelRatio || 1;
  canvas.width = 800 * dpr;
  canvas.height = 200 * dpr; 
  canvas.style.width = "800px";
  canvas.style.height = "200px";
  ctx.scale(dpr, dpr);

  ctx.imageSmoothingEnabled = false;
  ctx.font = "64px 'Press Start 2P'";
  ctx.fillStyle = "#ffffff";

  const text = "MANISH KUMAR";
  const letters = text.split("");
  let time = 0;

  const animate = () => {
    ctx.clearRect(0, 0, 800, 200);

    let totalWidth = 0;
    letters.forEach(char => {
      totalWidth += ctx.measureText(char).width;
    });

    let x = (800 - totalWidth) / 2;
    const baseY = 120;

    letters.forEach((char, i) => {
      const offsetY = Math.sin(time + i * 0.5) * 4;
      ctx.fillText(char, x, baseY + offsetY);
      x += ctx.measureText(char).width;
    });

    time += 0.04;
    requestAnimationFrame(animate);
  };

  document.fonts.ready.then(animate);
}, []);

  return (
 <section className="HeroContainer">
  <div className="veil-layer">
    <DarkVeil />
  </div>

  <div className="hero-content">
    <p className="hero-intro">Hello, I&apos;m</p>

    <canvas
      ref={canvasRef}
      width={800}
      height={200}
      className="pixel-canvas"
    />

    <p className="hero-tagline">
      I build intelligent web systems where performance, precision, and purpose align.
    </p>
  </div>
</section>


  );
};

export default Hero;
