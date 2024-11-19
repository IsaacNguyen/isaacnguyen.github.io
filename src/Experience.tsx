import './index.css'
import ExperienceTab from './ExperienceTab';
import atomaLogo from '../src/assets/atoma-baby.svg'
import atoma from '../src/assets/atoma.png'
import ctcLogo from '../src/assets/ctc.svg'
import ctc from '../src/assets/ctc.png'
import icsscLogo from '../src/assets/icssc.svg'
import dllLogo from '../src/assets/dlllogo.png'
import dll from '../src/assets/dll.png'
import antalmanac from '../src/assets/antalamanac.png'

function Experience() {
    return (
        <>
      <div className='my-64'>
        <div className="flex flex-wrap w-full mx-0 my-16 justify-center">
            <div className='flex w-4/5 flex-col'>
                <div className='flex mb-10 w-full h-1/6 top-0 justify-center lg:justify-normal text-lg '>
                    <h1 className='text-white text-3xl md:text-5xl font-bold'>experience</h1>
                </div>
                <div className='flex flex-col gap-8 w-full'>
        
                    <ExperienceTab
                      logo={atomaLogo}
                      image={atoma}
                      role="Software Engineer Intern"
                      name="Atoma Media"
                      description="Developing end-to-end website for finance startup that uses AI to gather information about financial articles to democratize financial information."
                      timeframe="July 2024 - Present"
                      link = 'https://www.joinatoma.com/'
                      />

                    <ExperienceTab
                      logo={ctcLogo}
                      image={ctc}
                      role="Full-Stack Developer"
                      name="Commit the Change"
                      description="Producing digital case management tool to improve efficiency of aiding homeless women/children for nonprofit organization called Colette&apos;s Children Home."
                      timeframe="October 2024 - Present"
                      link = 'https://ctc-uci.com/'
                      />

                    <ExperienceTab
                      logo={icsscLogo}
                      image={antalmanac}
                      role="Software Developer"
                      name="AntAlamanac - ICSSC Projects Committee"
                      description="Contributing to open source student-run project named AntAlamanac, a schedule planning and course exploration tool for UCI students"
                      timeframe="November 2024 - Present"
                      link = 'https://antalmanac.com/'
                      />

                    <ExperienceTab
                      logo={dllLogo}
                      image={dll}
                      role="Undergraduate Student Researcher"
                      name="Digital Learning lab"
                      description="Working on the Generative AI in Education project, specifically the Papyrus AI, an instructional LLM used to improve the literacy and writing for K-12 students."
                      timeframe="October 2024 - Present"
                      link = 'https://www.genaied.org/'
                      />

                </div>
            </div>   
           
          </div>
     
      </div>
      </>
    )
  }
  
  export default Experience;
  