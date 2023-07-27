import React from 'react'
import { Link } from 'react-scroll'

export const Home = () => {
  return (
    <>

        <div id='home' className='min-h-screen pt-16'>

            <div className='flex md:flex-row  justify-center '>

                <div className='flex md:flex-row flex-col pt-8 md:pt-14 md:px-20 px-5 w-full  '>

                    <div className=' flex justify-left md:gap-1 flex-col '>
                        <p className='text-5xl w-full  text-black text-left font-bold md:pt-16 pt-0'>The Future of AI and Its Impact on Society</p>
                        <p className='md:w-1/2 w-full text-sm py-3 text-md font-medium text-gray-700 pb-2' >
                        Explore the profound societal implications of Artificial Intelligence (AI) in this webinar. Discover the future landscape and ethical considerations of AI's transformative impact. Join us now!
                        </p>
                        <Link spy={true} smooth={true} offset={50} duration={300} to="register">
                        <button className='bg-black w-2/5 md:w-1/4 text-white font-semibold p-2 rounded-md'>Register</button></Link>
                    </div>


                    <div className=' object-cover w-full md:w-9/12 md:pt-12 pt-5 md:pr-14 pr-0 '> 
                        <img src="/images/ai.png" className='w-full h-full' alt="" />
                        
                    </div>
                </div>

            </div>

        </div>
    
    
    </>
  )
}
