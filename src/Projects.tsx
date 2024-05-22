import './index.css'
import { useState } from 'react';
import fasterFashion from './assets/fasterfashion.png';

function Projects() {
  const [showSection, updateSection] = useState('coding');

  const toggleSectionVisibility = (section: string) => {
    updateSection(section);
  };
    return (
      <div className='mb-10'>
        <div className="fade-in-image flex flex-wrap h-96 w-screen mx-0 justify-center ">
            <div className='flex w-2/3 flex-col'>
              <div className='items-start flex flex-1 sm:flex-wrap mb-10 w-full h-1/6 top-0 sm:gap-20 justify-center text-2xl pb-10 '>
                  <button className='hover:underline underline-offset-1'
                    onClick ={() => toggleSectionVisibility('coding')}
                  >coding projects</button>
                  <button className='hover:underline underline-offset-1'
                    onClick ={() => toggleSectionVisibility('hobbies')}
                    >other stuff</button>

                 
              </div>
              {showSection == 'coding' && (
                    <div className='grid grid-cols-1 gap-8 w-full h-full fade-in-image'>
                      <div className='bg-slate-200 flex-1 rounded-md flex-row p-10 flex flex-nowrap justify-center sm:gap-5 w-full h-45'>
                        <img className='drop-shadow-md w-1/2 min-h-24 max-full' src= {fasterFashion}></img>
                        <div className='flex flex-col'>
                          <h1 className='mx-auto font-bold text-xl'>FASTER FASHION</h1>
                          <ul>
                            <li> heasdfasdfasdfasfsadfasdfasdfasdfasdfasdfasfasdfy</li>
                            <li> hey</li>
                            <li> hey</li>
                            <li> hey</li>
                          </ul>
                          <div className='mt-auto flex flex-row h-8 space-x-4 items-end'> 
                            <span className='bg-slate-300 rounded-md px-1.5 py-0.5'>Flask</span>
                            <span className='bg-slate-300 rounded-sm px-1.5 py-0.5'>HTML/CSS</span>
                            <span className='bg-slate-300 rounded-sm px-1.5 py-0.5'>Python</span>
                            <span className='bg-slate-300 rounded-sm px-1.5 py-0.5'>JavaScript</span>
                          </div>
                          
                        </div>

                      </div>
                    </div>
                    
                  )}

            </div>   
           
          </div>
     
      </div>
    )
  }
  
  export default Projects;
  