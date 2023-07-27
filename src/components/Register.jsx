import {React, useState} from 'react'

export const Register = () => {

    const [name, setName] = useState("") ;
    const [email, setEmail] = useState("") ;
    const [phone, setPhone] = useState("") ;

    const [toggle, setToggle] = useState(false) ;

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(name && email && phone !== ""){
        setName("")
        setEmail("")
        setPhone("")
        setToggle(true)
        }
    }

    if(toggle){
        setTimeout(()=>{
            setToggle(false)
        },3000)
    }


    return (
        <>

            <div id="register" className='min-h-screen pt-16'>
                <div className=" md:px-20 px-5 ">
                    <div>
                        <p className='md:text-4xl text-3xl  font-bold'>Register</p>
                    </div>




                    <div className='justify-between flex md:flex-row gap-10 md:gap-12 flex-col'>
                        <div className='md:w-1/2 md:pt-24 pt-8 w-full'>
                            <p className='text-3xl md:pb-5 pb-3 font-bold'>Secure Your Spot Now!</p>
                            <p className='md:text-lg  text-md'>Complete the quick and easy registration form below to reserve your virtual seat for our exclusive webinar on "The Future of Artificial Intelligence and Its Impact on Society." Don't miss out on this insightful event—limited spots available!</p>
                        </div>

                            {
                                toggle &&
                                <div className='fixed md:top-28 md:w-1/2 top-9 left-0 md:left-0 border border-green-400 bg-white p-5 shadow-md '>
                                    <p className='font-bold'>Thank you for registering!</p>
                                    <p>We're excited to have you join us in the upcoming webinar. Until then, take care and stay positive! See you there!</p>
                                </div>
                            }

                        <div className='flex md:w-1/2 w-full md:pt-16 flex-col  justify-center items-center '>
                            <form onSubmit={handleSubmit} className='flex md:w-1/2    flex-col gap-2 ' >
                                <div>
                                    <p className='text-left text-3xl pb-3 font-semibold'>Register Now</p>
                                    <p className='text-lg font-semibold'>Full Name</p>
                                    <input value={name} onChange={(e)=>setName(e.target.value)} className='outline-none rounded-md focus:bg-gray-300  bg-gray-200  w-full px-2 py-1' type="text" />
                                </div>
                                <div>
                                    <p className='text-lg font-semibold'>Email</p>
                                    <input value={email} onChange={(e)=>setEmail(e.target.value)}  className='outline-none  focus:border-blue-500 w-full px-2 py-1 rounded-md focus:bg-gray-300  bg-gray-200' type="text" />
                                </div>
                                <div className=''>
                                    <p className='text-lg font-semibold'>Phone No.</p>
                                    <input value={phone} onChange={(e)=>setPhone(e.target.value)}  className='outline-none  focus:border-blue-500 w-full px-2 py-1 rounded-md focus:bg-gray-300  bg-gray-200' type="text" />
                                </div>
                                <div className='flex justify-center '>
                                    <button  className='py-2 rounded font-bold px-3 w-1/2 bg-black text-white'>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>


        </>
    )
}
