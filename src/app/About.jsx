import CustomBtn from "@/components/CustomBtn";

function About() {

  const points = [
    {
      id: 1,
      text: 'Building responsive, high-performance websites and mobile apps.'
    },
    {
      id: 2,
      text: 'Creating scalable and secure APIs for seamless integrations.'
    },
    {
      id: 3,
      text: 'Ensuring fast, efficient, and scalable applications.'
    },
    {
      id: 4,
      text: 'Skilled in both front-end and back-end development.'
    },
    {
      id: 5,
      text: 'Experienced in React, React Native, Node.js, MongoDB, AWS, and more.'
    },
  ];


  return (
    <div className='container mx-auto' id='about'>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className='order-2 lg:order-1'>
          <img src='/assets/imgs/aboutimg1.png' alt='acoutimage' className='w-full h-auto' />
        </div>
        <div className='oredr-1 lg:order-2 px-8 content-center'>
          <p className='text-red-500'>About Me</p>
          <p className="text-4xl font-bold">Let's Introduce Myself</p>
          <h3 className='mt-2 mb-4 text-2xl'>Crafting Web, Apps & APIs with Passion</h3>
          <p>
            I’m a dedicated web and app developer with a strong passion for crafting
            seamless digital experiences. Specializing in front-end and back-end development,
            I build responsive websites, powerful mobile apps, and scalable APIs. With
            expertise in modern frameworks like React, Next, React Native, and Node.js, I focus on
            performance, security, and user-friendly design. Whether it's optimizing existing
            solutions or developing from scratch, I bring innovation and efficiency to every project.
            Constantly exploring new technologies, I aim to create high-quality, impactful solutions
            that help businesses thrive in the digital world.
          </p>
          <ul className='mt-8'>
            {points.map((p) => (
              <li key={p.id} className='flex my-3'>
                <span className='pt-0.5 mr-1'>
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0,0,256,256">
                    <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}>
                      <g transform="scale(5.33333,5.33333)">
                        <path d="M44,24c0,11.045 -8.955,20 -20,20c-11.045,0 -20,-8.955 -20,-20c0,-11.045 8.955,-20 20,-20c11.045,0 20,8.955 20,20z" fill="#e6c8c8"></path>
                        <path d="M34.586,14.586l-13.57,13.586l-5.602,-5.586l-2.828,2.828l8.434,8.414l16.395,-16.414z" fill="#f90101"></path>
                      </g>
                    </g>
                  </svg>
                </span>
                {p.text}
              </li>
            ))}
          </ul>
          <div className='mt-6'>
            <CustomBtn title={"Hire Me"} extraClass={'px-10 py-3'} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About