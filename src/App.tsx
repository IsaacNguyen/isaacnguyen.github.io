
import { useEffect, useRef } from 'react';
import './App.css'
import Taskbar from './Taskbar';
import Intro from './Intro';
import Projects from './Projects';
import Contact from './Contact';
import Hobbies from './Hobbies';
import Experience from './Experience';


function App() {
  const introRef = useRef(null);
  const projectsRef = useRef(null);
  const hobbiesRef = useRef(null);
  const contactRef = useRef(null);
  const experienceRef = useRef(null);

  const scrollToSection = (ref: any, options = { behavior: 'smooth', block: 'center' }) => {
    ref.current.scrollIntoView(options);
  };

  useEffect(() => {
    const fadeElements = document.querySelectorAll('.fade-in-image');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');  
          entry.target.classList.remove('opacity-0'); 
        }
      });
    });

    fadeElements.forEach((el) => {
      observer.observe(el);
    });
  }, []);

  return (
    <>
      <div className ="bg-black font-sans-serif  overflow-auto">
        <Taskbar
         scrollToIntro={() => scrollToSection(introRef)}
         scrollToProjects={() => scrollToSection(projectsRef)}
         scrollToHobbies={() => scrollToSection(hobbiesRef)}
         scrollToContact={() => scrollToSection(contactRef)}
         scrollToExperience={() => scrollToSection(experienceRef, { behavior: 'smooth', block: 'start' })}
        ></Taskbar>
          <div ref={introRef}>
            <Intro />
          </div>
          <div ref={experienceRef}>
            <Experience/>
          </div>
          <div ref={projectsRef}>
            <Projects />
          </div>
          <div ref={hobbiesRef}>
            <Hobbies />
          </div>
          <div ref={contactRef}>
            <Contact
            scrollToIntro={() => scrollToSection(introRef)}
            scrollToProjects={() => scrollToSection(projectsRef)}
            scrollToHobbies={() => scrollToSection(hobbiesRef)}
            scrollToExperience={() => scrollToSection(experienceRef, { behavior: 'smooth', block: 'start' })}
            ></Contact>
          </div>
      </div>
    </>
  )
}

export default App;
