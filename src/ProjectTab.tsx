type ProjectTabProps = {
    image: string;
    name: string;
    description: string;
    tags: string[];
    link: string;
  };

function ProjectTab({image, name, description, tags, link}: ProjectTabProps){
    return(
        <>
                <a href={link}target="_blank" className=' fade-in-image mb-auto mx-auto max-w-md md:max-w-2xl bg-slate-200 rounded-md hover:filter hover:brightness-90 shadow-md p-6 '>
                    <div className='sm:flex text-center sm:text-start sm:justify-normal'>
                        <img className='my-auto drop-shadow-md w-1/2 h-1/2 sm:h-1/4 sm:w-1/2 mx-auto sm:mx-0 pb-5 sm:pb-0' src= {image}></img>
                        <div className='flex flex-col px-4 sm:px-8'>
                            <div className='text-sm sm:text-base md:text-xl text-center tracking-wide font-semibold'> {name} </div>
                            <p className=' text-xs sm:text-sm md:text-base mb-1 py-2'>{description}</p>
                            <p></p>
                            <div className='mt-auto flex justify-center sm:justify-normal font-light flex-wrap gap-2 text-xs md:text-sm'>
                                {tags.map((tag,index) => (
                                    <span key={index} className='bg-slate-300 rounded-sm px-1.5 py-0.5'>{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </a>
        </>
    )
}

export default ProjectTab;