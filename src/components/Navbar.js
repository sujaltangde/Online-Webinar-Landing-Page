import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { RxCross1 } from 'react-icons/rx'
import {Link} from 'react-scroll'

export const Navbar = () => {

    const [toggle, setToggle] = useState(false);


    return (
        <>

            {/* display-hidden */}
            <div className='fixed min-w-full'>
                <div className='px-5 py-3 h-14  bg-gray-800 text-white '>
                    <div>
                    <Link to='Head' smooth={true} offset={100} duration={500}  className='font-bold cursor-pointer text-xl absolute top-4 text-left'>Online Webinar</Link>
                    </div>
                    <ul className='md:flex hidden justify-center md:pt-1 items-center pl-5 flex-row gap-9 font-bold   '>

                        <Link className='cursor-pointer' to='Main' smooth={true} offset={100} duration={500} >Webinar Details</Link>
                        <Link className='cursor-pointer' to='Main' smooth={true} offset={100} duration={500} >Register Now</Link>
                        <Link className='cursor-pointer' to='Main2' smooth={true} offset={100} duration={500} >Agenda</Link>
                        <Link className='cursor-pointer' to='Main3' smooth={true} offset={100} duration={500} >Speakers</Link>
                        <Link className='cursor-pointer' to='Contact' smooth={true} offset={100} duration={500} >Contact</Link>
                       
                    </ul>
                    <div className=' fixed top-3 right-3 md:hidden flex justify-center items-center'>
                        {
                            toggle ? (<RxCross1 className='cursor-pointer' onClick={() => setToggle(!toggle)} size={25} />) : (<FaBars className='cursor-pointer' onClick={() => setToggle(!toggle)} size={25} />)
                        }
                    </div>
                </div>
                <div className={`${toggle ? 'flex' : 'hidden'}`}>

                        <ul className='flex fixed py-4 pl-5 flex-col gap-5 bg-gray-800 font-bold min-w-full text-white justify-center opacity-80 items-center border border-x-0 border-b-0 border-t-white  '>
                        <Link className='cursor-pointer' to='Main' smooth={true} offset={100} duration={500} >Webinar Details</Link>
                        <Link className='cursor-pointer' to='Main' smooth={true} offset={100} duration={500} >Register Now</Link>
                        <Link className='cursor-pointer' to='Main2' smooth={true} offset={100} duration={500} >Agenda</Link>
                        <Link className='cursor-pointer' to='Main3' smooth={true} offset={100} duration={500} >Speakers</Link>
                        <Link className='cursor-pointer' to='Contact' smooth={true} offset={100} duration={500} >Contact</Link>
                        </ul>

                </div>
            </div>

        </>
    )
}
