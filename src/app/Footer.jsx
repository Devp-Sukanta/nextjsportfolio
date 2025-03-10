import React from 'react'

function Footer() {
    return (

        <footer>
            <div className="py-6 container mx-auto px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
                <nav className="-mx-5 -my-2 flex flex-wrap justify-center order-2" aria-label="Footer">
                    <div className="px-5">
                        <a href="#" className="text-base text-white hover:text-gray-200">Terms of Service</a>
                    </div>

                    <div className="px-5">
                        <a href="#" className="text-base text-white hover:text-gray-200">Privacy Policy</a>
                    </div>
                </nav>
                <div className="flex mt-6 md:mt-0 justify-center items-center space-x-6 md:order-3  ">
                    <a href="#" className="text-white hover:text-gray-200 w-5 h-5">
                        <span className="sr-only">Facebook</span>
                        <img src="/assets/imgs/facebook.png" alt="" className='w-full h-full ibject-contain'/>
                    </a>

                    <a href="#" className="text-white hover:text-gray-200 w-5 h-5">
                        <span className="sr-only">Instagram</span>
                        <img src="/assets/imgs/instagram.png" alt="" className='w-full h-full ibject-contain'/>
                    </a>

                    <a href="#" className="text-white hover:text-gray-200 w-5 h-5">
                        <span className="sr-only">Linkedin</span>
                        <img src="/assets/imgs/linkedin.png" alt="" className='w-full h-full ibject-contain'/>
                    </a>


                    <a href="#" className="text-white hover:text-gray-200 w-5 h-5">
                        <span className="sr-only">GitHub</span>
                        <img src="/assets/imgs/github.png" alt="" className='w-full h-full ibject-contain'/>
                    </a>
                </div>
                <div className="mt-3  md:order-1 md:mt-0 ">
                    <p className="text-center text-base text-white">
                        &copy; <span className='text-red-500'>Sukanta Dolai</span>. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer