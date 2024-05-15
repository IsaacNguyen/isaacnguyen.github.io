import './index.css'
function Intro() {

    return (
      <>
        <div className="flex h-96 w-screen mx-0 bg-transparent items-center justify-center ">
          <div className = "fade-in-image flex items-center h-2/3 align-middle w-1/2">
              <div className = "text-left pr-5">
                <div className = "text-4xl">
                  Hello! I am
                </div>
                <div className = "text-6xl pb-3">
                  Isaac Nguyen
                </div>
                <div>
                  I like coding and having lots of fun
                </div>
              </div>

            <div> put your face right here</div>
          </div>
        </div>
      </>
    )
  }
  
  export default Intro;
  