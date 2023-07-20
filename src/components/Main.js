import React, { useState } from 'react'
import Modal from './Modal';
import { PiWarningCircleBold } from 'react-icons/pi'

export const Main = () => {

    const [notify, setNoti] = useState(false)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [com, setCom] = useState("")

    const [modalOpen, setModalOpen] = useState(false);

    const handleOpenModal = (e) => {
        e.preventDefault()
        if (name === "" || email === "" || com === "") {
            setNoti(true);
        }
        else {
            setModalOpen(true);
            setName("");
            setEmail("");
            setCom("");
        }

        setTimeout(() => {
            setNoti(false)
        }, 2000)


    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };


    return (
        <>
            <div id='Main' className='bg-gradient-to-t from-black to-blue-800 min-h-screen md:pt-0 pt-14'>
                <div className='flex md:flex-row flex-col items-center justify-center md:gap-28 gap-4'>

                    <div className=' flex flex-col text-white font-bold'>
                        <div>
                            <div className='flex  items-center'>
                             
                                <p className='md:text-5xl underline pb-5  text-3xl'>Webinar Details:</p>
                            </div>
                            <div className='md:text-2xl  text-xl'>
                                <p>  Date: August 15, 2023 </p>
                                <p> Time: 3:00 PM - 5:00 PM (UTC) </p>
                                <p> Duration: 2 hours </p>
                            </div>
                        </div>

                        <div className='flex justify-center md:pt-2 pt-5 items-center'>
                            <img src="/images/vidio.svg" className='w-80' alt="" />
                        </div>

                    </div>

                    {
                        notify && (<div class='bg-red-600 fixed flex-row flex left-0'>
                        <div class='bg-red-600 rounded-r-md px-3  py-2 top-16 font-bold text-white fixed opacity-75 flex items-center'>
                          Please fill all the inputs! 
                          <span class='ml-2'><PiWarningCircleBold /></span>
                        </div>
                      </div>
                      )
                    }


                    <Modal isOpen={modalOpen} onClose={handleCloseModal} />


                    <div>
                        <form onSubmit={handleOpenModal} className='flex  md:w-96 w-72  md:pb-14 pb-0 flex-col  gap-5'>

                            <h3 className='md:text-5xl text-4xl   text-white text-center font-bold'>Register now </h3>

                            <input value={name} onChange={(e) => setName(e.target.value)} placeholder='Full Name' className=' rounded-md outline-none px-2 py-1 ' type="text" name="Name" id="" />

                            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email Address' className=' rounded-md outline-none px-2 py-1 ' type="text" name="Name" id="" />

                            <input value={com} onChange={(e) => setCom(e.target.value)} placeholder='Organization/Company' className=' rounded-md outline-none px-2 py-1' type="text" name="Name" id="" />

                            <div className='flex justify-center items-center'>
                                <button className='bg-purple-500 w-2/3 py-2 font-bold rounded-md  text-white' >Register</button>
                            </div>

                        </form>
                    </div>

                </div>
                <div className='md:px-40 px-5 md:py-6 md:pt-16 py-3 pt-14'>
                    <p className='text-gray-200 font-semibold text-center ' >Don't miss this opportunity to gain valuable insights that can transform your marketing efforts. To secure your spot, please fill out the registration form below. Spaces are limited, so be sure to register early.</p>
                </div>
            </div>



        </>
    )
}
