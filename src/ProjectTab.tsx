type ProjectTabProps = {
    image: string;
    name: string;
    description: string;
    accomplishment: string;
    tags: string[];
    link: string;
  };



function ProjectTab({image, name, description, accomplishment, tags, link}: ProjectTabProps){

    return(
        <>
        
            <a href={link}target="_blank" className='fade-in-image opacity-0 [transition:opacity_3s,transform_0.4s] mx-auto max-w-md md:max-w-2xl text-white bg-black border-2 border-gray-500 rounded-md hover:scale-105 transform shadow-md p-6 '>
                <div className='sm:flex text-center sm:text-start sm:justify-normal'>
                    <img className='my-auto drop-shadow-md w-1/2 h-1/2 sm:h-1/4 sm:w-1/3 mx-auto sm:mx-0 pb-5 sm:pb-0' src= {image}></img>
                    <div className='flex flex-col px-4 sm:px-8'>
                        <div className='text-sm sm:text-base md:text-xl text-center tracking-wide font-semibold'> {name} </div>
                        {accomplishment && (
                            <h2 className="text-xs mx-auto text-white bg-black border-[1px] border-gray-500 px-2 py-1 mt-2 rounded-md">🏆 {accomplishment}</h2>
                        )}   
                        
                        <p className=' text-xs sm:text-sm md:text-base pt-2 pb-3'>{description}</p>
                        <div className='mt-auto flex justify-center sm:justify-normal font-light flex-wrap gap-2 text-xs md:text-sm'>
                            {tags.map((tag,index) => (
                                <span key={index} className='text-white bg-black border-[0.5px] border-gray-500 rounded-sm px-1.5 py-0.5'>{tag}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </a>
        </>
    )
}

export default ProjectTab;