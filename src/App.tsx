//import { useState } from 'react'
import './App.css'
import Taskbar from './Taskbar';

function App() {

  return (
    <>
      <div className ="bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className="fixed">
          <Taskbar></Taskbar>
        </div>
          <div className = "h-screen">
            <div className="container mx-auto text-center p-5">
              hi i am goated
            </div>
          </div>
      </div>
    </>
  )
}

export default App;
