import React from 'react'

function Services() {
     return (
          <div className='bg-[#1a1a1a]'>
          <div className='container mx-auto p-8 md:p-12 py-5' id='services'>
               <p className='text-red-500'>My Services</p>
               <p className="text-4xl font-bold">What I Do</p>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
                    <div className='bg-[#ffffff17] p-6 rounded-lg shadow-lg'>
                         <img src='/assets/imgs/coding.png' className='h-10 w-10' />
                         <h3 className='my-3'>Website Development</h3>
                         <p>
                              Building fast, responsive, and user-friendly websites tailored for performance
                              and engagement. From sleek landing pages to complex web apps,
                              I craft seamless digital experiences with modern technologies.
                         </p>
                    </div>

                    <div className='bg-[#ffffff17] p-6 rounded-lg shadow-lg'>
                         <img src='/assets/imgs/app-development.png' className='h-10 w-10' />
                         <h3 className='my-3'>App Development</h3>
                         <p>
                              Creating high-performance mobile apps with smooth UI and flawless
                              functionality. Whether iOS or Android, I develop scalable, feature-rich
                              applications that enhance user experience and engagement.
                         </p>
                    </div>

                    <div className='bg-[#ffffff17] p-6 rounded-lg shadow-lg'>
                         <img src='/assets/imgs/api.png' className='h-10 w-10' />
                         <h3 className='my-3'>API Development</h3>
                         <p>
                              Designing secure, efficient, and scalable APIs for seamless data exchange.
                              I build robust backend solutions that integrate effortlessly with web and
                              mobile apps, ensuring smooth communication between systems.
                         </p>
                    </div>
               </div>
          </div>
          </div>
     )
}

export default Services