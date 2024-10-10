import './index.css'
import resume from './assets/Isaac_Nguyen_CV.pdf';
import {Mail} from 'lucide-react';
import {MapPin} from 'lucide-react';
import {Linkedin} from 'lucide-react';
import {Github} from 'lucide-react';

interface ContactProps {
  scrollToIntro: () => void;
  scrollToProjects: () => void;
  scrollToHobbies: () => void;
  scrollToExperience: () => void;
}

function Contact({ scrollToIntro, scrollToProjects, scrollToHobbies, scrollToExperience }: ContactProps) {

    return (
      <>
        <div className='w-full mt-32 border-b-2 border-gray-500 m-auto'></div>

        <div className='mt-12 mb-28 w-full bg-black text-white h-90 '>
          <div className='mx-auto flex flex-col lg:flex-row justify-between gap-16 lg:gap-5 w-2/3'>
            <div className='flex flex-col w-full lg:w-2/5 gap-5'>
              <h1 className='text-3xl font-semibold self-start'>isaac</h1>
              <div className='flex gap-2 items-center align-middle w-full'>
                <Mail size={20}/>
                <a href='mailto:isaachn@uci.edu'className='text-left hover:underline underline-offset-1 text-lg'>isaachugh33@yahoo.com</a>
              </div>
              <div className='flex gap-2 items-center w-full lg:w-2/5 align-middle'>
                <MapPin size={20}/>
                <p className=' text-left text-lg whitespace-nowrap'>Irvine, CA</p>
              </div>
            </div>

            <div className='flex flex-col gap-5 w-1/4 justify-start'>
              <h1 className='text-3xl font-semibold'>pages</h1>
              <button className="text-start text-xl hover:underline underline-offset-1" onClick={scrollToIntro}>
                info
              </button>
              <button className="text-start text-xl hover:underline underline-offset-1" onClick={scrollToExperience}>
                experience
              </button>
              <button className="text-start text-xl hover:underline underline-offset-1" onClick={scrollToProjects}>
                projects
              </button>
              <button className="text-start text-xl hover:underline underline-offset-1" onClick={scrollToHobbies}>
                hobbies
              </button>
              <a href={resume} target = '_blank' className=" text-xl hover:underline underline-offset-1">
                resume
              </a>
            </div>

            <div className='flex w-auto flex-col gap-5'>
              <h1 className='text-3xl font-semibold'>connect with me</h1>
              <div className='flex flex-row gap-4'>
                <a href='https://www.linkedin.com/in/isaacnguyen33/' target='_blank'>
                  <Linkedin />
                </a>
                <a href='https://github.com/IsaacNguyen' target='_blank'>
                  <Github />
                </a>
                {/* <a href='https://www.instagram.com/isaac.nguyen_/' target='_blank'>
                  <img className='w-8 h-8' src={instagram}></img>
                </a> */}
              </div>

            </div>
          </div>
        

         
        </div>
      </>
    )
  }
  
  export default Contact;
  