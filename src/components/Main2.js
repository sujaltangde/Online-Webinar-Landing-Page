import React from 'react'

export const Main2 = () => {
    return (
        <>

            <div id='Main2' className='bg-gradient-to-b from-black to-blue-800 text-white min-h-screen md:pt-0 pt-24'>
                <div className='flex md:flex-row flex-col '>
                    <div className='flex flex-col md:px-20 px-5'>
                        <div className='font-bold md:text-5xl text-4xl md:pb-6 pt-0 flex pb-6'>
                           <p className='underline' > Agenda </p>
                        </div>

                        <ul className='md:text-xl text-lg font-bold md:py-4 py-0 pb-2 flex flex-col gap-3'>
                            <li> <p>Session 1: Introduction to Digital Marketing - John Smith</p>
                            <p>Duration 30 minutes</p></li>
                            
                            <li><p>Session 2: Search Engine Optimization (SEO) - Emma Johnson</p>
                            <p>Duration 30 minutes</p>
                            </li>
                       
                            <li><p>Session 3: Social Media Marketing Strategies - Michael Williams</p>
                            <p>Duration 30 minutes</p>
                            </li>
                       
                            <li> <p>Session 4: Email Marketing Best Practices - Sarah Anderson</p>
                            <p>Duration 30 minutes</p>
                            </li>
                     
                        </ul>
                    </div>
                    <div className='flex justify-center md:px-0 px-5 md:pt-2 pt-4 items-center'>
                        <img src="/images/speakers.svg" className='w-96' alt="" />
                    </div>

                </div>

                <div className='md:px-40 px-5 md:py-6 md:pt-12 py-3 pt-14 '>
                    <p className='text-gray-200 font-semibold text-center ' >Embrace the digital marketing revolution with our engaging agenda! Explore "Introduction to Digital Marketing," SEO, Social Media Marketing, and Email Marketing insights. Elevate your marketing game with practical 30-minute sessions. Secure your spot now!</p>
                </div>
                
            </div>

        </>
    )
}
