import './index.css'
import { useState } from 'react';
import fasterFashion from './assets/fasterfashion.png';
import personal_website from './assets/website.png';

function Projects() {
  const [showSection, updateSection] = useState('coding');

  const toggleSectionVisibility = (section: string) => {
    updateSection(section);
  };
    return (
      <div className='mb-10'>
        <div className="fade-in-image flex flex-wrap w-full mx-0 justify-center">
            <div className='flex w-2/3 flex-col'>
              <div className='items-start flex mb-10 w-full h-1/6 top-0 gap-5 sm:gap-10 md:gap-20 justify-center text-lg sm:text-xl md:text-2xl '>
                  <button className='hover:shake-image  hover:underline underline-offset-1'
                    onClick ={() => toggleSectionVisibility('coding')}
                  >coding projects</button>
                  <button className='hover:underline underline-offset-1'
                    onClick ={() => toggleSectionVisibility('hobbies')}
                    >other stuff</button>

                 
              </div>
              {showSection == 'coding' && (
                  <>
                    <a href='https://github.com/jeremysu99/Faster-Fashion'target="_blank" className='fade-in-image max-w-md md:max-w-2xl mx-auto bg-slate-200 rounded-md hover:shake-image hover:filter hover:brightness-90 shadow-md p-6 mb-10'>
                      <div className='sm:flex text-center sm:text-start sm:justify-normal'>
                        <img className='drop-shadow-md w-1/2 h-1/2 sm:h-1/4 sm:w-1/2 mx-auto sm:mx-0 pb-5 sm:pb-0' src= {fasterFashion}></img>
                        <div className='flex flex-col px-4 sm:px-8'>
                          <div className='text-sm sm:text-base md:text-xl text-center tracking-wide font-semibold'> Faster Fashion </div>
                          <p className=' text-xs sm:text-sm md:text-base mb-1 py-2'>Utilizes AI to help people update their wardrobes by reconstructing outfits, piece by piece.</p>
                          <p></p>
                          <div className='mt-auto flex justify-center sm:justify-normal font-light flex-wrap gap-2 text-xs md:text-sm'>
                            <span className='bg-slate-300 rounded-sm px-1.5 py-0.5'>Flask</span>
                            <span className='bg-slate-300 rounded-sm px-1.5 py-0.5'>HTML/CSS</span>
                            <span className='bg-slate-300 rounded-sm px-1.5 py-0.5'>Python</span>
                            <span className='bg-slate-300 rounded-sm px-1.5 py-0.5'>JavaScript</span>
                          </div>
                        </div>
                      </div>
                    </a>

                    <a href='https://github.com/IsaacNguyen/isaacnguyen.github.io'target="_blank" className='fade-in-image max-w-md md:max-w-2xl mx-auto bg-slate-200 rounded-md hover:shake-image hover:filter hover:brightness-90 shadow-md p-6 mb-10'>
                      <div className='sm:flex text-center sm:text-start sm:justify-normal'>
                        <img className='drop-shadow-md  w-1/2 h-1/2 sm:h-1/4 sm:w-1/2 mx-auto sm:mx-0 pb-5 sm:pb-0' src= {personal_website}></img>
                        <div className='flex flex-col px-4 sm:px-8'>
                          <div className='text-sm sm:text-base md:text-xl text-center tracking-wide font-semibold'> This Website! </div>
                          <p className=' text-xs sm:text-sm md:text-base mb-1 py-2'>My very own personal website I made from scratch. Lots and lots of frontend practice!</p>
                          <p></p>
                          <div className='mt-auto flex font-light justify-center sm:justify-normal flex-wrap gap-2 text-xs md:text-sm'>
                            <span className='bg-slate-300 rounded-sm px-1.5 py-0.5'>Tailwind CSS</span>
                            <span className='bg-slate-300 rounded-sm px-1.5 py-0.5'>React.js</span>
                            <span className='bg-slate-300 rounded-sm px-1.5 py-0.5'>TypeScript</span>
                          </div>
                        </div>
                      </div>
                    </a>
       
                  </>
                   
                    
                   
                  )}

            </div>   
           
          </div>
     
      </div>
    )
  }
  
  export default Projects;
  