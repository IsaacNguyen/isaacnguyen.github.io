//import { useState } from 'react'

function Taskbar() {

  return (
    <>
      <div className="flex gap-7 text-2xl p-2 pt-7 justify-end backdrop-blur w-5/6 mx-0 bg-transparent">
        <button className="hover:underline underline-offset-1 "> 
            info
        </button>  
        <button className="hover:underline underline-offset-1 "> 
            projects
        </button>
        <button className="hover:underline underline-offset-1 "> 
            contacts
        </button>
      </div>
    </>
  )
}

export default Taskbar;
