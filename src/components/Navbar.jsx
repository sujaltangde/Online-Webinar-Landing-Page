import React, { useState } from 'react'
import { Link } from 'react-scroll'
import {FaBars} from 'react-icons/fa'
import {MdClear} from 'react-icons/md'



export const Navbar = () => {

    const [toggle, setToggle] = useState(true) ;

  return (
    <>

        <div className='fixed w-full bg-white'>
            <div className='py-5  '>
                <div className='fixed top-1 left-2'>
                    <img src="/images/ai.gif" className='md:w-full w-2/3' alt="" />
                </div>
                <ul className='md:flex hidden text-lg font-semibold pr-9 flex-row justify-end gap-14'>
                    <Link  spy={true} smooth={true} offset={50} duration={300} to='home'  className='cursor-pointer' >Home</Link>
                    <Link  spy={true} smooth={true} offset={50} duration={300} to='details'  className='cursor-pointer' >Details</Link>
                    <Link  spy={true} smooth={true} offset={50} duration={300} to='register'  className='cursor-pointer' >Register</Link>
                    <Link  spy={true} smooth={true} offset={50} duration={300} to='agenda'  className='cursor-pointer' >Agenda</Link>
                    <Link  spy={true} smooth={true} offset={50} duration={300} to='speakers'  className='cursor-pointer' >Speakers</Link>
                </ul>
                <div className='fixed right-2 top-3 md:hidden flex'>
                    {
                        toggle ? <FaBars className='cursor-pointer' size={23} onClick={()=>setToggle(!toggle)} /> : 
                                <MdClear className='cursor-pointer' size={23} onClick={()=>setToggle(!toggle)} />
                    }
                </div>
            </div>


            <div className={`fixed ${toggle? 'hidden' : 'flex'}  bg-white w-full`}>
                <ul className='  h-screen font-bold flex flex-col   w-full pt-16 text-xl items-center gap-14'>
                    <Link  spy={true} smooth={true} offset={50} duration={300} onClick={()=>setToggle(!toggle)} to='home'   className='cursor-pointer' >Home</Link>
                    <Link  spy={true} smooth={true} offset={50} duration={300} onClick={()=>setToggle(!toggle)} to='details'  className='cursor-pointer' >Details</Link>
                    <Link  spy={true} smooth={true} offset={50} duration={300} onClick={()=>setToggle(!toggle)} to='register' className='cursor-pointer' >Register</Link>
                    <Link  spy={true} smooth={true} offset={50} duration={300} onClick={()=>setToggle(!toggle)} to='agenda' className='cursor-pointer' >Agenda</Link>
                    <Link  spy={true} smooth={true} offset={50} duration={300} onClick={()=>setToggle(!toggle)} to='speakers' className='cursor-pointer' >Speakers</Link>
                </ul>
            </div>
            
        </div>
       

    </>
  )
}
