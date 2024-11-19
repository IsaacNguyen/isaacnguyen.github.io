type ExperienceTabProps = {
    logo: string;
    image: string;
    role: string;
    name: string;
    description: string;
    timeframe: string;
    link: string;
  };



function ExperienceTab({logo, image, role, name, description, timeframe, link}: ExperienceTabProps){
    return(
        <>
            <a href={link}target="_blank" className='fade-in-image opacity-0 [transition:opacity_3s,transform_0.4s] w-full xl:w-4/5 mx-auto text-white bg-black border-2 border-gray-500 rounded-md hover:scale-105 transform shadow-md p-6 '>
                <div className='flex flex-col lg:flex-row text-center gap-8 lg:gap-0 sm:text-start sm:justify-normal'>
                    <div className='flex flex-col justify-center xl:justify-normal w-full xl:w-1/2 px-4 sm:px-8 text-start'>
                        <img className='drop-shadow-md h-12 w-12 mb-3 rounded-3xl' src= {logo}></img>
                        <div className='text-sm sm:text-xl xl:text-2xl text-start tracking-wide font-semibold'> {role} </div>
                        <p className="text-xs sm:text-sm xl:text-basefont-extralight text-gray-400">{name}</p>
                        <p className=' text-xs sm:text-sm xl:text-base pt-2 pb-3'>{description}</p>
                        <p className="text-xs sm:text-sm xl:text-base mt-auto font-extralight text-gray-400">{timeframe}</p>
                    </div>  
                    <img className='mx-auto my-auto drop-shadow-md h-[200px] xl:h-[300px] w-[350px] xl:w-[650px] pb-5 sm:pb-0 rounded-lg object-fit' src= {image}></img>
                </div>
            </a>
        </>
    )
}

export default ExperienceTab;