import './index.css'
import headShot from './assets/puppy.jpg';

function Intro() {

    return (
      <>
        <div className="flex h-96 w-screen mx-0 bg-transparent items-center justify-center ">
          <div className = "pb-8 border-b-2 flex items-center h-4/5 align-middle w-1/2">
              <div className = "fade-in-image pr-10">
                <p className = "text-4xl">
                  Hello! I am
                </p>
                <p className = "text-6xl pb-5">
                  Isaac Nguyen
                </p>
                <p>
                  I like coding and having lots of fun
                </p>
              </div>
            <img src = {headShot} className=' fade-in-image  h-full rounded-full'></img>
          </div>
        </div>
      </>
    )
  }
  
  export default Intro;
  