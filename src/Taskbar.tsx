//import { useState } from 'react'

function Taskbar() {

  return (
    <>
      <div className="absolute flex gap-7 text-2xl pt-7 justify-end w-5/6  bg-transparent">
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
