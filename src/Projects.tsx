import './index.css'
import fasterFashion from './assets/fasterfashion.png';
import personal_website from './assets/website.png';
import spotr from './assets/spotr.png';
import ProjectTab from './ProjectTab';
import moove from './assets/moove.png';

function Projects() {

    return (
      <div className='my-64'>
        <div className="flex flex-wrap w-full mx-0 my-16 justify-center">
            <div className='flex w-4/5 flex-col justify-center xl:justify-normal'>
              <div className='flex mb-10 w-full h-1/6 top-0 justify-center lg:justify-normal text-lg '>
                  <h1 className='text-white text-3xl md:text-5xl font-bold'>coding projects!</h1>
              </div>
                  <div className='grid grid-cols-1 xl:grid-cols-2 gap-x-7 lg:gap-x-6 gap-y-7'>
                      {/* column 1 */}
                      <div className='flex flex-col gap-7 xl:ml-auto'>
                        <ProjectTab image={fasterFashion}
                        name="Faster Fashion"
                        description='Utilizing AI to help people update their wardrobes by reconstructing outfits, piece by piece.'
                        accomplishment='Best Use of Google Cloud API, IrvineHacks 2024'
                        tags = {['Python', 'HTML/CSS', 'JavaScript', 'Flask','Bootstrap']}
                        link = 'https://github.com/jeremysu99/Faster-Fashion'
                        >
                        </ProjectTab>
 
                        <ProjectTab image={spotr}
                        name="Spotr"
                        description="Helping people familiarize themselves with their surroundings by ungatekeeping people's favorite spots."
                        accomplishment=''
                        tags = {['JavaScript', 'React.js', 'Node.js', 'Express.js', 'Firebase']}
                        link = 'https://github.com/IsaacNguyen/spotr'
                        >
                        </ProjectTab>
                      </div>

                      <div className='flex flex-col gap-7 xl:mr-auto'>
                        <ProjectTab image={personal_website}
                          name="This Website!"
                          description='My very own personal website I made from scratch. Lots and lots of frontend practice!'
                          accomplishment=''
                          tags = {['TypeScript', 'React.js', 'Tailwind CSS']}
                          link = 'https://github.com/IsaacNguyen/isaacnguyen.github.io'
                          >
                        </ProjectTab>
              

                        <ProjectTab image={moove}
                        name="Moove"
                        description="Authenticating property sales and educating college students on the financial aspect of moving out."
                        accomplishment='Best Use of Melissa API/Data Sets, VenusHacks 2024'
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
  