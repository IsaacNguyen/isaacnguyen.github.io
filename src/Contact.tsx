import './index.css'
import linkedin from './assets/linkedin.png';
import github from './assets/github.png';
//import instagram from './assets/instagram.png';
import email from './assets/email.png';
//import phone from './assets/phone.png';
import location from './assets/location.png';
import resume from './assets/Isaac Nguyen Resume (3).pdf';

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
              <h1 className='text-3xl font-semibold self-start'>isaac</h1>
              <div className='flex gap-2 items-center align-middle'>
                <img className='w-6 h-4'src = {email}></img>
                <a href='mailto:isaachugh33@yahoo.com'className='text-left hover:underline underline-offset-1 text-lg'>isaachugh33@yahoo.com</a>
              </div>
              {/* <div className='flex gap-2 items-center align-middle'>
                <img className='w-5 h-5'src = {phone}></img>
                <a href='tel:310-707-7440'className='whitespace-nowrap text-left hover:underline underline-offset-1 text-lg'>310-707-7440</a>
              </div> */}
              <div className='flex gap-2 items-center align-middle'>
                <img className='w-5 h-5'src = {location}></img>
                <p className=' text-left text-lg whitespace-nowrap'>Irvine, CA</p>
              </div>
            </div>

            <div className='flex flex-col gap-5 w-1/4 justify-start'>
              <h1 className='text-3xl font-semibold'>pages</h1>
              <button className="text-start text-xl hover:underline underline-offset-1" onClick={scrollToIntro}>
                info
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
                  <img className='w-8 h-8' src={linkedin}></img>
                </a>
                <a href='https://github.com/IsaacNguyen' target='_blank'>
                  <img className='w-8 h-8' src={github}></img>
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
  