import React from 'react'
import SpeakerData from './SpeakerData.json'


export const Speakers = () => {
    return (
        <>

            <div id="speakers" className='min-h-screen pt-16'>
                <div className=" md:px-20 px-5 ">
                    <div>
                        <p className='md:text-4xl text-3xl  font-bold'>Speakers</p>
                    </div>

                    <div className='grid md:grid-cols-4 grid-cols-1 gap-12 justify-center items-center px-5 pt-14'>

                        {
                            SpeakerData.map((e) => (

                                <div className='text-center shadow-gray-400 flex flex-col justify-center items-center bg-white p-4 rounded-lg shadow-md'>
                                    <div className='md:w-[15vw] w-full md:h-[52vh] rounded-md overflow-hidden'>
                                        <img src={`/images/${e.image}`} className='object-cover w-full h-full rounded-md' alt="" />
                                    </div>
                                    <p className='mt-2'>
                                        <strong className='text-xl'>{e.name}</strong>
                                    </p>
                                    <p className='font-semibold'>{e.pos}</p>
                                </div>


                               
                            ))

                        }

                        
                        




                    </div>
                                    

                </div>

                <p className='text-center pt-16 md:px-0 px-5'>Get ready for an enriching experience as you learn from our esteemed speakers during the online webinar!</p>
            </div>

        </>
    )
}
