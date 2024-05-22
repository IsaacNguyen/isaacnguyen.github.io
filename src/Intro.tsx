import './index.css'
import headShot from './assets/puppy.jpg';

function Intro() {

    return (
      <>
        <div className="h-screen w-screen bg-transparent items-center justify-center mb-10 pt-6 ">
          <div className = "pb-8 flex flex-wrap flex-row h-full items-center w-full flex-1 justify-center sm:gap-20 sm:flex-wrap ">
              <div className = "fade-in-image">
                <p className = "text-4xl md:text-xl">
                  Hello! I am
                </p>
                <p className = "text-6xl mb-4">
                  Isaac Nguyen.
                </p>
                <p>
                  I like coding and having lots of fun!
                </p>
              </div>
            <img src = {headShot} className='fade-in-image h-2/5 rounded-full'></img>
          </div>
          <div className='w-2/3 border-b-2 m-auto'></div>
        </div>
      </>
    )
  }
  
  export default Intro;
  