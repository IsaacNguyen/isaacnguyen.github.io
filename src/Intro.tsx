import './index.css'
import headShot from './assets/puppy.jpg';

function Intro() {

    return (
      <>
        <div className="h-screen w-screen bg-transparent items-center justify-center mb-10 pt-6 ">
          <div className = "pb-8 flex flex-nowrap h-full items-center w-full justify-center gap-10 p-10 sm:p-5 md:p-10 md:gap-20">
              <div className = "fade-in-image">
                <p className = "text-2xl md:text-4xl">
                  Hello! I am
                </p>
                <p className = "font-semibold text-4xl md:text-6xl mb-4">
                  Isaac Nguyen.
                </p>
                <p>
                  I like coding and having lots of fun!
                </p>
              </div>
            <img src = {headShot} className='fade-in-image h-1/4 md:h-2/5 rounded-full'></img>
          </div>
          <div className='w-2/3 border-b-2 m-auto'></div>
        </div>
      </>
    )
  }
  
  export default Intro;
  