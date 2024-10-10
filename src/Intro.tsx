import './index.css'
import headShot from './assets/headshot.jpg';

function Intro() {

    return (
      <>
        <div className="h-screen w-full bg-transparent mb-10 content-center sm:items-start pt-6 text-white">
          <div className = "pb-8 flex-wrap sm:flex-nowrap flex sm:h-full items-center w-full justify-center gap-10 p-10 lg:gap-20">
              <div className = "fade-in-image opacity-0 transition-opacity duration-[2000ms] ">
                <p className = "text-xl sm:text-2xl md:text-4xl">
                  hi! i am
                </p>
                <p className = "font-semibold text-2xl sm:text-4xl md:text-6xl mb-1 sm:mb-4">
                  isaac nguyen.
                </p>
                <p className='text-xs sm:text-sm md:text-base'>
                  i like coding and doing lots of other things!
                </p>
              </div>
            <img src = {headShot} className='overflow-hidden fade-in-image opacity-0 transition-opacity duration-[2000ms]  sm:w-auto h-28 sm:h-40 md:h-72 rounded-full'></img>
          </div>

        </div>
      </>
    )
  }
  
  export default Intro;
  