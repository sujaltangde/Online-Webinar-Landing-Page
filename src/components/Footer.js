import React from 'react'
import {BsFacebook} from 'react-icons/bs'
import {GrInstagram} from 'react-icons/gr'
import {GrTwitter} from 'react-icons/gr'
import {AiFillLinkedin} from 'react-icons/ai'
import {BiLogoGmail} from 'react-icons/bi'

export const Footer = () => {
    return (
        <>

            <div>
                <div id='Contact' className='text-black md:px-24 px-3 bg-gray-200 font-bold'>

                    <div>
                        <p className='py-2 text-xl underline'> Contact Us:</p>

                        <p>If you have any questions or need assistance, feel free to reach out to our friendly team.</p>


                        

                       <div className='flex justify-left gap-5 py-4 '>

                       <BsFacebook size={25}/> 
                       <GrInstagram size={25}/> 
                       <GrTwitter size={25}/> 
                       <AiFillLinkedin size={25}/> 
                       <BiLogoGmail size={25}/>

                      
                       </div>


                        

                        <p className='pb-2'>Subscribe to our newsletter to receive exclusive insights, event highlights, and special offers right in your inbox.</p>
                    </div>

                </div>

            </div>

        </>
    )
}
