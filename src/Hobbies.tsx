import './index.css'

import goomba from './assets/goomba.jpg';
import youtube from './assets/youtube.png';


function Hobbies() {


    return (
      <>
        <div className='w-2/3 border-b-2 mx-auto'></div>

        <div className="fade-in-image flex flex-wrap w-full mx-0 mt-9 justify-center">
            <div className='flex w-2/3 flex-col text-center'>
                <h1 className='sm:text-xl md:text-2xl mb-10'>other stuff i do!</h1>
                <div className='flex flex-row overflow-auto h-auto'>
                    <a href='https://www.instagram.com/goomba888/'target="_blank" className='flex mb-3 shrink-0 gap-6 text-center bg-slate-200 max-w-xs sm:max-w-sm md:max-w-2xl h-auto rounded-md p-6 mr-5 hover:filter hover:brightness-90 shadow-md'>
                            <img className='drop-shadow-md h-20 md:h-40 w-20 md:w-40 my-auto'src={goomba}></img>
                            <div className='flex flex-col justify-center items-center '>
                                <h2 className='text-lg sm:text-xl font-semibold'>Cooking </h2>
                                <div className='flex flex-col h-4/5 justify-center flex-1 text-xs sm:text-sm md:text-base'>
                                    <p>
                                        I really enjoy cooking! To me, food is/has been such an important part of my life
                                        and such a great way to show my appreciation for others.
                                        But as an undergraduate student,
                                        I've been forced to cook inside the college dorm. Here's my catalogue
                                        of that!
                                    </p>
                                </div>
                            </div>
                    </a>

                    <a href='https://www.youtube.com/watch?v=Ng1u3bORRtU&list=PLAE_fm7Ql49-QZ-bopWf0kwTTXZF2RtSE'target="_blank" className='flex mb-3 shrink-0 gap-6 text-center bg-slate-200 max-w-xs sm:max-w-sm md:max-w-2xl h-auto rounded-md p-6 mr-5 hover:filter hover:brightness-90 shadow-md'>
                            <img className='drop-shadow-md h-10 md:h-20 w-20 md:w-40 my-auto 'src={youtube}></img>
                            <div className='flex flex-col justify-center items-center '>
                                <h2 className='text-lg sm:text-xl font-semibold'>Videography </h2>
                                <div className='flex flex-col h-4/5 justify-center flex-1 text-xs sm:text-sm md:text-base'>
                                    <p>
                                       I'm a big sucker for nostalgia. Whenever I travel,
                                       I always make an effort to document it. There's something so
                                       gratifying about capturing the fleeting beauty of a moment
                                       through a video. Making videos/vlogs like these 
                                       serve as a creative outlet for myself; I love the process of meticulously
                                       editing each video together to make a finished product
                                       I'm proud of <span>(it's a lot like coding!).</span>
                                    </p>
                                </div>
                            </div>
                    </a>


            </div>   
           
          </div>
        </div>     

        <div className='mb-10'></div>

      </>
    )
  }
  
  export default Hobbies;
  