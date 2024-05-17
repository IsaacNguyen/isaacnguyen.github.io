import './index.css'
import { useState } from 'react';

function Projects(props) {
  const [showSection, updateSection] = useState('coding');

  const toggleSectionVisibility = (section: string) => {
    updateSection(section);
  };
    return (
      <>
        <div className="fade-in-image flex h-96 w-screen mx-0 justify-center">
            <div className='flex w-2/3 flex-col items-center'>
              <div className='flex w-1/2 h-1/6 top-0 justify-between text-2xl pb-10 '>
                  <button className='pl-10 hover:underline underline-offset-1'
                    onClick ={() => toggleSectionVisibility('coding')}
                  >coding</button>
                  <button className='pr-10 hover:underline underline-offset-1'
                    onClick ={() => toggleSectionVisibility('hobbies')}
                    >hobbies</button>

                 
              </div>
              {showSection == 'coding' && (
                    <div className='grid grid-cols-2 gap-4 w-full h-full fade-in-image'>
                      <div className='flex w-1/2 h-50 bg-black'>
                        heyy
                      </div>
                      <div> heyyy </div>
                      <div> heyyy </div>
                      <div> heyyy </div>
                      <div> heyyy </div>
                    </div>

                  )}

            </div>   
           
          </div>
     
      </>
    )
  }
  
  export default Projects;
  