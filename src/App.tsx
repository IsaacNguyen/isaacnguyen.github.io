//import { useState } from 'react'
import './App.css'
import Taskbar from './Taskbar';
import Intro from './Intro';

function App() {

  return (
    <>
      <div className ="bg-slate-100">
        <div className="fixed">
        <Taskbar></Taskbar>
        </div>
          <div className='p-5'></div>
          <Intro></Intro>
         
      </div>
    </>
  )
}

export default App;
