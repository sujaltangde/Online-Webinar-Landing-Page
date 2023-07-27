import React from 'react'

export const Details = () => {
    return (
        <>

            <div id="details" className='min-h-screen pt-16'>
                <div className=" md:px-20 px-5 ">
                    <div>
                        <p className='md:text-4xl text-3xl  font-bold'>Webinar Details</p>
                    </div>
                    <div className='flex md:flex-row flex-col md:justify-between justify-center'>
                        <div className='md:pt-28 pt-12 flex flex-col gap-2'>
                            <p className='font-bold text-3xl'>Upcoming Webinar -</p> 
                            <p className='text-2xl font-bold text-purple-600'>"The Future of Artificial Intelligence and Its Impact on Society"</p>
                           <div className="text-2xl md:text-2xl font-bold pt-2">
                           <p>Date: 10 August 2023 </p>
                            <p>Time: 5:00 pm</p>
                            <p>Duration: 2 hrs </p>
                           </div>
                        </div>
                        <div className='md:w-1/3 md:pt-14 pt-6 flex w-1/1 justify-center items-center'>
                            <img src="/images/detail.svg" alt="" />
                        </div>

                    </div>

                </div>
            </div>

        </>
    )
}
