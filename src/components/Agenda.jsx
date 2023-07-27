import React from 'react'

export const Agenda = () => {
    return (
        <>

            <div id="agenda" className='min-h-screen pt-16'>
                <div className=" md:px-20 px-5 ">
                    <div>
                        <p className='md:text-4xl text-3xl  font-bold'>Agenda</p>
                    </div>

                    <div className='md:flex flex-row md:pt-12 justify-between'>
                        <ul className='flex md:text-lg flex-col gap-4 pt-10 list-none'>
                            <li>
                                <p><strong>Introduction to AI</strong> (30 mins)</p>
                                <p>Explore AI principles, core components, and real-world applications.</p>
                            </li>

                            <li>
                                <p><strong>AI in Everyday Life</strong> (30 mins)</p>
                                <p>Discover AI's impact across industries, revolutionizing daily lives.</p>
                            </li>

                            <li>
                                <p><strong>Ethical Considerations</strong> (30 mins)</p>
                                <p>Delve into AI's ethics, responsible development, and deployment.</p>
                            </li>

                            <li>
                                <p><strong>AI's Impact on the Workforce</strong> (30 mins)</p>
                                <p>Explore AI's effect on jobs, challenges, and upskilling opportunities.</p>
                            </li>
                        </ul>

                        <div className='md:w-1/3 w-1/1 md:pt-0 pt-5  px-2 '>
                            <img src="/images/agenda.svg" alt="" />
                        </div>

                    </div>


                </div>
            </div>

        </>
    )
}



