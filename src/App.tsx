
import { useRef } from 'react';
import './App.css'
import Taskbar from './Taskbar';
import Intro from './Intro';
import Projects from './Projects';
import Contact from './Contact';
import Hobbies from './Hobbies';


function App() {
  const introRef = useRef(null);
  const projectsRef = useRef(null);
  const hobbiesRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref: any) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className ="bg-slate-100 font-sans-serif  overflow-auto">
        <Taskbar
         scrollToIntro={() => scrollToSection(introRef)}
         scrollToProjects={() => scrollToSection(projectsRef)}
         scrollToHobbies={() => scrollToSection(hobbiesRef)}
         scrollToContact={() => scrollToSection(contactRef)}
        ></Taskbar>
          <div ref={introRef}>
            <Intro />
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
            ></Contact>
          </div>
      </div>
    </>
  )
}

export default App;
