import React from 'react'

function Hero() {
    return (
        <div className='p-8 md:p-12' id='home'>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 ">
                    <div className='px-0 md:px-10 mb-6 md:mb-0'>
                        {/* <h2 className="text-2xl font-semibold text-gray-800">A FORSTR</h2> */}
                        <p className="mt-4 text-white">Hello, <span className='text-red-500'>I'm</span></p>
                        <h1 className="text-5xl font-bold text-white mt-3">Sukanta Dolai</h1>
                        <p className="text-xl text-gray-300 mt-3">A Fullstack <span className='text-red-500'>Web</span> and <span className='text-red-500'>App </span>Developer</p>
                        <p className='mt-6'>
                        I’m a passionate web and app developer skilled in building dynamic websites, mobile apps, and scalable APIs. With a focus on performance and user experience, I create innovative, high-quality digital solutions that drive results.
                        </p>
                        <div className='mt-10'>
                            <p className='uppercase text-lg font-bold'><span className='text-red-500 mb-5'>Find</span> me on</p>
                            <div className='flex flex-wrap gap-4 items-center mt-2'>

                               <a href="https://www.facebook.com/share/19xgWjSo92/" className='w-8 h-8'>
                                <img src="/assets/imgs/facebook.png" alt="facebook" className='w-full object-cover'/>
                               </a>
                                <a href="https://www.instagram.com/sukanta_dolai?igsh=bWdtN2RseHBsbTN5" className='w-8 h-8'>
                                  <img src="/assets/imgs/instagram.png" alt="instagram" className='w-full object-cover'/>
                                </a>
                                <a href="https://in.linkedin.com/in/sukanta-dolai" className='w-8 h-8'>
                                   <img src="/assets/imgs/linkedin.png" alt="linkedin" className='w-full object-cover'/>
                                </a>
                                <a href="https://github.com/Sukanta1304" className='w-8 h-8'>
                                   <img src="/assets/imgs/github.png" alt="github" className='w-full object-cover'/>
                                </a>

                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-3 mt-8">
                            <div className='p-4 px-6 backdrop-blur-lg bg-[#ffffff17] rounded-lg'>
                                <p className='text-lg font-bold mb-2 text-red-500'>50+</p>
                                <p className='uppercase text-sm'><span className='text-red-500'>Projects</span> Completed</p>
                            </div>

                            <div className='p-3 px-6 backdrop-blur-lg bg-[#ffffff17] rounded-lg'>
                                <p className='text-lg font-bold mb-2 text-red-500'>5+</p>
                                <p className='uppercase text-sm'>years of <span className='text-red-500'>experience
                                    </span></p>
                            </div>

                        </div>
                    </div>
                    <div className='mt-0 md:mt-5 lg:mt-0'>
                        <img src='/assets/imgs/heroimg1.png' alt='hero' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero