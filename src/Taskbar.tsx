//import { useState } from 'react'
import './index.css'
import resume from './assets/Isaac_Nguyen_Resume.pdf';

interface TaskbarProps {
  scrollToIntro: () => void;
  scrollToProjects: () => void;
  scrollToHobbies: () => void;
  scrollToContact: () => void;
  scrollToExperience: () => void;
}

function Taskbar({ scrollToIntro, scrollToProjects, scrollToHobbies, scrollToContact, scrollToExperience }: TaskbarProps) {

  return (
    <>
      <div className="absolute flex w-full gap-5 sm:gap-7 text-xs sm:text-xl md:text-2xl pt-7 px-4 justify-end sm:w-5/6 text-white bg-transparent"> 
        <button className="hover:underline underline-offset-1" onClick={scrollToIntro}>
          info
        </button>
        <button className="hover:underline underline-offset-1" onClick={scrollToExperience}>
          experience
        </button>
        <button className="hover:underline underline-offset-1" onClick={scrollToProjects}>
          projects
        </button>
        <button className="hover:underline underline-offset-1" onClick={scrollToHobbies}>
          hobbies
        </button>
        <button className="hover:underline underline-offset-1" onClick={scrollToContact}>
          contact
        </button>
        <a href={resume} target = '_blank' className="hover:underline underline-offset-1">
          resume
        </a>
      </div>
    </>
  )
}

export default Taskbar;
