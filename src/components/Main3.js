import React from 'react'
import UserData from './SpeakerData'

export const Main3 = () => {
    return (
        <>


            <div id='Main3' className='bg-white md:pt-0 pt-24 pb-20 text-black min-h-screen'>

                <div>
                    <div className='text-center font-bold md:text-5xl text-4xl pb-14 px-4'>
                        <h1 className='underline text-black'>Speakers Info</h1>
                    </div>
                    <div className='flex '>
                        <div className='grid md:grid-cols-4 grid-cols-1  md:px-28 px-3  md:gap-16 gap-3 ' >

                            {
                                UserData.map((s) => (
                                    <div className='font-bold text-lg flex flex-col justify-center items-center text-center   text-black py-3 md:px-1 px-4 rounded-md '>
                                        <div className='w-40 aspect-w-3 aspect-h-4'>
                                            <img src={s.image} className='object-cover rounded-lg' alt="" />
                                        </div>
                                        <p className='py-1 text-xl underline'>{s.name}</p>
                                        <p className=''>{s.title}</p>
                                        <p className='text-sm'>{s.desc} </p>
                                    </div>
                                ))
                            }



                        </div>


                    </div>
                </div>


            </div>


        </>
    )
}
