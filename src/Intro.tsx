import './index.css'
import headShot from './assets/puppy.jpg';

function Intro() {

    return (
      <>
        <div className="pt-5 flex h-screen w-screen mx-0 bg-transparent items-center justify-center mb-10 ">
          <div className = "pb-8 px-24 border-b-2 flex flex-wrap flex-row h-full items-center w-2/3">
              <div className = "fade-in-image md:w-1/2">
                <p className = "text-4xl">
                  Hello! I am
                </p>
                <p className = "text-6xl mb-4">
                  Isaac Nguyen.
                </p>
                <p>
                  I like coding and having lots of fun!
                </p>
              </div>
            <img src = {headShot} className=' fade-in-image h-2/5 ml-auto rounded-full'></img>
          </div>
        </div>
      </>
    )
  }
  
  export default Intro;
  