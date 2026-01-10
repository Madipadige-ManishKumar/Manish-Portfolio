
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence, Variants } from 'framer-motion';
import { Section } from './types';
import { PROJECTS, SKILLS, EXPERIENCES, CERTIFICATES } from './constants';
import { PixelCharacter } from './components/PixelCharacter';
import { PixelBlock } from './components/PixelBlock';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";


const LoadingScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 3;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.45, 0, 0.55, 1] } }}
      className="fixed inset-0 z-[100] bg-[#212129] flex flex-col items-center justify-center space-y-12"
    >
      <div className="text-center space-y-6">
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-white text-xl sm:text-2xl tracking-widest"
        >
          WORLD 1-1
        </motion.h2>
        
        <div className="flex items-center justify-center gap-6">
          <div className="w-12 h-12 bg-red-600 pixel-border relative">
             <div className="absolute top-2 left-2 w-2 h-2 bg-orange-200"></div>
          </div>
          <span className="text-white text-xl">x 03</span>
        </div>
      </div>

      <div className="w-64 h-8 bg-[#323949] pixel-border p-1">
        <motion.div 
          className="h-full bg-yellow-500"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
        />
      </div>

      <p className="text-[10px] text-[#4c5265] animate-pulse">LOADING DATA...</p>
    </motion.div>
  );
};

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [canAnimateHero, setCanAnimateHero] = useState(false);
  const [activeSection, setActiveSection] = useState<Section>(Section.Home);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = Object.values(Section);
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (section: Section) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Animation Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  // Fixed variant type errors by using 'as const' to ensure string literal compatibility
  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0, scale: 0.9 },
    visible: { 
      y: 0, 
      opacity: 1, 
      scale: 1,
      transition: { type: "spring", stiffness: 120, damping: 12 } as const
    }
  };

  // Fixed variant type errors by using 'as const' for ease string literal
  const sectionVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" } as const
    }
  };

  return (
    <>
      <AnimatePresence onExitComplete={() => setCanAnimateHero(true)}>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <div className={`min-h-screen flex flex-col bg-[#212129] text-[#4c5265] selection:bg-[#4c5265] selection:text-white ${isLoading ? 'h-screen overflow-hidden' : ''}`}>
        {/* HUD / Navigation */}
        <header className="fixed top-0 left-0 w-full z-50 bg-[#212129]/95 border-b-4 border-[#3d3e51]">
          <nav className="max-w-6xl mx-auto p-4 flex flex-wrap justify-between items-center gap-4">
            <motion.div 
              whileHover={{ scale: 1.1, rotate: -2 }}
              className="flex items-center gap-4 cursor-pointer" 
              onClick={() => navigateTo(Section.Home)}
            >
               <div className="w-8 h-8 bg-red-600 pixel-border"></div>
               <span className="text-xs sm:text-sm text-white uppercase">MANISH.IO</span>
            </motion.div>
            <div className="flex gap-4 sm:gap-8 text-[10px] sm:text-xs">
              {Object.values(Section).map((s) => (
                <button
                  key={s}
                  onClick={() => navigateTo(s)}
                  className={`uppercase hover:text-white transition-colors relative ${activeSection === s ? 'text-white' : ''}`}
                >
                  {s}
                  {activeSection === s && (
                    <motion.div 
                      layoutId="activeTab"
                      className="absolute -bottom-2 left-0 right-0 h-1 bg-white"
                    />
                  )}
                </button>
              ))}
            </div>
          </nav>
          {/* Level Progress Bar */}
          <motion.div
            className="h-1 bg-yellow-500 origin-left"
            style={{ scaleX }}
          />
        </header>

        {/* Parallax Background Elements */}
        {!isLoading && (
          <div className="parallax-bg overflow-hidden opacity-10">
            <motion.div 
              animate={{ y: [0, -20, 0] }} 
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute top-40 left-10 text-6xl"
            >☁️</motion.div>
            <motion.div 
              animate={{ y: [0, -30, 0] }} 
              transition={{ duration: 7, repeat: Infinity, delay: 1 }}
              className="absolute top-80 right-20 text-4xl"
            >☁️</motion.div>
            <motion.div 
              animate={{ x: [0, 50, 0] }} 
              transition={{ duration: 10, repeat: Infinity }}
              className="absolute bottom-40 left-1/4 text-4xl"
            >☁️</motion.div>
          </div>
        )}

        {/* Main Content */}
        <main className="flex-1 mt-32 px-4 pb-32">
          <div className="max-w-4xl mx-auto space-y-48">
            
            {/* Home Section - Triggers ONLY when canAnimateHero is true */}
            <motion.section 
              id={Section.Home} 
              initial="hidden"
              animate={canAnimateHero ? "visible" : "hidden"}
              variants={containerVariants}
              className="min-h-[80vh] flex flex-col items-center justify-center text-center space-y-8"
            >
              <motion.div variants={itemVariants}>
                <PixelCharacter />
              </motion.div>
              <motion.h1 variants={itemVariants} className="text-2xl sm:text-5xl text-white leading-tight">
                Hi I'm <br/> <br/> Manish Kumar 
              </motion.h1>
              <motion.p variants={itemVariants} className="text-sm max-w-lg text-[#4c5265]">
                I build intelligent web systems where performance, precision, and purpose align.
              </motion.p>
              <motion.div variants={itemVariants} className="flex gap-4">
                <button onClick={() => navigateTo(Section.About)} className="px-6 py-3 bg-[#40445a] text-white text-[10px] pixel-border hover:bg-[#4c5265] active:translate-y-1 transition-all">
                  START GAME
                </button>
                <button onClick={() => navigateTo('contact')} className="px-6 py-3 border-4 border-[#3d3e51] text-[10px] hover:bg-[#323949] active:translate-y-1 transition-all">
                  Contact Me  →
                </button>
              </motion.div>
            </motion.section>

            {/* About Section */}
            <motion.section 
              id={Section.About} 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={sectionVariants}
              className="space-y-8"
            >
              <h2 className="text-xl text-white border-l-8 border-red-600 pl-4 uppercase">Level 1-1: About Me</h2>
              <PixelBlock className="text-xs leading-loose">
                <p className="mb-4 text-white">
                  Greetings, Player 1! I am a Undergradue Computer science student currently in my 3rd year i am passionate about developing Web application , Traning Machine Learning models
                </p>
                <p className="text-white">
                  My quest involves crafting scalable applications, optimizing performance, and defeating bug bosses. 
                </p>
              </PixelBlock>
            </motion.section>

            {/* Skills Section */}
            <motion.section 
              id={Section.Skills} 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="space-y-8"
            >
              <motion.h2 variants={itemVariants} className="text-xl text-white border-l-8 border-yellow-500 pl-4 uppercase">Power-Ups: Skills</motion.h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {SKILLS.map((skill) => (
                  <motion.div key={skill.name} variants={itemVariants}>
                    <PixelBlock className="flex flex-col items-center gap-4 hover:scale-105 transition-transform cursor-default">
                      <span className="text-3xl">{skill.icon}</span>
                      <span className="text-[10px] text-white uppercase">{skill.name}</span>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className={`w-3 h-3 ${i < skill.level ? 'bg-yellow-500' : 'bg-[#212129]'} pixel-border-inward`}></div>
                        ))}
                      </div>
                    </PixelBlock>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Projects Section */}
            <motion.section 
              id={Section.Projects} 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="space-y-8"
            >
              <motion.h2 variants={itemVariants} className="text-xl text-white border-l-8 border-blue-600 pl-4 uppercase">World Map: Projects</motion.h2>
              <div className="grid gap-8">
                {PROJECTS.map((project) => (
                  <motion.div key={project.id} variants={itemVariants}>
                     <PixelBlock className="flex flex-col md:flex-row gap-6 hover:bg-[#323949] transition-colors group">
                       <div className="overflow-hidden pixel-border w-full md:w-48 h-32 shrink-0">
                          <motion.img 
                            whileHover={{ scale: 1.1 }}
                            src={project.imageUrl} 
                            alt={project.title} 
                            className="w-full h-full object-cover" 
                          />
                       </div>
                       <div className="flex-1 space-y-3">
                         <h3 className="text-sm text-white uppercase tracking-tighter">{project.title}</h3>
                         <p className="text-[10px] text-gray-400 leading-relaxed">{project.description}</p>
                       <div className="flex flex-wrap gap-2">
                         {project.tags.map(tag => (
                           <span key={tag} className="px-2 py-1 bg-[#212129] text-[8px] text-white pixel-border uppercase">{tag}</span>
                         ))}
                       </div>
                       <motion.a 
                         whileHover={{ x: 5 }}
                         href={project.link} 
                         className="inline-block text-[10px] text-yellow-500 hover:text-white transition-colors uppercase"
                        >
                          VIEW LEVEL →
                        </motion.a>
                     </div>
                   </PixelBlock>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Experience Section */}
          <motion.section 
            id={Section.Experience} 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.h2 variants={itemVariants} className="text-xl text-white border-l-8 border-green-600 pl-4 uppercase">Warp Pipes: Experience</motion.h2>
            <div className="space-y-6 relative before:absolute before:left-4 before:top-0 before:bottom-0 before:w-2 before:bg-green-700">
              {EXPERIENCES.map((exp, i) => (
                <motion.div key={i} variants={itemVariants} className="pl-12 relative">
                  <div className="absolute left-0 top-2 w-10 h-10 bg-green-600 pixel-border flex items-center justify-center text-white text-[10px] z-10">
                    {i+1}
                  </div>
                  <PixelBlock>
                    <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                      <h3 className="text-xs text-white uppercase">{exp.role}</h3>
                      <span className="text-[10px] text-green-500">{exp.period}</span>
                    </div>
                    <h4 className="text-[10px] text-gray-400 mb-4">{exp.company}</h4>
                    <p className="text-[10px] leading-relaxed">{exp.description}</p>
                  </PixelBlock>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Certificates Section */}
          <motion.section 
            id={Section.Certificates} 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.h2 variants={itemVariants} className="text-xl text-white border-l-8 border-purple-600 pl-4 uppercase">Trophies: Certificates</motion.h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {CERTIFICATES.map((cert, i) => (
                <motion.div key={i} variants={itemVariants}>
                  <PixelBlock className="flex items-center gap-4 hover:bg-[#323949] transition-colors h-full">
                    <motion.div 
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ type: "spring" } as const}
                      className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-xl pixel-border shrink-0"
                    >🏆</motion.div>
                    <div>
                      <h3 className="text-[10px] text-white mb-1 uppercase leading-tight">{cert.name}</h3>
                      <p className="text-[8px] text-gray-500 uppercase">{cert.issuer} • {cert.date}</p>
                      <motion.a 
                         whileHover={{ x: 5 }}
                         href={cert.link} 
                         className="inline-block text-[10px] text-yellow-500 hover:text-white transition-colors uppercase"
                        >
                          VIEW →
                        </motion.a>
                    </div>
                    
                  </PixelBlock>
                </motion.div>
              ))}
            </div>
          </motion.section>

        </div>
      </main>

      {/* Footer Decoration */}
      <footer id="contact"className="h-24 bg-[#323949] border-t-8 border-[#40445a] relative flex items-center justify-center overflow-hidden">
      
      {/* Decorative pixel background */}
      <div className="absolute inset-0 flex gap-12 opacity-30 justify-center items-center pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="w-12 h-12 bg-[#212129] pixel-border"
          />
        ))}
      </div>

      {/* Social links */}
      <div className="relative z-10 flex gap-6">
        <a
          href="https://leetcode.com/u/oomanish459/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LeetCode"
          className="text-[#9aa0b5] hover:text-[#facc15] transition-colors"
        >
          <SiLeetcode size={20} />
        </a>

        <a
          href="https://github.com/Madipadige-ManishKumar"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-[#9aa0b5] hover:text-white transition-colors"
        >
          <FaGithub size={20} />
        </a>

        <a
          href="https://www.linkedin.com/in/manish-kumar-madipadige/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-[#9aa0b5] hover:text-[#0a66c2] transition-colors"
        >
          <FaLinkedin size={20} />
        </a>

        <a
          href="mailto:oomainsh459@gmail.com"
          target="_blank"
          aria-label="Email"
          className="text-[#9aa0b5] hover:text-[#38bdf8] transition-colors"
        >
          <FaEnvelope size={20} />
        </a>
      </div>
    </footer>
  
    </div>
    </>
  );
};

export default App;
