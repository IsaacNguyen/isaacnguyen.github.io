import './index.css'
import fasterFashion from './assets/fasterfashion.png';
import personal_website from './assets/website.png';
import spotr from './assets/spotr.png';
import ProjectTab from './ProjectTab';
import moove from './assets/moove.png';

function Projects() {

    return (
      <div className='my-10'>
        <div className='w-2/3 border-b-2 m-auto'></div>
        <div className="fade-in-image flex flex-wrap w-full mx-0 my-16 justify-center">
            <div className='flex w-2/3 flex-col'>
              <div className='flex mb-10 w-full h-1/6 top-0 justify-center text-lg sm:text-xl md:text-2xl '>
                  <h1>coding projects!</h1>
              </div>
                  <div className='grid grid-cols-1 2xl:grid-cols-2 gap-x-7 gap-y-10'>
                      {/* column 1 */}
                      <div className='flex flex-col gap-7'>
                        <ProjectTab image={fasterFashion}
                        name="Faster Fashion"
                        description='Utilizes AI to help people update their wardrobes by reconstructing outfits, piece by piece.'
                        tags = {['Python', 'HTML/CSS', 'JavaScript', 'Flask','Bootstrap']}
                        link = 'https://github.com/jeremysu99/Faster-Fashion'
                        >
                        </ProjectTab>
 
                        <ProjectTab image={spotr}
                        name="Spotr"
                        description="Helps people familiarize themselves with their surroundings by ungatekeeping people's favorite spots."
                        tags = {['JavaScript', 'React.js', 'Node.js', 'Express.js', 'Firebase']}
                        link = 'https://github.com/IsaacNguyen/spotr'
                        >
                        </ProjectTab>
                      </div>

                      <div className='flex flex-col gap-7'>
                        <ProjectTab image={personal_website}
                          name="This Website!"
                          description='My very own personal website I made from scratch. Lots and lots of frontend practice!'
                          tags = {['TypeScript', 'React.js', 'Tailwind CSS']}
                          link = 'https://github.com/IsaacNguyen/isaacnguyen.github.io'
                          >
                        </ProjectTab>
              

                        <ProjectTab image={moove}
                        name="Moove"
                        description="Authenticates property sales and educates college students on the financial aspect of moving out."
                        tags = {['JavaScript', 'React.js', 'Node.js', 'Express.js', 'Firebase']}
                        link = 'https://github.com/IsaacNguyen/venushacks2024/tree/main'
                        >
                        </ProjectTab>     
                      </div>
                    </div>
           
            </div>   
           
          </div>
     
      </div>
    )
  }
  
  export default Projects;
  