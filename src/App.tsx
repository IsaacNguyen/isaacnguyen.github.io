//import { useState } from 'react'
import './App.css'
import Taskbar from './Taskbar';
import Intro from './Intro';
import Projects from './Projects';
import Contact from './Contact';

function App() {

  return (
    <>
      <div className ="bg-slate-100 font-sans-serif  overflow-auto">
      {/* <div className="fixed"><Taskbar></Taskbar></div>*/}

        <Taskbar></Taskbar>
          <Intro></Intro>
          <Projects></Projects>
          <Contact></Contact>
      </div>
    </>
  )
}

export default App;
