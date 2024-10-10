import './index.css'

import goomba from './assets/goomba.jpg';
import youtube from './assets/youtube.png';
import happy from './assets/home.jpg';
import depop from './assets/depop.png'


function Hobbies() {

    return (
      <>

        <div className="flex flex-wrap w-full mx-0 my-16 justify-center">
            <div className='flex w-4/5 flex-col'>
                <div className='flex mb-10 w-full h-1/6 top-0 justify-center lg:justify-normal text-lg '>
                    <h1 className='text-white text-3xl md:text-5xl font-bold'>other things i do!</h1>
                </div>
                <div className='fade-in-image opacity-0 transition-opacity duration-[2500ms] flex flex-row overflow-auto text-white pt-2 pl-3 '>
                    
                    <a href='https://www.instagram.com/goomba888/'target="_blank" className='transform transition-transform duration-300 hover:scale-[1.03] snap-center flex mb-5 shrink-0 gap-6 text-center bg-black border-2 border-gray-500  max-w-xs sm:max-w-sm md:max-w-2xl h-auto rounded-md p-6 mr-5 shadow-md'>
                        <img className='drop-shadow-md h-20 md:h-40 w-20 md:w-40 my-auto'src={goomba}></img>
                        <div className='flex flex-col justify-center items-center '>
                            <h2 className='text-lg sm:text-xl font-semibold'>Cooking </h2>
                            <div className='flex flex-col h-4/5 justify-center flex-1 text-xs sm:text-sm'>
                                <p>
                                    I really enjoy cooking! To me, food is such an important part of my life
                                    and is such an intrinsic part of my identity and culture. I love sharing food 
                                    with those I care about.
                                    However as an undergraduate student,
                                    I've been forced to cook inside the college dorm. Here's my catalogue
                                    of how it's going!
                                </p>
                            </div>
                        </div>
                    </a>

                    <a href='https://www.youtube.com/watch?v=Ng1u3bORRtU&list=PLAE_fm7Ql49-QZ-bopWf0kwTTXZF2RtSE'target="_blank" className='transform transition-transform duration-300 hover:scale-[1.03] snap-center flex mb-5 shrink-0 gap-6 text-center bg-black border-2 border-gray-500 max-w-xs sm:max-w-sm md:max-w-2xl h-auto rounded-md p-6 mr-5 shadow-md'>
                        <img className='drop-shadow-md h-10 md:h-20 w-20 md:w-40 my-auto 'src={youtube}></img>
                        <div className='flex flex-col justify-center items-center '>
                            <h2 className='text-lg sm:text-xl font-semibold'>Videography </h2>
                            <div className='flex flex-col h-4/5 justify-center flex-1 text-xs sm:text-sm'>
                                <p>
                                    I'm a big sucker for nostalgia. Whenever I travel,
                                    I always make an effort to document it. There's something so
                                    gratifying about capturing the fleeting beauty of a moment
                                    through a video. Making videos/vlogs like these 
                                    serve as a creative outlet for myself; I love the process of meticulously
                                    editing each video together to make a finished product
                                    that I can be proud of <span>(it's a lot like coding!).</span>
                                </p>
                            </div>
                        </div>
                    </a>

                    <a href='https://www.depop.com/isaacscloset67/'target="_blank" className='transform transition-transform duration-300 hover:scale-[1.03] snap-center flex mb-5 shrink-0 gap-6 text-center bg-black border-2 border-gray-500 max-w-xs sm:max-w-sm md:max-w-2xl h-auto rounded-md p-6 mr-5 shadow-md'>
                        <img className='drop-shadow-md h-20 md:h-32 w-32 md:w-64 my-auto 'src={depop}></img>
                        <div className='flex flex-col justify-center items-center '>
                            <h2 className='text-lg sm:text-xl font-semibold'>Thrifting/Selling Clothes</h2>
                            <div className='flex flex-col h-4/5 justify-center flex-1 text-xs sm:text-sm'>
                                <p>
                                   Over these past few years, I've gotten really into clothing and fashion. I feel like
                                   I'm really able to express myself through my clothes. To actually find pieces, I've been thrifting
                                   a lot (shop sustainably!), and I realized I could turn my hobby into a side hustle. I sell
                                   clothes on a platform called Depop. If you're looking for vintage clothes or
                                   are curious to see what I'm selling, check out my store!
                                </p>
                            </div>
                        </div>
                    </a>

                    <div className='transform transition-transform duration-300 hover:scale-[1.03] snap-center flex mb-5 shrink-0 gap-6 text-center bg-black border-2 border-gray-500 max-w-xs sm:max-w-sm md:max-w-2xl h-auto rounded-md p-6 mr-5 shadow-md'>
                        <img className='drop-shadow-md h-24 md:h-40 w-30 md:w-30 my-auto 'src={happy}></img>
                        <div className='flex flex-col justify-center items-center '>
                            <h2 className='text-lg sm:text-xl font-semibold'>Everything Else</h2>
                            <div className='flex flex-col h-4/5 justify-center flex-1 text-xs sm:text-sm'>
                                <p>
                                  This section has no link because I don't document these hobbies 
                                  as much, but other things I enjoy are: thrifting, working out, playing soccer, rock climbing, 
                                  skateboarding, crocheting, sewing, and playing the piano. Having passion in my life is really important to me!
                                </p>
                            </div>
                        </div>
                    </div>


            </div>   
           
          </div>
        </div>     

        <div className='mb-10'></div>

      </>
    )
  }
  
  export default Hobbies;
  