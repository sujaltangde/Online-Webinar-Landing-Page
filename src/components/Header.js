import React from 'react'

export const Header = () => {
    return (
        <>

            <div id='Head' className='  '>
                <div className='text-purple-500 min-h-screen pt-28 bg-gradient-to-b from-black to-blue-800'>
                    <div className='px-5 grid grid-cols-1 text-center'>
                        <div className='grid md:grid-cols-2 grid-cols-1'>
                        <div className='flex-col flex md:pt-20 leading-4 text-center '>
                            <p className='font-bold md:text-6xl text-4xl md:px-4    '>Digital Horizon </p>  
                            <p className='font-bold md:text-6xl text-4xl md:px-4 px-1 text-white   '> Digital Marketing Masterclass</p>
                           
                        </div>
                        <div className='flex justify-center md:pt-0 pt-6 items-center'>
                            <img src="/images/marketing.svg" className='' alt="" />
                        </div>
                        </div>

                      <div className='w-full md:px-36 px-4'>  
                        <p className='font-semibold text-lg  pt-12 text-gray-200 text-center'>Join us for an exclusive webinar where industry experts will share valuable insights on leveraging digital marketing to accelerate your business growth.</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
