import './index.css'
import linkedin from './assets/linkedin.png';
import github from './assets/github.png';
import instagram from './assets/instagram.png';
import email from './assets/email.png';
import phone from './assets/phone.png';
import location from './assets/location.png';
import resume from './assets/Resume (4).pdf';

interface ContactProps {
  scrollToIntro: () => void;
  scrollToProjects: () => void;
  scrollToHobbies: () => void;
}

function Contact({ scrollToIntro, scrollToProjects, scrollToHobbies }: ContactProps) {

    return (
      <>
        <div className='w-2/3 border-b-2 m-auto'></div>

        <div className='mt-32 mb-28 w-full bg-slate-100 h-90 '>
          <div className='mx-auto flex flex-col lg:flex-row justify-between gap-16 lg:gap-5 w-2/3'>
            <div className='flex flex-col w-2/5 gap-5'>
              <h1 className='text-4xl font-semibold self-start'>isaac</h1>
              <div className='flex gap-2 items-center align-middle'>
                <img className='w-7 h-5'src = {email}></img>
                <a href='mailto:isaachugh33@gmail.com'className='text-left hover:underline underline-offset-1 text-xl'>isaachugh33@gmail.com</a>
              </div>
              <div className='flex gap-2 items-center align-middle'>
                <img className='w-7 h-7'src = {phone}></img>
                <a href='tel:+3107077440'className=' text-left hover:underline underline-offset-1 text-xl'>310-707-7440</a>
              </div>
              <div className='flex gap-2 items-center align-middle'>
                <img className='w-7 h-7'src = {location}></img>
                <p className=' text-left text-xl'>Irvine, CA</p>
              </div>
            </div>

            <div className='flex flex-col gap-5 w-1/4 justify-start'>
              <h1 className='text-4xl font-semibold'>pages</h1>
              <button className="text-start text-2xl hover:underline underline-offset-1" onClick={scrollToIntro}>
                info
              </button>
              <button className="text-start text-2xl hover:underline underline-offset-1" onClick={scrollToProjects}>
                projects
              </button>
              <button className="text-start text-2xl hover:underline underline-offset-1" onClick={scrollToHobbies}>
                hobbies
              </button>
              <a href={resume} target = '_blank' className=" text-2xl hover:underline underline-offset-1">
                resume
              </a>
            </div>

            <div className='flex w-auto flex-col gap-5'>
              <h1 className='text-4xl font-semibold'>connect with me</h1>
              <div className='flex flex-row gap-4'>
                <a href='https://www.linkedin.com/in/isaacnguyen33/' target='_blank'>
                  <img className='w-10 h-10' src={linkedin}></img>
                </a>
                <a href='https://github.com/IsaacNguyen' target='_blank'>
                  <img className='w-10 h-10' src={github}></img>
                </a>
                <a href='https://www.instagram.com/isaac.nguyen_/' target='_blank'>
                  <img className='w-10 h-10' src={instagram}></img>
                </a>
              </div>

            </div>
          </div>
        

         
        </div>
      </>
    )
  }
  
  export default Contact;
  