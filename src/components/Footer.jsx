import React from 'react'
import {BsFacebook} from 'react-icons/bs'
import {GrInstagram} from 'react-icons/gr'
import {GrTwitter} from 'react-icons/gr'
import {AiFillLinkedin} from 'react-icons/ai'
import {BiLogoGmail} from 'react-icons/bi'



export const Footer = () => {
    return (
        <>

            <div className='pt-20'>
                <div className='md:px-20 px-5 border border-gray-400 border-x-0 border-b-0 '>
                    <div className='pb-1 pt-5 text-xl text-gray-500'>Contact Us:</div>

                    <div className='pb-3 text-gray-500'>
                    If you have any questions or need assistance, feel free to reach out to our friendly team.
                    </div>

                    <div className='flex flex-row gap-5 text-gray-500'>
                    <BsFacebook     size={23}  /> 
                    <GrInstagram    size={23} /> 
                    <GrTwitter      size={23} /> 
                    <AiFillLinkedin size={23} /> 
                    <BiLogoGmail    size={23}     />

                    </div>

                   <div className='pb-2 pt-1 text-gray-500'>
                   Subscribe to our newsletter to receive exclusive insights, event highlights, and special offers right in your inbox.
                   </div>
                </div>
            </div>

        </>
    )
}
