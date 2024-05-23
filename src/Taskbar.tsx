//import { useState } from 'react'
import './index.css'
function Taskbar() {

  return (
    <>
      <div className="relative flex gap-5 sm:gap-7 text-sm sm:text-xl md:text-2xl pt-7 px-4 justify-center sm:justify-end w-full sm:w-5/6  bg-transparent">
        <button className="hover:underline underline-offset-1 "> 
            info
        </button>  
        <button className="hover:underline underline-offset-1 "> 
            projects
        </button>
        <button className="hover:underline underline-offset-1 "> 
            contacts
        </button>
        <button className="hover:underline underline-offset-1 "> 
            resume
        </button>
      </div>
    </>
  )
}

export default Taskbar;
