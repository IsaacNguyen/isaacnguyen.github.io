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
import awsLogo from '../src/assets/awslogo.png'
import aws from '../src/assets/aws.png'
import bloombergLogo from '../src/assets/bloomberg.png'
import bloomberg from '../src/assets/bloomberg_img.png'

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
                      logo={bloombergLogo}
                      image={bloomberg}
                      role="Software Engineer Intern"
                      name="Bloomberg"
                      description="Incoming Summer 2026"
                      timeframe="June 2026 - August 2026"
                      link = 'https://www.bloomberg.com/company/values/tech-at-bloomberg/?utm_source=bloomberg-menu&utm_medium=company'
                      rounded={true}
                      />
        
                      <ExperienceTab
                      logo={awsLogo}
                      image={aws}
                      role="Software Development Engineer Intern"
                      name="Amazon Web Services (AWS)"
                      description="Full-stack development for AWS SageMaker"
                      timeframe="June 2025 - September 2025"
                      link = 'https://aws.amazon.com/'
                      rounded={false}
                      />

                    <ExperienceTab
                      logo={ctcLogo}
                      image={ctc}
                      role="Full-Stack Developer"
                      name="Commit the Change"
                      description="Producing a digital case management tool to improve efficiency of aiding 7,000+ homeless women/children for a nonprofit organization called Colette&apos;s Children Home."
                      timeframe="October 2024 - Present"
                      link = 'https://ctc-uci.com/'
                      rounded={false}
                      />

                    <ExperienceTab
                      logo={icsscLogo}
                      image={antalmanac}
                      role="Software Engineer"
                      name="AntAlmanac - ICSSC Projects Committee"
                      description="Contributing to the open source, student-run project named AntAlmanac, a schedule planning and course exploration tool for 8,000+ UCI students."
                      timeframe="November 2024 - Present"
                      link = 'https://antalmanac.com/'
                      rounded={true}
                      />

                    <ExperienceTab
                      logo={dllLogo}
                      image={dll}
                      role="Undergraduate Student Researcher"
                      name="Digital Learning lab"
                      description="Worked on the Generative AI in Education project, specifically the Papyrus AI, an instructional LLM used to improve the literacy and writing for K-12 students."
                      timeframe="October 2024 - June 2025"
                      link = 'https://www.genaied.org/'
                      rounded={true}
                      />

                      <ExperienceTab
                      logo={atomaLogo}
                      image={atoma}
                      role="Software Engineering Intern"
                      name="Atoma Media"
                      description="Developed an end-to-end website for a finance startup that uses AI to gather information about financial articles to democratize financial information."
                      timeframe="July 2024 - February 2025"
                      link = 'https://www.joinatoma.com/'
                      rounded={false}
                      />

                </div>
            </div>   
           
          </div>
     
      </div>
      </>
    )
  }
  
  export default Experience;
  